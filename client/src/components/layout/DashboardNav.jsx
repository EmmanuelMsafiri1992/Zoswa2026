import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Bell, LogOut, ChevronDown } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'

export default function DashboardNav() {
  const [showUserMenu, setShowUserMenu] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const { user, logout } = useAuthStore()
  const navigate = useNavigate()

  const notifications = [
    { id: 1, title: 'New badge unlocked!', message: 'You earned the "First Steps" badge', time: '2h ago', unread: true },
    { id: 2, title: 'Streak milestone!', message: 'You\'re on a 7-day streak!', time: '1d ago', unread: false },
  ]

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <header className="h-16 bg-dark-800 border-b border-dark-600 flex items-center justify-between px-6">
      {/* Search */}
      <div className="relative max-w-md w-full">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search lessons, tracks..."
          className="w-full pl-12 pr-4 py-2.5 bg-dark-700 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            {notifications.some(n => n.unread) && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full" />
            )}
          </button>

          {showNotifications && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 top-full mt-2 w-80 bg-dark-700 border border-dark-600 rounded-xl shadow-xl overflow-hidden z-50"
            >
              <div className="p-4 border-b border-dark-600">
                <h3 className="font-semibold text-white">Notifications</h3>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 border-b border-dark-600 hover:bg-dark-600 cursor-pointer ${
                      notification.unread ? 'bg-dark-600/50' : ''
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {notification.unread && (
                        <span className="w-2 h-2 mt-2 bg-neon-cyan rounded-full flex-shrink-0" />
                      )}
                      <div className={notification.unread ? '' : 'ml-5'}>
                        <p className="text-white font-medium text-sm">{notification.title}</p>
                        <p className="text-gray-400 text-sm">{notification.message}</p>
                        <p className="text-gray-500 text-xs mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-dark-600">
                <button className="w-full text-center text-neon-cyan text-sm hover:underline">
                  View all notifications
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-dark-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-white font-bold text-sm">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <span className="text-white font-medium hidden sm:block">{user?.name?.split(' ')[0]}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>

          {showUserMenu && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-0 top-full mt-2 w-56 bg-dark-700 border border-dark-600 rounded-xl shadow-xl overflow-hidden z-50"
            >
              <div className="p-4 border-b border-dark-600">
                <p className="text-white font-medium">{user?.name}</p>
                <p className="text-gray-400 text-sm truncate">{user?.email}</p>
              </div>
              <div className="p-2">
                <button
                  onClick={() => { navigate('/profile'); setShowUserMenu(false) }}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-600 rounded-lg transition-colors"
                >
                  Profile Settings
                </button>
                <button
                  onClick={() => { navigate('/certificates'); setShowUserMenu(false) }}
                  className="w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-dark-600 rounded-lg transition-colors"
                >
                  My Certificates
                </button>
                <hr className="my-2 border-dark-600" />
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-red-400 hover:text-red-300 hover:bg-dark-600 rounded-lg transition-colors flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}
