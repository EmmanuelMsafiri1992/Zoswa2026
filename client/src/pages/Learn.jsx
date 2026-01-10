import { useState, useEffect, useCallback } from 'react'
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
} from 'lucide-react'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { useProgressStore } from '../store/progressStore'
import { courses, getAllLessons, getNextLesson } from '../data/courses'
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
  const [showHint, setShowHint] = useState(false)
  const [stepCompleted, setStepCompleted] = useState([])
  const [showSuccess, setShowSuccess] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const currentStepData = lessonData.steps[currentStep]
  const isLastStep = currentStep === lessonData.steps.length - 1
  const allStepsCompleted = stepCompleted.length === lessonData.steps.length

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

  // Run code in sandboxed environment
  const runCode = () => {
    setIsRunning(true)
    setTimeout(() => {
      if (lessonData.language === 'html') {
        // HTML is rendered safely in sandboxed iframe
        setOutput(code)
      } else if (lessonData.language === 'css') {
        // CSS is applied in sandboxed iframe
        setOutput(`<style>${code}</style><div class="preview"><h1>Styled Content</h1><p>This is styled with your CSS.</p></div>`)
      } else if (lessonData.language === 'javascript') {
        // JavaScript runs in sandboxed iframe for security
        // The iframe sandbox prevents access to parent window
        const jsOutput = `
          <script>
            // Sandboxed console capture
            const logs = [];
            const originalConsole = console.log;
            console.log = (...args) => {
              logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' '));
              document.getElementById('output').innerHTML = logs.map(l => '<div>> ' + l + '</div>').join('');
            };
            console.error = console.log;

            // Execute user code in try-catch
            try {
              ${code}
            } catch(e) {
              document.getElementById('output').innerHTML = '<div class="error">Error: ' + e.message + '</div>';
            }

            // Show empty state if no output
            if (logs.length === 0 && !document.getElementById('output').innerHTML) {
              document.getElementById('output').innerHTML = '<div class="empty">Code executed (no console output)</div>';
            }
          </script>
          <div id="output" class="console-output"></div>
        `
        setOutput(jsOutput)
      }
      setIsRunning(false)
    }, 500)
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
    setStepCompleted([])
    setCurrentStep(0)
    setShowHint(false)
  }

  // Navigate to next lesson
  const goToNextLesson = () => {
    const next = getNextLesson(courseId, lessonId)
    if (next) {
      navigate(`/learn/${courseId}/${next.id}`)
      setShowSuccess(false)
      setCode('')
      setOutput('')
      setStepCompleted([])
      setCurrentStep(0)
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

            <div className="w-1/2 flex flex-col bg-white">
              <div className="h-10 bg-gray-100 border-b flex items-center px-4">
                <span className="text-sm text-gray-600 font-medium">Preview</span>
              </div>
              <div className="flex-1 overflow-auto">
                {output ? (
                  <iframe
                    title="preview"
                    srcDoc={`<!DOCTYPE html><html><head><style>body{font-family:system-ui,sans-serif;padding:20px;margin:0;}.console-output{font-family:monospace;background:#1a1a25;color:#00ff88;padding:20px;min-height:100%;}.console-output>div{margin-bottom:8px;}.error{color:#ff4444;font-family:monospace;padding:20px;}.empty{color:#888;font-style:italic;}</style></head><body>${output}</body></html>`}
                    className="w-full h-full border-0"
                    sandbox="allow-scripts"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    <div className="text-center">
                      <Play className="w-12 h-12 mx-auto mb-3 opacity-50" />
                      <p>Click "Run" to see your code</p>
                    </div>
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
