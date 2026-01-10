import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Sparkles, X } from 'lucide-react'
import { useState } from 'react'

export default function TrialBanner({ daysLeft }) {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  const urgency = daysLeft <= 2 ? 'high' : daysLeft <= 4 ? 'medium' : 'low'

  const colors = {
    high: 'from-red-500/20 to-neon-pink/20 border-red-500/50',
    medium: 'from-neon-orange/20 to-neon-yellow/20 border-neon-orange/50',
    low: 'from-neon-cyan/20 to-neon-purple/20 border-neon-cyan/50',
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`bg-gradient-to-r ${colors[urgency]} border-b py-3 px-6 flex items-center justify-between`}
    >
      <div className="flex items-center gap-3">
        <Clock className={`w-5 h-5 ${urgency === 'high' ? 'text-red-400' : 'text-neon-cyan'}`} />
        <p className="text-white text-sm">
          <span className="font-semibold">
            {daysLeft === 1 ? 'Last day' : `${daysLeft} days left`}
          </span>
          {' '}of your free trial.{' '}
          <span className="text-gray-300">Unlock unlimited access for just $7/month!</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-900 font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/25 transition-all text-sm"
        >
          <Sparkles className="w-4 h-4" />
          Subscribe Now
        </Link>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  )
}
