import express from 'express'
import User from '../models/User.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// @route   GET /api/subscription/status
// @desc    Get subscription status
// @access  Private
router.get('/status', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    res.json({
      success: true,
      subscription: {
        isSubscribed: user.isSubscribed,
        subscriptionId: user.subscriptionId,
        subscriptionStartDate: user.subscriptionStartDate,
        subscriptionEndDate: user.subscriptionEndDate,
        trialStartDate: user.trialStartDate,
        trialDaysLeft: user.getTrialDaysLeft(),
        hasAccess: user.hasAccess()
      }
    })
  } catch (error) {
    console.error('Get subscription status error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/subscription/activate
// @desc    Activate subscription after PayPal payment
// @access  Private
router.post('/activate', protect, async (req, res) => {
  try {
    const { subscriptionId, orderId } = req.body

    // In production, you would verify the subscription with PayPal API
    // const paypalVerification = await verifyPayPalSubscription(subscriptionId)

    const user = await User.findById(req.user._id)

    user.isSubscribed = true
    user.subscriptionId = subscriptionId
    user.subscriptionStartDate = new Date()

    // Set subscription end date to 1 month from now
    const endDate = new Date()
    endDate.setMonth(endDate.getMonth() + 1)
    user.subscriptionEndDate = endDate

    await user.save()

    res.json({
      success: true,
      message: 'Subscription activated successfully',
      subscription: {
        isSubscribed: user.isSubscribed,
        subscriptionId: user.subscriptionId,
        subscriptionStartDate: user.subscriptionStartDate,
        subscriptionEndDate: user.subscriptionEndDate
      }
    })
  } catch (error) {
    console.error('Activate subscription error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/subscription/cancel
// @desc    Cancel subscription
// @access  Private
router.post('/cancel', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id)

    if (!user.isSubscribed) {
      return res.status(400).json({
        success: false,
        message: 'No active subscription to cancel'
      })
    }

    // In production, you would cancel the subscription with PayPal API
    // await cancelPayPalSubscription(user.subscriptionId)

    // Keep access until end of billing period
    // user.isSubscribed will be set to false by a cron job when subscriptionEndDate passes

    res.json({
      success: true,
      message: 'Subscription will be cancelled at the end of the billing period',
      subscriptionEndDate: user.subscriptionEndDate
    })
  } catch (error) {
    console.error('Cancel subscription error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/subscription/webhook
// @desc    Handle PayPal webhook events
// @access  Public (PayPal will call this)
router.post('/webhook', async (req, res) => {
  try {
    const { event_type, resource } = req.body

    // In production, verify webhook signature with PayPal

    switch (event_type) {
      case 'BILLING.SUBSCRIPTION.ACTIVATED':
        // Subscription activated
        const activatedUser = await User.findOne({ subscriptionId: resource.id })
        if (activatedUser) {
          activatedUser.isSubscribed = true
          await activatedUser.save()
        }
        break

      case 'BILLING.SUBSCRIPTION.CANCELLED':
      case 'BILLING.SUBSCRIPTION.SUSPENDED':
        // Subscription cancelled or suspended
        const cancelledUser = await User.findOne({ subscriptionId: resource.id })
        if (cancelledUser) {
          cancelledUser.isSubscribed = false
          await cancelledUser.save()
        }
        break

      case 'PAYMENT.SALE.COMPLETED':
        // Payment received - extend subscription
        const paidUser = await User.findOne({ subscriptionId: resource.billing_agreement_id })
        if (paidUser) {
          const newEndDate = new Date(paidUser.subscriptionEndDate)
          newEndDate.setMonth(newEndDate.getMonth() + 1)
          paidUser.subscriptionEndDate = newEndDate
          await paidUser.save()
        }
        break

      default:
        console.log('Unhandled webhook event:', event_type)
    }

    res.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    res.status(500).json({ error: 'Webhook processing failed' })
  }
})

// @route   GET /api/subscription/plans
// @desc    Get available subscription plans
// @access  Public
router.get('/plans', (req, res) => {
  res.json({
    success: true,
    plans: [
      {
        id: 'monthly',
        name: 'Monthly',
        price: 7.00,
        currency: 'USD',
        interval: 'month',
        features: [
          'All 6 learning tracks',
          'Interactive code editor',
          'Unlimited practice',
          'Certificates on completion',
          'Community access',
          'Cancel anytime'
        ]
      }
    ]
  })
})

export default router
