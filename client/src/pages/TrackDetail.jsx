import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Monitor,
  Server,
  Code2,
  Cloud,
  Brain,
  Laptop,
  BookOpen,
  Clock,
  Zap,
  ChevronRight,
  CheckCircle2,
  Lock,
  Play,
  Award,
} from 'lucide-react'
import Card, { CardBody, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import { useProgressStore } from '../store/progressStore'
import { useAuthStore } from '../store/authStore'

const trackData = {
  frontend: {
    icon: Monitor,
    title: 'Frontend Developer',
    description: 'Master the art of building beautiful, responsive user interfaces. Learn HTML, CSS, JavaScript, and React to create modern web applications.',
    color: 'cyan',
    gradient: 'from-neon-cyan to-blue-500',
    modules: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of the web',
        lessons: [
          { id: 'html-01', title: 'Your First HTML Page', duration: '10 min', xp: 50 },
          { id: 'html-02', title: 'Text Elements & Headings', duration: '12 min', xp: 50 },
          { id: 'html-03', title: 'Links and Images', duration: '15 min', xp: 60 },
          { id: 'html-04', title: 'Lists and Tables', duration: '15 min', xp: 60 },
          { id: 'html-05', title: 'Forms and Input', duration: '20 min', xp: 75 },
          { id: 'html-06', title: 'Semantic HTML', duration: '15 min', xp: 60 },
        ],
      },
      {
        id: 'css-basics',
        title: 'CSS Fundamentals',
        description: 'Style your web pages beautifully',
        lessons: [
          { id: 'css-01', title: 'Introduction to CSS', duration: '10 min', xp: 50 },
          { id: 'css-02', title: 'Colors and Typography', duration: '15 min', xp: 60 },
          { id: 'css-03', title: 'Box Model', duration: '15 min', xp: 60 },
          { id: 'css-04', title: 'Flexbox Layout', duration: '20 min', xp: 75 },
          { id: 'css-05', title: 'CSS Grid', duration: '20 min', xp: 75 },
          { id: 'css-06', title: 'Responsive Design', duration: '25 min', xp: 100 },
        ],
      },
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Add interactivity to your websites',
        lessons: [
          { id: 'js-01', title: 'Variables and Data Types', duration: '15 min', xp: 60 },
          { id: 'js-02', title: 'Functions', duration: '20 min', xp: 75 },
          { id: 'js-03', title: 'Arrays and Objects', duration: '20 min', xp: 75 },
          { id: 'js-04', title: 'DOM Manipulation', duration: '25 min', xp: 100 },
          { id: 'js-05', title: 'Events', duration: '20 min', xp: 75 },
          { id: 'js-06', title: 'Async JavaScript', duration: '30 min', xp: 125 },
        ],
      },
      {
        id: 'react-basics',
        title: 'React Fundamentals',
        description: 'Build modern user interfaces',
        lessons: [
          { id: 'react-01', title: 'Introduction to React', duration: '15 min', xp: 60 },
          { id: 'react-02', title: 'Components and Props', duration: '20 min', xp: 75 },
          { id: 'react-03', title: 'State Management', duration: '25 min', xp: 100 },
          { id: 'react-04', title: 'Hooks', duration: '30 min', xp: 125 },
          { id: 'react-05', title: 'React Router', duration: '20 min', xp: 75 },
          { id: 'react-06', title: 'Building a Project', duration: '45 min', xp: 200 },
        ],
      },
    ],
  },
  backend: {
    icon: Server,
    title: 'Backend Developer',
    description: 'Build powerful server-side applications and RESTful APIs. Learn Node.js, Express, and database management.',
    color: 'purple',
    gradient: 'from-neon-purple to-indigo-500',
    modules: [
      {
        id: 'node-basics',
        title: 'Node.js Fundamentals',
        description: 'Server-side JavaScript',
        lessons: [
          { id: 'node-01', title: 'Introduction to Node.js', duration: '15 min', xp: 60 },
          { id: 'node-02', title: 'Modules and NPM', duration: '20 min', xp: 75 },
          { id: 'node-03', title: 'File System', duration: '20 min', xp: 75 },
          { id: 'node-04', title: 'HTTP Server', duration: '25 min', xp: 100 },
        ],
      },
      {
        id: 'express-basics',
        title: 'Express.js',
        description: 'Build web servers easily',
        lessons: [
          { id: 'express-01', title: 'Express Setup', duration: '15 min', xp: 60 },
          { id: 'express-02', title: 'Routing', duration: '20 min', xp: 75 },
          { id: 'express-03', title: 'Middleware', duration: '25 min', xp: 100 },
          { id: 'express-04', title: 'REST APIs', duration: '30 min', xp: 125 },
        ],
      },
    ],
  },
  // Add more tracks as needed
}

export default function TrackDetail() {
  const { trackId } = useParams()
  const navigate = useNavigate()
  const { isLessonCompleted } = useProgressStore()
  const { hasActiveSubscription } = useAuthStore()

  const track = trackData[trackId] || trackData.frontend
  const Icon = track.icon

  const totalLessons = track.modules.reduce((sum, m) => sum + m.lessons.length, 0)
  const completedLessons = track.modules.reduce((sum, m) => {
    return sum + m.lessons.filter(l => isLessonCompleted(trackId, l.id)).length
  }, 0)
  const progress = Math.round((completedLessons / totalLessons) * 100)
  const totalXp = track.modules.reduce((sum, m) => {
    return sum + m.lessons.reduce((s, l) => s + l.xp, 0)
  }, 0)

  const handleStartLesson = (lessonId) => {
    if (hasActiveSubscription()) {
      navigate(`/learn/${trackId}/${lessonId}`)
    } else {
      navigate('/pricing', { state: { expired: true } })
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-dark-700 rounded-2xl border border-dark-600 p-8"
      >
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${track.gradient}`} />
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-6">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${track.gradient} flex items-center justify-center`}>
            <Icon className="w-10 h-10 text-white" />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold text-white mb-2">{track.title}</h1>
            <p className="text-gray-400 max-w-2xl">{track.description}</p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                {totalLessons} lessons
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-neon-yellow" />
                {totalXp} XP total
              </span>
            </div>
            {progress > 0 && (
              <Badge variant="success" size="lg">
                {progress}% Complete
              </Badge>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="mt-6">
            <ProgressBar value={progress} showLabel={false} size="md" />
            <p className="text-sm text-gray-400 mt-2">
              {completedLessons} of {totalLessons} lessons completed
            </p>
          </div>
        )}
      </motion.div>

      {/* Modules */}
      <div className="space-y-6">
        {track.modules.map((module, moduleIndex) => {
          const moduleCompleted = module.lessons.filter(l => isLessonCompleted(trackId, l.id)).length
          const isModuleComplete = moduleCompleted === module.lessons.length

          return (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: moduleIndex * 0.1 }}
            >
              <Card>
                <CardHeader className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isModuleComplete
                        ? 'bg-neon-green/20 text-neon-green'
                        : 'bg-dark-600 text-gray-400'
                    }`}>
                      {isModuleComplete ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span className="font-bold">{moduleIndex + 1}</span>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">{module.title}</h2>
                      <p className="text-sm text-gray-400">{module.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">
                      {moduleCompleted}/{module.lessons.length} completed
                    </p>
                  </div>
                </CardHeader>
                <CardBody className="p-0">
                  <div className="divide-y divide-dark-600">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const completed = isLessonCompleted(trackId, lesson.id)
                      const isLocked = !hasActiveSubscription() && lessonIndex > 0

                      return (
                        <div
                          key={lesson.id}
                          className={`flex items-center justify-between px-6 py-4 hover:bg-dark-600/50 transition-colors ${
                            isLocked ? 'opacity-50' : 'cursor-pointer'
                          }`}
                          onClick={() => !isLocked && handleStartLesson(lesson.id)}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              completed
                                ? 'bg-neon-green/20 text-neon-green'
                                : isLocked
                                  ? 'bg-dark-600 text-gray-500'
                                  : 'bg-dark-600 text-gray-400'
                            }`}>
                              {completed ? (
                                <CheckCircle2 className="w-4 h-4" />
                              ) : isLocked ? (
                                <Lock className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4" />
                              )}
                            </div>
                            <div>
                              <p className={`font-medium ${completed ? 'text-gray-400' : 'text-white'}`}>
                                {lesson.title}
                              </p>
                              <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {lesson.duration}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Zap className="w-3 h-3 text-neon-yellow" />
                                  +{lesson.xp} XP
                                </span>
                              </div>
                            </div>
                          </div>
                          {!isLocked && (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      )
                    })}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Certificate CTA */}
      {progress >= 100 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-2xl border border-neon-cyan/30 p-8 text-center"
        >
          <Award className="w-16 h-16 text-neon-yellow mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
          <p className="text-gray-400 mb-6">
            You've completed the {track.title} track. Claim your certificate!
          </p>
          <Button onClick={() => navigate('/certificates')}>
            Get Certificate
          </Button>
        </motion.div>
      )}
    </div>
  )
}
