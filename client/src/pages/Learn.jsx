import { useState, useEffect, useCallback, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Editor from '@monaco-editor/react'
import {
  ChevronLeft,
  ChevronRight,
  Play,
  RotateCcw,
  CheckCircle2,
  Lightbulb,
  Zap,
  BookOpen,
  X,
  Trophy,
  ArrowRight,
  Terminal,
  Eye,
  Loader2,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { useProgressStore } from '../store/progressStore'
import { courses, getAllLessons, getNextLesson } from '../data/courses'
import { executeCode } from '../engines/executionRouter'
import { languageConfig } from '../store/ideStore'
import toast from 'react-hot-toast'

// Lesson content database - maps lesson IDs to interactive content
const lessonContent = {
  'html-1': {
    language: 'html',
    steps: [
      {
        instruction: 'HTML (HyperText Markup Language) is the foundation of every website. Let\'s start with the DOCTYPE declaration.',
        task: 'Type `<!DOCTYPE html>` to declare this is an HTML5 document.',
        hint: 'The DOCTYPE must be the very first thing in your HTML file.',
        validation: { type: 'contains', value: '<!DOCTYPE html>' },
      },
    ],
    starterCode: '',
  },
  'html-2': {
    language: 'html',
    steps: [
      {
        instruction: 'Every HTML document needs a basic structure. The <html> tag wraps everything.',
        task: 'Add the `<html>` opening tag below the DOCTYPE.',
        hint: 'Type <html> on a new line.',
        validation: { type: 'contains', value: '<html>' },
      },
      {
        instruction: 'The <head> section contains metadata - information about your page.',
        task: 'Add `<head></head>` tags inside the html element.',
        hint: 'The head section goes between <html> and </html>.',
        validation: { type: 'contains', value: '<head>' },
      },
      {
        instruction: 'The <body> section contains everything visible on your page.',
        task: 'Add `<body></body>` tags after the head section.',
        hint: 'The body comes after </head>.',
        validation: { type: 'contains', value: '<body>' },
      },
    ],
    starterCode: '<!DOCTYPE html>\n',
  },
  'html-3': {
    language: 'html',
    steps: [
      {
        instruction: 'Headings organize your content. <h1> is the main heading (largest).',
        task: 'Add an `<h1>` element with the text "Welcome".',
        hint: 'Write <h1>Welcome</h1>',
        validation: { type: 'contains', value: '<h1>' },
      },
      {
        instruction: 'Paragraphs contain regular text content using the <p> tag.',
        task: 'Add a `<p>` element with some text below your heading.',
        hint: 'Write <p>Your text here</p>',
        validation: { type: 'contains', value: '<p>' },
      },
    ],
    starterCode: '<body>\n\n</body>',
  },
  'html-4': {
    language: 'html',
    steps: [
      {
        instruction: 'Links let users navigate to other pages. They use the <a> tag with an href attribute.',
        task: 'Create a link to google.com with the text "Visit Google".',
        hint: 'Use <a href="https://google.com">Visit Google</a>',
        validation: { type: 'contains', value: '<a href=' },
      },
      {
        instruction: 'Images display pictures on your page using the <img> tag.',
        task: 'Add an image tag with src="photo.jpg" and alt="A photo".',
        hint: 'Images are self-closing: <img src="photo.jpg" alt="A photo">',
        validation: { type: 'contains', value: '<img' },
      },
    ],
    starterCode: '<body>\n\n</body>',
  },
  'css-1': {
    language: 'css',
    steps: [
      {
        instruction: 'CSS rules style HTML elements. A rule starts with a selector (what to style) followed by curly braces.',
        task: 'Create a rule for the body element by typing `body {`',
        hint: 'The selector comes first, then opening brace.',
        validation: { type: 'contains', value: 'body {' },
      },
      {
        instruction: 'Properties define what styles to apply. Each ends with a semicolon.',
        task: 'Add `background-color: #1a1a2e;` inside the body rule.',
        hint: 'Property: value; - don\'t forget the semicolon!',
        validation: { type: 'contains', value: 'background-color' },
      },
      {
        instruction: 'Close the rule with a closing brace.',
        task: 'Add `}` to complete the CSS rule.',
        hint: 'Every { needs a matching }',
        validation: { type: 'contains', value: '}' },
      },
    ],
    starterCode: '',
  },
  'css-2': {
    language: 'css',
    steps: [
      {
        instruction: 'Colors can be set using names (red, blue), hex codes (#ff0000), or rgb().',
        task: 'Create a rule for h1 and set its color to #00fff5.',
        hint: 'h1 { color: #00fff5; }',
        validation: { type: 'contains', value: 'color:' },
      },
      {
        instruction: 'Background colors work the same way.',
        task: 'Add a dark background to the body element.',
        hint: 'body { background-color: #0a0a0f; }',
        validation: { type: 'contains', value: 'background' },
      },
    ],
    starterCode: '',
  },
  'js-1': {
    language: 'javascript',
    steps: [
      {
        instruction: 'JavaScript makes websites interactive. Let\'s start with a simple alert.',
        task: 'Type `alert("Hello World!");` to show a popup message.',
        hint: 'alert() shows a popup with your message.',
        validation: { type: 'contains', value: 'alert(' },
      },
    ],
    starterCode: '',
  },
  'js-2': {
    language: 'javascript',
    steps: [
      {
        instruction: 'Variables store data. Use `let` for values that can change.',
        task: 'Create a variable: `let name = "Your Name";`',
        hint: 'let variableName = value;',
        validation: { type: 'contains', value: 'let ' },
      },
      {
        instruction: 'Use `const` for values that never change.',
        task: 'Create a constant: `const age = 25;`',
        hint: 'const is for constants that don\'t change.',
        validation: { type: 'contains', value: 'const ' },
      },
      {
        instruction: 'console.log() outputs values to the console.',
        task: 'Print your name variable using console.log(name);',
        hint: 'console.log(variableName);',
        validation: { type: 'contains', value: 'console.log' },
      },
    ],
    starterCode: '// JavaScript Variables\n',
  },
}

// Default lesson content for lessons without specific content
const getDefaultLesson = (lesson) => ({
  language: lesson?.id?.startsWith('css') ? 'css' : lesson?.id?.startsWith('js') ? 'javascript' : 'html',
  steps: [
    {
      instruction: lesson?.description || 'Complete this interactive lesson by following the instructions.',
      task: 'Write your code in the editor and click "Check Answer" when ready.',
      hint: 'Follow the lesson instructions carefully.',
      validation: { type: 'contains', value: '' },
    },
  ],
  starterCode: '',
})

export default function Learn() {
  const { courseId, lessonId } = useParams()
  const navigate = useNavigate()
  const { completeLesson, addXp } = useProgressStore()

  // Get course and lesson data
  const course = courses[courseId]
  const allLessons = getAllLessons(courseId)
  const currentLessonMeta = allLessons.find(l => l.id === lessonId)
  const lessonData = lessonContent[lessonId] || getDefaultLesson(currentLessonMeta)

  const [currentStep, setCurrentStep] = useState(0)
  const [code, setCode] = useState(lessonData.starterCode)
  const [output, setOutput] = useState('')
  const [consoleOutput, setConsoleOutput] = useState('')
  const [showHint, setShowHint] = useState(false)
  const [stepCompleted, setStepCompleted] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [isRunning, setIsRunning] = useState(false)
  const [outputMode, setOutputMode] = useState('preview') // 'preview' | 'console'

  const currentStepData = lessonData.steps[currentStep]
  const isLastStep = currentStep === lessonData.steps.length - 1
  const allStepsCompleted = stepCompleted.length === lessonData.steps.length

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + Enter = Run code
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        runCode()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [code, lessonData.language, isRunning])

  // Validate current step
  const validateStep = useCallback(() => {
    const validation = currentStepData?.validation
    if (!validation || !validation.value) return true

    let isValid = false
    switch (validation.type) {
      case 'contains':
        isValid = code.toLowerCase().includes(validation.value.toLowerCase())
        break
      case 'exact':
        isValid = code.trim() === validation.value.trim()
        break
      case 'regex':
        isValid = new RegExp(validation.value).test(code)
        break
      default:
        isValid = code.length > 0
    }
    return isValid
  }, [code, currentStepData])

  // Get language mapping for execution
  const getExecutionLanguage = (lang) => {
    const langMap = {
      'html': 'html',
      'css': 'css',
      'javascript': 'javascript',
      'python': 'python',
      'java': 'java',
      'csharp': 'csharp',
      'php': 'php',
      'cpp': 'cpp',
      'c': 'c',
      'go': 'go',
      'rust': 'rust',
      'ruby': 'ruby',
      'sql': 'sql'
    }
    return langMap[lang] || lang
  }

  // Build preview content for HTML/CSS/JS
  const buildPreviewContent = useCallback(() => {
    const lang = lessonData.language

    if (lang === 'html') {
      // Check if it's a complete HTML document
      const hasDoctype = code.toLowerCase().includes('<!doctype') || code.toLowerCase().includes('<html')
      if (hasDoctype) {
        // Inject console capture for complete documents
        const consoleCapture = `
          <script>
            (function() {
              const logs = [];
              const methods = ['log', 'error', 'warn', 'info'];
              methods.forEach(method => {
                const original = console[method];
                console[method] = function() {
                  logs.push({type: method, args: Array.from(arguments).map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))});
                  parent.postMessage({type: 'console', logs: logs}, '*');
                  original.apply(console, arguments);
                };
              });
              window.onerror = function(msg, url, line) {
                logs.push({type: 'error', args: [msg + ' (line ' + line + ')']});
                parent.postMessage({type: 'console', logs: logs}, '*');
              };
            })();
          </script>
        `
        return code.replace(/<head>/i, '<head>' + consoleCapture)
      }
      return `<!DOCTYPE html>
<html><head>
<style>
  body { font-family: system-ui, sans-serif; padding: 20px; margin: 0; background: #fff; color: #1a1a2e; }
  * { box-sizing: border-box; }
</style>
<script>
  (function() {
    const logs = [];
    const methods = ['log', 'error', 'warn', 'info'];
    methods.forEach(method => {
      const original = console[method];
      console[method] = function() {
        logs.push({type: method, args: Array.from(arguments).map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))});
        parent.postMessage({type: 'console', logs: logs}, '*');
        original.apply(console, arguments);
      };
    });
    window.onerror = function(msg, url, line) {
      logs.push({type: 'error', args: [msg + ' (line ' + line + ')']});
      parent.postMessage({type: 'console', logs: logs}, '*');
    };
  })();
</script>
</head><body>${code}</body></html>`
    }

    if (lang === 'css') {
      return `<!DOCTYPE html>
<html><head>
<style>
  body { font-family: system-ui, sans-serif; padding: 20px; margin: 0; min-height: 100vh; }
  * { box-sizing: border-box; }
  ${code}
</style>
</head><body>
  <div class="preview-container">
    <header><h1>Sample Header</h1><nav><a href="#">Home</a> <a href="#">About</a> <a href="#">Contact</a></nav></header>
    <main>
      <article>
        <h2>Article Title</h2>
        <p>This is a sample paragraph to demonstrate your CSS styles. It contains some text that you can use to test typography styles.</p>
        <button class="btn">Sample Button</button>
        <div class="card">
          <h3>Card Component</h3>
          <p>This is a card that you can style with CSS.</p>
        </div>
      </article>
      <aside>
        <h3>Sidebar</h3>
        <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>
      </aside>
    </main>
    <footer><p>&copy; 2024 Zoswa Learning</p></footer>
  </div>
</body></html>`
    }

    if (lang === 'javascript') {
      return `<!DOCTYPE html>
<html><head>
<style>
  body { font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace; background: #1a1a25; color: #00ff88; padding: 20px; margin: 0; min-height: 100vh; }
  .console-line { margin: 4px 0; padding: 4px 8px; border-radius: 4px; }
  .console-line.log { color: #00ff88; }
  .console-line.error { color: #ff4444; background: rgba(255,68,68,0.1); }
  .console-line.warn { color: #ffaa00; background: rgba(255,170,0,0.1); }
  .console-line.info { color: #00aaff; }
  .console-line::before { content: '> '; opacity: 0.5; }
  .empty { color: #666; font-style: italic; }
</style>
</head><body>
<div id="console-output"></div>
<script>
  (function() {
    const output = document.getElementById('console-output');
    const logs = [];
    const methods = ['log', 'error', 'warn', 'info'];

    methods.forEach(method => {
      const original = console[method];
      console[method] = function() {
        const args = Array.from(arguments).map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a));
        logs.push({type: method, args: args});
        const div = document.createElement('div');
        div.className = 'console-line ' + method;
        div.textContent = args.join(' ');
        output.appendChild(div);
        parent.postMessage({type: 'console', logs: logs}, '*');
        original.apply(console, arguments);
      };
    });

    window.onerror = function(msg, url, line) {
      console.error(msg + ' (line ' + line + ')');
      return true;
    };
  })();

  try {
    ${code}
  } catch(e) {
    console.error(e.message);
  }

  if (document.getElementById('console-output').children.length === 0) {
    document.getElementById('console-output').innerHTML = '<div class="empty">Code executed successfully (no console output)</div>';
  }
</script>
</body></html>`
    }

    return ''
  }, [code, lessonData.language])

  // Run code using execution engines
  const runCode = async () => {
    if (isRunning) return

    setIsRunning(true)
    setConsoleOutput('')

    const lang = getExecutionLanguage(lessonData.language)
    const config = languageConfig[lang]

    try {
      // For HTML, CSS, JavaScript - use iframe preview
      if (['html', 'css', 'javascript'].includes(lang)) {
        setOutput(buildPreviewContent())
        setOutputMode('preview')
        setIsRunning(false)
        return
      }

      // For Python, use Pyodide (browser-based)
      // For other languages, use Piston API (server-based)
      const result = await executeCode(lang, code, [{ path: `main.${lang}`, content: code }])

      if (result.type === 'preview') {
        setOutput(buildPreviewContent())
        setOutputMode('preview')
      } else {
        setConsoleOutput(result.output || 'No output')
        setOutputMode('console')
      }

      if (result.error) {
        toast.error('Code has errors - check the output')
      }
    } catch (error) {
      setConsoleOutput(`Error: ${error.message}`)
      setOutputMode('console')
      toast.error('Execution failed')
    } finally {
      setIsRunning(false)
    }
  }

  // Check answer
  const checkAnswer = async () => {
    if (validateStep()) {
      if (!stepCompleted.includes(currentStep)) {
        setStepCompleted([...stepCompleted, currentStep])
      }

      if (isLastStep) {
        setShowSuccess(true)
        await completeLesson(courseId, lessonId, currentLessonMeta?.xp || 50)
        toast.success(`+${currentLessonMeta?.xp || 50} XP earned!`, { icon: '⚡' })
      } else {
        toast.success('Correct! Moving to next step...')
        setTimeout(() => {
          setCurrentStep(currentStep + 1)
          setShowHint(false)
        }, 1000)
      }
    } else {
      toast.error('Not quite right. Check your code and try again!')
    }
  }

  // Reset code
  const resetCode = () => {
    setCode(lessonData.starterCode)
    setOutput('')
    setConsoleOutput('')
    setStepCompleted([])
    setCurrentStep(0)
    setShowHint(false)
    setOutputMode('preview')
  }

  // Navigate to next lesson
  const goToNextLesson = () => {
    const next = getNextLesson(courseId, lessonId)
    if (next) {
      navigate(`/learn/${courseId}/${next.id}`)
      setShowSuccess(false)
      setCode('')
      setOutput('')
      setConsoleOutput('')
      setStepCompleted([])
      setCurrentStep(0)
      setOutputMode('preview')
    } else {
      navigate(`/courses/${courseId}`)
    }
  }

  const editorOptions = {
    minimap: { enabled: false },
    fontSize: 14,
    lineNumbers: 'on',
    roundedSelection: true,
    scrollBeyondLastLine: false,
    automaticLayout: true,
    tabSize: 2,
    wordWrap: 'on',
  }

  if (!course || !currentLessonMeta) {
    return (
      <div className="h-screen flex items-center justify-center bg-dark-900">
        <div className="text-center">
          <h1 className="text-xl text-white mb-2">Lesson not found</h1>
          <button onClick={() => navigate('/courses')} className="text-neon-cyan hover:underline">
            Back to courses
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col -m-6">
      {/* Top Bar */}
      <div className="h-14 bg-dark-800 border-b border-dark-600 flex items-center justify-between px-4 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(`/courses/${courseId}`)}
            className="p-2 hover:bg-dark-700 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-400" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">{course.title}</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400">Lesson {currentLessonMeta.number}</span>
            </div>
            <h1 className="text-white font-medium">{currentLessonMeta.title}</h1>
          </div>
        </div>
        <Badge variant="gradient" size="lg">
          <Zap className="w-4 h-4 mr-1" />
          +{currentLessonMeta.xp} XP
        </Badge>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Instructions Panel */}
        <div className="w-96 bg-dark-800 border-r border-dark-600 flex flex-col flex-shrink-0">
          {/* Step Progress */}
          <div className="p-4 border-b border-dark-600">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Progress</span>
              <span className="text-sm text-white">{stepCompleted.length}/{lessonData.steps.length} steps</span>
            </div>
            <div className="flex gap-1">
              {lessonData.steps.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-2 rounded-full transition-all ${
                    stepCompleted.includes(index)
                      ? 'bg-neon-green'
                      : index === currentStep
                        ? 'bg-neon-cyan animate-pulse'
                        : 'bg-dark-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Current Step */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                stepCompleted.includes(currentStep)
                  ? 'bg-neon-green/20 text-neon-green'
                  : 'bg-neon-cyan/20 text-neon-cyan'
              }`}>
                {stepCompleted.includes(currentStep) ? (
                  <CheckCircle2 className="w-4 h-4" />
                ) : (
                  <span className="font-bold text-sm">{currentStep + 1}</span>
                )}
              </div>
              <h2 className="text-lg font-semibold text-white">Step {currentStep + 1}</h2>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{currentStepData?.instruction}</p>

              <div className="p-4 bg-dark-700 rounded-xl border border-dark-600">
                <p className="text-sm text-gray-400 mb-2">Your task:</p>
                <p className="text-white font-medium">{currentStepData?.task}</p>
              </div>

              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-neon-yellow/10 rounded-xl border border-neon-yellow/30"
                  >
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-5 h-5 text-neon-yellow flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-neon-yellow font-medium mb-1">Hint</p>
                        <p className="text-gray-300 text-sm">{currentStepData?.hint}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!showHint && (
                <button
                  onClick={() => setShowHint(true)}
                  className="flex items-center gap-2 text-gray-400 hover:text-neon-yellow transition-colors text-sm"
                >
                  <Lightbulb className="w-4 h-4" />
                  Need a hint?
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-dark-600 space-y-3">
            <Button className="w-full" onClick={checkAnswer}>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Check Answer
            </Button>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="secondary"
                className="flex-1"
                onClick={() => setCurrentStep(Math.min(lessonData.steps.length - 1, currentStep + 1))}
                disabled={currentStep === lessonData.steps.length - 1 || !stepCompleted.includes(currentStep)}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Editor Panel */}
        <div className="flex-1 flex flex-col">
          {/* Editor Header */}
          <div className="h-12 bg-dark-900 border-b border-dark-600 flex items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="text-sm text-gray-400 ml-2 font-mono">
                {lessonData.language === 'html' ? 'index.html' : lessonData.language === 'css' ? 'styles.css' : 'script.js'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={resetCode}
                className="p-2 hover:bg-dark-700 rounded-lg text-gray-400 hover:text-white transition-colors"
                title="Reset code"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <Button size="sm" onClick={runCode} loading={isRunning}>
                <Play className="w-4 h-4 mr-1" />
                Run
              </Button>
            </div>
          </div>

          {/* Editor & Preview Split */}
          <div className="flex-1 flex">
            <div className="flex-1 border-r border-dark-600">
              <Editor
                height="100%"
                language={lessonData.language}
                value={code}
                onChange={(value) => setCode(value || '')}
                theme="vs-dark"
                options={editorOptions}
              />
            </div>

            <div className="w-1/2 flex flex-col bg-dark-900">
              {/* Output Header with Mode Toggle */}
              <div className="h-10 bg-dark-800 border-b border-dark-700 flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setOutputMode('preview')}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-sm transition-colors ${
                      outputMode === 'preview'
                        ? 'bg-neon-cyan/20 text-neon-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <button
                    onClick={() => setOutputMode('console')}
                    className={`flex items-center gap-1.5 px-2 py-1 rounded text-sm transition-colors ${
                      outputMode === 'console'
                        ? 'bg-neon-cyan/20 text-neon-cyan'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    Console
                  </button>
                </div>
                {isRunning && (
                  <div className="flex items-center gap-2 text-neon-cyan text-sm">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Running...
                  </div>
                )}
              </div>

              {/* Output Content */}
              <div className="flex-1 overflow-auto">
                {outputMode === 'preview' ? (
                  // Preview Mode - Iframe for HTML/CSS/JS
                  output ? (
                    <iframe
                      title="preview"
                      srcDoc={output}
                      className="w-full h-full border-0 bg-white"
                      sandbox="allow-scripts allow-modals allow-forms"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 bg-dark-800">
                      <div className="text-center">
                        <Play className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Click "Run" to see your code</p>
                        <p className="text-sm text-gray-500 mt-1">Ctrl+Enter to run</p>
                      </div>
                    </div>
                  )
                ) : (
                  // Console Mode - Text output for server-side languages
                  <div className="h-full bg-dark-800 p-4 font-mono text-sm">
                    {consoleOutput ? (
                      <pre className="whitespace-pre-wrap text-gray-300">
                        {consoleOutput.split('\n').map((line, i) => (
                          <div
                            key={i}
                            className={`py-0.5 ${
                              line.includes('[error]') || line.includes('Error')
                                ? 'text-red-400'
                                : line.includes('[warn]')
                                  ? 'text-yellow-400'
                                  : 'text-neon-green'
                            }`}
                          >
                            {line || ' '}
                          </div>
                        ))}
                      </pre>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        <div className="text-center">
                          <Terminal className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p>Console output will appear here</p>
                          <p className="text-sm mt-1">Run your code to see results</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => setShowSuccess(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-dark-800 rounded-2xl border border-dark-600 p-8 z-50 text-center"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-green to-neon-cyan flex items-center justify-center"
              >
                <Trophy className="w-10 h-10 text-dark-900" />
              </motion.div>

              <h2 className="text-2xl font-bold text-white mb-2">Lesson Complete!</h2>
              <p className="text-gray-400 mb-6">Great job! You've mastered this lesson.</p>

              <div className="flex justify-center gap-4 mb-6">
                <div className="px-4 py-2 bg-dark-700 rounded-xl">
                  <Zap className="w-5 h-5 text-neon-yellow mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">+{currentLessonMeta?.xp || 50}</p>
                  <p className="text-xs text-gray-400">XP Earned</p>
                </div>
                <div className="px-4 py-2 bg-dark-700 rounded-xl">
                  <BookOpen className="w-5 h-5 text-neon-cyan mx-auto mb-1" />
                  <p className="text-xl font-bold text-white">{lessonData.steps.length}</p>
                  <p className="text-xs text-gray-400">Steps Done</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="secondary" className="flex-1" onClick={() => navigate(`/courses/${courseId}`)}>
                  Back to Course
                </Button>
                <Button className="flex-1" onClick={goToNextLesson}>
                  Next Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
