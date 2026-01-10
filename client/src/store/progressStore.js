import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../services/api'

export const useProgressStore = create(
  persist(
    (set, get) => ({
      xp: 0,
      level: 1,
      streak: 0,
      badges: [],
      completedLessons: [],
      trackProgress: {},
      lastActivityDate: null,
      isLoading: false,

      // Calculate level from XP (100 XP per level, increasing by 50 each level)
      calculateLevel: (xp) => {
        let level = 1
        let xpNeeded = 100
        let totalXp = xp

        while (totalXp >= xpNeeded) {
          totalXp -= xpNeeded
          level++
          xpNeeded = 100 + (level - 1) * 50
        }

        return { level, currentXp: totalXp, xpForNextLevel: xpNeeded }
      },

      // Add XP and check for level up
      addXp: async (amount, source) => {
        const { xp } = get()
        const newXp = xp + amount

        set({ xp: newXp })

        // Calculate new level
        const levelInfo = get().calculateLevel(newXp)
        set({ level: levelInfo.level })

        // Sync with server
        try {
          await api.post('/progress/xp', { amount, source })
        } catch (error) {
          console.error('Failed to sync XP:', error)
        }

        return { newXp, levelInfo }
      },

      // Complete a lesson
      completeLesson: async (trackId, lessonId, xpEarned) => {
        const { completedLessons, trackProgress } = get()

        // Check if already completed
        const lessonKey = `${trackId}-${lessonId}`
        if (completedLessons.includes(lessonKey)) {
          return { alreadyCompleted: true }
        }

        // Update completed lessons
        const newCompletedLessons = [...completedLessons, lessonKey]

        // Update track progress
        const currentTrackProgress = trackProgress[trackId] || { completed: 0, total: 0 }
        const newTrackProgress = {
          ...trackProgress,
          [trackId]: {
            ...currentTrackProgress,
            completed: currentTrackProgress.completed + 1,
          }
        }

        set({
          completedLessons: newCompletedLessons,
          trackProgress: newTrackProgress,
          lastActivityDate: new Date().toISOString(),
        })

        // Add XP
        await get().addXp(xpEarned, `lesson-${lessonId}`)

        // Sync with server
        try {
          await api.post('/progress/lesson', { trackId, lessonId, xpEarned })
        } catch (error) {
          console.error('Failed to sync lesson progress:', error)
        }

        return { alreadyCompleted: false, xpEarned }
      },

      // Update streak
      updateStreak: async () => {
        const { lastActivityDate, streak } = get()
        const today = new Date().toDateString()
        const lastActivity = lastActivityDate ? new Date(lastActivityDate).toDateString() : null

        if (lastActivity === today) {
          return streak // Already active today
        }

        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)

        let newStreak = streak
        if (lastActivity === yesterday.toDateString()) {
          newStreak = streak + 1
        } else if (lastActivity !== today) {
          newStreak = 1 // Reset streak
        }

        set({ streak: newStreak, lastActivityDate: new Date().toISOString() })

        try {
          await api.post('/progress/streak', { streak: newStreak })
        } catch (error) {
          console.error('Failed to sync streak:', error)
        }

        return newStreak
      },

      // Unlock badge
      unlockBadge: async (badge) => {
        const { badges } = get()

        if (badges.find(b => b.id === badge.id)) {
          return { alreadyUnlocked: true }
        }

        const newBadges = [...badges, { ...badge, unlockedAt: new Date().toISOString() }]
        set({ badges: newBadges })

        try {
          await api.post('/progress/badge', { badgeId: badge.id })
        } catch (error) {
          console.error('Failed to sync badge:', error)
        }

        return { alreadyUnlocked: false, badge }
      },

      // Fetch progress from server
      fetchProgress: async () => {
        set({ isLoading: true })
        try {
          const response = await api.get('/progress')
          const { xp, streak, badges, completedLessons, trackProgress, lastActivityDate } = response.data

          const levelInfo = get().calculateLevel(xp)

          set({
            xp,
            level: levelInfo.level,
            streak,
            badges,
            completedLessons,
            trackProgress,
            lastActivityDate,
            isLoading: false,
          })
        } catch (error) {
          console.error('Failed to fetch progress:', error)
          set({ isLoading: false })
        }
      },

      // Check if lesson is completed
      isLessonCompleted: (trackId, lessonId) => {
        const { completedLessons } = get()
        return completedLessons.includes(`${trackId}-${lessonId}`)
      },

      // Get track completion percentage
      getTrackProgress: (trackId, totalLessons) => {
        const { trackProgress } = get()
        const progress = trackProgress[trackId]
        if (!progress) return 0
        return Math.round((progress.completed / totalLessons) * 100)
      },

      // Reset progress (for testing)
      resetProgress: () => {
        set({
          xp: 0,
          level: 1,
          streak: 0,
          badges: [],
          completedLessons: [],
          trackProgress: {},
          lastActivityDate: null,
        })
      },
    }),
    {
      name: 'progress-storage',
    }
  )
)
