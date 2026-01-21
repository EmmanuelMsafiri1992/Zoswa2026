import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

// Layouts
import MainLayout from './components/layout/MainLayout'
import DashboardLayout from './components/layout/DashboardLayout'
import AdminLayout from './components/layout/AdminLayout'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Learn from './pages/Learn'
import IDE from './pages/IDE'
import Pricing from './pages/Pricing'
import Profile from './pages/Profile'
import Leaderboard from './pages/Leaderboard'
import Certificates from './pages/Certificates'

// Admin Pages
import { AdminDashboard, AdminUsers, AdminPayments, AdminCourses, AdminSettings } from './pages/admin'

// Components
import ProtectedRoute from './components/auth/ProtectedRoute'
import AdminRoute from './components/auth/AdminRoute'

// Store
import { useAuthStore } from './store/authStore'
import { useEffect } from 'react'

const paypalOptions = {
  'client-id': 'test', // Replace with your PayPal client ID
  currency: 'USD',
  intent: 'subscription',
  vault: true,
}

function App() {
  const { checkAuth } = useAuthStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <Toaster
        position="top-right"
        toastOptions={{
          className: 'toast-custom',
          duration: 4000,
          style: {
            background: '#1a1a25',
            color: '#fff',
            border: '1px solid rgba(0, 255, 245, 0.2)',
          },
          success: {
            iconTheme: {
              primary: '#00ff88',
              secondary: '#1a1a25',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff0080',
              secondary: '#1a1a25',
            },
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
        </Route>

        {/* IDE Routes - Full screen, no layout wrapper */}
        <Route path="/ide" element={<IDE />} />
        <Route path="/ide/new" element={<IDE />} />
        <Route path="/ide/:projectId" element={<IDE />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<CourseDetail />} />
          <Route path="/learn/:courseId/:lessonId" element={<Learn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/certificates" element={<Certificates />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<AdminRoute><AdminLayout /></AdminRoute>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/admin/courses" element={<AdminCourses />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Routes>
    </PayPalScriptProvider>
  )
}

export default App
