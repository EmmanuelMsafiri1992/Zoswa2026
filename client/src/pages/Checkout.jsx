import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js'
import {
  ShoppingCart,
  Shield,
  CheckCircle,
  Clock,
  FileCode,
  FileText,
  Package,
  ArrowLeft,
  Loader2,
  CreditCard,
} from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import { useAuthStore } from '../store/authStore'
import { studentProjectCategories } from '../data/studentProjects'
import toast from 'react-hot-toast'

export default function Checkout() {
  const navigate = useNavigate()
  const { items, getCartTotal, getCartCount, clearCart, removeItem } = useCartStore()
  const { isAuthenticated, user } = useAuthStore()
  const [{ isPending }] = usePayPalScriptReducer()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [purchasedItems, setPurchasedItems] = useState([])

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login?redirect=checkout')
    }
  }, [isAuthenticated, navigate])

  // Redirect if cart is empty (and not just completed an order)
  useEffect(() => {
    if (items.length === 0 && !orderComplete) {
      navigate('/projects')
    }
  }, [items.length, orderComplete, navigate])

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: `Zoswa Projects (${getCartCount()} items)`,
          amount: {
            value: getCartTotal().toFixed(2),
            currency_code: 'USD',
          },
        },
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING',
      },
    })
  }

  const onApprove = async (data, actions) => {
    setIsProcessing(true)
    try {
      const details = await actions.order.capture()

      // Store purchased items before clearing cart
      setPurchasedItems([...items])

      // In a real app, you'd send this to your backend
      // await api.post('/purchases/capture-order', { orderId: data.orderID, items })

      // For now, we'll store in localStorage as a demo
      const purchases = JSON.parse(localStorage.getItem('zoswa-purchases') || '[]')
      const newPurchases = items.map(item => ({
        ...item,
        purchasedAt: new Date().toISOString(),
        orderId: data.orderID,
        payerId: details.payer.payer_id,
        status: 'completed',
      }))
      localStorage.setItem('zoswa-purchases', JSON.stringify([...newPurchases, ...purchases]))

      clearCart()
      setOrderComplete(true)
      toast.success('Payment successful!')
    } catch (error) {
      console.error('Payment error:', error)
      toast.error('Payment failed. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const onError = (err) => {
    console.error('PayPal error:', err)
    toast.error('Payment error. Please try again.')
  }

  // Success screen
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-dark-900 pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-neon-green/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-neon-green" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">Payment Successful!</h1>
            <p className="text-gray-400 mb-8">
              Thank you for your purchase. Your projects are now available in your account.
            </p>

            {/* Purchased items summary */}
            <div className="bg-dark-800 rounded-2xl border border-white/10 p-6 mb-8 text-left">
              <h3 className="text-white font-semibold mb-4">Your Purchases</h3>
              <div className="space-y-3">
                {purchasedItems.map((item) => {
                  const category = studentProjectCategories.find((c) => c.id === item.category)
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-dark-700/50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="px-2 py-0.5 rounded text-xs"
                          style={{
                            backgroundColor: `${category?.color}20`,
                            color: category?.color,
                          }}
                        >
                          {category?.name}
                        </span>
                        <span className="text-white text-sm">{item.title}</span>
                      </div>
                      <span className="text-neon-green font-semibold">${item.price}</span>
                    </div>
                  )
                })}
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                <span className="text-gray-400">Total Paid</span>
                <span className="text-xl font-bold text-white">
                  ${purchasedItems.reduce((sum, item) => sum + item.price, 0)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/purchases')}
                className="px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-green text-dark-900 font-bold rounded-xl"
              >
                View My Purchases
              </button>
              <button
                onClick={() => navigate('/projects')}
                className="px-8 py-4 bg-dark-700 text-white rounded-xl hover:bg-dark-600 transition-colors"
              >
                Browse More Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </button>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Order Summary - Left Side */}
          <div className="lg:col-span-3">
            <div className="bg-dark-800 rounded-2xl border border-white/10 overflow-hidden">
              <div className="p-6 border-b border-white/5">
                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <ShoppingCart className="w-5 h-5 text-neon-cyan" />
                  Order Summary
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {items.map((item) => {
                  const category = studentProjectCategories.find((c) => c.id === item.category)
                  return (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 p-4 bg-dark-700/50 rounded-xl"
                    >
                      <div className="flex-1">
                        <span
                          className="inline-block px-2 py-0.5 rounded text-xs font-medium mb-2"
                          style={{
                            backgroundColor: `${category?.color}20`,
                            color: category?.color,
                          }}
                        >
                          {category?.name}
                        </span>
                        <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-2">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {item.duration}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded ${
                              item.difficulty === 'Advanced'
                                ? 'bg-red-500/10 text-red-400'
                                : item.difficulty === 'Intermediate'
                                ? 'bg-yellow-500/10 text-yellow-400'
                                : 'bg-green-500/10 text-green-400'
                            }`}
                          >
                            {item.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-white">${item.price}</p>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-gray-500 hover:text-red-400 mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* What's Included */}
              <div className="p-6 bg-dark-900/50 border-t border-white/5">
                <h3 className="text-white font-semibold mb-4">What's included with each project</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <FileCode className="w-4 h-4 text-neon-cyan" />
                    Complete source code
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <FileText className="w-4 h-4 text-purple-400" />
                    Project documentation
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Package className="w-4 h-4 text-neon-green" />
                    Project proposal
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <Shield className="w-4 h-4 text-yellow-400" />
                    Deployment guide
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment - Right Side */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 space-y-6">
              {/* Price Summary */}
              <div className="bg-dark-800 rounded-2xl border border-white/10 p-6">
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-neon-cyan" />
                  Payment Details
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal ({getCartCount()} projects)</span>
                    <span className="text-white">${getCartTotal()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Processing fee</span>
                    <span className="text-neon-green">Free</span>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex justify-between">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-2xl font-bold text-white">${getCartTotal()}</span>
                  </div>
                </div>

                {/* PayPal Buttons */}
                <div className="space-y-4">
                  {isPending ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="w-8 h-8 text-neon-cyan animate-spin" />
                    </div>
                  ) : (
                    <>
                      {isProcessing && (
                        <div className="flex items-center justify-center py-4 mb-4 bg-dark-700 rounded-xl">
                          <Loader2 className="w-5 h-5 text-neon-cyan animate-spin mr-2" />
                          <span className="text-white">Processing payment...</span>
                        </div>
                      )}
                      <PayPalButtons
                        style={{
                          layout: 'vertical',
                          color: 'gold',
                          shape: 'rect',
                          label: 'pay',
                        }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                        onError={onError}
                        disabled={isProcessing}
                      />
                    </>
                  )}
                </div>

                {/* Customer Info */}
                {user && (
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <p className="text-xs text-gray-500 mb-2">Purchasing as:</p>
                    <p className="text-white font-medium">{user.name}</p>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                )}
              </div>

              {/* Security Badge */}
              <div className="bg-dark-800/50 rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-neon-green" />
                  <div>
                    <p className="text-white font-semibold text-sm">Secure Checkout</p>
                    <p className="text-xs text-gray-500">
                      Your payment is protected by PayPal's buyer protection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
