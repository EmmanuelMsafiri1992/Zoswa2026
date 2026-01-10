import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import { lockoutConfig } from '../config/security.js'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
    minlength: [2, 'Name must be at least 2 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [8, 'Password must be at least 8 characters'],
    select: false
  },
  avatar: {
    type: String,
    default: null
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },

  // Account security
  loginAttempts: {
    type: Number,
    default: 0
  },
  lockUntil: {
    type: Date,
    default: null
  },
  lastLoginAttempt: {
    type: Date,
    default: null
  },
  lastLoginSuccess: {
    type: Date,
    default: null
  },
  lastLoginIP: {
    type: String,
    default: null
  },

  // Password reset
  resetPasswordToken: {
    type: String,
    select: false
  },
  resetPasswordExpire: {
    type: Date,
    select: false
  },

  // Email verification
  isEmailVerified: {
    type: Boolean,
    default: false
  },
  emailVerificationToken: {
    type: String,
    select: false
  },
  emailVerificationExpire: {
    type: Date,
    select: false
  },

  // Subscription
  trialStartDate: {
    type: Date,
    default: Date.now
  },
  isSubscribed: {
    type: Boolean,
    default: false
  },
  subscriptionId: {
    type: String,
    default: null
  },
  subscriptionStartDate: {
    type: Date,
    default: null
  },
  subscriptionEndDate: {
    type: Date,
    default: null
  },

  // Account status
  isActive: {
    type: Boolean,
    default: true
  },
  deactivatedAt: {
    type: Date,
    default: null
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Indexes for performance (email index created by unique: true above)
userSchema.index({ resetPasswordToken: 1 })
userSchema.index({ emailVerificationToken: 1 })

// Virtual for checking if account is locked
userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now())
})

// Encrypt password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  // Use higher cost factor in production
  const saltRounds = process.env.NODE_ENV === 'production' ? 12 : 10
  const salt = await bcrypt.genSalt(saltRounds)
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// Sign JWT and return
userSchema.methods.getSignedJwtToken = function() {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined')
  }

  return jwt.sign(
    {
      id: this._id,
      email: this.email,
      role: this.role
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRE || '7d',
      issuer: 'zoswa',
      audience: 'zoswa-users'
    }
  )
}

// Match password with timing-safe comparison
userSchema.methods.matchPassword = async function(enteredPassword) {
  if (!this.password) {
    return false
  }
  return await bcrypt.compare(enteredPassword, this.password)
}

// Check if account is locked
userSchema.methods.isAccountLocked = function() {
  // Check if lock has expired
  if (this.lockUntil && this.lockUntil < Date.now()) {
    return false
  }
  return this.lockUntil && this.lockUntil > Date.now()
}

// Increment login attempts
userSchema.methods.incrementLoginAttempts = async function() {
  // Reset attempts if lockout has expired
  if (this.lockUntil && this.lockUntil < Date.now()) {
    await this.updateOne({
      $set: { loginAttempts: 1, lastLoginAttempt: Date.now() },
      $unset: { lockUntil: 1 }
    })
    return
  }

  const updates = {
    $inc: { loginAttempts: 1 },
    $set: { lastLoginAttempt: Date.now() }
  }

  // Lock account if max attempts reached
  if (this.loginAttempts + 1 >= lockoutConfig.maxAttempts) {
    updates.$set.lockUntil = Date.now() + lockoutConfig.lockoutDuration
    console.warn(`SECURITY: Account locked for ${this.email} after ${this.loginAttempts + 1} failed attempts`)
  }

  await this.updateOne(updates)
}

// Reset login attempts on successful login
userSchema.methods.resetLoginAttempts = async function(ip) {
  await this.updateOne({
    $set: {
      loginAttempts: 0,
      lastLoginSuccess: Date.now(),
      lastLoginIP: ip
    },
    $unset: { lockUntil: 1 }
  })
}

// Generate password reset token
userSchema.methods.getResetPasswordToken = function() {
  // Generate token
  const resetToken = crypto.randomBytes(32).toString('hex')

  // Hash token and save to database
  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex')

  // Set expire (10 minutes)
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000

  return resetToken
}

// Generate email verification token
userSchema.methods.getEmailVerificationToken = function() {
  const verificationToken = crypto.randomBytes(32).toString('hex')

  this.emailVerificationToken = crypto
    .createHash('sha256')
    .update(verificationToken)
    .digest('hex')

  // Set expire (24 hours)
  this.emailVerificationExpire = Date.now() + 24 * 60 * 60 * 1000

  return verificationToken
}

// Check if trial is active
userSchema.methods.hasActiveTrial = function() {
  const trialEndDate = new Date(this.trialStartDate)
  trialEndDate.setDate(trialEndDate.getDate() + 7)
  return new Date() < trialEndDate
}

// Get trial days left
userSchema.methods.getTrialDaysLeft = function() {
  const trialEndDate = new Date(this.trialStartDate)
  trialEndDate.setDate(trialEndDate.getDate() + 7)
  const now = new Date()
  const daysLeft = Math.ceil((trialEndDate - now) / (1000 * 60 * 60 * 24))
  return Math.max(0, daysLeft)
}

// Check if has access (subscribed or trial active)
userSchema.methods.hasAccess = function() {
  if (!this.isActive) return false
  return this.isSubscribed || this.hasActiveTrial()
}

// Sanitize user output (remove sensitive fields)
userSchema.methods.toSafeObject = function() {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    avatar: this.avatar,
    role: this.role,
    isEmailVerified: this.isEmailVerified,
    trialStartDate: this.trialStartDate,
    isSubscribed: this.isSubscribed,
    trialDaysLeft: this.getTrialDaysLeft(),
    hasAccess: this.hasAccess(),
    createdAt: this.createdAt
  }
}

export default mongoose.model('User', userSchema)
