import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../services/api'
import toast from 'react-hot-toast'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      isCartOpen: false,
      isCheckingOut: false,

      // Add item to cart
      addItem: (project) => {
        const { items } = get()
        const existingItem = items.find((item) => item.id === project.id)

        if (existingItem) {
          toast.error('This project is already in your cart')
          return false
        }

        set({ items: [...items, { ...project, addedAt: Date.now() }] })
        toast.success('Added to cart!')
        return true
      },

      // Remove item from cart
      removeItem: (projectId) => {
        const { items } = get()
        set({ items: items.filter((item) => item.id !== projectId) })
        toast.success('Removed from cart')
      },

      // Clear entire cart
      clearCart: () => {
        set({ items: [] })
      },

      // Toggle cart drawer
      toggleCart: () => {
        set((state) => ({ isCartOpen: !state.isCartOpen }))
      },

      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),

      // Get cart totals
      getCartTotal: () => {
        const { items } = get()
        return items.reduce((total, item) => total + item.price, 0)
      },

      getCartCount: () => {
        const { items } = get()
        return items.length
      },

      // Check if item is in cart
      isInCart: (projectId) => {
        const { items } = get()
        return items.some((item) => item.id === projectId)
      },

      // Checkout with PayPal
      createOrder: async () => {
        const { items, getCartTotal } = get()
        set({ isCheckingOut: true })

        try {
          const response = await api.post('/purchases/create-order', {
            items: items.map((item) => ({
              id: item.id,
              title: item.title,
              price: item.price,
            })),
            total: getCartTotal(),
          })

          set({ isCheckingOut: false })
          return response.data.orderId
        } catch (error) {
          set({ isCheckingOut: false })
          toast.error('Failed to create order. Please try again.')
          throw error
        }
      },

      // Capture PayPal payment
      captureOrder: async (orderId) => {
        const { items, clearCart } = get()
        set({ isCheckingOut: true })

        try {
          const response = await api.post('/purchases/capture-order', {
            orderId,
            items: items.map((item) => ({
              id: item.id,
              title: item.title,
              price: item.price,
              category: item.category,
            })),
          })

          clearCart()
          set({ isCheckingOut: false })
          toast.success('Purchase successful! Check your purchases page.')
          return response.data
        } catch (error) {
          set({ isCheckingOut: false })
          toast.error('Payment failed. Please try again.')
          throw error
        }
      },
    }),
    {
      name: 'zoswa-cart',
      partialize: (state) => ({ items: state.items }),
    }
  )
)
