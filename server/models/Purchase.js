import mongoose from 'mongoose'

const purchaseItemSchema = new mongoose.Schema({
  projectId: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  technologies: [{
    type: String
  }],
  description: {
    type: String
  },
  difficulty: {
    type: String
  },
  duration: {
    type: String
  },
  features: [{
    type: String
  }],
  deliverables: [{
    type: String
  }]
})

const purchaseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [purchaseItemSchema],
  orderId: {
    type: String,
    required: true,
    unique: true
  },
  payerId: {
    type: String
  },
  paymentMethod: {
    type: String,
    enum: ['paypal', 'stripe', 'other'],
    default: 'paypal'
  },
  totalAmount: {
    type: Number,
    required: true
  },
  currency: {
    type: String,
    default: 'USD'
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed', 'refunded'],
    default: 'completed'
  },
  paymentDetails: {
    type: mongoose.Schema.Types.Mixed
  }
}, {
  timestamps: true
})

// Index for faster queries
purchaseSchema.index({ user: 1, createdAt: -1 })
purchaseSchema.index({ orderId: 1 })

// Static method to get user's purchases
purchaseSchema.statics.getUserPurchases = async function(userId) {
  return this.find({ user: userId }).sort({ createdAt: -1 })
}

// Static method to check if user has purchased a specific project
purchaseSchema.statics.hasPurchased = async function(userId, projectId) {
  const purchase = await this.findOne({
    user: userId,
    'items.projectId': projectId,
    status: 'completed'
  })
  return !!purchase
}

// Instance method to get all project IDs from a purchase
purchaseSchema.methods.getProjectIds = function() {
  return this.items.map(item => item.projectId)
}

const Purchase = mongoose.model('Purchase', purchaseSchema)

export default Purchase
