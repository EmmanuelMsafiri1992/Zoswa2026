import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useAuthStore } from '../../store/authStore'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { isAuthenticated, logout } = useAuthStore()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Unique handcrafted design */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Custom logo mark */}
            <div className="relative">
              {/* Outer ring */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-dark-700 to-dark-800 border border-white/10 flex items-center justify-center overflow-hidden group-hover:border-white/20 transition-colors">
                {/* Inner Z shape - stylized */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="relative z-10">
                  <path
                    d="M7 7h10l-10 10h10"
                    stroke="url(#logoGradient)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="logoGradient" x1="7" y1="7" x2="17" y2="17">
                      <stop stopColor="#00fff5" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Pulse dot */}
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            </div>

            {/* Wordmark */}
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">zos</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-purple-400">wa</span>
            </span>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { name: 'Courses', href: '/courses' },
              { name: 'Pricing', href: '/pricing' },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Dashboard
                </button>
                <button
                  onClick={logout}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Sign in
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/register')}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white text-dark-900 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
                >
                  Start free
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden border-t border-white/5"
            >
              <div className="py-4 space-y-1">
                <Link
                  to="/courses"
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </Link>

                <div className="pt-4 mt-4 border-t border-white/5 space-y-2">
                  {isAuthenticated ? (
                    <>
                      <button
                        onClick={() => { navigate('/dashboard'); setIsMobileMenuOpen(false) }}
                        className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        Dashboard
                      </button>
                      <button
                        onClick={() => { logout(); setIsMobileMenuOpen(false) }}
                        className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => { navigate('/login'); setIsMobileMenuOpen(false) }}
                        className="w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        Sign in
                      </button>
                      <button
                        onClick={() => { navigate('/register'); setIsMobileMenuOpen(false) }}
                        className="w-full px-4 py-3 bg-white text-dark-900 font-semibold rounded-lg text-center"
                      >
                        Start free
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
