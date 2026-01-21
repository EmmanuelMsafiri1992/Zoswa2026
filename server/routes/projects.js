import express from 'express'
import Project from '../models/Project.js'
import { protect, optionalAuth } from '../middleware/auth.js'

const router = express.Router()

/**
 * @route   GET /api/projects
 * @desc    Get all projects for authenticated user
 * @access  Private
 */
router.get('/', protect, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user._id })
      .sort({ lastOpenedAt: -1 })
      .select('-files.content') // Don't send file contents in list view

    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({
      error: 'Failed to fetch projects',
      message: error.message
    })
  }
})

/**
 * @route   GET /api/projects/public
 * @desc    Get public projects
 * @access  Public
 */
router.get('/public', async (req, res) => {
  try {
    const { language, tags, limit = 20, page = 1 } = req.query

    const options = {
      limit: Math.min(parseInt(limit), 50),
      skip: (parseInt(page) - 1) * parseInt(limit)
    }

    if (language) options.language = language
    if (tags) options.tags = tags.split(',')

    const projects = await Project.findPublicProjects(options)

    res.json(projects)
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch public projects',
      message: error.message
    })
  }
})

/**
 * @route   GET /api/projects/:id
 * @desc    Get a single project
 * @access  Private/Public (if project is public)
 */
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    // Check if user has access
    const isOwner = req.user && project.userId.toString() === req.user._id.toString()
    if (!project.isPublic && !isOwner) {
      return res.status(403).json({ error: 'Access denied' })
    }

    // Update lastOpenedAt for owner
    if (isOwner) {
      project.lastOpenedAt = new Date()
      await project.save()
    }

    res.json(project)
  } catch (error) {
    console.error('Error fetching project:', error)
    res.status(500).json({
      error: 'Failed to fetch project',
      message: error.message
    })
  }
})

/**
 * @route   POST /api/projects
 * @desc    Create a new project
 * @access  Private
 */
router.post('/', protect, async (req, res) => {
  try {
    const { name, description, language, files, settings, isPublic, tags } = req.body

    // Check project limit (max 100 projects per user)
    const projectCount = await Project.countDocuments({ userId: req.user._id })
    if (projectCount >= 100) {
      return res.status(400).json({
        error: 'Project limit reached',
        message: 'You can have a maximum of 100 projects'
      })
    }

    const project = await Project.create({
      userId: req.user._id,
      name: name || 'Untitled Project',
      description,
      language: language || 'javascript',
      files: files || [],
      settings: settings || {},
      isPublic: isPublic || false,
      tags: tags || []
    })

    res.status(201).json(project)
  } catch (error) {
    console.error('Error creating project:', error)
    res.status(500).json({
      error: 'Failed to create project',
      message: error.message
    })
  }
})

/**
 * @route   PUT /api/projects/:id
 * @desc    Update a project
 * @access  Private (owner only)
 */
router.put('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    // Check ownership
    if (project.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Access denied' })
    }

    const { name, description, language, files, settings, isPublic, tags } = req.body

    // Update fields
    if (name !== undefined) project.name = name
    if (description !== undefined) project.description = description
    if (language !== undefined) project.language = language
    if (files !== undefined) project.files = files
    if (settings !== undefined) project.settings = { ...project.settings, ...settings }
    if (isPublic !== undefined) project.isPublic = isPublic
    if (tags !== undefined) project.tags = tags

    project.lastOpenedAt = new Date()

    await project.save()

    res.json(project)
  } catch (error) {
    console.error('Error updating project:', error)
    res.status(500).json({
      error: 'Failed to update project',
      message: error.message
    })
  }
})

/**
 * @route   DELETE /api/projects/:id
 * @desc    Delete a project
 * @access  Private (owner only)
 */
router.delete('/:id', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    // Check ownership
    if (project.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Access denied' })
    }

    await project.deleteOne()

    res.json({ message: 'Project deleted successfully' })
  } catch (error) {
    console.error('Error deleting project:', error)
    res.status(500).json({
      error: 'Failed to delete project',
      message: error.message
    })
  }
})

/**
 * @route   POST /api/projects/:id/fork
 * @desc    Fork a public project
 * @access  Private
 */
router.post('/:id/fork', protect, async (req, res) => {
  try {
    const originalProject = await Project.findById(req.params.id)

    if (!originalProject) {
      return res.status(404).json({ error: 'Project not found' })
    }

    // Can only fork public projects or own projects
    const isOwner = originalProject.userId.toString() === req.user._id.toString()
    if (!originalProject.isPublic && !isOwner) {
      return res.status(403).json({ error: 'Cannot fork private project' })
    }

    // Check project limit
    const projectCount = await Project.countDocuments({ userId: req.user._id })
    if (projectCount >= 100) {
      return res.status(400).json({
        error: 'Project limit reached',
        message: 'You can have a maximum of 100 projects'
      })
    }

    // Create forked project
    const forkedProject = await Project.create({
      userId: req.user._id,
      name: `${originalProject.name} (Fork)`,
      description: originalProject.description,
      language: originalProject.language,
      files: originalProject.files,
      settings: originalProject.settings,
      isPublic: false,
      tags: originalProject.tags,
      forkedFrom: originalProject._id
    })

    // Increment fork count on original
    await Project.findByIdAndUpdate(originalProject._id, { $inc: { forkCount: 1 } })

    res.status(201).json(forkedProject)
  } catch (error) {
    console.error('Error forking project:', error)
    res.status(500).json({
      error: 'Failed to fork project',
      message: error.message
    })
  }
})

/**
 * @route   POST /api/projects/:id/files
 * @desc    Add a file to project
 * @access  Private (owner only)
 */
router.post('/:id/files', protect, async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    if (project.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Access denied' })
    }

    const { path, content } = req.body

    if (!path) {
      return res.status(400).json({ error: 'File path is required' })
    }

    project.addFile(path, content || '')
    await project.save()

    res.status(201).json(project)
  } catch (error) {
    res.status(400).json({
      error: 'Failed to add file',
      message: error.message
    })
  }
})

export default router
