import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Monitor, Server, Code2, Cloud, Brain, Laptop, ChevronRight, Clock, BookOpen } from 'lucide-react'
import { useProgressStore } from '../store/progressStore'
import { courses } from '../data/courses'

const iconMap = {
  Monitor,
  Server,
  Code2,
  Cloud,
  Brain,
  Laptop
}

export default function Courses() {
  const navigate = useNavigate()
  const { getTrackProgress } = useProgressStore()

  const courseList = Object.values(courses)

  const getLevelStyle = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'Intermediate':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
      case 'Advanced':
        return 'bg-red-500/10 text-red-400 border-red-500/20'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Header */}
      <div className="border-b border-white/5 bg-dark-800/50">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold text-white mb-3">Courses</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              Learn by doing. Each course guides you step-by-step from basics to building real projects.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Course List */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="space-y-4">
          {courseList.map((course, index) => {
            const Icon = iconMap[course.icon] || Monitor
            const progress = getTrackProgress(course.id, course.totalLessons)
            const completedLessons = Math.round((progress / 100) * course.totalLessons)

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => navigate(`/courses/${course.id}`)}
                className="group cursor-pointer"
              >
                <div className="bg-dark-800 border border-white/5 rounded-xl p-6 hover:border-white/10 hover:bg-dark-700/50 transition-all duration-200">
                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                      style={{ backgroundColor: `${course.color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: course.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h2 className="text-xl font-semibold text-white group-hover:text-neon-cyan transition-colors">
                            {course.title}
                          </h2>
                          <p className="text-sm text-gray-500 mt-0.5">{course.subtitle}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelStyle(course.level)}`}>
                          {course.level}
                        </span>
                      </div>

                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {course.description}
                      </p>

                      {/* Meta & Progress */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5 text-sm text-gray-500">
                          <span className="flex items-center gap-1.5">
                            <BookOpen className="w-4 h-4" />
                            {course.totalLessons} lessons
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {course.totalDuration}
                          </span>
                        </div>

                        <div className="flex items-center gap-4">
                          {progress > 0 && (
                            <div className="flex items-center gap-3">
                              <div className="w-32 h-1.5 bg-dark-600 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: `${progress}%`,
                                    backgroundColor: course.color
                                  }}
                                />
                              </div>
                              <span className="text-xs text-gray-400 w-16">
                                {completedLessons}/{course.totalLessons}
                              </span>
                            </div>
                          )}
                          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Recommendation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-10 p-6 bg-dark-800/50 border border-white/5 rounded-xl"
        >
          <p className="text-gray-400 text-sm">
            <span className="text-white font-medium">New to coding?</span>{' '}
            Start with <button onClick={() => navigate('/courses/frontend')} className="text-neon-cyan hover:underline">Web Development Fundamentals</button> -
            it teaches the basics of HTML, CSS, and JavaScript that every developer needs.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
