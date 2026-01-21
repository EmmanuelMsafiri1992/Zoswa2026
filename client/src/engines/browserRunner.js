/**
 * Browser-based JavaScript/TypeScript execution engine
 */

/**
 * Execute JavaScript in the browser
 */
export async function executeInBrowser(code, language = 'javascript') {
  let output = ''
  const logs = []

  // Create a sandboxed environment
  const sandbox = {
    console: {
      log: (...args) => {
        const line = args.map(formatArg).join(' ')
        logs.push(line)
        output += line + '\n'
      },
      error: (...args) => {
        const line = '\x1b[31m' + args.map(formatArg).join(' ') + '\x1b[0m'
        logs.push(line)
        output += line + '\n'
      },
      warn: (...args) => {
        const line = '\x1b[33m' + args.map(formatArg).join(' ') + '\x1b[0m'
        logs.push(line)
        output += line + '\n'
      },
      info: (...args) => {
        const line = '\x1b[36m' + args.map(formatArg).join(' ') + '\x1b[0m'
        logs.push(line)
        output += line + '\n'
      },
      table: (data) => {
        if (Array.isArray(data)) {
          logs.push(formatTable(data))
          output += formatTable(data) + '\n'
        } else {
          sandbox.console.log(data)
        }
      },
      clear: () => {
        logs.length = 0
        output = ''
      },
      time: (label = 'default') => {
        sandbox._timers = sandbox._timers || {}
        sandbox._timers[label] = performance.now()
      },
      timeEnd: (label = 'default') => {
        if (sandbox._timers && sandbox._timers[label]) {
          const duration = performance.now() - sandbox._timers[label]
          sandbox.console.log(`${label}: ${duration.toFixed(2)}ms`)
          delete sandbox._timers[label]
        }
      }
    },
    setTimeout,
    setInterval,
    clearTimeout,
    clearInterval,
    Promise,
    Array,
    Object,
    String,
    Number,
    Boolean,
    Date,
    Math,
    JSON,
    Map,
    Set,
    WeakMap,
    WeakSet,
    Symbol,
    Proxy,
    Reflect,
    Error,
    TypeError,
    ReferenceError,
    SyntaxError,
    RangeError,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    encodeURI,
    decodeURI,
    encodeURIComponent,
    decodeURIComponent,
    atob,
    btoa,
    _timers: {}
  }

  try {
    // Handle TypeScript (basic transpilation for simple cases)
    let execCode = code
    if (language === 'typescript') {
      execCode = transpileTypeScript(code)
    }

    // Wrap code in async function to support top-level await
    const wrappedCode = `
      (async () => {
        ${execCode}
      })()
    `

    // Create function with sandbox context
    const fn = new Function(
      ...Object.keys(sandbox),
      `
        "use strict";
        return ${wrappedCode};
      `
    )

    // Execute with timeout
    const result = await Promise.race([
      fn(...Object.values(sandbox)),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Execution timeout (30s)')), 30000)
      )
    ])

    // If there's a return value and no output, show it
    if (result !== undefined && output === '') {
      output = formatArg(result) + '\n'
    }

    if (!output) {
      output = '\x1b[90mProgram finished with no output.\x1b[0m\n'
    }

    return {
      output,
      error: false,
      type: 'console'
    }
  } catch (error) {
    output += `\x1b[31m${error.name}: ${error.message}\x1b[0m\n`

    // Try to extract line number from error
    const match = error.stack?.match(/<anonymous>:(\d+):(\d+)/)
    if (match) {
      const line = parseInt(match[1]) - 3 // Adjust for wrapper
      output += `\x1b[90m    at line ${line}\x1b[0m\n`
    }

    return {
      output,
      error: true,
      type: 'console'
    }
  }
}

/**
 * Format argument for console output
 */
function formatArg(arg) {
  if (arg === undefined) return 'undefined'
  if (arg === null) return 'null'

  if (typeof arg === 'object') {
    try {
      if (Array.isArray(arg)) {
        return JSON.stringify(arg)
      }
      if (arg instanceof Error) {
        return `${arg.name}: ${arg.message}`
      }
      if (arg instanceof Date) {
        return arg.toISOString()
      }
      if (arg instanceof Map) {
        return `Map(${arg.size}) { ${[...arg.entries()].map(([k, v]) => `${formatArg(k)} => ${formatArg(v)}`).join(', ')} }`
      }
      if (arg instanceof Set) {
        return `Set(${arg.size}) { ${[...arg].map(formatArg).join(', ')} }`
      }
      return JSON.stringify(arg, null, 2)
    } catch {
      return String(arg)
    }
  }

  if (typeof arg === 'function') {
    return `[Function: ${arg.name || 'anonymous'}]`
  }

  if (typeof arg === 'symbol') {
    return arg.toString()
  }

  return String(arg)
}

/**
 * Format array as table
 */
function formatTable(data) {
  if (!Array.isArray(data) || data.length === 0) return ''

  const isArrayOfObjects = typeof data[0] === 'object' && data[0] !== null && !Array.isArray(data[0])

  if (isArrayOfObjects) {
    const keys = [...new Set(data.flatMap(Object.keys))]
    const rows = data.map(item => keys.map(k => formatArg(item[k])))
    return formatTableData(keys, rows)
  }

  // Array of arrays or primitives
  const rows = data.map((item, i) => [i, formatArg(item)])
  return formatTableData(['(index)', 'Value'], rows)
}

/**
 * Format table data
 */
function formatTableData(headers, rows) {
  const widths = headers.map((h, i) =>
    Math.max(String(h).length, ...rows.map(r => String(r[i] || '').length))
  )

  const border = widths.map(w => '─'.repeat(w + 2)).join('┼')
  const headerRow = headers.map((h, i) => ` ${String(h).padEnd(widths[i])} `).join('│')

  let output = '┌' + border.replace(/┼/g, '┬') + '┐\n'
  output += '│' + headerRow + '│\n'
  output += '├' + border + '┤\n'

  for (const row of rows) {
    const rowStr = row.map((cell, i) => ` ${String(cell || '').padEnd(widths[i])} `).join('│')
    output += '│' + rowStr + '│\n'
  }

  output += '└' + border.replace(/┼/g, '┴') + '┘'
  return output
}

/**
 * Basic TypeScript to JavaScript transpilation
 * For a real implementation, use TypeScript compiler or esbuild
 */
function transpileTypeScript(code) {
  // Remove type annotations (basic regex-based approach)
  let result = code

  // Remove interface declarations
  result = result.replace(/interface\s+\w+\s*\{[^}]*\}/g, '')

  // Remove type declarations
  result = result.replace(/type\s+\w+\s*=\s*[^;]+;/g, '')

  // Remove type annotations from variables
  result = result.replace(/:\s*(string|number|boolean|any|void|null|undefined|object|\w+(\[\])?)\s*([=,;\)])/g, '$3')

  // Remove type annotations from function parameters and return types
  result = result.replace(/\):\s*(string|number|boolean|any|void|null|undefined|object|\w+(\[\])?)\s*{/g, ') {')
  result = result.replace(/(\w+)\s*:\s*(string|number|boolean|any|void|null|undefined|object|\w+(\[\])?)\s*([,)])/g, '$1$4')

  // Remove generic type parameters
  result = result.replace(/<[^>]+>/g, '')

  // Remove 'as' type assertions
  result = result.replace(/\s+as\s+\w+(\[\])?/g, '')

  // Remove 'public', 'private', 'protected' modifiers
  result = result.replace(/\b(public|private|protected)\s+/g, '')

  // Remove 'readonly' modifier
  result = result.replace(/\breadonly\s+/g, '')

  return result
}

export default executeInBrowser
