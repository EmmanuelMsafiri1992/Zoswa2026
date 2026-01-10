import { motion } from 'framer-motion'

export default function ProgressBar({
  value,
  max = 100,
  size = 'md',
  showLabel = true,
  variant = 'gradient',
  className = '',
}) {
  const percentage = Math.min((value / max) * 100, 100)

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  }

  const variants = {
    gradient: 'bg-gradient-to-r from-neon-cyan to-neon-purple',
    cyan: 'bg-neon-cyan',
    green: 'bg-neon-green',
    purple: 'bg-neon-purple',
    pink: 'bg-neon-pink',
  }

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Progress</span>
          <span className="text-sm font-semibold text-white">{Math.round(percentage)}%</span>
        </div>
      )}
      <div className={`w-full bg-dark-600 rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          className={`h-full rounded-full ${variants[variant]}`}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
