import express from 'express'
import User from '../models/User.js'
import { protect, authorize } from '../middleware/auth.js'

const router = express.Router()

// All admin routes require authentication and admin role
router.use(protect)
router.use(authorize('admin'))

// @route   GET /api/admin/stats
// @desc    Get dashboard statistics
// @access  Admin
router.get('/stats', async (req, res) => {
  try {
    const totalUsers = await User.countDocuments()
    const activeSubscribers = await User.countDocuments({ isSubscribed: true })
    const trialUsers = await User.countDocuments({ isSubscribed: false, isActive: true })
    const verifiedUsers = await User.countDocuments({ isEmailVerified: true })

    // Users registered in last 7 days
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    const newUsersThisWeek = await User.countDocuments({ createdAt: { $gte: weekAgo } })

    // Users registered in last 30 days
    const monthAgo = new Date()
    monthAgo.setDate(monthAgo.getDate() - 30)
    const newUsersThisMonth = await User.countDocuments({ createdAt: { $gte: monthAgo } })

    // Monthly revenue estimate (subscribers * $7)
    const monthlyRevenue = activeSubscribers * 7

    // Get recent signups
    const recentUsers = await User.find()
      .select('name email createdAt isSubscribed isEmailVerified')
      .sort({ createdAt: -1 })
      .limit(5)

    res.json({
      success: true,
      stats: {
        totalUsers,
        activeSubscribers,
        trialUsers,
        verifiedUsers,
        newUsersThisWeek,
        newUsersThisMonth,
        monthlyRevenue,
        conversionRate: totalUsers > 0 ? ((activeSubscribers / totalUsers) * 100).toFixed(1) : 0
      },
      recentUsers
    })
  } catch (error) {
    console.error('Admin stats error:', error)
    res.status(500).json({ success: false, message: 'Error fetching stats' })
  }
})

// @route   GET /api/admin/users
// @desc    Get all users with pagination
// @access  Admin
router.get('/users', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 20
    const search = req.query.search || ''
    const filter = req.query.filter || 'all'

    let query = {}

    // Search by name or email
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ]
    }

    // Filter by subscription status
    if (filter === 'subscribed') {
      query.isSubscribed = true
    } else if (filter === 'trial') {
      query.isSubscribed = false
    } else if (filter === 'admin') {
      query.role = 'admin'
    }

    const total = await User.countDocuments(query)
    const users = await User.find(query)
      .select('name email role isSubscribed isEmailVerified isActive createdAt lastLoginSuccess trialStartDate subscriptionStartDate subscriptionEndDate')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)

    res.json({
      success: true,
      users,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    })
  } catch (error) {
    console.error('Admin users error:', error)
    res.status(500).json({ success: false, message: 'Error fetching users' })
  }
})

// @route   GET /api/admin/users/:id
// @desc    Get single user details
// @access  Admin
router.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-password -resetPasswordToken -emailVerificationToken')

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    res.json({ success: true, user })
  } catch (error) {
    console.error('Admin get user error:', error)
    res.status(500).json({ success: false, message: 'Error fetching user' })
  }
})

// @route   PUT /api/admin/users/:id
// @desc    Update user
// @access  Admin
router.put('/users/:id', async (req, res) => {
  try {
    const { name, email, role, isSubscribed, isActive, isEmailVerified } = req.body

    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    // Update fields
    if (name) user.name = name
    if (email) user.email = email
    if (role) user.role = role
    if (typeof isSubscribed === 'boolean') {
      user.isSubscribed = isSubscribed
      if (isSubscribed && !user.subscriptionStartDate) {
        user.subscriptionStartDate = new Date()
      }
    }
    if (typeof isActive === 'boolean') {
      user.isActive = isActive
      if (!isActive) {
        user.deactivatedAt = new Date()
      }
    }
    if (typeof isEmailVerified === 'boolean') {
      user.isEmailVerified = isEmailVerified
    }

    await user.save()

    res.json({ success: true, message: 'User updated successfully', user })
  } catch (error) {
    console.error('Admin update user error:', error)
    res.status(500).json({ success: false, message: 'Error updating user' })
  }
})

// @route   DELETE /api/admin/users/:id
// @desc    Delete user
// @access  Admin
router.delete('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    // Prevent deleting self
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({ success: false, message: 'Cannot delete your own account' })
    }

    await User.findByIdAndDelete(req.params.id)

    res.json({ success: true, message: 'User deleted successfully' })
  } catch (error) {
    console.error('Admin delete user error:', error)
    res.status(500).json({ success: false, message: 'Error deleting user' })
  }
})

// @route   POST /api/admin/users/:id/grant-subscription
// @desc    Manually grant subscription to user
// @access  Admin
router.post('/users/:id/grant-subscription', async (req, res) => {
  try {
    const { months = 1 } = req.body

    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    const now = new Date()
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + months)

    user.isSubscribed = true
    user.subscriptionStartDate = now
    user.subscriptionEndDate = endDate
    user.subscriptionId = `MANUAL-${Date.now()}`

    await user.save()

    res.json({ success: true, message: `Subscription granted for ${months} month(s)`, user })
  } catch (error) {
    console.error('Admin grant subscription error:', error)
    res.status(500).json({ success: false, message: 'Error granting subscription' })
  }
})

// @route   POST /api/admin/users/:id/revoke-subscription
// @desc    Revoke user subscription
// @access  Admin
router.post('/users/:id/revoke-subscription', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' })
    }

    user.isSubscribed = false
    user.subscriptionEndDate = new Date()

    await user.save()

    res.json({ success: true, message: 'Subscription revoked', user })
  } catch (error) {
    console.error('Admin revoke subscription error:', error)
    res.status(500).json({ success: false, message: 'Error revoking subscription' })
  }
})

// @route   GET /api/admin/payments
// @desc    Get payment/subscription history
// @access  Admin
router.get('/payments', async (req, res) => {
  try {
    const subscribers = await User.find({ isSubscribed: true })
      .select('name email subscriptionId subscriptionStartDate subscriptionEndDate createdAt')
      .sort({ subscriptionStartDate: -1 })

    // Calculate revenue
    const totalRevenue = subscribers.length * 7
    const activeSubscriptions = subscribers.filter(u => {
      if (!u.subscriptionEndDate) return true
      return new Date(u.subscriptionEndDate) > new Date()
    }).length

    res.json({
      success: true,
      payments: subscribers,
      summary: {
        totalSubscribers: subscribers.length,
        activeSubscriptions,
        monthlyRevenue: activeSubscriptions * 7,
        totalRevenue
      }
    })
  } catch (error) {
    console.error('Admin payments error:', error)
    res.status(500).json({ success: false, message: 'Error fetching payments' })
  }
})

// @route   GET /api/admin/settings
// @desc    Get app settings
// @access  Admin
router.get('/settings', async (req, res) => {
  try {
    res.json({
      success: true,
      settings: {
        siteName: 'Zoswa',
        subscriptionPrice: 7,
        trialDays: 7,
        paypalMode: process.env.PAYPAL_MODE || 'sandbox',
        paypalConfigured: !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_PLAN_ID)
      }
    })
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching settings' })
  }
})

export default router
