import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Trophy,
  Award,
  User,
  Settings,
  Zap,
  Flame,
  Shield,
} from 'lucide-react'
import { useProgressStore } from '../../store/progressStore'
import { useAuthStore } from '../../store/authStore'

export default function Sidebar() {
  const location = useLocation()
  const { xp, level, streak, calculateLevel } = useProgressStore()
  const { user } = useAuthStore()

  const levelInfo = calculateLevel(xp)
  const xpProgress = (levelInfo.currentXp / levelInfo.xpForNextLevel) * 100

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: BookOpen, label: 'Courses', href: '/courses' },
    { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
    { icon: Award, label: 'Certificates', href: '/certificates' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  const isActive = (href) => location.pathname === href

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-dark-800 border-r border-dark-600 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-dark-600">
        <Link to="/dashboard" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10">
                <path
                  d="M7 7h10l-10 10h10"
                  stroke="url(#sidebarLogoGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="sidebarLogoGradient" x1="7" y1="7" x2="17" y2="17">
                    <stop stopColor="#00fff5" />
                    <stop offset="1" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
          </div>
          <span className="text-xl font-black tracking-tight">
            <span className="text-white">zos</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-purple-400">wa</span>
          </span>
        </Link>
      </div>

      {/* User Stats */}
      <div className="p-4 border-b border-dark-600">
        <div className="bg-dark-700 rounded-xl p-4">
          {/* Level & XP */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-purple to-neon-pink flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Level</p>
                <p className="text-lg font-bold text-white">{level}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">XP</p>
              <p className="text-sm font-semibold text-neon-cyan">{xp.toLocaleString()}</p>
            </div>
          </div>

          {/* XP Progress Bar */}
          <div className="h-2 bg-dark-600 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${xpProgress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-1 text-center">
            {levelInfo.currentXp} / {levelInfo.xpForNextLevel} XP
          </p>

          {/* Streak */}
          <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t border-dark-600">
            <Flame className={`w-5 h-5 ${streak > 0 ? 'text-neon-orange streak-fire' : 'text-gray-500'}`} />
            <span className="text-lg font-bold text-white">{streak}</span>
            <span className="text-sm text-gray-400">day streak</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    active
                      ? 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white border border-neon-cyan/30'
                      : 'text-gray-400 hover:text-white hover:bg-dark-700'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-neon-cyan' : ''}`} />
                  <span className="font-medium">{item.label}</span>
                  {item.isNew && (
                    <span className="ml-auto px-1.5 py-0.5 text-[10px] font-bold bg-neon-green/20 text-neon-green rounded">
                      NEW
                    </span>
                  )}
                  {active && !item.isNew && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto w-1.5 h-1.5 rounded-full bg-neon-cyan"
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="p-4 border-t border-dark-600 space-y-2">
        {/* Admin Link - Only visible to admins */}
        {user?.role === 'admin' && (
          <Link
            to="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all"
          >
            <Shield className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Admin Panel</span>
          </Link>
        )}

        <Link
          to="/profile"
          className="flex items-center gap-3 p-3 rounded-xl hover:bg-dark-700 transition-all"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium truncate">{user?.name || 'User'}</p>
            <p className="text-xs text-gray-400 truncate">{user?.email}</p>
          </div>
          <Settings className="w-5 h-5 text-gray-400" />
        </Link>
      </div>
    </aside>
  )
}
