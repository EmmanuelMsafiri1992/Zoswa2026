import mongoose from 'mongoose'

const FileSchema = new mongoose.Schema({
  path: {
    type: String,
    required: true
  },
  content: {
    type: String,
    default: ''
  },
  lastModified: {
    type: Date,
    default: Date.now
  }
}, { _id: false })

const ProjectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true
  },
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    maxlength: [100, 'Project name cannot exceed 100 characters']
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  language: {
    type: String,
    required: true,
    enum: [
      'html', 'css', 'javascript', 'typescript', 'python', 'sql',
      'java', 'csharp', 'php', 'ruby', 'c', 'cpp', 'go', 'rust',
      'kotlin', 'swift', 'perl', 'r', 'lua', 'bash', 'haskell', 'scala',
      'jsx', 'json', 'markdown', 'yaml', 'xml'
    ]
  },
  files: {
    type: [FileSchema],
    default: [],
    validate: {
      validator: function(files) {
        // Max 50 files per project
        return files.length <= 50
      },
      message: 'Project cannot have more than 50 files'
    }
  },
  settings: {
    theme: {
      type: String,
      default: 'vs-dark',
      enum: ['vs-dark', 'vs', 'hc-black']
    },
    fontSize: {
      type: Number,
      default: 14,
      min: 10,
      max: 32
    },
    tabSize: {
      type: Number,
      default: 2,
      enum: [2, 4, 8]
    },
    wordWrap: {
      type: String,
      default: 'on',
      enum: ['on', 'off']
    },
    minimap: {
      type: Boolean,
      default: true
    }
  },
  isPublic: {
    type: Boolean,
    default: false,
    index: true
  },
  isTemplate: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true
  }],
  forkCount: {
    type: Number,
    default: 0
  },
  forkedFrom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  },
  lastOpenedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Indexes
ProjectSchema.index({ userId: 1, createdAt: -1 })
ProjectSchema.index({ isPublic: 1, createdAt: -1 })
ProjectSchema.index({ language: 1, isPublic: 1 })
ProjectSchema.index({ tags: 1, isPublic: 1 })

// Virtual for total file size
ProjectSchema.virtual('totalSize').get(function() {
  return this.files.reduce((sum, file) => sum + (file.content?.length || 0), 0)
})

// Pre-save middleware
ProjectSchema.pre('save', function(next) {
  // Update lastModified for all files
  if (this.isModified('files')) {
    this.files.forEach(file => {
      file.lastModified = new Date()
    })
  }
  next()
})

// Methods
ProjectSchema.methods.addFile = function(path, content = '') {
  if (this.files.length >= 50) {
    throw new Error('Maximum file limit reached')
  }

  // Check if file already exists
  const existing = this.files.find(f => f.path === path)
  if (existing) {
    throw new Error('File already exists')
  }

  this.files.push({ path, content })
  return this
}

ProjectSchema.methods.updateFile = function(path, content) {
  const file = this.files.find(f => f.path === path)
  if (!file) {
    throw new Error('File not found')
  }

  file.content = content
  file.lastModified = new Date()
  return this
}

ProjectSchema.methods.deleteFile = function(path) {
  const index = this.files.findIndex(f => f.path === path)
  if (index === -1) {
    throw new Error('File not found')
  }

  this.files.splice(index, 1)
  return this
}

ProjectSchema.methods.renameFile = function(oldPath, newPath) {
  const file = this.files.find(f => f.path === oldPath)
  if (!file) {
    throw new Error('File not found')
  }

  // Check if new path already exists
  if (this.files.some(f => f.path === newPath)) {
    throw new Error('A file with this name already exists')
  }

  file.path = newPath
  file.lastModified = new Date()
  return this
}

// Statics
ProjectSchema.statics.findPublicProjects = function(options = {}) {
  const query = { isPublic: true }

  if (options.language) {
    query.language = options.language
  }

  if (options.tags && options.tags.length > 0) {
    query.tags = { $in: options.tags }
  }

  return this.find(query)
    .sort({ createdAt: -1 })
    .limit(options.limit || 20)
    .skip(options.skip || 0)
    .populate('userId', 'name')
}

ProjectSchema.statics.findUserProjects = function(userId) {
  return this.find({ userId })
    .sort({ lastOpenedAt: -1 })
}

export default mongoose.model('Project', ProjectSchema)
