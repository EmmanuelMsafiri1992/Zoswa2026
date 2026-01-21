import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Package,
  Download,
  Eye,
  Clock,
  CheckCircle,
  FileCode,
  FileText,
  Book,
  ExternalLink,
  Search,
  Filter,
  Calendar,
  X,
  ShoppingBag,
  Loader2,
} from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import { studentProjectCategories } from '../data/studentProjects'
import { businessProjectCategories } from '../data/businessProjects'
import api from '../services/api'

// Combined categories for purchases display
const allCategories = [...studentProjectCategories, ...businessProjectCategories]

export default function Purchases() {
  const navigate = useNavigate()
  const { isAuthenticated, user } = useAuthStore()
  const [purchases, setPurchases] = useState([])
  const [filteredPurchases, setFilteredPurchases] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedPurchase, setSelectedPurchase] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=purchases')
    }
  }, [isAuthenticated, navigate])

  // Load purchases from API with fallback to localStorage
  useEffect(() => {
    const fetchPurchases = async () => {
      setIsLoading(true)
      try {
        // Try to fetch from API first
        const response = await api.get('/purchases')
        if (response.data.success && response.data.purchases) {
          setPurchases(response.data.purchases)
          setFilteredPurchases(response.data.purchases)
        }
      } catch (error) {
        // Fallback to localStorage if API fails
        console.log('Using localStorage fallback for purchases')
        const storedPurchases = JSON.parse(localStorage.getItem('zoswa-purchases') || '[]')
        setPurchases(storedPurchases)
        setFilteredPurchases(storedPurchases)
      } finally {
        setIsLoading(false)
      }
    }

    if (isAuthenticated) {
      fetchPurchases()
    }
  }, [isAuthenticated])

  // Filter purchases
  useEffect(() => {
    let result = [...purchases]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.technologies?.some((t) => t.toLowerCase().includes(query))
      )
    }

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    setFilteredPurchases(result)
  }, [purchases, searchQuery, selectedCategory])

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Get unique categories from purchases
  const purchasedCategories = [...new Set(purchases.map((p) => p.category))]

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Purchases</h1>
          <p className="text-gray-400">
            Access and download your purchased projects
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-dark-800 rounded-xl border border-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                <Package className="w-6 h-6 text-neon-cyan" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{purchases.length}</p>
                <p className="text-sm text-gray-500">Total Projects</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-800 rounded-xl border border-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-neon-green/10 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{purchases.length}</p>
                <p className="text-sm text-gray-500">Ready to Download</p>
              </div>
            </div>
          </div>
          <div className="bg-dark-800 rounded-xl border border-white/5 p-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  {purchases.length > 0
                    ? formatDate(purchases[0]?.purchasedAt)
                    : '-'}
                </p>
                <p className="text-sm text-gray-500">Latest Purchase</p>
              </div>
            </div>
          </div>
        </div>

        {isLoading ? (
          /* Loading State */
          <div className="bg-dark-800 rounded-2xl border border-white/5 p-12 text-center">
            <Loader2 className="w-10 h-10 text-neon-cyan animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading your purchases...</p>
          </div>
        ) : purchases.length === 0 ? (
          /* Empty State */
          <div className="bg-dark-800 rounded-2xl border border-white/5 p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-dark-700 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No purchases yet</h3>
            <p className="text-gray-500 mb-6 max-w-md mx-auto">
              You haven't purchased any projects yet. Browse our collection of 200+ world-class projects.
            </p>
            <button
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 font-bold rounded-xl"
            >
              Browse Projects
            </button>
          </div>
        ) : (
          <>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search your purchases..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-dark-800 border border-white/10 rounded-xl text-white focus:outline-none focus:border-neon-cyan/50"
              >
                <option value="all">All Categories</option>
                {purchasedCategories.map((catId) => {
                  const cat = allCategories.find((c) => c.id === catId)
                  return (
                    <option key={catId} value={catId}>
                      {cat?.name || catId}
                    </option>
                  )
                })}
              </select>
            </div>

            {/* Purchases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPurchases.map((purchase, index) => {
                const category = allCategories.find(
                  (c) => c.id === purchase.category
                )
                return (
                  <motion.div
                    key={`${purchase.id}-${purchase.purchasedAt}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-dark-800 rounded-2xl border border-white/5 overflow-hidden hover:border-white/10 transition-colors"
                  >
                    {/* Header with status */}
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${category?.color}20`,
                          color: category?.color,
                        }}
                      >
                        {category?.name}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-neon-green">
                        <CheckCircle className="w-3 h-3" />
                        Purchased
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {purchase.title}
                      </h3>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                        {purchase.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {purchase.technologies?.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Purchase date */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <Clock className="w-3 h-3" />
                        Purchased on {formatDate(purchase.purchasedAt)}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedPurchase(purchase)}
                          className="flex-1 py-2.5 bg-dark-700 text-white text-sm font-medium rounded-lg hover:bg-dark-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          View Details
                        </button>
                        <button
                          className="flex-1 py-2.5 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* No results */}
            {filteredPurchases.length === 0 && purchases.length > 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No purchases match your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="mt-4 text-neon-cyan hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Purchase Detail Modal */}
      <AnimatePresence>
        {selectedPurchase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setSelectedPurchase(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-dark-800 rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPurchase(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="p-8 border-b border-white/5">
                {(() => {
                  const category = allCategories.find(
                    (c) => c.id === selectedPurchase.category
                  )
                  return (
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{
                          backgroundColor: `${category?.color}20`,
                          color: category?.color,
                        }}
                      >
                        {category?.name}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-neon-green">
                        <CheckCircle className="w-4 h-4" />
                        Purchased
                      </span>
                    </div>
                  )
                })()}
                <h2 className="text-2xl font-bold text-white mb-2">
                  {selectedPurchase.title}
                </h2>
                <p className="text-gray-400">{selectedPurchase.description}</p>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Technologies */}
                <div>
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-neon-cyan" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPurchase.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-dark-700 rounded-lg text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedPurchase.features && (
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-neon-green" />
                      Features
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedPurchase.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Deliverables */}
                {selectedPurchase.deliverables && (
                  <div>
                    <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Package className="w-5 h-5 text-purple-400" />
                      Included Files
                    </h3>
                    <div className="space-y-2">
                      {selectedPurchase.deliverables.map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <FileText className="w-4 h-4 text-gray-500" />
                            <span className="text-gray-300 text-sm">{item}</span>
                          </div>
                          <button className="text-neon-cyan text-xs hover:underline">
                            Download
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Purchase Info */}
                <div className="p-4 bg-dark-900/50 rounded-xl">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Purchase Date</span>
                    <span className="text-white">
                      {formatDate(selectedPurchase.purchasedAt)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-500">Order ID</span>
                    <span className="text-white font-mono text-xs">
                      {selectedPurchase.orderId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-500">Amount Paid</span>
                    <span className="text-neon-green font-bold">
                      ${selectedPurchase.price}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-white/5 bg-dark-900/50">
                <button
                  className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  <Download className="w-5 h-5" />
                  Download Complete Package
                </button>
                <p className="text-xs text-gray-500 text-center mt-3">
                  Includes all source code, documentation, and project files
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
