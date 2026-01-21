import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Filter,
  X,
  ChevronRight,
  ChevronDown,
  Globe,
  Smartphone,
  Brain,
  BarChart3,
  Cpu,
  Link as LinkIcon,
  Shield,
  Cloud,
  Heart,
  DollarSign,
  GraduationCap,
  FileCode,
  FileText,
  Clock,
  CheckCircle,
  ArrowUpRight,
  SlidersHorizontal,
  Grid,
  List,
  Package,
  ShoppingCart,
  Check,
} from 'lucide-react'
import { studentProjects, studentProjectCategories } from '../data/studentProjects'
import { useCartStore } from '../store/cartStore'
import { useAuthStore } from '../store/authStore'

export default function Projects() {
  const navigate = useNavigate()
  const { addItem, isInCart, openCart } = useCartStore()
  const { isAuthenticated } = useAuthStore()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 500])
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Icon mapping for project categories
  const categoryIcons = {
    Globe, Smartphone, Brain, BarChart3, Cpu, LinkIcon, Shield, Cloud, Heart, DollarSign
  }

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let result = [...studentProjects]

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.technologies.some((t) => t.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      result = result.filter((p) => p.difficulty === selectedDifficulty)
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        // Keep original order for 'popular'
        break
    }

    return result
  }, [searchQuery, selectedCategory, selectedDifficulty, priceRange, sortBy])

  const difficulties = ['Beginner', 'Intermediate', 'Advanced']

  // Handle add to cart
  const handleAddToCart = (project, e) => {
    e?.stopPropagation()
    if (isInCart(project.id)) {
      openCart()
      return
    }
    addItem(project)
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <GraduationCap className="w-6 h-6 text-neon-green" />
            <span className="text-neon-green font-mono text-sm">FINAL YEAR PROJECTS</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white mb-4">
            World-Class Projects.
            <br />
            <span className="bg-gradient-to-r from-neon-cyan via-purple-400 to-neon-pink bg-clip-text text-transparent">
              Ready to Submit.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            200+ complete project packages with source code, documentation, proposals,
            and everything you need to ace your final year.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search projects by name, technology, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-dark-800 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Categories */}
              <div className="bg-dark-800/50 rounded-2xl border border-white/5 p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <Package className="w-4 h-4 text-neon-cyan" />
                  Categories
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-neon-cyan/10 text-neon-cyan'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700'
                    }`}
                  >
                    All Categories ({studentProjects.length})
                  </button>
                  {studentProjectCategories.map((cat) => {
                    const IconComponent = categoryIcons[cat.icon] || Globe
                    const count = studentProjects.filter((p) => p.category === cat.id).length
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between ${
                          selectedCategory === cat.id
                            ? 'bg-dark-700 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-dark-700'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4" style={{ color: cat.color }} />
                          {cat.name}
                        </span>
                        <span className="text-xs text-gray-500">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Difficulty */}
              <div className="bg-dark-800/50 rounded-2xl border border-white/5 p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-purple-400" />
                  Difficulty
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedDifficulty('all')}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      selectedDifficulty === 'all'
                        ? 'bg-purple-500/10 text-purple-400'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700'
                    }`}
                  >
                    All Levels
                  </button>
                  {difficulties.map((diff) => (
                    <button
                      key={diff}
                      onClick={() => setSelectedDifficulty(diff)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                        selectedDifficulty === diff
                          ? 'bg-dark-700 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-dark-700'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          diff === 'Beginner'
                            ? 'bg-green-400'
                            : diff === 'Intermediate'
                            ? 'bg-yellow-400'
                            : 'bg-red-400'
                        }`}
                      />
                      {diff}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-dark-800/50 rounded-2xl border border-white/5 p-6">
                <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-neon-green" />
                  Price Range
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 bg-dark-700 rounded-lg text-white text-sm border border-white/10 focus:outline-none focus:border-neon-cyan/50"
                      placeholder="Min"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                      className="w-full px-3 py-2 bg-dark-700 rounded-lg text-white text-sm border border-white/10 focus:outline-none focus:border-neon-cyan/50"
                      placeholder="Max"
                    />
                  </div>
                  <div className="flex gap-2">
                    {[
                      [0, 100],
                      [100, 150],
                      [150, 200],
                    ].map(([min, max]) => (
                      <button
                        key={`${min}-${max}`}
                        onClick={() => setPriceRange([min, max])}
                        className={`flex-1 px-2 py-1.5 rounded text-xs transition-colors ${
                          priceRange[0] === min && priceRange[1] === max
                            ? 'bg-neon-green/10 text-neon-green border border-neon-green/30'
                            : 'bg-dark-700 text-gray-400 hover:text-white border border-white/5'
                        }`}
                      >
                        ${min}-${max}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-gray-400 hover:text-white"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>

                <p className="text-gray-500 text-sm">
                  <span className="text-white font-semibold">{filteredProjects.length}</span> projects found
                </p>
              </div>

              <div className="flex items-center gap-3">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-dark-800 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-neon-cyan/50"
                >
                  <option value="popular">Most Popular</option>
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>

                {/* View Toggle */}
                <div className="hidden sm:flex items-center bg-dark-800 border border-white/10 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid'
                        ? 'bg-neon-cyan/10 text-neon-cyan'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list'
                        ? 'bg-neon-cyan/10 text-neon-cyan'
                        : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Filters Panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="lg:hidden overflow-hidden mb-6"
                >
                  <div className="bg-dark-800/50 rounded-2xl border border-white/5 p-6 space-y-6">
                    {/* Category Pills */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Category</h4>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => setSelectedCategory('all')}
                          className={`px-3 py-1.5 rounded-full text-sm ${
                            selectedCategory === 'all'
                              ? 'bg-neon-cyan text-dark-900'
                              : 'bg-dark-700 text-gray-400'
                          }`}
                        >
                          All
                        </button>
                        {studentProjectCategories.map((cat) => (
                          <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              selectedCategory === cat.id
                                ? 'text-dark-900'
                                : 'bg-dark-700 text-gray-400'
                            }`}
                            style={{
                              backgroundColor: selectedCategory === cat.id ? cat.color : undefined,
                            }}
                          >
                            {cat.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Difficulty */}
                    <div>
                      <h4 className="text-white font-semibold mb-3">Difficulty</h4>
                      <div className="flex gap-2">
                        <button
                          onClick={() => setSelectedDifficulty('all')}
                          className={`px-3 py-1.5 rounded-full text-sm ${
                            selectedDifficulty === 'all'
                              ? 'bg-purple-500 text-white'
                              : 'bg-dark-700 text-gray-400'
                          }`}
                        >
                          All
                        </button>
                        {difficulties.map((diff) => (
                          <button
                            key={diff}
                            onClick={() => setSelectedDifficulty(diff)}
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              selectedDifficulty === diff
                                ? diff === 'Beginner'
                                  ? 'bg-green-500 text-white'
                                  : diff === 'Intermediate'
                                  ? 'bg-yellow-500 text-dark-900'
                                  : 'bg-red-500 text-white'
                                : 'bg-dark-700 text-gray-400'
                            }`}
                          >
                            {diff}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Projects Grid */}
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              <AnimatePresence mode="wait">
                {filteredProjects.map((project, index) => {
                  const category = studentProjectCategories.find((c) => c.id === project.category)

                  if (viewMode === 'list') {
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: index * 0.02 }}
                        whileHover={{ x: 5 }}
                        className="group bg-dark-800/50 rounded-xl border border-white/5 hover:border-white/10 p-6 cursor-pointer"
                        onClick={() => setSelectedProject(project)}
                      >
                        <div className="flex items-start justify-between gap-6">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className="px-2 py-1 rounded text-xs font-medium"
                                style={{
                                  backgroundColor: `${category?.color}20`,
                                  color: category?.color,
                                }}
                              >
                                {category?.name}
                              </span>
                              <span
                                className={`px-2 py-0.5 rounded text-xs ${
                                  project.difficulty === 'Advanced'
                                    ? 'bg-red-500/10 text-red-400'
                                    : project.difficulty === 'Intermediate'
                                    ? 'bg-yellow-500/10 text-yellow-400'
                                    : 'bg-green-500/10 text-green-400'
                                }`}
                              >
                                {project.difficulty}
                              </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.slice(0, 5).map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-500"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-2xl font-bold text-white">${project.price}</p>
                            <p className="text-xs text-gray-500 mt-1 flex items-center gap-1 justify-end">
                              <Clock className="w-3 h-3" />
                              {project.duration}
                            </p>
                            <button
                              onClick={(e) => handleAddToCart(project, e)}
                              className={`mt-3 px-4 py-2 text-sm font-semibold rounded-lg flex items-center gap-2 transition-all ${
                                isInCart(project.id)
                                  ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                                  : 'bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 hover:opacity-90'
                              }`}
                            >
                              {isInCart(project.id) ? (
                                <>
                                  <Check className="w-4 h-4" />
                                  In Cart
                                </>
                              ) : (
                                <>
                                  <ShoppingCart className="w-4 h-4" />
                                  Add
                                </>
                              )}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  }

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: index * 0.02 }}
                      whileHover={{ y: -5 }}
                      className="group bg-dark-800/50 rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      {/* Category badge */}
                      <div
                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium z-10"
                        style={{
                          backgroundColor: `${category?.color}20`,
                          color: category?.color,
                        }}
                      >
                        {category?.name}
                      </div>

                      <div className="p-6 relative">
                        <h3 className="text-lg font-bold text-white mb-3 pr-20 group-hover:text-neon-cyan transition-colors">
                          {project.title}
                        </h3>

                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, 4).map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-500"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-500">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {project.duration}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded ${
                                project.difficulty === 'Advanced'
                                  ? 'bg-red-500/10 text-red-400'
                                  : project.difficulty === 'Intermediate'
                                  ? 'bg-yellow-500/10 text-yellow-400'
                                  : 'bg-green-500/10 text-green-400'
                              }`}
                            >
                              {project.difficulty}
                            </span>
                          </div>
                          <span className="text-xl font-bold text-white">${project.price}</span>
                        </div>

                        {/* Add to Cart button */}
                        <button
                          onClick={(e) => handleAddToCart(project, e)}
                          className={`mt-4 w-full py-2.5 text-sm font-semibold rounded-lg flex items-center justify-center gap-2 transition-all ${
                            isInCart(project.id)
                              ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                              : 'bg-dark-700 text-white hover:bg-dark-600 border border-white/10'
                          }`}
                        >
                          {isInCart(project.id) ? (
                            <>
                              <Check className="w-4 h-4" />
                              In Cart
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="w-4 h-4" />
                              Add to Cart
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto mb-6 bg-dark-800 rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                    setSelectedDifficulty('all')
                    setPriceRange([0, 500])
                  }}
                  className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-lg hover:bg-neon-cyan/20 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-dark-800 rounded-3xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Header */}
              <div className="p-8 border-b border-white/5">
                {(() => {
                  const category = studentProjectCategories.find(
                    (c) => c.id === selectedProject.category
                  )
                  return (
                    <span
                      className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                      style={{
                        backgroundColor: `${category?.color}20`,
                        color: category?.color,
                      }}
                    >
                      {category?.name}
                    </span>
                  )
                })()}
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400">{selectedProject.description}</p>

                <div className="flex items-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {selectedProject.duration}
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-sm ${
                      selectedProject.difficulty === 'Advanced'
                        ? 'bg-red-500/10 text-red-400'
                        : selectedProject.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/10 text-yellow-400'
                        : 'bg-green-500/10 text-green-400'
                    }`}
                  >
                    {selectedProject.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FileCode className="w-5 h-5 text-neon-cyan" />
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, i) => (
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
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-neon-green" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-gray-400 text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-purple-400" />
                    What You Get
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.deliverables.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 bg-dark-700/50 rounded-lg"
                      >
                        <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 border-t border-white/5 bg-dark-900/50">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 text-sm">Complete Package</p>
                    <p className="text-4xl font-black text-white">${selectedProject.price}</p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="px-6 py-3 bg-dark-700 text-gray-300 rounded-xl hover:bg-dark-600 transition-colors"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => handleAddToCart(selectedProject)}
                      className={`px-8 py-3 font-bold rounded-xl flex items-center gap-2 transition-all ${
                        isInCart(selectedProject.id)
                          ? 'bg-neon-green/20 text-neon-green border border-neon-green/30'
                          : 'bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 hover:opacity-90'
                      }`}
                    >
                      {isInCart(selectedProject.id) ? (
                        <>
                          <Check className="w-4 h-4" />
                          In Cart
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
