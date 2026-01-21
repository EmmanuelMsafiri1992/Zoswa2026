import { useState, useRef, useEffect, useMemo } from 'react'
import { RefreshCw, Smartphone, Tablet, Monitor, ExternalLink, X } from 'lucide-react'
import { useIdeStore } from '../../store/ideStore'

export default function LivePreview({ files }) {
  const iframeRef = useRef(null)
  const [viewport, setViewport] = useState('desktop')
  const [key, setKey] = useState(0)
  const { setShowPreview } = useIdeStore()

  const viewports = {
    mobile: { width: 375, label: 'Mobile' },
    tablet: { width: 768, label: 'Tablet' },
    desktop: { width: '100%', label: 'Desktop' }
  }

  // Build HTML content from files
  const htmlContent = useMemo(() => {
    const htmlFile = files.find(f => f.path.endsWith('.html'))
    const cssFile = files.find(f => f.path.endsWith('.css'))
    const jsFile = files.find(f => f.path.endsWith('.js') && !f.path.endsWith('.json'))

    if (!htmlFile) {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: system-ui, sans-serif;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              margin: 0;
              background: #1a1a2e;
              color: #888;
            }
          </style>
        </head>
        <body>
          <div>
            <p>No HTML file found.</p>
            <p>Create an index.html file to see the preview.</p>
          </div>
        </body>
        </html>
      `
    }

    let html = htmlFile.content

    // Inject CSS if exists and not already linked
    if (cssFile && !html.includes(cssFile.path)) {
      const cssTag = `<style>\n${cssFile.content}\n</style>`
      if (html.includes('</head>')) {
        html = html.replace('</head>', `${cssTag}\n</head>`)
      } else if (html.includes('<body')) {
        html = html.replace('<body', `${cssTag}\n<body`)
      }
    }

    // Inject JS if exists and not already included
    if (jsFile && !html.includes(jsFile.path)) {
      const jsTag = `<script>\n${jsFile.content}\n</script>`
      if (html.includes('</body>')) {
        html = html.replace('</body>', `${jsTag}\n</body>`)
      } else {
        html += jsTag
      }
    }

    // Add console capture script
    const consoleCapture = `
      <script>
        (function() {
          const originalConsole = {
            log: console.log,
            error: console.error,
            warn: console.warn,
            info: console.info
          };

          function sendToParent(type, args) {
            try {
              parent.postMessage({
                type: 'console',
                method: type,
                args: Array.from(args).map(arg => {
                  try {
                    return typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg);
                  } catch (e) {
                    return String(arg);
                  }
                })
              }, '*');
            } catch (e) {}
          }

          console.log = function() { sendToParent('log', arguments); originalConsole.log.apply(console, arguments); };
          console.error = function() { sendToParent('error', arguments); originalConsole.error.apply(console, arguments); };
          console.warn = function() { sendToParent('warn', arguments); originalConsole.warn.apply(console, arguments); };
          console.info = function() { sendToParent('info', arguments); originalConsole.info.apply(console, arguments); };

          window.onerror = function(msg, url, line, col, error) {
            sendToParent('error', [msg + ' (line ' + line + ')']);
          };
        })();
      </script>
    `

    if (html.includes('<head>')) {
      html = html.replace('<head>', `<head>\n${consoleCapture}`)
    } else {
      html = consoleCapture + html
    }

    return html
  }, [files])

  // Handle messages from iframe
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data?.type === 'console') {
        const { method, args } = event.data
        const prefix = method === 'error' ? '\x1b[31m[error]\x1b[0m ' :
                      method === 'warn' ? '\x1b[33m[warn]\x1b[0m ' :
                      method === 'info' ? '\x1b[34m[info]\x1b[0m ' : ''

        // Forward to IDE output
        const { appendOutput } = useIdeStore.getState()
        appendOutput(prefix + args.join(' ') + '\n')
      }
    }

    window.addEventListener('message', handleMessage)
    return () => window.removeEventListener('message', handleMessage)
  }, [])

  // Refresh preview
  const refresh = () => {
    setKey(k => k + 1)
  }

  // Open in new tab
  const openInNewTab = () => {
    const blob = new Blob([htmlContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    window.open(url, '_blank')
  }

  return (
    <div className="h-full flex flex-col bg-dark-800">
      {/* Preview Toolbar */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-dark-700 bg-dark-900">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Preview</span>
        </div>

        <div className="flex items-center gap-1">
          {/* Viewport Switcher */}
          <div className="flex items-center bg-dark-700 rounded p-0.5">
            <button
              className={`p-1.5 rounded ${viewport === 'mobile' ? 'bg-dark-600 text-neon-cyan' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setViewport('mobile')}
              title="Mobile"
            >
              <Smartphone size={14} />
            </button>
            <button
              className={`p-1.5 rounded ${viewport === 'tablet' ? 'bg-dark-600 text-neon-cyan' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setViewport('tablet')}
              title="Tablet"
            >
              <Tablet size={14} />
            </button>
            <button
              className={`p-1.5 rounded ${viewport === 'desktop' ? 'bg-dark-600 text-neon-cyan' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setViewport('desktop')}
              title="Desktop"
            >
              <Monitor size={14} />
            </button>
          </div>

          <button
            className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-dark-700"
            onClick={refresh}
            title="Refresh"
          >
            <RefreshCw size={14} />
          </button>

          <button
            className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-dark-700"
            onClick={openInNewTab}
            title="Open in new tab"
          >
            <ExternalLink size={14} />
          </button>

          <button
            className="p-1.5 text-gray-400 hover:text-neon-pink rounded hover:bg-dark-700"
            onClick={() => setShowPreview(false)}
            title="Close preview"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Preview Frame */}
      <div className="flex-1 overflow-hidden bg-white flex items-center justify-center">
        <div
          className="h-full transition-all duration-300"
          style={{
            width: viewports[viewport].width,
            maxWidth: '100%'
          }}
        >
          <iframe
            key={key}
            ref={iframeRef}
            srcDoc={htmlContent}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-modals allow-forms allow-same-origin"
            title="Preview"
          />
        </div>
      </div>

      {/* Viewport Label */}
      {viewport !== 'desktop' && (
        <div className="text-center py-1 text-xs text-gray-500 bg-dark-900 border-t border-dark-700">
          {viewports[viewport].width}px ({viewports[viewport].label})
        </div>
      )}
    </div>
  )
}
