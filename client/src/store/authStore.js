import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../services/api'

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,
      trialDaysLeft: 7,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      login: async (email, password) => {
        set({ isLoading: true })
        try {
          // Use demo login for instant access (no MongoDB needed)
          const response = await api.post('/auth/demo-login', { email, password })
          const { user, token } = response.data
          set({ user: { ...user, email }, token, isAuthenticated: true, isLoading: false, trialDaysLeft: 7 })
          localStorage.setItem('token', token)
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          return { success: false, error: 'Login failed. Please try again.' }
        }
      },

      register: async (name, email, password) => {
        set({ isLoading: true })
        try {
          // Use demo register for instant access (no MongoDB needed)
          const response = await api.post('/auth/demo-register', { name, email })
          const { user, token } = response.data
          set({ user, token, isAuthenticated: true, isLoading: false, trialDaysLeft: 7 })
          localStorage.setItem('token', token)
          return { success: true }
        } catch (error) {
          set({ isLoading: false })
          return { success: false, error: 'Registration failed. Please try again.' }
        }
      },

      logout: () => {
        localStorage.removeItem('token')
        set({ user: null, token: null, isAuthenticated: false })
      },

      checkAuth: async () => {
        const token = localStorage.getItem('token')
        if (!token) {
          set({ isAuthenticated: false, user: null })
          return
        }

        try {
          const response = await api.get('/auth/me')
          set({ user: response.data.user, isAuthenticated: true, token })

          // Calculate trial days left
          if (response.data.user.trialStartDate) {
            const trialStart = new Date(response.data.user.trialStartDate)
            const now = new Date()
            const daysPassed = Math.floor((now - trialStart) / (1000 * 60 * 60 * 24))
            set({ trialDaysLeft: Math.max(0, 7 - daysPassed) })
          }
        } catch (error) {
          localStorage.removeItem('token')
          set({ isAuthenticated: false, user: null, token: null })
        }
      },

      updateUser: (updates) => {
        set((state) => ({
          user: { ...state.user, ...updates }
        }))
      },

      hasActiveSubscription: () => {
        const { user, trialDaysLeft } = get()
        if (!user) return false
        return user.isSubscribed || trialDaysLeft > 0
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ token: state.token }),
    }
  )
)
