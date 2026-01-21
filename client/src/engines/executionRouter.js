import { languageConfig } from '../store/ideStore'
import { executePython } from './pyodide'
import { executeSQL } from './sqlEngine'
import { executeInBrowser } from './browserRunner'
import api from '../services/api'

/**
 * Main execution router that directs code to the appropriate engine
 */
export async function executeCode(language, code, files = []) {
  const config = languageConfig[language]

  if (!config) {
    return {
      output: `Unknown language: ${language}\n`,
      error: true,
      type: 'console'
    }
  }

  const engine = config.engine

  try {
    switch (engine) {
      case 'pyodide':
        return await executePython(code)

      case 'sql':
        return await executeSQL(code)

      case 'browser':
        return await executeInBrowser(code, language)

      case 'iframe':
        // HTML/CSS preview - handled by LivePreview component
        return {
          output: 'Preview updated',
          type: 'preview'
        }

      case 'piston':
        return await executeOnServer(language, code, files)

      case 'none':
        return {
          output: `${config.name} files cannot be executed directly.\n`,
          error: false,
          type: 'console'
        }

      default:
        return {
          output: `No execution engine configured for ${config.name}\n`,
          error: true,
          type: 'console'
        }
    }
  } catch (error) {
    return {
      output: `Execution error: ${error.message}\n`,
      error: true,
      type: 'console'
    }
  }
}

/**
 * Execute code on server via Piston API
 */
async function executeOnServer(language, code, files) {
  try {
    const response = await api.post('/execute', {
      language,
      code,
      files: files.map(f => ({ name: f.path, content: f.content }))
    })

    const { data } = response

    if (data.error) {
      return {
        output: `\x1b[31mError:\x1b[0m ${data.error}\n${data.stderr || ''}`,
        error: true,
        type: 'console'
      }
    }

    let output = ''
    if (data.stdout) output += data.stdout
    if (data.stderr) output += `\x1b[31m${data.stderr}\x1b[0m`
    if (data.compile_output) output += `\x1b[33mCompiler:\x1b[0m ${data.compile_output}\n`

    return {
      output: output || 'Program finished with no output.\n',
      error: false,
      type: 'console'
    }
  } catch (error) {
    // If server execution fails, try fallback
    console.error('Server execution failed:', error)

    return {
      output: `\x1b[31mServer execution failed.\x1b[0m\n${error.response?.data?.message || error.message}\n\nTip: The server may be unavailable. Some languages require server-side execution.\n`,
      error: true,
      type: 'console'
    }
  }
}

/**
 * Get supported languages and their execution locations
 */
export function getSupportedLanguages() {
  const browser = []
  const server = []

  Object.entries(languageConfig).forEach(([key, config]) => {
    const lang = { id: key, ...config }
    if (['pyodide', 'sql', 'browser', 'iframe'].includes(config.engine)) {
      browser.push(lang)
    } else if (config.engine === 'piston') {
      server.push(lang)
    }
  })

  return { browser, server }
}

export default executeCode
