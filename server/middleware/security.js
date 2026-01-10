/**
 * Security Middleware
 * Comprehensive security measures for Zoswa API
 */

import rateLimit from 'express-rate-limit'
import mongoSanitize from 'express-mongo-sanitize'
import hpp from 'hpp'
import { rateLimitConfig } from '../config/security.js'

/**
 * General API rate limiter
 */
export const apiLimiter = rateLimit(rateLimitConfig.api)

/**
 * Authentication rate limiter (stricter)
 */
export const authLimiter = rateLimit(rateLimitConfig.auth)

/**
 * Registration rate limiter
 */
export const registerLimiter = rateLimit(rateLimitConfig.register)

/**
 * Password reset rate limiter
 */
export const passwordResetLimiter = rateLimit(rateLimitConfig.passwordReset)

/**
 * Sanitize user input to prevent NoSQL injection
 */
export const sanitizeInput = mongoSanitize({
  replaceWith: '_',
  onSanitize: ({ req, key }) => {
    console.warn(`Sanitized potential NoSQL injection in ${key} from IP: ${req.ip}`)
  }
})

/**
 * Prevent HTTP Parameter Pollution
 */
export const preventParamPollution = hpp({
  whitelist: [
    'sort',
    'fields',
    'page',
    'limit',
    'track',
    'lesson'
  ]
})

/**
 * Custom XSS prevention middleware
 * Sanitizes request body, query, and params
 */
export const xssProtection = (req, res, next) => {
  const sanitize = (obj) => {
    if (typeof obj === 'string') {
      return obj
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;')
        .replace(/\\/g, '&#x5C;')
        .replace(/`/g, '&#96;')
    }
    if (typeof obj === 'object' && obj !== null) {
      for (const key in obj) {
        obj[key] = sanitize(obj[key])
      }
    }
    return obj
  }

  // Don't sanitize password fields (they get hashed anyway)
  const skipFields = ['password', 'currentPassword', 'newPassword']

  if (req.body) {
    for (const key in req.body) {
      if (!skipFields.includes(key)) {
        req.body[key] = sanitize(req.body[key])
      }
    }
  }

  if (req.query) {
    req.query = sanitize(req.query)
  }

  if (req.params) {
    req.params = sanitize(req.params)
  }

  next()
}

/**
 * Request logging for security monitoring
 */
export const securityLogger = (req, res, next) => {
  const logData = {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    ip: req.ip || req.connection.remoteAddress,
    userAgent: req.get('user-agent'),
    userId: req.user?.id || 'anonymous'
  }

  // Log suspicious activity
  if (req.path.includes('..') || req.path.includes('<script>')) {
    console.warn('SECURITY: Suspicious request detected', logData)
  }

  // Log failed auth attempts
  res.on('finish', () => {
    if (req.path.includes('/auth/') && res.statusCode === 401) {
      console.warn('SECURITY: Failed auth attempt', {
        ...logData,
        email: req.body?.email,
        statusCode: res.statusCode
      })
    }
  })

  next()
}

/**
 * Block common attack patterns
 */
export const blockAttacks = (req, res, next) => {
  const blockedPatterns = [
    /\.\.\//,           // Path traversal
    /<script/i,         // XSS attempts
    /javascript:/i,     // JavaScript protocol
    /data:text\/html/i, // Data URLs
    /on\w+\s*=/i,       // Event handlers
    /union\s+select/i,  // SQL injection
    /\$where/i,         // MongoDB injection
    /\$gt|\$lt|\$ne/i,  // MongoDB operators in strings
  ]

  const checkValue = (value) => {
    if (typeof value === 'string') {
      return blockedPatterns.some(pattern => pattern.test(value))
    }
    return false
  }

  const checkObject = (obj) => {
    for (const key in obj) {
      if (checkValue(key) || checkValue(obj[key])) {
        return true
      }
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        if (checkObject(obj[key])) return true
      }
    }
    return false
  }

  if (checkObject(req.body) || checkObject(req.query) || checkObject(req.params)) {
    console.warn('SECURITY: Blocked potential attack', {
      ip: req.ip,
      path: req.path,
      body: JSON.stringify(req.body).substring(0, 200)
    })
    return res.status(400).json({
      success: false,
      message: 'Invalid request'
    })
  }

  next()
}

/**
 * Validate content type
 */
export const validateContentType = (req, res, next) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    const contentType = req.get('content-type')
    if (contentType && !contentType.includes('application/json') && !contentType.includes('multipart/form-data')) {
      return res.status(415).json({
        success: false,
        message: 'Unsupported content type'
      })
    }
  }
  next()
}

export default {
  apiLimiter,
  authLimiter,
  registerLimiter,
  passwordResetLimiter,
  sanitizeInput,
  preventParamPollution,
  xssProtection,
  securityLogger,
  blockAttacks,
  validateContentType
}
