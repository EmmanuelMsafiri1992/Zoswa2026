import { forwardRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const Input = forwardRef(({
  label,
  error,
  icon: Icon,
  type = 'text',
  className = '',
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const isPassword = type === 'password'

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-300">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        )}
        <input
          ref={ref}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          className={`
            w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-xl
            text-white placeholder-gray-400
            focus:outline-none focus:border-neon-cyan/50 focus:ring-2 focus:ring-neon-cyan/20
            transition-all duration-200
            ${Icon ? 'pl-12' : ''}
            ${isPassword ? 'pr-12' : ''}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${className}
          `}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
