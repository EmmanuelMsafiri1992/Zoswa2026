import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Settings, CreditCard, Shield, Globe, Check } from 'lucide-react'
import api from '../../services/api'

export default function AdminSettings() {
  const [settings, setSettings] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const response = await api.get('/admin/settings')
      setSettings(response.data.settings)
    } catch (error) {
      console.error('Error fetching settings:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Site Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-800 border border-dark-600 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Site Settings</h2>
            <p className="text-sm text-gray-400">General platform configuration</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-b border-dark-600">
            <div>
              <p className="text-white font-medium">Site Name</p>
              <p className="text-sm text-gray-400">The name of your platform</p>
            </div>
            <span className="text-neon-cyan font-semibold">{settings?.siteName || 'Zoswa'}</span>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-dark-600">
            <div>
              <p className="text-white font-medium">Trial Period</p>
              <p className="text-sm text-gray-400">Free trial duration for new users</p>
            </div>
            <span className="text-neon-cyan font-semibold">{settings?.trialDays || 7} days</span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-white font-medium">Subscription Price</p>
              <p className="text-sm text-gray-400">Monthly subscription cost</p>
            </div>
            <span className="text-neon-green font-semibold">${settings?.subscriptionPrice || 7}/month</span>
          </div>
        </div>
      </motion.div>

      {/* PayPal Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-dark-800 border border-dark-600 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
            <CreditCard className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">PayPal Integration</h2>
            <p className="text-sm text-gray-400">Payment gateway configuration</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-b border-dark-600">
            <div>
              <p className="text-white font-medium">PayPal Mode</p>
              <p className="text-sm text-gray-400">Sandbox for testing, Live for production</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              settings?.paypalMode === 'live'
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {settings?.paypalMode === 'live' ? 'Live' : 'Sandbox'}
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-white font-medium">PayPal Configuration</p>
              <p className="text-sm text-gray-400">API credentials status</p>
            </div>
            {settings?.paypalConfigured ? (
              <span className="flex items-center gap-2 text-green-400">
                <Check className="w-5 h-5" />
                Configured
              </span>
            ) : (
              <span className="text-red-400">Not Configured</span>
            )}
          </div>
        </div>
      </motion.div>

      {/* Security Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-dark-800 border border-dark-600 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Security</h2>
            <p className="text-sm text-gray-400">Platform security settings</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-4 border-b border-dark-600">
            <div>
              <p className="text-white font-medium">Rate Limiting</p>
              <p className="text-sm text-gray-400">API request limits</p>
            </div>
            <span className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              Enabled
            </span>
          </div>

          <div className="flex items-center justify-between py-4 border-b border-dark-600">
            <div>
              <p className="text-white font-medium">Account Lockout</p>
              <p className="text-sm text-gray-400">Lock after 5 failed login attempts</p>
            </div>
            <span className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              Enabled
            </span>
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <p className="text-white font-medium">Password Requirements</p>
              <p className="text-sm text-gray-400">8+ chars, uppercase, lowercase, number</p>
            </div>
            <span className="flex items-center gap-2 text-green-400">
              <Check className="w-5 h-5" />
              Enforced
            </span>
          </div>
        </div>
      </motion.div>

      {/* Note */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <p className="text-yellow-400 text-sm">
          <strong>Note:</strong> To modify environment settings (PayPal credentials, JWT secret, etc.),
          update the <code className="bg-dark-700 px-2 py-0.5 rounded">.env</code> file on your server
          and restart the application.
        </p>
      </div>
    </div>
  )
}
