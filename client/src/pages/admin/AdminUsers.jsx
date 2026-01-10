import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Search, MoreVertical, UserCheck, UserX, Trash2, Gift, X, ChevronLeft, ChevronRight } from 'lucide-react'
import api from '../../services/api'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [pagination, setPagination] = useState({ page: 1, pages: 1, total: 0 })
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [actionLoading, setActionLoading] = useState(false)

  useEffect(() => {
    fetchUsers()
  }, [pagination.page, filter])

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await api.get('/admin/users', {
        params: { page: pagination.page, limit: 20, filter, search }
      })
      setUsers(response.data.users || [])
      setPagination(response.data.pagination || { page: 1, pages: 1, total: 0 })
    } catch (error) {
      console.error('Error fetching users:', error)
      setUsers([])
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    fetchUsers()
  }

  const handleAction = async (action, userId) => {
    setActionLoading(true)
    try {
      switch (action) {
        case 'grant':
          await api.post(`/admin/users/${userId}/grant-subscription`, { months: 1 })
          break
        case 'revoke':
          await api.post(`/admin/users/${userId}/revoke-subscription`)
          break
        case 'activate':
          await api.put(`/admin/users/${userId}`, { isActive: true })
          break
        case 'deactivate':
          await api.put(`/admin/users/${userId}`, { isActive: false })
          break
        case 'makeAdmin':
          await api.put(`/admin/users/${userId}`, { role: 'admin' })
          break
        case 'removeAdmin':
          await api.put(`/admin/users/${userId}`, { role: 'user' })
          break
        case 'delete':
          if (window.confirm('Are you sure you want to delete this user? This cannot be undone.')) {
            await api.delete(`/admin/users/${userId}`)
          }
          break
      }
      fetchUsers()
      setShowModal(false)
    } catch (error) {
      alert(error.response?.data?.message || 'Action failed')
    } finally {
      setActionLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <form onSubmit={handleSearch} className="flex-1">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-dark-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500/50"
            />
          </div>
        </form>
        <div className="flex gap-2">
          {['all', 'subscribed', 'trial', 'admin'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === f
                  ? 'bg-red-500 text-white'
                  : 'bg-dark-800 text-gray-400 hover:text-white'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-dark-800 border border-dark-600 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-700">
              <tr className="text-left text-gray-400 text-sm">
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Subscription</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    Loading...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user._id} className="text-white hover:bg-dark-700/50">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold text-sm">
                          {user.name?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.role === 'admin'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.isActive
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {user.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        user.isSubscribed
                          ? 'bg-green-500/20 text-green-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {user.isSubscribed ? 'Subscribed' : 'Trial'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => { setSelectedUser(user); setShowModal(true) }}
                        className="p-2 hover:bg-dark-600 rounded-lg transition-colors"
                      >
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-dark-600">
            <p className="text-sm text-gray-400">
              Showing {users.length} of {pagination.total} users
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPagination(p => ({ ...p, page: p.page - 1 }))}
                disabled={pagination.page === 1}
                className="p-2 bg-dark-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <span className="px-4 py-2 text-white">
                {pagination.page} / {pagination.pages}
              </span>
              <button
                onClick={() => setPagination(p => ({ ...p, page: p.page + 1 }))}
                disabled={pagination.page === pagination.pages}
                className="p-2 bg-dark-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Action Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-dark-800 border border-dark-600 rounded-2xl w-full max-w-md p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Manage User</h3>
              <button onClick={() => setShowModal(false)} className="p-2 hover:bg-dark-700 rounded-lg">
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-dark-600">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-bold">
                {selectedUser.name?.charAt(0).toUpperCase() || 'U'}
              </div>
              <div>
                <p className="font-medium text-white">{selectedUser.name}</p>
                <p className="text-sm text-gray-400">{selectedUser.email}</p>
              </div>
            </div>

            <div className="space-y-2">
              {/* Subscription Actions */}
              {selectedUser.isSubscribed ? (
                <button
                  onClick={() => handleAction('revoke', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-yellow-400 transition-colors"
                >
                  <UserX className="w-5 h-5" />
                  Revoke Subscription
                </button>
              ) : (
                <button
                  onClick={() => handleAction('grant', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-green-400 transition-colors"
                >
                  <Gift className="w-5 h-5" />
                  Grant 1 Month Subscription
                </button>
              )}

              {/* Active/Inactive */}
              {selectedUser.isActive ? (
                <button
                  onClick={() => handleAction('deactivate', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-orange-400 transition-colors"
                >
                  <UserX className="w-5 h-5" />
                  Deactivate Account
                </button>
              ) : (
                <button
                  onClick={() => handleAction('activate', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-green-400 transition-colors"
                >
                  <UserCheck className="w-5 h-5" />
                  Activate Account
                </button>
              )}

              {/* Admin Role */}
              {selectedUser.role === 'admin' ? (
                <button
                  onClick={() => handleAction('removeAdmin', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-gray-400 transition-colors"
                >
                  <UserX className="w-5 h-5" />
                  Remove Admin Role
                </button>
              ) : (
                <button
                  onClick={() => handleAction('makeAdmin', selectedUser._id)}
                  disabled={actionLoading}
                  className="w-full flex items-center gap-3 px-4 py-3 bg-dark-700 hover:bg-dark-600 rounded-xl text-purple-400 transition-colors"
                >
                  <UserCheck className="w-5 h-5" />
                  Make Admin
                </button>
              )}

              {/* Delete */}
              <button
                onClick={() => handleAction('delete', selectedUser._id)}
                disabled={actionLoading}
                className="w-full flex items-center gap-3 px-4 py-3 bg-red-500/10 hover:bg-red-500/20 rounded-xl text-red-400 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Delete User
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
