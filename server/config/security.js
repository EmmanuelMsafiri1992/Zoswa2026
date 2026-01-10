/**
 * Security Configuration
 * Production-ready security settings for Zoswa
 */

// Validate required environment variables
export const validateEnv = () => {
  const required = [
    'JWT_SECRET',
    'NODE_ENV'
  ]

  const requiredInProduction = [
    'MONGODB_URI',
    'PAYPAL_CLIENT_ID',
    'PAYPAL_CLIENT_SECRET'
  ]

  const missing = []

  // Check required vars
  required.forEach(key => {
    if (!process.env[key]) {
      missing.push(key)
    }
  })

  // Check production-only required vars
  if (process.env.NODE_ENV === 'production') {
    requiredInProduction.forEach(key => {
      if (!process.env[key]) {
        missing.push(key)
      }
    })
  }

  // Validate JWT_SECRET strength
  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
    console.error('SECURITY ERROR: JWT_SECRET must be at least 32 characters long')
    process.exit(1)
  }

  if (process.env.JWT_SECRET === 'defaultsecret' || process.env.JWT_SECRET === 'your-secret-key') {
    console.error('SECURITY ERROR: JWT_SECRET cannot be a default/example value')
    process.exit(1)
  }

  if (missing.length > 0) {
    console.error(`SECURITY ERROR: Missing required environment variables: ${missing.join(', ')}`)
    if (process.env.NODE_ENV === 'production') {
      process.exit(1)
    } else {
      console.warn('Running in development mode with missing vars - some features may not work')
    }
  }

  return true
}

// Rate limiting configuration
export const rateLimitConfig = {
  // General API rate limit
  api: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // 100 requests per window
    message: {
      success: false,
      message: 'Too many requests, please try again later'
    },
    standardHeaders: true,
    legacyHeaders: false
  },

  // Strict limit for auth endpoints
  auth: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // 5 attempts per window
    message: {
      success: false,
      message: 'Too many login attempts, please try again after 15 minutes'
    },
    standardHeaders: true,
    legacyHeaders: false,
    skipSuccessfulRequests: true // Don't count successful logins
  },

  // Password reset limit
  passwordReset: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 3, // 3 attempts per hour
    message: {
      success: false,
      message: 'Too many password reset attempts, please try again later'
    }
  },

  // Registration limit
  register: {
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 5, // 5 registrations per hour per IP
    message: {
      success: false,
      message: 'Too many accounts created, please try again later'
    }
  }
}

// CORS configuration
export const corsConfig = {
  development: {
    origin: ['http://localhost:3000', 'http://localhost:5173', 'http://127.0.0.1:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  },
  production: {
    origin: [
      process.env.FRONTEND_URL || 'https://zoswa.com',
      'https://zoswa.com',
      'https://www.zoswa.com',
      'http://zoswa.com',
      'http://www.zoswa.com'
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  }
}

// Cookie configuration
export const cookieConfig = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
}

// Password requirements
export const passwordRequirements = {
  minLength: 8,
  requireUppercase: true,
  requireLowercase: true,
  requireNumbers: true,
  requireSpecialChars: false, // Optional but recommended
  maxLength: 128
}

// Validate password strength
export const validatePassword = (password) => {
  const errors = []

  if (password.length < passwordRequirements.minLength) {
    errors.push(`Password must be at least ${passwordRequirements.minLength} characters`)
  }

  if (password.length > passwordRequirements.maxLength) {
    errors.push(`Password cannot exceed ${passwordRequirements.maxLength} characters`)
  }

  if (passwordRequirements.requireUppercase && !/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter')
  }

  if (passwordRequirements.requireLowercase && !/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter')
  }

  if (passwordRequirements.requireNumbers && !/\d/.test(password)) {
    errors.push('Password must contain at least one number')
  }

  if (passwordRequirements.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push('Password must contain at least one special character')
  }

  // Check for common weak passwords
  const weakPasswords = ['password', '12345678', 'qwerty123', 'letmein', 'welcome']
  if (weakPasswords.includes(password.toLowerCase())) {
    errors.push('This password is too common, please choose a stronger one')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Account lockout settings
export const lockoutConfig = {
  maxAttempts: 5,
  lockoutDuration: 15 * 60 * 1000, // 15 minutes
  resetAttemptsAfter: 60 * 60 * 1000 // Reset attempts after 1 hour of no activity
}

export default {
  validateEnv,
  rateLimitConfig,
  corsConfig,
  cookieConfig,
  passwordRequirements,
  validatePassword,
  lockoutConfig
}
