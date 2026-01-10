import { useNavigate } from 'react-router-dom'
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
  Star,
} from 'lucide-react'
import Card, { CardBody } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import { useProgressStore } from '../store/progressStore'

export default function Tracks() {
  const navigate = useNavigate()
  const { getTrackProgress } = useProgressStore()

  const tracks = [
    {
      id: 'frontend',
      icon: Monitor,
      title: 'Frontend Developer',
      description: 'Master the art of building beautiful, responsive user interfaces',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS'],
      lessons: 45,
      duration: '40 hours',
      difficulty: 'Beginner',
      color: 'cyan',
      gradient: 'from-neon-cyan to-blue-500',
      popular: true,
    },
    {
      id: 'backend',
      icon: Server,
      title: 'Backend Developer',
      description: 'Build powerful server-side applications and APIs',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Authentication'],
      lessons: 42,
      duration: '45 hours',
      difficulty: 'Intermediate',
      color: 'purple',
      gradient: 'from-neon-purple to-indigo-500',
    },
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full Stack Developer',
      description: 'Become a complete web developer with end-to-end skills',
      skills: ['Frontend', 'Backend', 'Databases', 'Deployment', 'Testing', 'Git'],
      lessons: 80,
      duration: '85 hours',
      difficulty: 'Intermediate',
      color: 'green',
      gradient: 'from-neon-green to-emerald-500',
    },
    {
      id: 'devops',
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Master cloud infrastructure and deployment automation',
      skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD'],
      lessons: 50,
      duration: '55 hours',
      difficulty: 'Advanced',
      color: 'orange',
      gradient: 'from-neon-orange to-amber-500',
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Engineering',
      description: 'Learn machine learning, deep learning, and AI development',
      skills: ['Python', 'NumPy', 'TensorFlow', 'PyTorch', 'LLMs', 'Prompt Engineering'],
      lessons: 48,
      duration: '60 hours',
      difficulty: 'Advanced',
      color: 'pink',
      gradient: 'from-neon-pink to-rose-500',
      new: true,
    },
    {
      id: 'basics',
      icon: Laptop,
      title: 'Computer Basics',
      description: 'Essential digital skills for the modern workplace',
      skills: ['Typing', 'Windows/Mac', 'Microsoft Office', 'Google Suite', 'Internet', 'Email'],
      lessons: 30,
      duration: '25 hours',
      difficulty: 'Beginner',
      color: 'yellow',
      gradient: 'from-neon-yellow to-lime-500',
    },
  ]

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'success'
      case 'Intermediate':
        return 'warning'
      case 'Advanced':
        return 'danger'
      default:
        return 'default'
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Learning Tracks</h1>
        <p className="text-gray-400 max-w-2xl">
          Choose your path to become a professional developer. Each track includes
          hands-on lessons, projects, and a certificate upon completion.
        </p>
      </motion.div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tracks.map((track, index) => {
          const Icon = track.icon
          const progress = getTrackProgress(track.id, track.lessons)

          return (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hover
                glow
                className="h-full cursor-pointer group overflow-hidden"
                onClick={() => navigate(`/tracks/${track.id}`)}
              >
                {/* Top Gradient Bar */}
                <div className={`h-1.5 bg-gradient-to-r ${track.gradient}`} />

                <CardBody className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${track.gradient} bg-opacity-20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex gap-2">
                      {track.popular && (
                        <Badge variant="primary" icon={Star}>
                          Popular
                        </Badge>
                      )}
                      {track.new && (
                        <Badge variant="success">
                          New
                        </Badge>
                      )}
                      <Badge variant={getDifficultyColor(track.difficulty)}>
                        {track.difficulty}
                      </Badge>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {track.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    {track.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {track.skills.slice(0, 4).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-dark-600 rounded-md text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {track.skills.length > 4 && (
                      <span className="px-2 py-1 bg-dark-600 rounded-md text-xs text-gray-400">
                        +{track.skills.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Progress */}
                  {progress > 0 && (
                    <div className="mb-4">
                      <ProgressBar value={progress} size="sm" showLabel />
                    </div>
                  )}

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-dark-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-sm">{track.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{track.duration}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-neon-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-dark-700 rounded-2xl border border-dark-600 p-6"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-6 h-6 text-neon-cyan" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Not sure where to start?
            </h3>
            <p className="text-gray-400 mb-4">
              If you're completely new to coding, we recommend starting with the{' '}
              <span className="text-neon-cyan">Frontend Developer</span> track. It covers
              the fundamentals and you'll see results quickly by building real web pages.
            </p>
            <button
              onClick={() => navigate('/tracks/frontend')}
              className="text-neon-cyan hover:underline flex items-center gap-1"
            >
              Start Frontend Track <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
