import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  User,
  Mail,
  Camera,
  Zap,
  Flame,
  Trophy,
  Award,
  Calendar,
  Edit3,
  Save,
  CreditCard,
  LogOut,
} from 'lucide-react'
import Card, { CardBody, CardHeader } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Badge from '../components/ui/Badge'
import ProgressBar from '../components/ui/ProgressBar'
import { useAuthStore } from '../store/authStore'
import { useProgressStore } from '../store/progressStore'
import toast from 'react-hot-toast'

export default function Profile() {
  const { user, logout, updateUser, trialDaysLeft } = useAuthStore()
  const { xp, level, streak, badges, completedLessons, calculateLevel } = useProgressStore()

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')

  const levelInfo = calculateLevel(xp)

  const allBadges = [
    { id: 1, name: 'First Steps', icon: '👟', description: 'Complete your first lesson', unlocked: true },
    { id: 2, name: 'Code Warrior', icon: '⚔️', description: 'Write 100 lines of code', unlocked: true },
    { id: 3, name: 'Quick Learner', icon: '🚀', description: 'Complete 5 lessons in one day', unlocked: true },
    { id: 4, name: 'Streak Master', icon: '🔥', description: 'Maintain a 7-day streak', unlocked: streak >= 7 },
    { id: 5, name: 'HTML Pro', icon: '📄', description: 'Complete all HTML lessons', unlocked: false },
    { id: 6, name: 'CSS Artist', icon: '🎨', description: 'Complete all CSS lessons', unlocked: false },
    { id: 7, name: 'JS Ninja', icon: '🥷', description: 'Complete all JavaScript lessons', unlocked: false },
    { id: 8, name: 'React Master', icon: '⚛️', description: 'Complete all React lessons', unlocked: false },
    { id: 9, name: 'Full Stack Hero', icon: '🦸', description: 'Complete the Full Stack track', unlocked: false },
    { id: 10, name: 'Night Owl', icon: '🦉', description: 'Complete a lesson after midnight', unlocked: false },
    { id: 11, name: 'Early Bird', icon: '🐦', description: 'Complete a lesson before 6 AM', unlocked: false },
    { id: 12, name: 'Perfectionist', icon: '💎', description: 'Complete a lesson without hints', unlocked: false },
  ]

  const handleSaveProfile = () => {
    // In production, this would make an API call
    updateUser({ name, email })
    setIsEditing(false)
    toast.success('Profile updated successfully!')
  }

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-gray-400">Manage your account and view your achievements</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card>
              <CardHeader className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Profile Information</h2>
                {!isEditing && (
                  <Button variant="ghost" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                )}
              </CardHeader>
              <CardBody className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-4xl font-bold text-white">
                        {user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <button className="absolute -bottom-2 -right-2 p-2 bg-dark-700 border border-dark-600 rounded-full hover:bg-dark-600 transition-colors">
                        <Camera className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 space-y-4">
                    {isEditing ? (
                      <>
                        <Input
                          label="Full Name"
                          icon={User}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                          label="Email Address"
                          icon={Mail}
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="flex gap-3">
                          <Button onClick={handleSaveProfile}>
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </Button>
                          <Button variant="ghost" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-sm text-gray-400">Full Name</p>
                          <p className="text-white font-medium">{user?.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Email Address</p>
                          <p className="text-white font-medium">{user?.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Member Since</p>
                          <p className="text-white font-medium">
                            {new Date().toLocaleDateString('en-US', {
                              month: 'long',
                              year: 'numeric',
                            })}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Badges Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-neon-yellow" />
                  <h2 className="text-lg font-semibold text-white">Badges</h2>
                </div>
              </CardHeader>
              <CardBody className="p-6">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                  {allBadges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        badge.unlocked
                          ? 'bg-dark-700 border-neon-cyan/30 hover:border-neon-cyan/50'
                          : 'bg-dark-800 border-dark-600 opacity-50'
                      }`}
                    >
                      <div className={`text-3xl mb-2 ${badge.unlocked ? '' : 'grayscale'}`}>
                        {badge.unlocked ? badge.icon : '🔒'}
                      </div>
                      <p className={`text-sm font-medium ${badge.unlocked ? 'text-white' : 'text-gray-500'}`}>
                        {badge.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Subscription Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-neon-purple" />
                  <h2 className="text-lg font-semibold text-white">Subscription</h2>
                </div>
              </CardHeader>
              <CardBody className="p-6">
                {user?.isSubscribed ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="success" size="lg">Active Subscription</Badge>
                      <p className="text-gray-400 text-sm mt-2">$7/month via PayPal</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage Subscription
                    </Button>
                  </div>
                ) : trialDaysLeft > 0 ? (
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="warning" size="lg">Free Trial</Badge>
                      <p className="text-gray-400 text-sm mt-2">
                        {trialDaysLeft} days remaining
                      </p>
                    </div>
                    <Button onClick={() => window.location.href = '/pricing'}>
                      Subscribe Now
                    </Button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge variant="danger" size="lg">Trial Expired</Badge>
                      <p className="text-gray-400 text-sm mt-2">
                        Subscribe to continue learning
                      </p>
                    </div>
                    <Button onClick={() => window.location.href = '/pricing'}>
                      Subscribe Now
                    </Button>
                  </div>
                )}
              </CardBody>
            </Card>
          </motion.div>
        </div>

        {/* Right Column - Stats */}
        <div className="space-y-6">
          {/* Level Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-neon-cyan to-neon-purple" />
              <CardBody className="p-6">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center border border-neon-cyan/30">
                    <span className="text-3xl font-bold text-white">{level}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Level {level}</h3>
                  <p className="text-gray-400 text-sm mb-4">{xp.toLocaleString()} XP Total</p>
                  <ProgressBar
                    value={levelInfo.currentXp}
                    max={levelInfo.xpForNextLevel}
                    showLabel={false}
                    size="md"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    {levelInfo.xpForNextLevel - levelInfo.currentXp} XP to next level
                  </p>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardBody className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-dark-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-neon-cyan" />
                    <span className="text-gray-400">Total XP</span>
                  </div>
                  <span className="text-white font-bold">{xp.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Flame className={`w-5 h-5 ${streak > 0 ? 'text-neon-orange' : 'text-gray-500'}`} />
                    <span className="text-gray-400">Current Streak</span>
                  </div>
                  <span className="text-white font-bold">{streak} days</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-neon-yellow" />
                    <span className="text-gray-400">Badges</span>
                  </div>
                  <span className="text-white font-bold">{allBadges.filter(b => b.unlocked).length}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-dark-800 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-neon-green" />
                    <span className="text-gray-400">Lessons</span>
                  </div>
                  <span className="text-white font-bold">{completedLessons.length}</span>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Logout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              variant="danger"
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
