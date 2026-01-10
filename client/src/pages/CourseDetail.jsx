import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Monitor, Server, Code2, Cloud, Brain, Laptop,
  ChevronLeft, ChevronRight, Play, CheckCircle2, Lock, Clock, Zap, Award
} from 'lucide-react'
import { useProgressStore } from '../store/progressStore'
import { useAuthStore } from '../store/authStore'
import { courses, getAllLessons } from '../data/courses'

const iconMap = { Monitor, Server, Code2, Cloud, Brain, Laptop }

export default function CourseDetail() {
  const { courseId } = useParams()
  const navigate = useNavigate()
  const { isLessonCompleted } = useProgressStore()
  const { hasActiveSubscription } = useAuthStore()

  const course = courses[courseId]

  if (!course) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-2">Course not found</h1>
          <button onClick={() => navigate('/courses')} className="text-neon-cyan hover:underline">
            Back to courses
          </button>
        </div>
      </div>
    )
  }

  const Icon = iconMap[course.icon] || Monitor
  const allLessons = getAllLessons(courseId)
  const completedCount = allLessons.filter(l => isLessonCompleted(courseId, l.id)).length
  const progress = Math.round((completedCount / allLessons.length) * 100)
  const totalXp = allLessons.reduce((sum, l) => sum + l.xp, 0)

  // Find first incomplete lesson
  const nextLesson = allLessons.find(l => !isLessonCompleted(courseId, l.id))

  const handleStartLesson = (lessonId, lessonIndex) => {
    // First lesson is always free, rest require subscription
    if (lessonIndex === 0 || hasActiveSubscription()) {
      navigate(`/learn/${courseId}/${lessonId}`)
    } else {
      navigate('/pricing', { state: { message: 'Subscribe to continue learning' } })
    }
  }

  const getTypeStyle = (type) => {
    switch (type) {
      case 'practice':
        return 'bg-purple-500/10 text-purple-400'
      case 'project':
        return 'bg-orange-500/10 text-orange-400'
      case 'completion':
        return 'bg-green-500/10 text-green-400'
      default:
        return 'bg-blue-500/10 text-blue-400'
    }
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Back Navigation */}
      <div className="border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={() => navigate('/courses')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ChevronLeft className="w-4 h-4" />
            All Courses
          </button>
        </div>
      </div>

      {/* Course Header */}
      <div className="border-b border-white/5" style={{ backgroundColor: `${course.color}05` }}>
        <div className="max-w-4xl mx-auto px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-start gap-6"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: `${course.color}20` }}
            >
              <Icon className="w-8 h-8" style={{ color: course.color }} />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-1">{course.title}</h1>
              <p className="text-gray-500 mb-4">{course.subtitle}</p>
              <p className="text-gray-400 max-w-2xl">{course.description}</p>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-6 mt-6 text-sm">
                <span className="flex items-center gap-2 text-gray-400">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: course.color }} />
                  {course.totalLessons} lessons
                </span>
                <span className="text-gray-400">{course.totalDuration}</span>
                <span className="text-gray-400">{course.level}</span>
                <span className="flex items-center gap-1 text-yellow-400">
                  <Zap className="w-4 h-4" />
                  {totalXp} XP
                </span>
              </div>

              {/* Progress */}
              {progress > 0 && (
                <div className="mt-6">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-400">{completedCount} of {allLessons.length} completed</span>
                    <span className="font-medium" style={{ color: course.color }}>{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: course.color }}
                    />
                  </div>
                </div>
              )}

              {/* Continue Button */}
              {nextLesson && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => handleStartLesson(nextLesson.id, allLessons.indexOf(nextLesson))}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-dark-900 transition-all hover:opacity-90"
                  style={{ backgroundColor: course.color }}
                >
                  <Play className="w-4 h-4" />
                  {completedCount > 0 ? 'Continue Learning' : 'Start Course'}
                </motion.button>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chapters & Lessons */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-lg font-semibold text-white mb-6">Course Content</h2>

        <div className="space-y-6">
          {course.chapters.map((chapter, chapterIndex) => {
            const chapterLessons = chapter.lessons
            const chapterCompleted = chapterLessons.filter(l => isLessonCompleted(courseId, l.id)).length
            const isChapterComplete = chapterCompleted === chapterLessons.length

            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: chapterIndex * 0.05 }}
                className="bg-dark-800 border border-white/5 rounded-xl overflow-hidden"
              >
                {/* Chapter Header */}
                <div className="px-6 py-4 border-b border-white/5 bg-dark-800/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                        isChapterComplete
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-dark-600 text-gray-400'
                      }`}>
                        {isChapterComplete ? <CheckCircle2 className="w-4 h-4" /> : chapterIndex + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{chapter.title}</h3>
                        <p className="text-sm text-gray-500">{chapter.description}</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {chapterCompleted}/{chapterLessons.length}
                    </span>
                  </div>
                </div>

                {/* Lessons */}
                <div className="divide-y divide-white/5">
                  {chapterLessons.map((lesson, lessonIndex) => {
                    const globalIndex = allLessons.findIndex(l => l.id === lesson.id)
                    const completed = isLessonCompleted(courseId, lesson.id)
                    const isLocked = globalIndex > 0 && !hasActiveSubscription()
                    const isNext = nextLesson?.id === lesson.id

                    return (
                      <div
                        key={lesson.id}
                        onClick={() => !isLocked && handleStartLesson(lesson.id, globalIndex)}
                        className={`flex items-center gap-4 px-6 py-4 transition-colors ${
                          isLocked
                            ? 'opacity-50 cursor-not-allowed'
                            : 'cursor-pointer hover:bg-dark-700/50'
                        } ${isNext ? 'bg-dark-700/30' : ''}`}
                      >
                        {/* Status Icon */}
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          completed
                            ? 'bg-green-500/20 text-green-400'
                            : isLocked
                              ? 'bg-dark-600 text-gray-600'
                              : isNext
                                ? 'bg-white/10 text-white'
                                : 'bg-dark-600 text-gray-400'
                        }`}>
                          {completed ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : isLocked ? (
                            <Lock className="w-3.5 h-3.5" />
                          ) : (
                            <span className="text-xs font-medium">{lesson.number}</span>
                          )}
                        </div>

                        {/* Lesson Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-0.5">
                            <span className={`font-medium ${completed ? 'text-gray-500' : 'text-white'}`}>
                              {lesson.title}
                            </span>
                            {lesson.type !== 'lesson' && (
                              <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTypeStyle(lesson.type)}`}>
                                {lesson.type}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-500 truncate">{lesson.description}</p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-sm text-gray-500 flex-shrink-0">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {lesson.duration}
                          </span>
                          <span className="flex items-center gap-1 text-yellow-500/70">
                            <Zap className="w-3.5 h-3.5" />
                            {lesson.xp}
                          </span>
                          {!isLocked && <ChevronRight className="w-4 h-4 text-gray-600" />}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Completion Card */}
        {progress >= 100 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 p-8 rounded-2xl text-center border"
            style={{
              backgroundColor: `${course.color}10`,
              borderColor: `${course.color}30`
            }}
          >
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold text-white mb-2">Course Completed!</h3>
            <p className="text-gray-400 mb-6">
              Congratulations on completing {course.title}. You've earned your certificate.
            </p>
            <button
              onClick={() => navigate('/certificates')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-dark-900"
              style={{ backgroundColor: course.color }}
            >
              <Award className="w-4 h-4" />
              View Certificate
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}
