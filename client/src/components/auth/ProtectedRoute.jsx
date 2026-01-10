import { Navigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, user, trialDaysLeft } = useAuthStore()
  const location = useLocation()

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
