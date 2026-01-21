import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ShoppingCart,
  Trash2,
  ArrowRight,
  Package,
  Clock,
} from 'lucide-react'
import { useCartStore } from '../../store/cartStore'
import { useAuthStore } from '../../store/authStore'
import { studentProjectCategories } from '../../data/studentProjects'
import { businessProjectCategories } from '../../data/businessProjects'

// Combined categories for cart display
const allCategories = [...studentProjectCategories, ...businessProjectCategories]

export default function CartDrawer() {
  const navigate = useNavigate()
  const { items, isCartOpen, closeCart, removeItem, getCartTotal, getCartCount } = useCartStore()
  const { isAuthenticated } = useAuthStore()

  const handleCheckout = () => {
    closeCart()
    if (!isAuthenticated) {
      navigate('/register?redirect=checkout')
    } else {
      navigate('/checkout')
    }
  }

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-dark-900/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-dark-800 border-l border-white/10 z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-neon-cyan" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Your Cart</h2>
                  <p className="text-sm text-gray-500">{getCartCount()} projects</p>
                </div>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-dark-700 flex items-center justify-center mb-4">
                    <Package className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">
                    Browse our projects and add some to your cart!
                  </p>
                  <button
                    onClick={() => {
                      closeCart()
                      navigate('/projects')
                    }}
                    className="px-6 py-3 bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan rounded-xl hover:bg-neon-cyan/20 transition-colors"
                  >
                    Browse Projects
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => {
                    const category = allCategories.find(
                      (c) => c.id === item.category
                    )
                    return (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        className="bg-dark-700/50 rounded-xl p-4 border border-white/5"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <span
                              className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
                              style={{
                                backgroundColor: `${category?.color}20`,
                                color: category?.color,
                              }}
                            >
                              {category?.name}
                            </span>
                            <h4 className="text-white font-semibold text-sm mb-1 truncate">
                              {item.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs text-gray-500">
                              <Clock className="w-3 h-3" />
                              {item.duration}
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <p className="text-lg font-bold text-white">${item.price}</p>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="mt-2 p-1.5 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-white/5 bg-dark-900/50">
                {/* Summary */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">${getCartTotal()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Processing fee</span>
                    <span className="text-neon-green">Free</span>
                  </div>
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-white">${getCartTotal()}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                >
                  {isAuthenticated ? 'Proceed to Checkout' : 'Sign up to Checkout'}
                  <ArrowRight className="w-5 h-5" />
                </button>

                {!isAuthenticated && (
                  <p className="text-xs text-gray-500 text-center mt-3">
                    Already have an account?{' '}
                    <button
                      onClick={() => {
                        closeCart()
                        navigate('/login?redirect=checkout')
                      }}
                      className="text-neon-cyan hover:underline"
                    >
                      Sign in
                    </button>
                  </p>
                )}

                {/* What's included */}
                <div className="mt-6 pt-4 border-t border-white/5">
                  <p className="text-xs text-gray-500 mb-3">Each project includes:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['Source code', 'Documentation', 'Proposal', 'Support'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-neon-green" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
