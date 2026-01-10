import express from 'express'
import Progress from '../models/Progress.js'
import { protect, requireSubscription } from '../middleware/auth.js'

const router = express.Router()

// @route   GET /api/progress
// @desc    Get user progress
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    let progress = await Progress.findOne({ user: req.user._id })

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        xp: 0,
        level: 1,
        streak: 0
      })
    }

    const levelInfo = progress.calculateLevel()

    res.json({
      success: true,
      xp: progress.xp,
      level: levelInfo.level,
      currentXp: levelInfo.currentXp,
      xpForNextLevel: levelInfo.xpForNextLevel,
      streak: progress.streak,
      longestStreak: progress.longestStreak,
      badges: progress.badges,
      completedLessons: progress.completedLessons.map(l => `${l.trackId}-${l.lessonId}`),
      trackProgress: Object.fromEntries(progress.trackProgress),
      certificates: progress.certificates,
      lastActivityDate: progress.lastActivityDate
    })
  } catch (error) {
    console.error('Get progress error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/progress/xp
// @desc    Add XP to user
// @access  Private
router.post('/xp', protect, async (req, res) => {
  try {
    const { amount, source } = req.body

    let progress = await Progress.findOne({ user: req.user._id })

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        xp: 0,
        level: 1,
        streak: 0
      })
    }

    progress.xp += amount
    progress.updateStreak()

    // Check for level up
    const levelInfo = progress.calculateLevel()
    const previousLevel = progress.level
    progress.level = levelInfo.level

    await progress.save()

    const leveledUp = levelInfo.level > previousLevel

    res.json({
      success: true,
      xp: progress.xp,
      level: levelInfo.level,
      currentXp: levelInfo.currentXp,
      xpForNextLevel: levelInfo.xpForNextLevel,
      streak: progress.streak,
      leveledUp,
      source
    })
  } catch (error) {
    console.error('Add XP error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/progress/lesson
// @desc    Mark lesson as complete
// @access  Private
router.post('/lesson', protect, requireSubscription, async (req, res) => {
  try {
    const { trackId, lessonId, xpEarned } = req.body

    let progress = await Progress.findOne({ user: req.user._id })

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        xp: 0,
        level: 1,
        streak: 0
      })
    }

    // Check if lesson already completed
    const alreadyCompleted = progress.isLessonCompleted(trackId, lessonId)

    if (!alreadyCompleted) {
      // Add to completed lessons
      progress.completedLessons.push({
        trackId,
        lessonId,
        completedAt: new Date(),
        xpEarned
      })

      // Update track progress
      const currentTrackProgress = progress.trackProgress.get(trackId) || { completed: 0, total: 0 }
      progress.trackProgress.set(trackId, {
        ...currentTrackProgress,
        completed: currentTrackProgress.completed + 1,
        lastAccessed: new Date()
      })

      // Add XP
      progress.xp += xpEarned

      // Update streak
      progress.updateStreak()

      // Check for badges
      await checkAndAwardBadges(progress)

      await progress.save()
    }

    const levelInfo = progress.calculateLevel()

    res.json({
      success: true,
      alreadyCompleted,
      xpEarned: alreadyCompleted ? 0 : xpEarned,
      totalXp: progress.xp,
      level: levelInfo.level,
      streak: progress.streak,
      completedLessons: progress.completedLessons.length
    })
  } catch (error) {
    console.error('Complete lesson error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/progress/streak
// @desc    Update streak
// @access  Private
router.post('/streak', protect, async (req, res) => {
  try {
    let progress = await Progress.findOne({ user: req.user._id })

    if (!progress) {
      progress = await Progress.create({
        user: req.user._id,
        xp: 0,
        level: 1,
        streak: 0
      })
    }

    progress.updateStreak()
    await progress.save()

    res.json({
      success: true,
      streak: progress.streak,
      longestStreak: progress.longestStreak
    })
  } catch (error) {
    console.error('Update streak error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/progress/badge
// @desc    Award badge
// @access  Private
router.post('/badge', protect, async (req, res) => {
  try {
    const { badgeId } = req.body

    let progress = await Progress.findOne({ user: req.user._id })

    if (!progress) {
      return res.status(404).json({
        success: false,
        message: 'Progress not found'
      })
    }

    // Check if badge already earned
    const alreadyEarned = progress.badges.some(b => b.badgeId === badgeId)

    if (alreadyEarned) {
      return res.json({
        success: true,
        alreadyEarned: true,
        badges: progress.badges
      })
    }

    // Badge definitions
    const badgeDefinitions = {
      'first-steps': { name: 'First Steps', description: 'Complete your first lesson', icon: '👟' },
      'code-warrior': { name: 'Code Warrior', description: 'Write 100 lines of code', icon: '⚔️' },
      'quick-learner': { name: 'Quick Learner', description: 'Complete 5 lessons in one day', icon: '🚀' },
      'streak-master': { name: 'Streak Master', description: 'Maintain a 7-day streak', icon: '🔥' },
      'html-pro': { name: 'HTML Pro', description: 'Complete all HTML lessons', icon: '📄' },
      'css-artist': { name: 'CSS Artist', description: 'Complete all CSS lessons', icon: '🎨' },
      'js-ninja': { name: 'JS Ninja', description: 'Complete all JavaScript lessons', icon: '🥷' },
    }

    const badgeInfo = badgeDefinitions[badgeId]

    if (badgeInfo) {
      progress.badges.push({
        badgeId,
        ...badgeInfo,
        unlockedAt: new Date()
      })

      await progress.save()
    }

    res.json({
      success: true,
      alreadyEarned: false,
      badge: { badgeId, ...badgeInfo },
      badges: progress.badges
    })
  } catch (error) {
    console.error('Award badge error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// Helper function to check and award badges
async function checkAndAwardBadges(progress) {
  const badges = []

  // First Steps - Complete first lesson
  if (progress.completedLessons.length === 1 && !progress.badges.some(b => b.badgeId === 'first-steps')) {
    badges.push({
      badgeId: 'first-steps',
      name: 'First Steps',
      description: 'Complete your first lesson',
      icon: '👟',
      unlockedAt: new Date()
    })
  }

  // Streak Master - 7 day streak
  if (progress.streak >= 7 && !progress.badges.some(b => b.badgeId === 'streak-master')) {
    badges.push({
      badgeId: 'streak-master',
      name: 'Streak Master',
      description: 'Maintain a 7-day streak',
      icon: '🔥',
      unlockedAt: new Date()
    })
  }

  // Quick Learner - 5 lessons in one day
  const today = new Date().toDateString()
  const lessonsToday = progress.completedLessons.filter(
    l => new Date(l.completedAt).toDateString() === today
  ).length

  if (lessonsToday >= 5 && !progress.badges.some(b => b.badgeId === 'quick-learner')) {
    badges.push({
      badgeId: 'quick-learner',
      name: 'Quick Learner',
      description: 'Complete 5 lessons in one day',
      icon: '🚀',
      unlockedAt: new Date()
    })
  }

  if (badges.length > 0) {
    progress.badges.push(...badges)
  }

  return badges
}

export default router
