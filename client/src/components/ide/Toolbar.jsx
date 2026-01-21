import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Play, Square, Save, Settings, Menu, ChevronDown,
  FolderPlus, Download, Upload, Share2, Eye, EyeOff,
  Maximize2, LayoutGrid, Code2, Zap
} from 'lucide-react'
import { useIdeStore, languageConfig, getLanguageFromPath } from '../../store/ideStore'
import { useNavigate } from 'react-router-dom'

export default function Toolbar({
  onRun,
  onStop,
  onSave,
  onSettings,
  onNewProject,
  isRunning,
  projectName
}) {
  const navigate = useNavigate()
  const [showLanguageMenu, setShowLanguageMenu] = useState(false)

  const {
    activeFile,
    projectLanguage,
    showPreview,
    toggleSidebar,
    setShowPreview,
    sidebarCollapsed
  } = useIdeStore()

  const currentLanguage = activeFile
    ? getLanguageFromPath(activeFile)
    : projectLanguage

  const langConfig = languageConfig[currentLanguage] || { name: 'Text', icon: '📄' }

  return (
    <div className="flex items-center justify-between px-2 py-1.5 bg-dark-900 border-b border-dark-700">
      {/* Left Section */}
      <div className="flex items-center gap-2">
        {/* Logo/Home */}
        <button
          className="flex items-center gap-2 px-2 py-1 rounded hover:bg-dark-700 text-neon-cyan"
          onClick={() => navigate('/dashboard')}
        >
          <Zap size={20} />
          <span className="font-bold text-sm hidden sm:inline">Zoswa IDE</span>
        </button>

        {/* Toggle Sidebar */}
        <button
          className={`p-1.5 rounded transition-colors ${sidebarCollapsed ? 'text-neon-cyan bg-dark-700' : 'text-gray-400 hover:text-white hover:bg-dark-700'}`}
          onClick={toggleSidebar}
          title={sidebarCollapsed ? 'Show sidebar' : 'Hide sidebar'}
        >
          <Menu size={18} />
        </button>

        {/* Project Name */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-dark-800 rounded border border-dark-600">
          <Code2 size={14} className="text-neon-cyan" />
          <span className="text-sm text-gray-300 max-w-[200px] truncate">
            {projectName}
          </span>
        </div>

        {/* Language Indicator */}
        <div className="relative">
          <button
            className="flex items-center gap-2 px-3 py-1.5 bg-dark-800 rounded border border-dark-600 hover:border-dark-500 text-sm"
            onClick={() => setShowLanguageMenu(!showLanguageMenu)}
          >
            <span>{langConfig.icon}</span>
            <span className="text-gray-300 hidden sm:inline">{langConfig.name}</span>
            <ChevronDown size={14} className="text-gray-500" />
          </button>

          {showLanguageMenu && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowLanguageMenu(false)}
              />
              <div className="absolute left-0 top-full mt-1 w-48 bg-dark-800 border border-dark-600 rounded-lg shadow-xl z-50 py-1 max-h-80 overflow-y-auto">
                {Object.entries(languageConfig).map(([key, config]) => (
                  <button
                    key={key}
                    className={`w-full flex items-center gap-2 px-3 py-1.5 text-sm hover:bg-dark-700
                      ${key === currentLanguage ? 'text-neon-cyan' : 'text-gray-300'}`}
                    onClick={() => {
                      setShowLanguageMenu(false)
                    }}
                  >
                    <span>{config.icon}</span>
                    <span>{config.name}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Center Section - Run/Stop */}
      <div className="flex items-center gap-2">
        {isRunning ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-neon-pink text-white rounded font-medium text-sm"
            onClick={onStop}
          >
            <Square size={16} />
            <span className="hidden sm:inline">Stop</span>
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-1.5 bg-neon-green text-dark-900 rounded font-medium text-sm"
            onClick={onRun}
          >
            <Play size={16} />
            <span className="hidden sm:inline">Run</span>
          </motion.button>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-1">
        {/* Toggle Preview */}
        <button
          className={`p-1.5 rounded transition-colors ${showPreview ? 'text-neon-cyan bg-dark-700' : 'text-gray-400 hover:text-white hover:bg-dark-700'}`}
          onClick={() => setShowPreview(!showPreview)}
          title={showPreview ? 'Hide preview' : 'Show preview'}
        >
          {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>

        {/* New Project */}
        <button
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-dark-700"
          onClick={onNewProject}
          title="New Project"
        >
          <FolderPlus size={18} />
        </button>

        {/* Save */}
        <button
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-dark-700"
          onClick={onSave}
          title="Save (Ctrl+S)"
        >
          <Save size={18} />
        </button>

        {/* Settings */}
        <button
          className="p-1.5 text-gray-400 hover:text-white rounded hover:bg-dark-700"
          onClick={onSettings}
          title="Settings"
        >
          <Settings size={18} />
        </button>
      </div>
    </div>
  )
}
