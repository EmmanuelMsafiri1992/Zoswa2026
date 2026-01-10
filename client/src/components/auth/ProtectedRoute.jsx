import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, user, trialDaysLeft, isCheckingAuth } = useAuthStore()
  const location = useLocation()

  // Wait for auth check to complete before redirecting
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  // Admins should only access /admin routes, not user dashboard
  if (user?.role === 'admin') {
    return <Navigate to="/admin" replace />
  }

  // Check if trial expired and no subscription
  const hasAccess = user?.isSubscribed || trialDaysLeft > 0

  // If accessing learning content without access, redirect to pricing
  if (!hasAccess && location.pathname.startsWith('/learn')) {
    return <Navigate to="/pricing" state={{ expired: true }} replace />
  }

  return children
}
