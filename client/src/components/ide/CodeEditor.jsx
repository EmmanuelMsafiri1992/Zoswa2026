import { useRef, useEffect, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import { useIdeStore, getMonacoLanguage } from '../../store/ideStore'

export default function CodeEditor({ value, language, onChange }) {
  const editorRef = useRef(null)
  const { theme, fontSize, tabSize, wordWrap, minimap } = useIdeStore()

  // Configure Monaco options
  const options = {
    fontSize,
    tabSize,
    wordWrap,
    minimap: { enabled: minimap },
    automaticLayout: true,
    scrollBeyondLastLine: false,
    lineNumbers: 'on',
    roundedSelection: true,
    cursorBlinking: 'smooth',
    cursorSmoothCaretAnimation: 'on',
    smoothScrolling: true,
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace",
    fontLigatures: true,
    renderLineHighlight: 'all',
    bracketPairColorization: { enabled: true },
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoIndent: 'full',
    formatOnPaste: true,
    formatOnType: true,
    suggestOnTriggerCharacters: true,
    quickSuggestions: true,
    parameterHints: { enabled: true },
    folding: true,
    foldingHighlight: true,
    showFoldingControls: 'mouseover',
    matchBrackets: 'always',
    selectionHighlight: true,
    occurrencesHighlight: 'singleFile',
    codeLens: true,
    links: true,
    colorDecorators: true,
    contextmenu: true,
    mouseWheelZoom: true,
    renderWhitespace: 'selection',
    guides: {
      indentation: true,
      bracketPairs: true
    }
  }

  // Handle editor mount
  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor

    // Configure Monaco editor themes
    monaco.editor.defineTheme('zoswa-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6A9955' },
        { token: 'keyword', foreground: 'C586C0' },
        { token: 'string', foreground: 'CE9178' },
        { token: 'number', foreground: 'B5CEA8' },
        { token: 'type', foreground: '4EC9B0' },
        { token: 'function', foreground: 'DCDCAA' },
        { token: 'variable', foreground: '9CDCFE' },
        { token: 'constant', foreground: '4FC1FF' }
      ],
      colors: {
        'editor.background': '#12121a',
        'editor.foreground': '#d4d4d4',
        'editor.lineHighlightBackground': '#1a1a25',
        'editor.selectionBackground': '#264f78',
        'editor.inactiveSelectionBackground': '#3a3d41',
        'editorCursor.foreground': '#00fff5',
        'editorLineNumber.foreground': '#858585',
        'editorLineNumber.activeForeground': '#00fff5',
        'editor.selectionHighlightBackground': '#add6ff26',
        'editorBracketMatch.background': '#0064001a',
        'editorBracketMatch.border': '#00fff5',
        'editorIndentGuide.background': '#404040',
        'editorIndentGuide.activeBackground': '#707070',
        'editorWidget.background': '#1a1a25',
        'editorWidget.border': '#252532',
        'editorSuggestWidget.background': '#1a1a25',
        'editorSuggestWidget.border': '#252532',
        'editorSuggestWidget.selectedBackground': '#252532',
        'editorHoverWidget.background': '#1a1a25',
        'editorHoverWidget.border': '#252532'
      }
    })

    // Apply custom theme if using dark theme
    if (theme === 'vs-dark') {
      monaco.editor.setTheme('zoswa-dark')
    }

    // Add keyboard shortcuts
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyS, () => {
      // Save is handled by parent
    })

    // Format document
    editor.addCommand(monaco.KeyMod.Shift | monaco.KeyMod.Alt | monaco.KeyCode.KeyF, () => {
      editor.getAction('editor.action.formatDocument')?.run()
    })

    // Focus the editor
    editor.focus()
  }

  // Handle value changes
  const handleChange = useCallback((newValue) => {
    if (onChange && newValue !== undefined) {
      onChange(newValue)
    }
  }, [onChange])

  // Get Monaco language mode
  const monacoLanguage = getMonacoLanguage(language)

  return (
    <Editor
      height="100%"
      language={monacoLanguage}
      value={value}
      theme={theme === 'vs-dark' ? 'zoswa-dark' : theme}
      onChange={handleChange}
      onMount={handleEditorDidMount}
      options={options}
      loading={
        <div className="h-full flex items-center justify-center bg-dark-800">
          <div className="flex items-center gap-3 text-gray-400">
            <div className="animate-spin w-5 h-5 border-2 border-neon-cyan border-t-transparent rounded-full" />
            <span>Loading editor...</span>
          </div>
        </div>
      }
    />
  )
}
