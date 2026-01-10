import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, TrendingUp, CreditCard } from 'lucide-react'
import api from '../../services/api'

export default function AdminPayments() {
  const [payments, setPayments] = useState([])
  const [summary, setSummary] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPayments()
  }, [])

  const fetchPayments = async () => {
    try {
      const response = await api.get('/admin/payments')
      setPayments(response.data.payments || [])
      setSummary(response.data.summary || {})
    } catch (error) {
      console.error('Error fetching payments:', error)
      setPayments([])
      setSummary({})
    } finally {
      setLoading(false)
    }
  }

  const summaryCards = [
    { label: 'Total Subscribers', value: summary?.totalSubscribers || 0, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Active Subscriptions', value: summary?.activeSubscriptions || 0, icon: CreditCard, color: 'from-green-500 to-emerald-500' },
    { label: 'Monthly Revenue', value: `$${summary?.monthlyRevenue || 0}`, icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { label: 'Total Revenue', value: `$${summary?.totalRevenue || 0}`, icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
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
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((stat, index) => {
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

      {/* Revenue Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
          <div>
            <p className="text-gray-400">Subscription Price</p>
            <p className="text-4xl font-bold text-white">$7<span className="text-lg text-gray-400">/month</span></p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-gray-400">PayPal Plan ID</p>
            <p className="text-sm font-mono text-green-400">P-64X11977RY323041GNFRGTDQ</p>
          </div>
        </div>
      </motion.div>

      {/* Subscribers List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-dark-800 border border-dark-600 rounded-2xl overflow-hidden"
      >
        <div className="px-6 py-4 border-b border-dark-600">
          <h2 className="text-xl font-bold text-white">Subscribers</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-700">
              <tr className="text-left text-gray-400 text-sm">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Subscription ID</th>
                <th className="px-6 py-4">Start Date</th>
                <th className="px-6 py-4">End Date</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {payments.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                    No subscribers yet
                  </td>
                </tr>
              ) : (
                payments.map((payment) => {
                  const isActive = !payment.subscriptionEndDate || new Date(payment.subscriptionEndDate) > new Date()
                  return (
                    <tr key={payment._id} className="text-white hover:bg-dark-700/50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center font-bold text-sm">
                            {payment.name?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <p className="font-medium">{payment.name}</p>
                            <p className="text-sm text-gray-400">{payment.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-mono text-sm text-gray-400">
                          {payment.subscriptionId || 'N/A'}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {payment.subscriptionStartDate
                          ? new Date(payment.subscriptionStartDate).toLocaleDateString()
                          : 'N/A'}
                      </td>
                      <td className="px-6 py-4 text-gray-400">
                        {payment.subscriptionEndDate
                          ? new Date(payment.subscriptionEndDate).toLocaleDateString()
                          : 'Ongoing'}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isActive
                            ? 'bg-green-500/20 text-green-400'
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {isActive ? 'Active' : 'Expired'}
                        </span>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
