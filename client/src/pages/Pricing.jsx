import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PayPalButtons } from '@paypal/react-paypal-js'
import {
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
  Clock,
  BookOpen,
  Award,
  Users,
  ArrowRight,
  X,
} from 'lucide-react'
import Card, { CardBody } from '../components/ui/Card'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { useAuthStore } from '../store/authStore'
import toast from 'react-hot-toast'

export default function Pricing() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, user, updateUser } = useAuthStore()
  const [isProcessing, setIsProcessing] = useState(false)

  const trialExpired = location.state?.expired

  const features = [
    { icon: BookOpen, text: 'All 6 learning tracks' },
    { icon: Zap, text: 'Interactive code editor' },
    { icon: Clock, text: 'Unlimited practice time' },
    { icon: Award, text: 'Certificates on completion' },
    { icon: Users, text: 'Community access' },
    { icon: Shield, text: 'Cancel anytime' },
  ]

  const handlePayPalApprove = async (data, actions) => {
    setIsProcessing(true)
    try {
      // In production, you would verify this subscription on your backend
      const subscription = await actions.subscription.get()
      console.log('Subscription:', subscription)

      // Update user subscription status
      updateUser({ isSubscribed: true, subscriptionId: subscription.id })

      toast.success('Subscription activated! Welcome to Zoswa Premium!')
      navigate('/dashboard')
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePayPalError = (err) => {
    console.error('PayPal error:', err)
    toast.error('Payment failed. Please try again.')
  }

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto">
        {/* Trial Expired Banner */}
        {trialExpired && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-neon-orange/20 border border-neon-orange/50 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-neon-orange" />
              <div>
                <p className="text-white font-medium">Your free trial has ended</p>
                <p className="text-gray-400 text-sm">Subscribe now to continue learning</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge variant="gradient" size="lg" className="mb-4">
            <Sparkles className="w-4 h-4 mr-1" />
            Simple Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Invest in Your <span className="text-neon-cyan">Future</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Unlimited access to all courses, projects, and certificates.
            Less than a coffee a day.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <Card className="relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-pink" />

            {/* Popular Badge */}
            <div className="absolute top-4 right-4">
              <Badge variant="success">Most Popular</Badge>
            </div>

            <CardBody className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Premium Access</h2>
                <p className="text-gray-400">Everything you need to become a developer</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold text-white">$7</span>
                  <span className="text-xl text-gray-400">/month</span>
                </div>
                <p className="text-neon-green text-sm mt-2">
                  Cancel anytime, no questions asked
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {features.map((feature) => {
                  const Icon = feature.icon
                  return (
                    <div key={feature.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-neon-cyan/20 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-neon-cyan" />
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                      <CheckCircle2 className="w-5 h-5 text-neon-green ml-auto" />
                    </div>
                  )
                })}
              </div>

              {/* PayPal Button or Sign Up */}
              {isAuthenticated ? (
                user?.isSubscribed ? (
                  <div className="text-center p-4 bg-neon-green/20 rounded-xl border border-neon-green/30">
                    <CheckCircle2 className="w-8 h-8 text-neon-green mx-auto mb-2" />
                    <p className="text-white font-medium">You're subscribed!</p>
                    <p className="text-gray-400 text-sm">Enjoy unlimited access</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <PayPalButtons
                      style={{
                        shape: 'rect',
                        color: 'blue',
                        layout: 'vertical',
                        label: 'subscribe',
                      }}
                      createSubscription={(data, actions) => {
                        return actions.subscription.create({
                          plan_id: 'P-XXXXXXXXXXXXXX', // Replace with your PayPal plan ID
                        })
                      }}
                      onApprove={handlePayPalApprove}
                      onError={handlePayPalError}
                    />
                    <p className="text-center text-sm text-gray-500">
                      Secure payment powered by PayPal
                    </p>
                  </div>
                )
              ) : (
                <Button
                  size="xl"
                  className="w-full"
                  onClick={() => navigate('/register')}
                >
                  Start 7-Day Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              )}
            </CardBody>
          </Card>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'Can I try before I subscribe?',
                a: 'Yes! You get a 7-day free trial with full access to everything. No credit card required.',
              },
              {
                q: 'How do I cancel my subscription?',
                a: 'You can cancel anytime from your PayPal account or contact us. No questions asked.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept PayPal, which also supports credit/debit cards through PayPal checkout.',
              },
              {
                q: 'Do I get a certificate?',
                a: 'Yes! Complete any learning track and receive a downloadable certificate of completion.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-dark-700 rounded-xl border border-dark-600">
                <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                <p className="text-gray-400 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-400">
              <Shield className="w-5 h-5" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="w-5 h-5" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Users className="w-5 h-5" />
              <span>50K+ Learners</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
