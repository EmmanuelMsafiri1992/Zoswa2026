import https from 'https'
import http from 'http'

// Piston API configuration
const PISTON_URL = process.env.PISTON_URL || 'https://emkc.org/api/v2/piston'

// Language version mappings for Piston API
const LANGUAGE_VERSIONS = {
  python: '3.10.0',
  javascript: '18.15.0',
  typescript: '5.0.3',
  java: '15.0.2',
  csharp: '6.12.0',
  c: '10.2.0',
  cpp: '10.2.0',
  go: '1.16.2',
  rust: '1.68.2',
  ruby: '3.0.1',
  php: '8.2.3',
  perl: '5.36.0',
  swift: '5.3.3',
  kotlin: '1.8.20',
  scala: '3.2.2',
  r: '4.1.1',
  lua: '5.4.4',
  bash: '5.2.0',
  haskell: '9.0.1'
}

// Language name mappings (Piston uses lowercase names)
const LANGUAGE_NAMES = {
  csharp: 'csharp',
  cpp: 'c++',
  c: 'c'
}

/**
 * Get the main file name for a language
 */
function getMainFileName(language) {
  const fileNames = {
    python: 'main.py',
    javascript: 'index.js',
    typescript: 'index.ts',
    java: 'Main.java',
    csharp: 'Program.cs',
    c: 'main.c',
    cpp: 'main.cpp',
    go: 'main.go',
    rust: 'main.rs',
    ruby: 'main.rb',
    php: 'index.php',
    perl: 'main.pl',
    swift: 'main.swift',
    kotlin: 'Main.kt',
    scala: 'Main.scala',
    r: 'main.r',
    lua: 'main.lua',
    bash: 'main.sh',
    haskell: 'Main.hs'
  }
  return fileNames[language] || 'main.txt'
}

/**
 * Make HTTP request
 */
function makeRequest(url, method, data = null) {
  return new Promise((resolve, reject) => {
    const parsedUrl = new URL(url)
    const protocol = parsedUrl.protocol === 'https:' ? https : http

    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || (parsedUrl.protocol === 'https:' ? 443 : 80),
      path: parsedUrl.pathname + parsedUrl.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }

    const req = protocol.request(options, (res) => {
      let body = ''

      res.on('data', (chunk) => {
        body += chunk
      })

      res.on('end', () => {
        try {
          const result = JSON.parse(body)
          if (res.statusCode >= 200 && res.statusCode < 300) {
            resolve(result)
          } else {
            reject(new Error(result.message || `HTTP ${res.statusCode}`))
          }
        } catch (e) {
          reject(new Error('Invalid JSON response'))
        }
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.setTimeout(60000, () => {
      req.destroy()
      reject(new Error('Request timeout'))
    })

    if (data) {
      req.write(JSON.stringify(data))
    }

    req.end()
  })
}

/**
 * Execute code using Piston API
 * @param {string} language - Programming language
 * @param {string} code - Code to execute
 * @param {Array} files - Additional files
 * @param {string} stdin - Standard input
 * @returns {Promise<Object>} Execution result
 */
export async function executeCode(language, code, files = [], stdin = '') {
  const langName = LANGUAGE_NAMES[language] || language
  const version = LANGUAGE_VERSIONS[language] || '*'

  // Prepare the main file
  const mainFileName = getMainFileName(language)
  const pistonFiles = [
    {
      name: mainFileName,
      content: code
    },
    // Add additional files if provided
    ...files.filter(f => f.name !== mainFileName).map(f => ({
      name: f.name,
      content: f.content
    }))
  ]

  const payload = {
    language: langName,
    version: version,
    files: pistonFiles,
    stdin: stdin,
    args: [],
    compile_timeout: 10000,
    run_timeout: 30000,
    compile_memory_limit: -1,
    run_memory_limit: -1
  }

  try {
    const result = await makeRequest(`${PISTON_URL}/execute`, 'POST', payload)
    return {
      stdout: result.run?.stdout || '',
      stderr: result.run?.stderr || '',
      compile_output: result.compile?.output || '',
      exit_code: result.run?.code || 0,
      signal: result.run?.signal || null,
      error: result.run?.stderr ? null : null
    }
  } catch (error) {
    return {
      stdout: '',
      stderr: '',
      error: error.message,
      exit_code: 1
    }
  }
}

/**
 * Get available runtimes from Piston
 * @returns {Promise<Array>} List of available runtimes
 */
export async function getRuntimes() {
  try {
    const result = await makeRequest(`${PISTON_URL}/runtimes`, 'GET')
    return result
  } catch (error) {
    console.error('Failed to fetch runtimes:', error)
    return []
  }
}

export { getMainFileName, LANGUAGE_VERSIONS }

export default {
  executeCode,
  getRuntimes,
  getMainFileName,
  LANGUAGE_VERSIONS
}
