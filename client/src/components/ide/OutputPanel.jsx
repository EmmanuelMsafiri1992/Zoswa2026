import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Loader2, CheckCircle2, XCircle, Table } from 'lucide-react'

export default function OutputPanel({ output, outputType, sqlResults, isRunning }) {
  const outputRef = useRef(null)

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight
    }
  }, [output])

  // Render SQL results as table
  if (outputType === 'sql' && sqlResults) {
    return (
      <div className="h-full overflow-auto p-4">
        {sqlResults.map((result, idx) => (
          <div key={idx} className="mb-4">
            {result.error ? (
              <div className="text-neon-pink flex items-center gap-2">
                <XCircle size={16} />
                <span>{result.error}</span>
              </div>
            ) : result.columns && result.values ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-dark-700">
                      {result.columns.map((col, i) => (
                        <th key={i} className="border border-dark-600 px-3 py-2 text-left text-neon-cyan font-medium">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {result.values.map((row, rowIdx) => (
                      <tr key={rowIdx} className="hover:bg-dark-700/50">
                        {row.map((cell, cellIdx) => (
                          <td key={cellIdx} className="border border-dark-600 px-3 py-2 text-gray-300">
                            {cell === null ? (
                              <span className="text-gray-500 italic">NULL</span>
                            ) : (
                              String(cell)
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-2 text-xs text-gray-500">
                  {result.values.length} row{result.values.length !== 1 ? 's' : ''} returned
                </div>
              </div>
            ) : (
              <div className="text-neon-green flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>Query executed successfully</span>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Parse ANSI codes for colored output
  const parseAnsi = (text) => {
    const segments = []
    const regex = /\x1b\[(\d+)m/g
    let lastIndex = 0
    let currentColor = null
    let match

    while ((match = regex.exec(text)) !== null) {
      // Add text before this match
      if (match.index > lastIndex) {
        segments.push({
          text: text.slice(lastIndex, match.index),
          color: currentColor
        })
      }

      // Update color
      const code = parseInt(match[1])
      switch (code) {
        case 0:
          currentColor = null
          break
        case 31:
          currentColor = 'text-neon-pink'
          break
        case 32:
          currentColor = 'text-neon-green'
          break
        case 33:
          currentColor = 'text-neon-yellow'
          break
        case 34:
          currentColor = 'text-blue-400'
          break
        case 35:
          currentColor = 'text-neon-purple'
          break
        case 36:
          currentColor = 'text-neon-cyan'
          break
        case 90:
          currentColor = 'text-gray-500'
          break
      }

      lastIndex = regex.lastIndex
    }

    // Add remaining text
    if (lastIndex < text.length) {
      segments.push({
        text: text.slice(lastIndex),
        color: currentColor
      })
    }

    return segments
  }

  // Render console output
  return (
    <div
      ref={outputRef}
      className="h-full overflow-auto p-4 font-mono text-sm"
    >
      {isRunning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2 text-neon-cyan mb-2"
        >
          <Loader2 size={16} className="animate-spin" />
          <span>Running...</span>
        </motion.div>
      )}

      {output ? (
        <pre className="whitespace-pre-wrap break-words text-gray-300">
          {parseAnsi(output).map((segment, idx) => (
            <span key={idx} className={segment.color || ''}>
              {segment.text}
            </span>
          ))}
        </pre>
      ) : (
        !isRunning && (
          <div className="text-gray-500 flex flex-col items-center justify-center h-full">
            <Table size={32} className="mb-2 opacity-50" />
            <p>Output will appear here</p>
            <p className="text-xs mt-1">Press Ctrl+Enter or click Run to execute</p>
          </div>
        )
      )}
    </div>
  )
}
