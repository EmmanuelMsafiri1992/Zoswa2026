/**
 * Python execution engine using Pyodide (WebAssembly)
 */

let pyodide = null
let pyodideLoading = null

/**
 * Load Pyodide runtime
 */
async function loadPyodideRuntime() {
  if (pyodide) return pyodide

  if (pyodideLoading) {
    return await pyodideLoading
  }

  pyodideLoading = (async () => {
    try {
      // Load Pyodide from CDN
      if (!window.loadPyodide) {
        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js'
        document.head.appendChild(script)

        await new Promise((resolve, reject) => {
          script.onload = resolve
          script.onerror = reject
        })
      }

      pyodide = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.0/full/'
      })

      // Set up stdout/stderr capture
      await pyodide.runPythonAsync(`
import sys
from io import StringIO

class OutputCapture:
    def __init__(self):
        self.stdout = StringIO()
        self.stderr = StringIO()
        self._original_stdout = sys.stdout
        self._original_stderr = sys.stderr

    def start(self):
        sys.stdout = self.stdout
        sys.stderr = self.stderr

    def stop(self):
        sys.stdout = self._original_stdout
        sys.stderr = self._original_stderr

    def get_output(self):
        return self.stdout.getvalue(), self.stderr.getvalue()

    def clear(self):
        self.stdout = StringIO()
        self.stderr = StringIO()
        sys.stdout = self.stdout
        sys.stderr = self.stderr

_output_capture = OutputCapture()
      `)

      return pyodide
    } catch (error) {
      pyodideLoading = null
      throw error
    }
  })()

  return await pyodideLoading
}

/**
 * Execute Python code
 */
export async function executePython(code) {
  let output = ''

  try {
    // Add loading message
    output = '\x1b[36mLoading Python runtime...\x1b[0m\n'

    const py = await loadPyodideRuntime()

    output = ''

    // Clear previous output
    await py.runPythonAsync('_output_capture.clear()')

    // Start capturing
    await py.runPythonAsync('_output_capture.start()')

    try {
      // Execute user code
      await py.runPythonAsync(code)
    } catch (execError) {
      // Get any output that was produced before the error
      const [stdout, stderr] = await py.runPythonAsync('_output_capture.get_output()').toJs()
      if (stdout) output += stdout
      if (stderr) output += `\x1b[31m${stderr}\x1b[0m`

      // Add the error message
      output += `\x1b[31m${execError.message}\x1b[0m\n`

      await py.runPythonAsync('_output_capture.stop()')

      return {
        output,
        error: true,
        type: 'console'
      }
    }

    // Stop capturing and get output
    await py.runPythonAsync('_output_capture.stop()')
    const [stdout, stderr] = (await py.runPythonAsync('_output_capture.get_output()')).toJs()

    if (stdout) output += stdout
    if (stderr) output += `\x1b[31m${stderr}\x1b[0m`

    if (!output) {
      output = '\x1b[90mProgram finished with no output.\x1b[0m\n'
    }

    return {
      output,
      error: false,
      type: 'console'
    }
  } catch (error) {
    return {
      output: `\x1b[31mPython Error:\x1b[0m ${error.message}\n`,
      error: true,
      type: 'console'
    }
  }
}

/**
 * Install a Python package using micropip
 */
export async function installPackage(packageName) {
  try {
    const py = await loadPyodideRuntime()
    await py.loadPackage('micropip')
    const micropip = py.pyimport('micropip')
    await micropip.install(packageName)
    return { success: true, message: `Installed ${packageName}` }
  } catch (error) {
    return { success: false, message: error.message }
  }
}

/**
 * Check if Pyodide is loaded
 */
export function isPyodideLoaded() {
  return pyodide !== null
}

export default executePython
