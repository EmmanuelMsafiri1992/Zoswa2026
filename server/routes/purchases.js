import express from 'express'
import Purchase from '../models/Purchase.js'
import { protect } from '../middleware/auth.js'

const router = express.Router()

// @route   GET /api/purchases
// @desc    Get all purchases for the authenticated user
// @access  Private
router.get('/', protect, async (req, res) => {
  try {
    const purchases = await Purchase.getUserPurchases(req.user._id)

    // Flatten items from all purchases for easier frontend consumption
    const allItems = purchases.reduce((acc, purchase) => {
      const itemsWithPurchaseInfo = purchase.items.map(item => ({
        ...item.toObject(),
        purchaseId: purchase._id,
        orderId: purchase.orderId,
        purchasedAt: purchase.createdAt,
        status: purchase.status
      }))
      return [...acc, ...itemsWithPurchaseInfo]
    }, [])

    res.json({
      success: true,
      purchases: allItems,
      totalPurchases: purchases.length,
      totalItems: allItems.length
    })
  } catch (error) {
    console.error('Get purchases error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   GET /api/purchases/:orderId
// @desc    Get a specific purchase by order ID
// @access  Private
router.get('/:orderId', protect, async (req, res) => {
  try {
    const purchase = await Purchase.findOne({
      orderId: req.params.orderId,
      user: req.user._id
    })

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: 'Purchase not found'
      })
    }

    res.json({
      success: true,
      purchase
    })
  } catch (error) {
    console.error('Get purchase error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/purchases/create-order
// @desc    Create a PayPal order (called before PayPal checkout)
// @access  Private
router.post('/create-order', protect, async (req, res) => {
  try {
    const { items, total } = req.body

    if (!items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No items in cart'
      })
    }

    // Validate total matches sum of item prices
    const calculatedTotal = items.reduce((sum, item) => sum + item.price, 0)
    if (Math.abs(calculatedTotal - total) > 0.01) {
      return res.status(400).json({
        success: false,
        message: 'Invalid total amount'
      })
    }

    // In production, you would create a PayPal order here using PayPal SDK
    // For now, we generate a temporary order ID
    const tempOrderId = `ORDER-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

    res.json({
      success: true,
      orderId: tempOrderId,
      total: calculatedTotal
    })
  } catch (error) {
    console.error('Create order error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   POST /api/purchases/capture-order
// @desc    Capture PayPal payment and create purchase record
// @access  Private
router.post('/capture-order', protect, async (req, res) => {
  try {
    const { orderId, items, payerId, paymentDetails } = req.body

    if (!orderId || !items || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid order data'
      })
    }

    // Check if order already exists (prevent duplicate captures)
    const existingPurchase = await Purchase.findOne({ orderId })
    if (existingPurchase) {
      return res.status(400).json({
        success: false,
        message: 'Order already processed'
      })
    }

    // In production, you would verify the payment with PayPal API here
    // const paypalVerification = await verifyPayPalPayment(orderId)

    // Calculate total
    const totalAmount = items.reduce((sum, item) => sum + item.price, 0)

    // Create purchase record
    const purchase = await Purchase.create({
      user: req.user._id,
      orderId,
      payerId,
      items: items.map(item => ({
        projectId: item.id,
        title: item.title,
        category: item.category,
        price: item.price,
        technologies: item.technologies || [],
        description: item.description || '',
        difficulty: item.difficulty || '',
        duration: item.duration || '',
        features: item.features || [],
        deliverables: item.deliverables || []
      })),
      totalAmount,
      paymentDetails,
      status: 'completed'
    })

    res.json({
      success: true,
      message: 'Purchase completed successfully',
      purchase: {
        id: purchase._id,
        orderId: purchase.orderId,
        items: purchase.items,
        totalAmount: purchase.totalAmount,
        createdAt: purchase.createdAt
      }
    })
  } catch (error) {
    console.error('Capture order error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   GET /api/purchases/check/:projectId
// @desc    Check if user has purchased a specific project
// @access  Private
router.get('/check/:projectId', protect, async (req, res) => {
  try {
    const projectId = parseInt(req.params.projectId)
    const hasPurchased = await Purchase.hasPurchased(req.user._id, projectId)

    res.json({
      success: true,
      hasPurchased
    })
  } catch (error) {
    console.error('Check purchase error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

// @route   GET /api/purchases/download/:orderId/:projectId
// @desc    Get download link for a purchased project
// @access  Private
router.get('/download/:orderId/:projectId', protect, async (req, res) => {
  try {
    const { orderId, projectId } = req.params

    // Verify the user owns this purchase
    const purchase = await Purchase.findOne({
      orderId,
      user: req.user._id,
      status: 'completed'
    })

    if (!purchase) {
      return res.status(404).json({
        success: false,
        message: 'Purchase not found'
      })
    }

    // Check if the project is in this purchase
    const projectItem = purchase.items.find(item => item.projectId === parseInt(projectId))
    if (!projectItem) {
      return res.status(404).json({
        success: false,
        message: 'Project not found in this purchase'
      })
    }

    // In production, you would generate a signed download URL here
    // For now, return a placeholder response
    res.json({
      success: true,
      downloadUrl: `/downloads/${orderId}/${projectId}`,
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
      project: projectItem
    })
  } catch (error) {
    console.error('Download error:', error)
    res.status(500).json({
      success: false,
      message: 'Server error'
    })
  }
})

export default router
