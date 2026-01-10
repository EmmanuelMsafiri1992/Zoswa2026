import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users, Clock, Star } from 'lucide-react'
import { courses as coursesData } from '../../data/courses'

export default function AdminCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  // Convert courses object to array
  const coursesArray = coursesData ? Object.values(coursesData) : []

  // Calculate stats for each course
  const courseStats = coursesArray.map(course => ({
    ...course,
    modules: course.chapters || course.modules || [],
    totalLessons: (course.chapters || course.modules || []).reduce((acc, mod) => acc + (mod.lessons?.length || 0), 0),
    totalDuration: parseInt(course.totalDuration) || (course.chapters || course.modules || []).reduce((acc, mod) =>
      acc + (mod.lessons || []).reduce((a, l) => a + (parseInt(l.duration) || 10), 0), 0
    )
  }))

  return (
    <div className="space-y-6">
      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseStats.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-dark-800 border border-dark-600 rounded-2xl overflow-hidden hover:border-red-500/30 transition-colors cursor-pointer"
            onClick={() => setSelectedCourse(course)}
          >
            {/* Header */}
            <div className={`h-24 bg-gradient-to-br ${course.gradient} p-6 flex items-end`}>
              <span className="text-4xl">{course.icon}</span>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xl font-bold text-neon-cyan">{course.modules?.length || 0}</p>
                  <p className="text-xs text-gray-400">Modules</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-neon-purple">{course.totalLessons}</p>
                  <p className="text-xs text-gray-400">Lessons</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-neon-green">{Math.round(course.totalDuration / 60)}h</p>
                  <p className="text-xs text-gray-400">Duration</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-dark-700/50 border-t border-dark-600">
              <div className="flex items-center justify-between">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  course.level === 'Beginner'
                    ? 'bg-green-500/20 text-green-400'
                    : course.level === 'Intermediate'
                    ? 'bg-yellow-500/20 text-yellow-400'
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {course.level}
                </span>
                <span className="text-sm text-gray-400">{course.category}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-800 border border-dark-600 rounded-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden"
          >
            {/* Header */}
            <div className={`h-32 bg-gradient-to-br ${selectedCourse.gradient} p-6 flex items-end justify-between`}>
              <div className="flex items-center gap-4">
                <span className="text-5xl">{selectedCourse.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedCourse.title}</h2>
                  <p className="text-white/70">{selectedCourse.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedCourse(null)}
                className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(80vh-8rem)]">
              <p className="text-gray-400 mb-6">{selectedCourse.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="bg-dark-700 rounded-xl p-4 text-center">
                  <BookOpen className="w-6 h-6 text-neon-cyan mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{selectedCourse.modules?.length || 0}</p>
                  <p className="text-xs text-gray-400">Modules</p>
                </div>
                <div className="bg-dark-700 rounded-xl p-4 text-center">
                  <Star className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{selectedCourse.totalLessons}</p>
                  <p className="text-xs text-gray-400">Lessons</p>
                </div>
                <div className="bg-dark-700 rounded-xl p-4 text-center">
                  <Clock className="w-6 h-6 text-neon-green mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">{Math.round(selectedCourse.totalDuration / 60)}h</p>
                  <p className="text-xs text-gray-400">Duration</p>
                </div>
                <div className="bg-dark-700 rounded-xl p-4 text-center">
                  <Users className="w-6 h-6 text-neon-orange mx-auto mb-2" />
                  <p className="text-xl font-bold text-white">0</p>
                  <p className="text-xs text-gray-400">Students</p>
                </div>
              </div>

              {/* Modules */}
              <h3 className="text-lg font-bold text-white mb-4">Modules</h3>
              <div className="space-y-3">
                {(selectedCourse.modules || []).map((module, index) => (
                  <div
                    key={module.id || index}
                    className="bg-dark-700 rounded-xl p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-dark-600 flex items-center justify-center text-neon-cyan font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-white font-medium">{module.title}</p>
                        <p className="text-sm text-gray-400">{module.lessons?.length || 0} lessons</p>
                      </div>
                    </div>
                    <span className="text-sm text-gray-400">
                      {(module.lessons || []).reduce((a, l) => a + (parseInt(l.duration) || 10), 0)} min
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Note */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
        <p className="text-blue-400 text-sm">
          <strong>Note:</strong> Course content is stored in <code className="bg-dark-700 px-2 py-0.5 rounded">client/src/data/courses.js</code>.
          To add or modify courses, edit this file and push changes via GitHub.
        </p>
      </div>
    </div>
  )
}
