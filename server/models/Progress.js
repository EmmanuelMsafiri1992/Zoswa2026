import mongoose from 'mongoose'

const progressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  xp: {
    type: Number,
    default: 0
  },
  level: {
    type: Number,
    default: 1
  },
  streak: {
    type: Number,
    default: 0
  },
  longestStreak: {
    type: Number,
    default: 0
  },
  lastActivityDate: {
    type: Date,
    default: null
  },
  completedLessons: [{
    trackId: String,
    lessonId: String,
    completedAt: {
      type: Date,
      default: Date.now
    },
    xpEarned: Number
  }],
  trackProgress: {
    type: Map,
    of: {
      completed: Number,
      total: Number,
      lastAccessed: Date
    },
    default: {}
  },
  badges: [{
    badgeId: String,
    name: String,
    description: String,
    icon: String,
    unlockedAt: {
      type: Date,
      default: Date.now
    }
  }],
  certificates: [{
    trackId: String,
    trackName: String,
    earnedAt: Date,
    credentialId: String
  }]
}, {
  timestamps: true
})

// Calculate level from XP
progressSchema.methods.calculateLevel = function() {
  let level = 1
  let xpNeeded = 100
  let remainingXp = this.xp

  while (remainingXp >= xpNeeded) {
    remainingXp -= xpNeeded
    level++
    xpNeeded = 100 + (level - 1) * 50
  }

  return {
    level,
    currentXp: remainingXp,
    xpForNextLevel: xpNeeded
  }
}

// Update streak
progressSchema.methods.updateStreak = function() {
  const today = new Date().toDateString()
  const lastActivity = this.lastActivityDate
    ? new Date(this.lastActivityDate).toDateString()
    : null

  if (lastActivity === today) {
    return this.streak // Already active today
  }

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  if (lastActivity === yesterday.toDateString()) {
    this.streak += 1
  } else if (lastActivity !== today) {
    this.streak = 1
  }

  if (this.streak > this.longestStreak) {
    this.longestStreak = this.streak
  }

  this.lastActivityDate = new Date()
  return this.streak
}

// Check if lesson is completed
progressSchema.methods.isLessonCompleted = function(trackId, lessonId) {
  return this.completedLessons.some(
    l => l.trackId === trackId && l.lessonId === lessonId
  )
}

export default mongoose.model('Progress', progressSchema)
