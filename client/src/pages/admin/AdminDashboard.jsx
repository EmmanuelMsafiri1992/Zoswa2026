import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, CreditCard, TrendingUp, UserPlus, DollarSign, Percent } from 'lucide-react'
import api from '../../services/api'

export default function AdminDashboard() {
  const [stats, setStats] = useState(null)
  const [recentUsers, setRecentUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await api.get('/admin/stats')
      setStats(response.data.stats)
      setRecentUsers(response.data.recentUsers)
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    { label: 'Total Users', value: stats?.totalUsers || 0, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Subscribers', value: stats?.activeSubscribers || 0, icon: CreditCard, color: 'from-green-500 to-emerald-500' },
    { label: 'Trial Users', value: stats?.trialUsers || 0, icon: UserPlus, color: 'from-purple-500 to-pink-500' },
    { label: 'Monthly Revenue', value: `$${stats?.monthlyRevenue || 0}`, icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { label: 'New This Week', value: stats?.newUsersThisWeek || 0, icon: TrendingUp, color: 'from-red-500 to-pink-500' },
    { label: 'Conversion Rate', value: `${stats?.conversionRate || 0}%`, icon: Percent, color: 'from-indigo-500 to-purple-500' },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-800 border border-dark-600 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Recent Users */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-dark-800 border border-dark-600 rounded-2xl p-6"
      >
        <h2 className="text-xl font-bold text-white mb-4">Recent Signups</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-400 text-sm">
                <th className="pb-4">User</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Joined</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {recentUsers.map((user) => (
                <tr key={user._id} className="text-white">
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold">
                        {user.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      user.isSubscribed
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {user.isSubscribed ? 'Subscribed' : 'Trial'}
                    </span>
                  </td>
                  <td className="py-4 text-gray-400">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
