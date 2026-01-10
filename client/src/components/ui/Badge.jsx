const variants = {
  default: 'bg-dark-600 text-gray-300',
  primary: 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/30',
  success: 'bg-neon-green/20 text-neon-green border border-neon-green/30',
  warning: 'bg-neon-yellow/20 text-neon-yellow border border-neon-yellow/30',
  danger: 'bg-neon-pink/20 text-neon-pink border border-neon-pink/30',
  purple: 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30',
  gradient: 'bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 text-white border border-neon-cyan/30',
}

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1.5 text-sm',
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
}) {
  return (
    <span
      className={`
        inline-flex items-center gap-1 font-medium rounded-full
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3 h-3" />}
      {children}
    </span>
  )
}
