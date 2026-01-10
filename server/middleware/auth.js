import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/**
 * Protect routes - require authentication
 */
export const protect = async (req, res, next) => {
  let token

  // Check for token in Authorization header (Bearer token)
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }
  // Fallback to cookie
  else if (req.cookies?.token && req.cookies.token !== 'none') {
    token = req.cookies.token
  }

  // No token found
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required',
      code: 'NO_TOKEN'
    })
  }

  // Don't allow demo tokens in production
  if (process.env.NODE_ENV === 'production' && token.startsWith('demo-token-')) {
    return res.status(401).json({
      success: false,
      message: 'Invalid authentication token',
      code: 'INVALID_TOKEN'
    })
  }

  // Handle demo tokens in development
  if (token.startsWith('demo-token-') && process.env.NODE_ENV !== 'production') {
    req.user = {
      _id: 'demo-user-123',
      id: 'demo-user-123',
      name: 'Demo User',
      email: 'demo@zoswa.com',
      role: 'user',
      isActive: true,
      hasAccess: () => true,
      hasActiveTrial: () => true,
      getTrialDaysLeft: () => 7
    }
    return next()
  }

  try {
    // Verify JWT secret exists
    if (!process.env.JWT_SECRET) {
      console.error('SECURITY: JWT_SECRET not configured')
      return res.status(500).json({
        success: false,
        message: 'Server configuration error'
      })
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET, {
      issuer: 'zoswa',
      audience: 'zoswa-users'
    })

    // Get user from token
    const user = await User.findById(decoded.id).select('+isActive')

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'User not found',
        code: 'USER_NOT_FOUND'
      })
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account has been deactivated',
        code: 'ACCOUNT_DEACTIVATED'
      })
    }

    // Attach user to request
    req.user = user
    next()
  } catch (error) {
    let message = 'Authentication failed'
    let code = 'AUTH_FAILED'

    if (error.name === 'JsonWebTokenError') {
      message = 'Invalid token'
      code = 'INVALID_TOKEN'
    } else if (error.name === 'TokenExpiredError') {
      message = 'Session expired. Please log in again.'
      code = 'TOKEN_EXPIRED'
    }

    return res.status(401).json({
      success: false,
      message,
      code
    })
  }
}

/**
 * Grant access to specific roles
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Authentication required'
      })
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: 'You do not have permission to perform this action',
        code: 'FORBIDDEN'
      })
    }
    next()
  }
}

/**
 * Check subscription status - require active subscription or trial
 */
export const requireSubscription = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: 'Authentication required'
    })
  }

  // Check if user has access (subscribed or in trial)
  const hasAccess = typeof req.user.hasAccess === 'function'
    ? req.user.hasAccess()
    : (req.user.isSubscribed || req.user.hasActiveTrial?.())

  if (!hasAccess) {
    return res.status(403).json({
      success: false,
      message: 'Active subscription required to access this content',
      code: 'SUBSCRIPTION_REQUIRED',
      trialExpired: true
    })
  }

  next()
}

/**
 * Optional authentication - doesn't fail if no token
 */
export const optionalAuth = async (req, res, next) => {
  let token

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  } else if (req.cookies?.token && req.cookies.token !== 'none') {
    token = req.cookies.token
  }

  if (!token) {
    return next()
  }

  try {
    if (process.env.JWT_SECRET) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await User.findById(decoded.id)
    }
  } catch (error) {
    // Silently fail for optional auth
  }

  next()
}

export default {
  protect,
  authorize,
  requireSubscription,
  optionalAuth
}
