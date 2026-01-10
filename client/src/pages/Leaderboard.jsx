import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Medal,
  Zap,
  Flame,
  Crown,
  TrendingUp,
  ChevronUp,
  ChevronDown,
  Minus,
} from 'lucide-react'
import Card, { CardBody, CardHeader } from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import { useAuthStore } from '../store/authStore'
import { useProgressStore } from '../store/progressStore'

export default function Leaderboard() {
  const [timeframe, setTimeframe] = useState('weekly')
  const { user } = useAuthStore()
  const { xp } = useProgressStore()

  // Mock leaderboard data
  const leaderboardData = {
    weekly: [
      { rank: 1, name: 'Sarah Chen', xp: 4250, streak: 12, change: 0, avatar: 'SC' },
      { rank: 2, name: 'Marcus Johnson', xp: 3890, streak: 8, change: 2, avatar: 'MJ' },
      { rank: 3, name: 'Emily Rodriguez', xp: 3650, streak: 15, change: -1, avatar: 'ER' },
      { rank: 4, name: 'Alex Kim', xp: 3420, streak: 6, change: 1, avatar: 'AK' },
      { rank: 5, name: 'Jordan Smith', xp: 3100, streak: 10, change: -2, avatar: 'JS' },
      { rank: 6, name: 'Taylor Brown', xp: 2950, streak: 5, change: 0, avatar: 'TB' },
      { rank: 7, name: 'Chris Lee', xp: 2800, streak: 7, change: 3, avatar: 'CL' },
      { rank: 8, name: 'Morgan Davis', xp: 2650, streak: 4, change: -1, avatar: 'MD' },
      { rank: 9, name: 'Casey Wilson', xp: 2500, streak: 9, change: 0, avatar: 'CW' },
      { rank: 10, name: 'Riley Martinez', xp: 2350, streak: 3, change: 1, avatar: 'RM' },
    ],
    monthly: [
      { rank: 1, name: 'Emily Rodriguez', xp: 15200, streak: 15, change: 0, avatar: 'ER' },
      { rank: 2, name: 'Sarah Chen', xp: 14800, streak: 12, change: 1, avatar: 'SC' },
      { rank: 3, name: 'Alex Kim', xp: 13500, streak: 6, change: -1, avatar: 'AK' },
      { rank: 4, name: 'Marcus Johnson', xp: 12900, streak: 8, change: 0, avatar: 'MJ' },
      { rank: 5, name: 'Jordan Smith', xp: 11800, streak: 10, change: 2, avatar: 'JS' },
      { rank: 6, name: 'Taylor Brown', xp: 11200, streak: 5, change: -1, avatar: 'TB' },
      { rank: 7, name: 'Chris Lee', xp: 10500, streak: 7, change: 0, avatar: 'CL' },
      { rank: 8, name: 'Morgan Davis', xp: 9800, streak: 4, change: 1, avatar: 'MD' },
      { rank: 9, name: 'Casey Wilson', xp: 9200, streak: 9, change: -2, avatar: 'CW' },
      { rank: 10, name: 'Riley Martinez', xp: 8600, streak: 3, change: 0, avatar: 'RM' },
    ],
    allTime: [
      { rank: 1, name: 'Emily Rodriguez', xp: 125000, streak: 15, change: 0, avatar: 'ER' },
      { rank: 2, name: 'Alex Kim', xp: 118000, streak: 6, change: 0, avatar: 'AK' },
      { rank: 3, name: 'Sarah Chen', xp: 112000, streak: 12, change: 1, avatar: 'SC' },
      { rank: 4, name: 'Marcus Johnson', xp: 105000, streak: 8, change: -1, avatar: 'MJ' },
      { rank: 5, name: 'Chris Lee', xp: 98000, streak: 7, change: 0, avatar: 'CL' },
      { rank: 6, name: 'Jordan Smith', xp: 92000, streak: 10, change: 2, avatar: 'JS' },
      { rank: 7, name: 'Taylor Brown', xp: 85000, streak: 5, change: -1, avatar: 'TB' },
      { rank: 8, name: 'Morgan Davis', xp: 78000, streak: 4, change: 0, avatar: 'MD' },
      { rank: 9, name: 'Casey Wilson', xp: 72000, streak: 9, change: 0, avatar: 'CW' },
      { rank: 10, name: 'Riley Martinez', xp: 65000, streak: 3, change: 1, avatar: 'RM' },
    ],
  }

  const currentLeaderboard = leaderboardData[timeframe]

  // Find user's position (simulated)
  const userRank = 23
  const userEntry = {
    rank: userRank,
    name: user?.name || 'You',
    xp: xp,
    streak: 5,
    change: 3,
    avatar: user?.name?.charAt(0).toUpperCase() || 'U',
    isCurrentUser: true,
  }

  const getRankIcon = (rank) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-neon-yellow" />
      case 2:
        return <Medal className="w-5 h-5 text-gray-300" />
      case 3:
        return <Medal className="w-5 h-5 text-amber-600" />
      default:
        return <span className="text-gray-400 font-bold">{rank}</span>
    }
  }

  const getChangeIcon = (change) => {
    if (change > 0) {
      return (
        <div className="flex items-center text-neon-green text-sm">
          <ChevronUp className="w-4 h-4" />
          {change}
        </div>
      )
    } else if (change < 0) {
      return (
        <div className="flex items-center text-red-400 text-sm">
          <ChevronDown className="w-4 h-4" />
          {Math.abs(change)}
        </div>
      )
    }
    return <Minus className="w-4 h-4 text-gray-500" />
  }

  const getRankBgColor = (rank) => {
    switch (rank) {
      case 1:
        return 'bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-500/30'
      case 2:
        return 'bg-gradient-to-r from-gray-300/20 to-gray-400/20 border-gray-400/30'
      case 3:
        return 'bg-gradient-to-r from-amber-600/20 to-orange-600/20 border-amber-600/30'
      default:
        return 'bg-dark-700 border-dark-600'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <Trophy className="w-8 h-8 text-neon-yellow" />
            Leaderboard
          </h1>
          <p className="text-gray-400">See how you rank against other learners</p>
        </div>

        {/* Timeframe Tabs */}
        <div className="flex bg-dark-700 rounded-xl p-1">
          {['weekly', 'monthly', 'allTime'].map((tf) => (
            <button
              key={tf}
              onClick={() => setTimeframe(tf)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                timeframe === tf
                  ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-900'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tf === 'allTime' ? 'All Time' : tf.charAt(0).toUpperCase() + tf.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Top 3 Podium */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-3 gap-4"
      >
        {/* Second Place */}
        <div className="flex flex-col items-center justify-end">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 flex items-center justify-center text-xl font-bold text-dark-900 mb-3">
            {currentLeaderboard[1].avatar}
          </div>
          <p className="text-white font-medium text-sm mb-1">{currentLeaderboard[1].name}</p>
          <Badge variant="default">{currentLeaderboard[1].xp.toLocaleString()} XP</Badge>
          <div className="mt-4 w-full h-24 bg-gradient-to-t from-gray-500/30 to-gray-400/10 rounded-t-xl flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-300">2</span>
          </div>
        </div>

        {/* First Place */}
        <div className="flex flex-col items-center justify-end">
          <Crown className="w-8 h-8 text-neon-yellow mb-2 animate-pulse" />
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-yellow to-amber-500 flex items-center justify-center text-2xl font-bold text-dark-900 mb-3 ring-4 ring-neon-yellow/30">
            {currentLeaderboard[0].avatar}
          </div>
          <p className="text-white font-medium mb-1">{currentLeaderboard[0].name}</p>
          <Badge variant="gradient">{currentLeaderboard[0].xp.toLocaleString()} XP</Badge>
          <div className="mt-4 w-full h-32 bg-gradient-to-t from-neon-yellow/30 to-amber-500/10 rounded-t-xl flex items-center justify-center">
            <span className="text-4xl font-bold text-neon-yellow">1</span>
          </div>
        </div>

        {/* Third Place */}
        <div className="flex flex-col items-center justify-end">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center text-xl font-bold text-white mb-3">
            {currentLeaderboard[2].avatar}
          </div>
          <p className="text-white font-medium text-sm mb-1">{currentLeaderboard[2].name}</p>
          <Badge variant="default">{currentLeaderboard[2].xp.toLocaleString()} XP</Badge>
          <div className="mt-4 w-full h-20 bg-gradient-to-t from-amber-700/30 to-orange-600/10 rounded-t-xl flex items-center justify-center">
            <span className="text-3xl font-bold text-amber-500">3</span>
          </div>
        </div>
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-white">Rankings</h2>
          </CardHeader>
          <CardBody className="p-0">
            <div className="divide-y divide-dark-600">
              {currentLeaderboard.map((entry, index) => (
                <div
                  key={entry.rank}
                  className={`flex items-center gap-4 px-6 py-4 ${getRankBgColor(entry.rank)} border-l-2 ${
                    entry.rank <= 3 ? '' : 'border-transparent'
                  }`}
                >
                  <div className="w-8 flex justify-center">
                    {getRankIcon(entry.rank)}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold">
                    {entry.avatar}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{entry.name}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-neon-cyan" />
                        {entry.xp.toLocaleString()} XP
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-3 h-3 text-neon-orange" />
                        {entry.streak} day streak
                      </span>
                    </div>
                  </div>
                  <div className="w-12">
                    {getChangeIcon(entry.change)}
                  </div>
                </div>
              ))}

              {/* User's Position */}
              {userRank > 10 && (
                <>
                  <div className="px-6 py-2 text-center text-gray-500 text-sm">
                    • • •
                  </div>
                  <div className="flex items-center gap-4 px-6 py-4 bg-neon-cyan/10 border-l-2 border-neon-cyan">
                    <div className="w-8 flex justify-center">
                      <span className="text-neon-cyan font-bold">{userEntry.rank}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold ring-2 ring-neon-cyan">
                      {userEntry.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">
                        {userEntry.name}
                        <Badge variant="primary" size="sm" className="ml-2">You</Badge>
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Zap className="w-3 h-3 text-neon-cyan" />
                          {userEntry.xp.toLocaleString()} XP
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-3 h-3 text-neon-orange" />
                          {userEntry.streak} day streak
                        </span>
                      </div>
                    </div>
                    <div className="w-12">
                      {getChangeIcon(userEntry.change)}
                    </div>
                  </div>
                </>
              )}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      {/* Motivation Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded-2xl border border-neon-cyan/30 p-6 text-center"
      >
        <TrendingUp className="w-10 h-10 text-neon-cyan mx-auto mb-3" />
        <h3 className="text-xl font-bold text-white mb-2">Keep Climbing!</h3>
        <p className="text-gray-400">
          Complete more lessons to earn XP and climb the leaderboard.
          Top learners get featured and earn special badges!
        </p>
      </motion.div>
    </div>
  )
}
