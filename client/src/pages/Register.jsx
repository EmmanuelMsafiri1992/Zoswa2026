import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { User, Mail, Lock, Code2, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
import { useAuthStore } from '../store/authStore'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import toast from 'react-hot-toast'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { register, isLoading } = useAuthStore()
  const navigate = useNavigate()

  const benefits = [
    '7 days of unlimited access',
    'All 6 learning tracks included',
    'Interactive code editor',
    'No credit card required',
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    const result = await register(name, email, password)

    if (result.success) {
      toast.success('Welcome to Zoswa! Your 7-day trial has started.')
      navigate('/dashboard')
    } else {
      toast.error(result.error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden lg:block"
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-neon-green/20 rounded-full border border-neon-green/30 mb-4">
              <Sparkles className="w-4 h-4 text-neon-green" />
              <span className="text-sm text-neon-green font-medium">Start Free Trial</span>
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Begin Your
              <br />
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Coding Journey
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Join 50,000+ learners mastering coding skills with hands-on practice.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-neon-green" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>

          {/* Preview Card */}
          <div className="bg-dark-800 border border-dark-600 rounded-2xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Code2 className="w-6 h-6 text-dark-900" />
              </div>
              <div>
                <p className="text-white font-semibold">Start with basics</p>
                <p className="text-sm text-gray-400">or jump to advanced topics</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Frontend', 'Backend', 'DevOps'].map((track) => (
                <div
                  key={track}
                  className="px-3 py-2 bg-dark-700 rounded-lg text-center text-sm text-gray-300 border border-dark-600"
                >
                  {track}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Logo for mobile */}
          <div className="text-center mb-8 lg:hidden">
            <Link to="/" className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
                <Code2 className="w-7 h-7 text-dark-900" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                Zoswa
              </span>
            </Link>
          </div>

          <div className="bg-dark-800 border border-dark-600 rounded-2xl p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Create Your Account</h2>
              <p className="text-gray-400">Start your 7-day free trial today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                icon={User}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                icon={Mail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                icon={Lock}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                icon={Lock}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 w-4 h-4 rounded border-dark-600 bg-dark-700 text-neon-cyan focus:ring-neon-cyan/50"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-400">
                  I agree to the{' '}
                  <Link to="/terms" className="text-neon-cyan hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-neon-cyan hover:underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                loading={isLoading}
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link to="/login" className="text-neon-cyan hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
