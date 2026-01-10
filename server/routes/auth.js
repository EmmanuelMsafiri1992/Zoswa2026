import express from 'express'
import { body, validationResult } from 'express-validator'
import User from '../models/User.js'
import Progress from '../models/Progress.js'
import { protect } from '../middleware/auth.js'
import { validatePassword } from '../config/security.js'

const router = express.Router()

// Input validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: errors.array()[0].msg,
      errors: errors.array()
    })
  }
  next()
}

// @route   POST /api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/).withMessage('Name can only contain letters, spaces, hyphens and apostrophes'),
  body('email')
    .trim()
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail()
    .isLength({ max: 254 }).withMessage('Email is too long'),
  body('password')
    .isLength({ min: 8, max: 128 }).withMessage('Password must be between 8 and 128 characters')
], handleValidationErrors, async (req, res) => {
  try {
    const { name, email, password } = req.body

    // Validate password strength
    const passwordValidation = validatePassword(password)
    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: passwordValidation.errors[0],
        errors: passwordValidation.errors
      })
    }

    // Check if user exists (case-insensitive)
    const existingUser = await User.findOne({
      email: email.toLowerCase()
    })

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'An account with this email already exists'
      })
    }

    // Create user
    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase(),
      password,
      trialStartDate: new Date()
    })

    // Create initial progress record
    await Progress.create({
      user: user._id,
      xp: 0,
      level: 1,
      streak: 0
    })

    // Generate token
    const token = user.getSignedJwtToken()

    // Set HTTP-only cookie for additional security
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }
    res.cookie('token', token, cookieOptions)

    res.status(201).json({
      success: true,
      token,
      user: user.toSafeObject()
    })
  } catch (error) {
    console.error('Register error:', error)
    res.status(500).json({
      success: false,
      message: 'Registration failed. Please try again.'
    })
  }
})

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', [
  body('email')
    .trim()
    .isEmail().withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('password')
    .notEmpty().withMessage('Password is required')
], handleValidationErrors, async (req, res) => {
  try {
    const { email, password } = req.body
    const clientIP = req.ip || req.connection.remoteAddress

    // Find user with password
    const user = await User.findOne({
      email: email.toLowerCase()
    }).select('+password +loginAttempts +lockUntil')

    // Check if user exists
    if (!user) {
      // Use same error message to prevent user enumeration
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      })
    }

    // Check if account is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account has been deactivated. Contact support.'
      })
    }

    // Check if account is locked
    if (user.isAccountLocked()) {
      const lockTimeLeft = Math.ceil((user.lockUntil - Date.now()) / 60000)
      return res.status(423).json({
        success: false,
        message: `Account is temporarily locked. Try again in ${lockTimeLeft} minutes.`,
        code: 'ACCOUNT_LOCKED'
      })
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      // Increment failed login attempts
      await user.incrementLoginAttempts()

      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      })
    }

    // Password correct - reset login attempts
    await user.resetLoginAttempts(clientIP)

    // Generate token
    const token = user.getSignedJwtToken()

    // Set HTTP-only cookie
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }
    res.cookie('token', token, cookieOptions)

    res.json({
      success: true,
      token,
      user: user.toSafeObject()
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({
      success: false,
      message: 'Login failed. Please try again.'
    })
  }
})

// @route   POST /api/auth/logout
// @desc    Logout user / clear cookie
// @access  Private
router.post('/logout', protect, (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000), // 10 seconds
    httpOnly: true
  })

  res.json({
    success: true,
    message: 'Logged out successfully'
  })
})

// @route   GET /api/auth/me
// @desc    Get current logged in user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      })
    }

    res.json({
      success: true,
      user: user.toSafeObject()
    })
  } catch (error) {
    console.error('Get me error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to get user info'
    })
  }
})

// @route   PUT /api/auth/updatepassword
// @desc    Update password
// @access  Private
router.put('/updatepassword', protect, [
  body('currentPassword')
    .notEmpty().withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 8, max: 128 }).withMessage('New password must be between 8 and 128 characters')
], handleValidationErrors, async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body

    // Validate new password strength
    const passwordValidation = validatePassword(newPassword)
    if (!passwordValidation.isValid) {
      return res.status(400).json({
        success: false,
        message: passwordValidation.errors[0]
      })
    }

    // Get user with password
    const user = await User.findById(req.user._id).select('+password')

    // Check current password
    const isMatch = await user.matchPassword(currentPassword)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      })
    }

    // Check new password isn't same as old
    const isSame = await user.matchPassword(newPassword)
    if (isSame) {
      return res.status(400).json({
        success: false,
        message: 'New password must be different from current password'
      })
    }

    // Update password
    user.password = newPassword
    await user.save()

    // Generate new token (invalidate old sessions)
    const token = user.getSignedJwtToken()

    res.json({
      success: true,
      message: 'Password updated successfully',
      token
    })
  } catch (error) {
    console.error('Update password error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update password'
    })
  }
})

// @route   PUT /api/auth/updateprofile
// @desc    Update user profile
// @access  Private
router.put('/updateprofile', protect, [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s'-]+$/).withMessage('Name can only contain letters, spaces, hyphens and apostrophes')
], handleValidationErrors, async (req, res) => {
  try {
    const allowedFields = ['name', 'avatar']
    const updates = {}

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field]
      }
    })

    const user = await User.findByIdAndUpdate(
      req.user._id,
      updates,
      { new: true, runValidators: true }
    )

    res.json({
      success: true,
      user: user.toSafeObject()
    })
  } catch (error) {
    console.error('Update profile error:', error)
    res.status(500).json({
      success: false,
      message: 'Failed to update profile'
    })
  }
})

export default router
