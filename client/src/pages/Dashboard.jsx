import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Zap,
  Flame,
  Trophy,
  ArrowRight,
  BookOpen,
  Target,
  Calendar,
  TrendingUp,
  Award,
  Play,
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { useProgressStore } from '../store/progressStore'
import Card, { CardBody, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'
import ProgressBar from '../components/ui/ProgressBar'
import Badge from '../components/ui/Badge'

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuthStore()
  const { xp, level, streak, badges, completedLessons, calculateLevel, updateStreak } = useProgressStore()

  const levelInfo = calculateLevel(xp)

  useEffect(() => {
    updateStreak()
  }, [updateStreak])

  const tracks = [
    { id: 'frontend', name: 'Frontend Developer', progress: 35, lessons: 45, color: 'cyan' },
    { id: 'backend', name: 'Backend Developer', progress: 0, lessons: 42, color: 'purple' },
    { id: 'devops', name: 'DevOps & Cloud', progress: 10, lessons: 50, color: 'orange' },
  ]

  const recentBadges = [
    { id: 1, name: 'First Steps', icon: '👟', description: 'Complete your first lesson' },
    { id: 2, name: 'Code Warrior', icon: '⚔️', description: 'Write 100 lines of code' },
    { id: 3, name: 'Quick Learner', icon: '🚀', description: 'Complete 5 lessons in one day' },
  ]

  const suggestedLesson = {
    track: 'Frontend Developer',
    module: 'CSS Basics',
    title: 'Flexbox Layout',
    duration: '15 min',
    xp: 75,
  }

  const weeklyProgress = [
    { day: 'Mon', lessons: 3 },
    { day: 'Tue', lessons: 2 },
    { day: 'Wed', lessons: 4 },
    { day: 'Thu', lessons: 1 },
    { day: 'Fri', lessons: 5 },
    { day: 'Sat', lessons: 2 },
    { day: 'Sun', lessons: 0 },
  ]

  const maxLessons = Math.max(...weeklyProgress.map(d => d.lessons))

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, {user?.name?.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-400">
            {streak > 0
              ? `You're on a ${streak}-day streak! Keep it up!`
              : "Start learning today to build your streak!"}
          </p>
        </div>
        <Button onClick={() => navigate('/courses')}>
          <Play className="w-4 h-4 mr-2" />
          Continue Learning
        </Button>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* XP Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="h-full">
            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                </div>
                <Badge variant="primary">Level {level}</Badge>
              </div>
              <p className="text-gray-400 text-sm mb-1">Total XP</p>
              <p className="text-2xl font-bold text-white">{xp.toLocaleString()}</p>
              <div className="mt-3">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Next level</span>
                  <span>{levelInfo.currentXp}/{levelInfo.xpForNextLevel}</span>
                </div>
                <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${(levelInfo.currentXp / levelInfo.xpForNextLevel) * 100}%` }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.div>

        {/* Streak Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="h-full">
            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl ${streak > 0 ? 'bg-neon-orange/20' : 'bg-dark-600'} flex items-center justify-center`}>
                  <Flame className={`w-5 h-5 ${streak > 0 ? 'text-neon-orange streak-fire' : 'text-gray-500'}`} />
                </div>
                {streak >= 7 && <Badge variant="warning">On Fire!</Badge>}
              </div>
              <p className="text-gray-400 text-sm mb-1">Current Streak</p>
              <p className="text-2xl font-bold text-white">{streak} days</p>
              <p className="text-sm text-gray-400 mt-2">
                {streak > 0 ? 'Great job! Keep learning daily.' : 'Learn today to start a streak!'}
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Lessons Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="h-full">
            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon-green/20 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-neon-green" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Lessons Completed</p>
              <p className="text-2xl font-bold text-white">{completedLessons.length}</p>
              <p className="text-sm text-gray-400 mt-2">
                Across all tracks
              </p>
            </CardBody>
          </Card>
        </motion.div>

        {/* Badges Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="h-full">
            <CardBody className="p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-neon-purple" />
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-1">Badges Earned</p>
              <p className="text-2xl font-bold text-white">{badges.length}</p>
              <p className="text-sm text-gray-400 mt-2">
                Keep learning to earn more!
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Continue Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Continue Learning</h2>
                <Link to="/courses" className="text-neon-cyan text-sm hover:underline flex items-center gap-1">
                  View all courses <ArrowRight className="w-4 h-4" />
                </Link>
              </CardHeader>
              <CardBody className="space-y-4">
                {tracks.map((track) => (
                  <div
                    key={track.id}
                    className="p-4 bg-dark-800 rounded-xl border border-dark-600 hover:border-neon-cyan/30 transition-colors cursor-pointer"
                    onClick={() => navigate(`/courses/${track.id}`)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-white">{track.name}</h3>
                      <Badge variant={track.progress > 0 ? 'success' : 'default'}>
                        {track.progress > 0 ? `${track.progress}%` : 'Not started'}
                      </Badge>
                    </div>
                    <ProgressBar
                      value={track.progress}
                      showLabel={false}
                      size="sm"
                      variant={track.color}
                    />
                    <p className="text-sm text-gray-400 mt-2">
                      {Math.floor(track.lessons * track.progress / 100)}/{track.lessons} lessons completed
                    </p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </motion.div>

          {/* Weekly Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-neon-cyan" />
                  <h2 className="text-lg font-semibold text-white">Weekly Activity</h2>
                </div>
              </CardHeader>
              <CardBody>
                <div className="flex items-end justify-between h-40 gap-2">
                  {weeklyProgress.map((day, index) => (
                    <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(day.lessons / maxLessons) * 100}%` }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                        className={`w-full rounded-t-lg min-h-[4px] ${
                          day.lessons > 0
                            ? 'bg-gradient-to-t from-neon-cyan to-neon-purple'
                            : 'bg-dark-600'
                        }`}
                      />
                      <span className="text-xs text-gray-400">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-dark-600 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Total this week</span>
                  <span className="text-white font-semibold">
                    {weeklyProgress.reduce((sum, d) => sum + d.lessons, 0)} lessons
                  </span>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Suggested Lesson */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-neon-cyan to-neon-purple" />
              <CardBody className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Target className="w-5 h-5 text-neon-cyan" />
                  <h3 className="font-semibold text-white">Recommended</h3>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-neon-cyan mb-1">{suggestedLesson.track}</p>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {suggestedLesson.title}
                  </h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {suggestedLesson.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-4 h-4 text-neon-yellow" />
                      +{suggestedLesson.xp} XP
                    </span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => navigate('/learn/frontend/css-flexbox')}>
                  Start Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardBody>
            </Card>
          </motion.div>

          {/* Recent Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card>
              <CardHeader className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-neon-yellow" />
                  <h3 className="font-semibold text-white">Badges</h3>
                </div>
                <Link to="/profile" className="text-neon-cyan text-sm hover:underline">
                  View all
                </Link>
              </CardHeader>
              <CardBody className="space-y-3">
                {recentBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center gap-3 p-3 bg-dark-800 rounded-xl border border-dark-600"
                  >
                    <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center text-xl">
                      {badge.icon}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{badge.name}</p>
                      <p className="text-gray-400 text-xs">{badge.description}</p>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
