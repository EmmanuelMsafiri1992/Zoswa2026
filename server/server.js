import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { validateEnv, corsConfig } from './config/security.js'
import {
  apiLimiter,
  authLimiter,
  registerLimiter,
  sanitizeInput,
  preventParamPollution,
  xssProtection,
  securityLogger,
  blockAttacks,
  validateContentType
} from './middleware/security.js'

// Route imports
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import progressRoutes from './routes/progress.js'
import subscriptionRoutes from './routes/subscription.js'
import adminRoutes from './routes/admin.js'

// Load env vars FIRST
dotenv.config()

// Validate environment in production
const isProduction = process.env.NODE_ENV === 'production'
if (isProduction) {
  validateEnv()
}

const app = express()

// Trust proxy (required for rate limiting behind reverse proxy)
if (isProduction) {
  app.set('trust proxy', 1)
}

// Store DB connection status
let dbConnected = false

// Connect to database (async)
const initDB = async () => {
  dbConnected = await connectDB()
}
initDB()

// ==========================================
// SECURITY MIDDLEWARE
// ==========================================

// Set security HTTP headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc: ["'self'", 'https://fonts.gstatic.com'],
      imgSrc: ["'self'", 'data:', 'https:'],
      scriptSrc: ["'self'"],
      connectSrc: ["'self'", 'https://api.paypal.com'],
      frameSrc: ["'self'", 'https://www.paypal.com'],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: isProduction ? [] : null
    }
  },
  crossOriginEmbedderPolicy: false, // Required for PayPal iframe
  hsts: {
    maxAge: 31536000, // 1 year
    includeSubDomains: true,
    preload: true
  }
}))

// CORS configuration
const corsOptions = isProduction ? corsConfig.production : corsConfig.development
app.use(cors(corsOptions))

// Cookie parser
app.use(cookieParser())

// Body parser with size limits
app.use(express.json({ limit: '10kb' })) // Limit body size
app.use(express.urlencoded({ extended: true, limit: '10kb' }))

// Security logging
app.use(securityLogger)

// Block common attacks
app.use(blockAttacks)

// Validate content type
app.use(validateContentType)

// Sanitize data - prevent NoSQL injection
app.use(sanitizeInput)

// Prevent parameter pollution
app.use(preventParamPollution)

// XSS protection
app.use(xssProtection)

// General API rate limiting
app.use('/api', apiLimiter)

// ==========================================
// API ROUTES
// ==========================================

// Apply stricter rate limiting to auth routes
app.use('/api/auth/login', authLimiter)
app.use('/api/auth/register', registerLimiter)

// Mount routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/progress', progressRoutes)
app.use('/api/subscription', subscriptionRoutes)
app.use('/api/admin', adminRoutes)

// ==========================================
// DEMO MODE (Development Only)
// ==========================================

if (!isProduction) {
  console.log('⚠️  Demo mode enabled (development only)')

  const demoUser = {
    id: 'demo-user-123',
    name: 'Demo User',
    email: 'demo@zoswa.com',
    trialStartDate: new Date(),
    isSubscribed: false,
    trialDaysLeft: 7,
    hasAccess: true
  }

  // Demo login (ONLY for development)
  app.post('/api/auth/demo-login', (req, res) => {
    const { email } = req.body
    res.json({
      success: true,
      token: 'demo-token-' + Date.now(),
      user: { ...demoUser, email: email || demoUser.email }
    })
  })

  // Demo register (ONLY for development)
  app.post('/api/auth/demo-register', (req, res) => {
    const { name, email } = req.body
    res.json({
      success: true,
      token: 'demo-token-' + Date.now(),
      user: { ...demoUser, name: name || demoUser.name, email: email || demoUser.email }
    })
  })
}

// ==========================================
// HEALTH & STATUS
// ==========================================

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Zoswa API is running',
    environment: process.env.NODE_ENV || 'development',
    dbConnected,
    timestamp: new Date().toISOString()
  })
})

// ==========================================
// ERROR HANDLING
// ==========================================

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server Error:', err)

  // Don't leak error details in production
  const errorResponse = {
    success: false,
    message: isProduction ? 'An unexpected error occurred' : err.message
  }

  // Add stack trace in development
  if (!isProduction) {
    errorResponse.stack = err.stack
  }

  // Handle specific error types
  if (err.name === 'ValidationError') {
    errorResponse.message = Object.values(err.errors).map(e => e.message).join(', ')
    return res.status(400).json(errorResponse)
  }

  if (err.code === 11000) {
    errorResponse.message = 'Duplicate field value entered'
    return res.status(400).json(errorResponse)
  }

  if (err.name === 'JsonWebTokenError') {
    errorResponse.message = 'Invalid token'
    return res.status(401).json(errorResponse)
  }

  if (err.name === 'TokenExpiredError') {
    errorResponse.message = 'Token expired'
    return res.status(401).json(errorResponse)
  }

  res.status(err.statusCode || 500).json(errorResponse)
})

// ==========================================
// SERVER STARTUP
// ==========================================

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`🚀 Zoswa server running on port ${PORT}`)
  console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`)

  if (!isProduction) {
    console.log(`🔓 Demo mode: ENABLED (disable in production)`)
    console.log(`🌐 API: http://localhost:${PORT}/api`)
  }
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err)
  if (isProduction) {
    // Close server & exit process in production
    server.close(() => process.exit(1))
  }
})

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  if (isProduction) {
    server.close(() => process.exit(1))
  }
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Shutting down gracefully...')
  server.close(() => {
    console.log('Process terminated')
    process.exit(0)
  })
})

export default app
