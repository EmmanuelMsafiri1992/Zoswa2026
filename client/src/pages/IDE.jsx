import { useState, useEffect, useCallback } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { Panel, Group as PanelGroup, Separator as PanelResizeHandle } from 'react-resizable-panels'
import { motion } from 'framer-motion'
import {
  Play, Square, Save, Settings, Menu, ChevronDown,
  Maximize2, Minimize2, X, Plus, FolderPlus, FilePlus,
  Terminal as TerminalIcon, Eye, Code2, Database,
  Download, Upload, Share2, Moon, Sun, Laptop
} from 'lucide-react'
import toast from 'react-hot-toast'

import CodeEditor from '../components/ide/CodeEditor'
import FileExplorer from '../components/ide/FileExplorer'
import Terminal from '../components/ide/Terminal'
import OutputPanel from '../components/ide/OutputPanel'
import LivePreview from '../components/ide/LivePreview'
import Toolbar from '../components/ide/Toolbar'
import SettingsModal from '../components/ide/SettingsModal'
import NewProjectModal from '../components/ide/NewProjectModal'

import { useIdeStore, languageConfig, getLanguageFromPath } from '../store/ideStore'
import { useAuthStore } from '../store/authStore'
import { executeCode } from '../engines/executionRouter'
import api from '../services/api'

export default function IDE() {
  const { projectId } = useParams()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { user, isAuthenticated } = useAuthStore()

  const {
    projectName, projectLanguage, files, activeFile, openTabs,
    theme, fontSize, output, outputType, isRunning, sqlResults,
    showPreview, sidebarCollapsed, bottomPanelCollapsed,
    createProject, loadProject, updateFileContent, setActiveFile,
    openTab, closeTab, setIsRunning, setOutput, clearOutput,
    toggleSidebar, toggleBottomPanel, setShowPreview, markAllFilesSaved,
    getCurrentFileContent, getFile
  } = useIdeStore()

  const [showSettings, setShowSettings] = useState(false)
  const [showNewProject, setShowNewProject] = useState(false)
  const [bottomTab, setBottomTab] = useState('output') // 'output' | 'terminal' | 'problems'

  // Initialize project
  useEffect(() => {
    const template = searchParams.get('template')

    if (projectId && projectId !== 'new') {
      // Load existing project from server
      loadProjectFromServer(projectId)
    } else if (template) {
      // Create from template
      createProject(template)
    } else if (!files.length) {
      // Create default project
      createProject('javascript')
    }
  }, [projectId, searchParams])

  const loadProjectFromServer = async (id) => {
    try {
      const { data } = await api.get(`/projects/${id}`)
      loadProject(data)
    } catch (error) {
      toast.error('Failed to load project')
      navigate('/ide/new')
    }
  }

  // Run code
  const handleRun = useCallback(async () => {
    if (isRunning) return

    clearOutput()
    setIsRunning(true)

    try {
      // Get the active file's language
      const currentFile = getFile(activeFile)
      if (!currentFile) {
        toast.error('No file selected')
        setIsRunning(false)
        return
      }

      const language = getLanguageFromPath(activeFile)
      const config = languageConfig[language]

      if (!config || config.engine === 'none') {
        setOutput(`Cannot execute ${language} files directly.\n`)
        setIsRunning(false)
        return
      }

      // Execute the code
      const result = await executeCode(language, currentFile.content, files)

      if (result.type === 'preview') {
        setShowPreview(true)
      } else if (result.type === 'sql') {
        setOutput(result.output, 'sql')
      } else {
        setOutput(result.output, 'console')
      }

      if (result.error) {
        toast.error('Execution error')
      }
    } catch (error) {
      setOutput(`Error: ${error.message}\n`, 'console')
      toast.error('Failed to execute code')
    } finally {
      setIsRunning(false)
    }
  }, [isRunning, activeFile, files])

  // Stop execution
  const handleStop = useCallback(() => {
    setIsRunning(false)
    setOutput('Execution stopped.\n', 'console')
  }, [])

  // Save project
  const handleSave = useCallback(async () => {
    if (!isAuthenticated) {
      toast.error('Please log in to save projects')
      return
    }

    try {
      const projectData = {
        name: projectName,
        language: projectLanguage,
        files: files.map(f => ({ path: f.path, content: f.content })),
        settings: { theme, fontSize }
      }

      if (projectId && projectId !== 'new') {
        await api.put(`/projects/${projectId}`, projectData)
      } else {
        const { data } = await api.post('/projects', projectData)
        navigate(`/ide/${data._id}`, { replace: true })
      }

      markAllFilesSaved()
      toast.success('Project saved!')
    } catch (error) {
      toast.error('Failed to save project')
    }
  }, [projectId, projectName, projectLanguage, files, theme, fontSize, isAuthenticated])

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl/Cmd + S = Save
      if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault()
        handleSave()
      }
      // Ctrl/Cmd + Enter = Run
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault()
        handleRun()
      }
      // Ctrl/Cmd + B = Toggle Sidebar
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
      // Ctrl/Cmd + J = Toggle Bottom Panel
      if ((e.ctrlKey || e.metaKey) && e.key === 'j') {
        e.preventDefault()
        toggleBottomPanel()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleSave, handleRun])

  return (
    <div className="h-screen w-screen bg-dark-900 flex flex-col overflow-hidden">
      {/* Top Toolbar */}
      <Toolbar
        onRun={handleRun}
        onStop={handleStop}
        onSave={handleSave}
        onSettings={() => setShowSettings(true)}
        onNewProject={() => setShowNewProject(true)}
        isRunning={isRunning}
        projectName={projectName}
      />

      {/* Main IDE Area */}
      <div className="flex-1 flex overflow-hidden">
        <PanelGroup direction="horizontal" className="flex-1">
          {/* Sidebar - File Explorer */}
          {!sidebarCollapsed && (
            <>
              <Panel defaultSize={20} minSize={15} maxSize={40}>
                <FileExplorer />
              </Panel>
              <PanelResizeHandle className="w-1 bg-dark-700 hover:bg-neon-cyan/50 transition-colors cursor-col-resize" />
            </>
          )}

          {/* Main Editor Area */}
          <Panel defaultSize={sidebarCollapsed ? 100 : 80}>
            <PanelGroup direction="vertical">
              {/* Editor + Preview */}
              <Panel defaultSize={bottomPanelCollapsed ? 100 : 70} minSize={30}>
                <PanelGroup direction="horizontal">
                  {/* Code Editor */}
                  <Panel defaultSize={showPreview ? 50 : 100} minSize={30}>
                    <div className="h-full flex flex-col bg-dark-800">
                      {/* Tabs */}
                      <div className="flex items-center bg-dark-900 border-b border-dark-700 overflow-x-auto">
                        {openTabs.map((path) => {
                          const file = getFile(path)
                          const isActive = path === activeFile
                          const lang = getLanguageFromPath(path)
                          const icon = languageConfig[lang]?.icon || '📄'

                          return (
                            <div
                              key={path}
                              className={`flex items-center gap-2 px-3 py-2 border-r border-dark-700 cursor-pointer group
                                ${isActive ? 'bg-dark-800 text-neon-cyan' : 'text-gray-400 hover:bg-dark-800'}`}
                              onClick={() => setActiveFile(path)}
                            >
                              <span className="text-sm">{icon}</span>
                              <span className="text-sm whitespace-nowrap">
                                {path.split('/').pop()}
                              </span>
                              {file?.isModified && (
                                <span className="w-2 h-2 rounded-full bg-neon-yellow" />
                              )}
                              <button
                                className="opacity-0 group-hover:opacity-100 hover:text-neon-pink"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  closeTab(path)
                                }}
                              >
                                <X size={14} />
                              </button>
                            </div>
                          )
                        })}
                        <button
                          className="p-2 text-gray-400 hover:text-neon-cyan"
                          onClick={() => setShowNewProject(true)}
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Monaco Editor */}
                      <div className="flex-1">
                        {activeFile ? (
                          <CodeEditor
                            value={getCurrentFileContent()}
                            language={getLanguageFromPath(activeFile)}
                            onChange={(value) => updateFileContent(activeFile, value)}
                          />
                        ) : (
                          <div className="h-full flex items-center justify-center text-gray-500">
                            <div className="text-center">
                              <Code2 size={48} className="mx-auto mb-4 opacity-50" />
                              <p>Select a file to edit</p>
                              <p className="text-sm mt-2">or create a new one</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Panel>

                  {/* Live Preview */}
                  {showPreview && (
                    <>
                      <PanelResizeHandle className="w-1 bg-dark-700 hover:bg-neon-cyan/50 transition-colors cursor-col-resize" />
                      <Panel defaultSize={50} minSize={20}>
                        <LivePreview files={files} />
                      </Panel>
                    </>
                  )}
                </PanelGroup>
              </Panel>

              {/* Bottom Panel - Output/Terminal */}
              {!bottomPanelCollapsed && (
                <>
                  <PanelResizeHandle className="h-1 bg-dark-700 hover:bg-neon-cyan/50 transition-colors cursor-row-resize" />
                  <Panel defaultSize={30} minSize={10} maxSize={60}>
                    <div className="h-full flex flex-col bg-dark-900">
                      {/* Bottom Panel Tabs */}
                      <div className="flex items-center border-b border-dark-700">
                        <button
                          className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors
                            ${bottomTab === 'output' ? 'border-neon-cyan text-neon-cyan' : 'border-transparent text-gray-400 hover:text-white'}`}
                          onClick={() => setBottomTab('output')}
                        >
                          <Code2 size={14} />
                          Output
                        </button>
                        <button
                          className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors
                            ${bottomTab === 'terminal' ? 'border-neon-cyan text-neon-cyan' : 'border-transparent text-gray-400 hover:text-white'}`}
                          onClick={() => setBottomTab('terminal')}
                        >
                          <TerminalIcon size={14} />
                          Terminal
                        </button>
                        <button
                          className={`flex items-center gap-2 px-4 py-2 text-sm border-b-2 transition-colors
                            ${bottomTab === 'problems' ? 'border-neon-cyan text-neon-cyan' : 'border-transparent text-gray-400 hover:text-white'}`}
                          onClick={() => setBottomTab('problems')}
                        >
                          <span className="text-neon-yellow">!</span>
                          Problems
                        </button>

                        <div className="flex-1" />

                        <button
                          className="p-2 text-gray-400 hover:text-white"
                          onClick={clearOutput}
                          title="Clear"
                        >
                          <X size={14} />
                        </button>
                        <button
                          className="p-2 text-gray-400 hover:text-white"
                          onClick={toggleBottomPanel}
                          title="Minimize"
                        >
                          <Minimize2 size={14} />
                        </button>
                      </div>

                      {/* Panel Content */}
                      <div className="flex-1 overflow-hidden">
                        {bottomTab === 'output' && (
                          <OutputPanel
                            output={output}
                            outputType={outputType}
                            sqlResults={sqlResults}
                            isRunning={isRunning}
                          />
                        )}
                        {bottomTab === 'terminal' && <Terminal />}
                        {bottomTab === 'problems' && (
                          <div className="p-4 text-gray-500 text-sm">
                            No problems detected
                          </div>
                        )}
                      </div>
                    </div>
                  </Panel>
                </>
              )}
            </PanelGroup>
          </Panel>
        </PanelGroup>
      </div>

      {/* Collapsed Panel Indicators */}
      {sidebarCollapsed && (
        <button
          className="fixed left-0 top-1/2 -translate-y-1/2 bg-dark-800 p-2 rounded-r border border-l-0 border-dark-600 text-gray-400 hover:text-neon-cyan z-10"
          onClick={toggleSidebar}
        >
          <Menu size={16} />
        </button>
      )}

      {bottomPanelCollapsed && (
        <button
          className="fixed bottom-4 right-4 bg-dark-800 p-2 rounded border border-dark-600 text-gray-400 hover:text-neon-cyan z-10"
          onClick={toggleBottomPanel}
        >
          <Maximize2 size={16} />
        </button>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}

      {/* New Project Modal */}
      {showNewProject && (
        <NewProjectModal onClose={() => setShowNewProject(false)} />
      )}
    </div>
  )
}
