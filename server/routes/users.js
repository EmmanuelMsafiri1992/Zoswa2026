import express from 'express'
import { body, validationResult } from 'express-validator'
import User from '../models/User.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, [
  body('name').optional().trim().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().withMessage('Please provide a valid email')
], async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: errors.array()[0].msg
      })
    }

    const { name, email } = req.body
    const updateData = {}

    if (name) updateData.name = name
    if (email) {
      // Check if email is already taken by another user
      const existingUser = await User.findOne({ email, _id: { $ne: req.user._id } })
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: 'Email is already in use'
        })
      }
      updateData.email = email
    }

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updateData,
      { new: true, runValidators: true }
    )

    res.json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        avatar: user.avatar
      }
    })
  } catch (error) {
    console.error('Update profile error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   GET /api/users/leaderboard
// @desc    Get leaderboard
// @access  Private
router.get('/leaderboard', protect, async (req, res) => {
  try {
    const { timeframe = 'weekly' } = req.query

    // In production, you would filter by date ranges
    // For now, we return mock data sorted by XP

    const Progress = (await import('../models/Progress.js')).default

    const leaderboard = await Progress.find()
      .populate('user', 'name email')
      .sort({ xp: -1 })
      .limit(100)

    const formatted = leaderboard.map((entry, index) => ({
      rank: index + 1,
      name: entry.user?.name || 'Unknown',
      xp: entry.xp,
      streak: entry.streak,
      level: entry.calculateLevel().level
    }))

    res.json({
      success: true,
      timeframe,
      leaderboard: formatted
    })
  } catch (error) {
    console.error('Leaderboard error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

export default router
