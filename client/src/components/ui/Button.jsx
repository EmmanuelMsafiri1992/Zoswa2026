import { motion } from 'framer-motion'

const variants = {
  primary: 'bg-gradient-to-r from-neon-cyan to-neon-purple text-dark-900 font-semibold hover:shadow-lg hover:shadow-neon-cyan/25',
  secondary: 'bg-dark-700 text-white border border-dark-600 hover:border-neon-cyan/50 hover:bg-dark-600',
  outline: 'bg-transparent text-neon-cyan border border-neon-cyan hover:bg-neon-cyan/10',
  ghost: 'bg-transparent text-gray-300 hover:text-white hover:bg-dark-700',
  danger: 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30',
  success: 'bg-neon-green/20 text-neon-green border border-neon-green/50 hover:bg-neon-green/30',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm rounded-lg',
  md: 'px-5 py-2.5 text-sm rounded-xl',
  lg: 'px-8 py-3 text-base rounded-xl',
  xl: 'px-10 py-4 text-lg rounded-2xl',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  return (
    <motion.button
      type={type}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium transition-all duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <>
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </>
      ) : (
        children
      )}
    </motion.button>
  )
}
