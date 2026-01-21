import { useEffect, useRef, useState } from 'react'
import { Terminal as XTerm } from '@xterm/xterm'
import { FitAddon } from '@xterm/addon-fit'
import { WebLinksAddon } from '@xterm/addon-web-links'
import '@xterm/xterm/css/xterm.css'

import { useIdeStore } from '../../store/ideStore'

export default function Terminal() {
  const terminalRef = useRef(null)
  const xtermRef = useRef(null)
  const fitAddonRef = useRef(null)
  const [history, setHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [currentLine, setCurrentLine] = useState('')

  const { terminalHistory, addTerminalOutput, clearTerminal } = useIdeStore()

  useEffect(() => {
    if (!terminalRef.current || xtermRef.current) return

    // Create terminal instance
    const term = new XTerm({
      theme: {
        background: '#0a0a0f',
        foreground: '#d4d4d4',
        cursor: '#00fff5',
        cursorAccent: '#0a0a0f',
        selectionBackground: '#264f78',
        black: '#1e1e2e',
        red: '#ff0080',
        green: '#00ff88',
        yellow: '#ffff00',
        blue: '#00fff5',
        magenta: '#bf00ff',
        cyan: '#00fff5',
        white: '#d4d4d4',
        brightBlack: '#6c7086',
        brightRed: '#ff5c8d',
        brightGreen: '#5eff9b',
        brightYellow: '#ffff66',
        brightBlue: '#5cffff',
        brightMagenta: '#d15cff',
        brightCyan: '#5cffff',
        brightWhite: '#ffffff'
      },
      fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
      fontSize: 14,
      lineHeight: 1.2,
      cursorBlink: true,
      cursorStyle: 'bar',
      scrollback: 1000,
      convertEol: true
    })

    // Add addons
    const fitAddon = new FitAddon()
    const webLinksAddon = new WebLinksAddon()

    term.loadAddon(fitAddon)
    term.loadAddon(webLinksAddon)

    // Open terminal
    term.open(terminalRef.current)
    fitAddon.fit()

    xtermRef.current = term
    fitAddonRef.current = fitAddon

    // Welcome message
    term.writeln('\x1b[36m╔══════════════════════════════════════════╗\x1b[0m')
    term.writeln('\x1b[36m║\x1b[0m   \x1b[1;33mZoswa IDE Terminal\x1b[0m                     \x1b[36m║\x1b[0m')
    term.writeln('\x1b[36m║\x1b[0m   Type \x1b[32mhelp\x1b[0m for available commands         \x1b[36m║\x1b[0m')
    term.writeln('\x1b[36m╚══════════════════════════════════════════╝\x1b[0m')
    term.writeln('')
    writePrompt(term)

    // Handle input
    let currentInput = ''

    term.onKey(({ key, domEvent }) => {
      const printable = !domEvent.altKey && !domEvent.ctrlKey && !domEvent.metaKey

      // Handle Ctrl+C
      if (domEvent.ctrlKey && domEvent.key === 'c') {
        term.writeln('^C')
        currentInput = ''
        writePrompt(term)
        return
      }

      // Handle Ctrl+L (clear)
      if (domEvent.ctrlKey && domEvent.key === 'l') {
        term.clear()
        writePrompt(term)
        return
      }

      // Handle Enter
      if (domEvent.key === 'Enter') {
        term.writeln('')
        if (currentInput.trim()) {
          handleCommand(term, currentInput.trim())
          setHistory(prev => [...prev, currentInput.trim()])
          setHistoryIndex(-1)
        } else {
          writePrompt(term)
        }
        currentInput = ''
        return
      }

      // Handle Backspace
      if (domEvent.key === 'Backspace') {
        if (currentInput.length > 0) {
          currentInput = currentInput.slice(0, -1)
          term.write('\b \b')
        }
        return
      }

      // Handle arrow keys for history
      if (domEvent.key === 'ArrowUp') {
        if (history.length > 0) {
          const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1)
          setHistoryIndex(newIndex)
          clearLine(term, currentInput)
          currentInput = history[newIndex]
          term.write(currentInput)
        }
        return
      }

      if (domEvent.key === 'ArrowDown') {
        if (historyIndex !== -1) {
          const newIndex = historyIndex + 1
          clearLine(term, currentInput)
          if (newIndex >= history.length) {
            setHistoryIndex(-1)
            currentInput = ''
          } else {
            setHistoryIndex(newIndex)
            currentInput = history[newIndex]
            term.write(currentInput)
          }
        }
        return
      }

      // Handle printable characters
      if (printable) {
        currentInput += key
        term.write(key)
      }
    })

    // Handle paste
    term.onData((data) => {
      if (data.length > 1) {
        currentInput += data
        term.write(data)
      }
    })

    // Handle resize
    const resizeObserver = new ResizeObserver(() => {
      if (fitAddonRef.current) {
        try {
          fitAddonRef.current.fit()
        } catch (e) {
          // Ignore resize errors
        }
      }
    })
    resizeObserver.observe(terminalRef.current)

    return () => {
      resizeObserver.disconnect()
      term.dispose()
      xtermRef.current = null
    }
  }, [])

  // Write prompt
  const writePrompt = (term) => {
    term.write('\x1b[32m➜\x1b[0m \x1b[36mzoswa\x1b[0m $ ')
  }

  // Clear current line
  const clearLine = (term, line) => {
    for (let i = 0; i < line.length; i++) {
      term.write('\b \b')
    }
  }

  // Handle commands
  const handleCommand = (term, command) => {
    const [cmd, ...args] = command.split(' ')

    switch (cmd.toLowerCase()) {
      case 'help':
        term.writeln('\x1b[33mAvailable commands:\x1b[0m')
        term.writeln('  \x1b[32mhelp\x1b[0m      - Show this help message')
        term.writeln('  \x1b[32mclear\x1b[0m     - Clear the terminal')
        term.writeln('  \x1b[32mls\x1b[0m        - List files in project')
        term.writeln('  \x1b[32mcat\x1b[0m <file> - Display file contents')
        term.writeln('  \x1b[32mecho\x1b[0m      - Print text')
        term.writeln('  \x1b[32mdate\x1b[0m      - Show current date/time')
        term.writeln('  \x1b[32mwhoami\x1b[0m    - Show current user')
        term.writeln('  \x1b[32mversion\x1b[0m   - Show IDE version')
        term.writeln('')
        term.writeln('\x1b[90mNote: This is a simulated terminal.\x1b[0m')
        term.writeln('\x1b[90mCode execution uses the Run button.\x1b[0m')
        break

      case 'clear':
        term.clear()
        break

      case 'ls':
        const { files } = useIdeStore.getState()
        if (files.length === 0) {
          term.writeln('\x1b[90m(empty)\x1b[0m')
        } else {
          files.forEach(f => {
            term.writeln(`  \x1b[36m${f.path}\x1b[0m`)
          })
        }
        break

      case 'cat':
        if (args.length === 0) {
          term.writeln('\x1b[31mUsage: cat <filename>\x1b[0m')
        } else {
          const { files: projectFiles } = useIdeStore.getState()
          const file = projectFiles.find(f => f.path === args[0] || f.path.endsWith(args[0]))
          if (file) {
            term.writeln(file.content)
          } else {
            term.writeln(`\x1b[31mFile not found: ${args[0]}\x1b[0m`)
          }
        }
        break

      case 'echo':
        term.writeln(args.join(' '))
        break

      case 'date':
        term.writeln(new Date().toString())
        break

      case 'whoami':
        term.writeln('zoswa-user')
        break

      case 'version':
        term.writeln('Zoswa IDE v1.0.0')
        break

      case 'pwd':
        term.writeln('/workspace')
        break

      default:
        term.writeln(`\x1b[31mCommand not found: ${cmd}\x1b[0m`)
        term.writeln('\x1b[90mType "help" for available commands.\x1b[0m')
    }

    writePrompt(term)
    addTerminalOutput(`$ ${command}`)
  }

  return (
    <div className="h-full w-full bg-dark-900 p-2">
      <div ref={terminalRef} className="h-full w-full" />
    </div>
  )
}
