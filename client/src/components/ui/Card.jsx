import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  hover = false,
  gradient = false,
  glow = false,
  onClick,
  ...props
}) {
  const baseStyles = 'bg-dark-700 rounded-2xl border border-dark-600'
  const hoverStyles = hover ? 'card-hover cursor-pointer' : ''
  const gradientStyles = gradient ? 'gradient-border' : ''
  const glowStyles = glow ? 'hover:shadow-lg hover:shadow-neon-cyan/20' : ''

  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
      className={`${baseStyles} ${hoverStyles} ${gradientStyles} ${glowStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-6 border-b border-dark-600 ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }) {
  return (
    <div className={`p-6 border-t border-dark-600 ${className}`}>
      {children}
    </div>
  )
}
