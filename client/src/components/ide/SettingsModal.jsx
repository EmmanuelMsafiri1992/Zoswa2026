import { motion } from 'framer-motion'
import { X, Monitor, Type, Hash, Indent, Map, WrapText } from 'lucide-react'
import { useIdeStore } from '../../store/ideStore'

const themes = [
  { value: 'vs-dark', label: 'Dark (Default)', preview: 'bg-[#1e1e1e]' },
  { value: 'vs', label: 'Light', preview: 'bg-white' },
  { value: 'hc-black', label: 'High Contrast', preview: 'bg-black' }
]

const fontSizes = [12, 13, 14, 15, 16, 18, 20, 22, 24]
const tabSizes = [2, 4, 8]

export default function SettingsModal({ onClose }) {
  const {
    theme, fontSize, tabSize, wordWrap, minimap,
    setTheme, setFontSize, setTabSize, setWordWrap, setMinimap
  } = useIdeStore()

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-dark-800 rounded-xl border border-dark-600 shadow-2xl w-full max-w-md"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dark-600">
          <h2 className="text-lg font-semibold text-white">Editor Settings</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded hover:bg-dark-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Settings */}
        <div className="p-6 space-y-6">
          {/* Theme */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <Monitor size={16} />
              Theme
            </label>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setTheme(t.value)}
                  className={`flex flex-col items-center p-3 rounded-lg border transition-colors
                    ${theme === t.value
                      ? 'border-neon-cyan bg-neon-cyan/10'
                      : 'border-dark-600 hover:border-dark-500'
                    }`}
                >
                  <div className={`w-full h-8 rounded ${t.preview} border border-dark-500 mb-2`} />
                  <span className="text-xs text-gray-400">{t.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <Type size={16} />
              Font Size
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="12"
                max="24"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className="flex-1 h-2 bg-dark-600 rounded-lg appearance-none cursor-pointer accent-neon-cyan"
              />
              <span className="w-12 text-center text-sm text-gray-400 bg-dark-700 rounded px-2 py-1">
                {fontSize}px
              </span>
            </div>
          </div>

          {/* Tab Size */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <Indent size={16} />
              Tab Size
            </label>
            <div className="flex gap-2">
              {tabSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setTabSize(size)}
                  className={`flex-1 py-2 rounded border text-sm transition-colors
                    ${tabSize === size
                      ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                      : 'border-dark-600 hover:border-dark-500 text-gray-400'
                    }`}
                >
                  {size} spaces
                </button>
              ))}
            </div>
          </div>

          {/* Word Wrap */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
              <WrapText size={16} />
              Word Wrap
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setWordWrap('on')}
                className={`flex-1 py-2 rounded border text-sm transition-colors
                  ${wordWrap === 'on'
                    ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                    : 'border-dark-600 hover:border-dark-500 text-gray-400'
                  }`}
              >
                On
              </button>
              <button
                onClick={() => setWordWrap('off')}
                className={`flex-1 py-2 rounded border text-sm transition-colors
                  ${wordWrap === 'off'
                    ? 'border-neon-cyan bg-neon-cyan/10 text-neon-cyan'
                    : 'border-dark-600 hover:border-dark-500 text-gray-400'
                  }`}
              >
                Off
              </button>
            </div>
          </div>

          {/* Minimap */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <Map size={16} />
              Show Minimap
            </label>
            <button
              onClick={() => setMinimap(!minimap)}
              className={`relative w-12 h-6 rounded-full transition-colors
                ${minimap ? 'bg-neon-cyan' : 'bg-dark-600'}`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform
                  ${minimap ? 'left-7' : 'left-1'}`}
              />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-dark-600">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-dark-700"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  )
}
