import express from 'express'
import rateLimit from 'express-rate-limit'
import { executeCode, getRuntimes } from '../services/codeExecution.js'
import { protect, optionalAuth } from '../middleware/auth.js'

const router = express.Router()

// Rate limiting for code execution
const executionLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 30, // 30 requests per minute
  message: {
    error: 'Too many execution requests. Please wait a moment.',
    retryAfter: 60
  },
  standardHeaders: true,
  legacyHeaders: false
})

// More strict rate limiting for unauthenticated users
const unauthenticatedLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10, // 10 requests per minute for guests
  message: {
    error: 'Rate limit exceeded. Log in for higher limits.',
    retryAfter: 60
  }
})

/**
 * @route   POST /api/execute
 * @desc    Execute code
 * @access  Public (with rate limiting)
 */
router.post('/', optionalAuth, async (req, res) => {
  try {
    const { language, code, files = [], stdin = '' } = req.body

    // Validate input
    if (!language) {
      return res.status(400).json({ error: 'Language is required' })
    }

    if (!code && (!files || files.length === 0)) {
      return res.status(400).json({ error: 'Code or files are required' })
    }

    // Check code size limits
    const maxCodeSize = req.user ? 100000 : 50000 // 100KB for auth, 50KB for guests
    const totalSize = (code?.length || 0) + files.reduce((sum, f) => sum + (f.content?.length || 0), 0)

    if (totalSize > maxCodeSize) {
      return res.status(400).json({
        error: `Code size exceeds limit (${Math.round(maxCodeSize / 1000)}KB)`
      })
    }

    // Supported languages
    const supportedLanguages = [
      'python', 'javascript', 'typescript', 'java', 'csharp', 'c', 'cpp',
      'go', 'rust', 'ruby', 'php', 'perl', 'swift', 'kotlin', 'scala',
      'r', 'lua', 'bash', 'haskell'
    ]

    if (!supportedLanguages.includes(language)) {
      return res.status(400).json({
        error: `Unsupported language: ${language}`,
        supported: supportedLanguages
      })
    }

    // Execute the code
    const result = await executeCode(language, code, files, stdin)

    res.json({
      language,
      stdout: result.stdout,
      stderr: result.stderr,
      compile_output: result.compile_output,
      exit_code: result.exit_code,
      error: result.error
    })
  } catch (error) {
    console.error('Execution error:', error)
    res.status(500).json({
      error: 'Execution failed',
      message: error.message
    })
  }
})

/**
 * @route   GET /api/execute/runtimes
 * @desc    Get available language runtimes
 * @access  Public
 */
router.get('/runtimes', async (req, res) => {
  try {
    const runtimes = await getRuntimes()
    res.json(runtimes)
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch runtimes',
      message: error.message
    })
  }
})

/**
 * @route   GET /api/execute/languages
 * @desc    Get supported languages
 * @access  Public
 */
router.get('/languages', (req, res) => {
  const languages = [
    { id: 'python', name: 'Python', version: '3.10', extension: '.py' },
    { id: 'javascript', name: 'JavaScript', version: '18.15', extension: '.js' },
    { id: 'typescript', name: 'TypeScript', version: '5.0', extension: '.ts' },
    { id: 'java', name: 'Java', version: '15.0', extension: '.java' },
    { id: 'csharp', name: 'C#', version: '6.12', extension: '.cs' },
    { id: 'c', name: 'C', version: '10.2', extension: '.c' },
    { id: 'cpp', name: 'C++', version: '10.2', extension: '.cpp' },
    { id: 'go', name: 'Go', version: '1.16', extension: '.go' },
    { id: 'rust', name: 'Rust', version: '1.68', extension: '.rs' },
    { id: 'ruby', name: 'Ruby', version: '3.0', extension: '.rb' },
    { id: 'php', name: 'PHP', version: '8.2', extension: '.php' },
    { id: 'perl', name: 'Perl', version: '5.36', extension: '.pl' },
    { id: 'swift', name: 'Swift', version: '5.3', extension: '.swift' },
    { id: 'kotlin', name: 'Kotlin', version: '1.8', extension: '.kt' },
    { id: 'scala', name: 'Scala', version: '3.2', extension: '.scala' },
    { id: 'r', name: 'R', version: '4.1', extension: '.r' },
    { id: 'lua', name: 'Lua', version: '5.4', extension: '.lua' },
    { id: 'bash', name: 'Bash', version: '5.2', extension: '.sh' },
    { id: 'haskell', name: 'Haskell', version: '9.0', extension: '.hs' }
  ]

  res.json(languages)
})

export default router
