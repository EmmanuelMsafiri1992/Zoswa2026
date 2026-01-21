import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Folder, FolderOpen, File, ChevronRight, ChevronDown,
  Plus, FilePlus, FolderPlus, Trash2, Edit3, MoreVertical,
  FileCode, FileJson, FileText, Image, Database
} from 'lucide-react'
import { useIdeStore, getLanguageFromPath, languageConfig } from '../../store/ideStore'

// File icon mapping
const getFileIcon = (path) => {
  const lang = getLanguageFromPath(path)
  const config = languageConfig[lang]

  if (config?.icon) {
    return <span className="text-sm">{config.icon}</span>
  }

  const ext = path.split('.').pop()?.toLowerCase()
  switch (ext) {
    case 'json':
      return <FileJson size={16} className="text-yellow-400" />
    case 'md':
      return <FileText size={16} className="text-blue-400" />
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
    case 'svg':
      return <Image size={16} className="text-pink-400" />
    case 'db':
    case 'sqlite':
      return <Database size={16} className="text-green-400" />
    default:
      return <File size={16} className="text-gray-400" />
  }
}

// Build folder structure from flat file list
const buildFileTree = (files) => {
  const tree = {}

  files.forEach(file => {
    const parts = file.path.split('/')
    let current = tree

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        // It's a file
        current[part] = { type: 'file', path: file.path, isModified: file.isModified }
      } else {
        // It's a folder
        if (!current[part]) {
          current[part] = { type: 'folder', children: {} }
        }
        current = current[part].children
      }
    })
  })

  return tree
}

// Recursive tree item component
function TreeItem({ name, item, depth = 0 }) {
  const [isOpen, setIsOpen] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  const [isRenaming, setIsRenaming] = useState(false)
  const [newName, setNewName] = useState(name)

  const { activeFile, setActiveFile, openTab, deleteFile, renameFile } = useIdeStore()

  const isFolder = item.type === 'folder'
  const isActive = !isFolder && item.path === activeFile

  const handleClick = () => {
    if (isFolder) {
      setIsOpen(!isOpen)
    } else {
      openTab(item.path)
    }
  }

  const handleRename = () => {
    if (newName && newName !== name) {
      if (isFolder) {
        // TODO: Rename folder and all children
      } else {
        const newPath = item.path.replace(new RegExp(`${name}$`), newName)
        renameFile(item.path, newPath)
      }
    }
    setIsRenaming(false)
  }

  const handleDelete = () => {
    if (confirm(`Delete ${isFolder ? 'folder' : 'file'} "${name}"?`)) {
      if (!isFolder) {
        deleteFile(item.path)
      }
    }
    setShowMenu(false)
  }

  return (
    <div>
      <div
        className={`flex items-center gap-1 py-1 px-2 rounded cursor-pointer group
          ${isActive ? 'bg-neon-cyan/10 text-neon-cyan' : 'hover:bg-dark-700 text-gray-300'}
        `}
        style={{ paddingLeft: `${depth * 12 + 8}px` }}
        onClick={handleClick}
        onContextMenu={(e) => {
          e.preventDefault()
          setShowMenu(true)
        }}
      >
        {isFolder && (
          <span className="text-gray-500">
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </span>
        )}
        {!isFolder && <span className="w-[14px]" />}

        {isFolder ? (
          isOpen ? (
            <FolderOpen size={16} className="text-neon-cyan" />
          ) : (
            <Folder size={16} className="text-neon-cyan" />
          )
        ) : (
          getFileIcon(item.path)
        )}

        {isRenaming ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleRename()
              if (e.key === 'Escape') setIsRenaming(false)
            }}
            className="flex-1 bg-dark-700 text-white text-sm px-1 rounded outline-none border border-neon-cyan/50"
            autoFocus
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <span className="text-sm truncate">{name}</span>
        )}

        {item.isModified && !isFolder && (
          <span className="w-2 h-2 rounded-full bg-neon-yellow ml-auto" />
        )}

        {/* Context menu trigger */}
        <button
          className="ml-auto opacity-0 group-hover:opacity-100 p-1 hover:bg-dark-600 rounded"
          onClick={(e) => {
            e.stopPropagation()
            setShowMenu(!showMenu)
          }}
        >
          <MoreVertical size={12} />
        </button>

        {/* Context menu */}
        {showMenu && (
          <>
            <div
              className="fixed inset-0 z-40"
              onClick={() => setShowMenu(false)}
            />
            <div className="absolute right-0 mt-6 bg-dark-800 border border-dark-600 rounded-lg shadow-xl z-50 py-1 min-w-[120px]">
              <button
                className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-gray-300 hover:bg-dark-700"
                onClick={(e) => {
                  e.stopPropagation()
                  setIsRenaming(true)
                  setShowMenu(false)
                }}
              >
                <Edit3 size={14} />
                Rename
              </button>
              <button
                className="w-full flex items-center gap-2 px-3 py-1.5 text-sm text-neon-pink hover:bg-dark-700"
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete()
                }}
              >
                <Trash2 size={14} />
                Delete
              </button>
            </div>
          </>
        )}
      </div>

      {/* Children */}
      {isFolder && isOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {Object.entries(item.children)
              .sort(([, a], [, b]) => {
                // Folders first, then files
                if (a.type !== b.type) return a.type === 'folder' ? -1 : 1
                return 0
              })
              .map(([childName, childItem]) => (
                <TreeItem
                  key={childName}
                  name={childName}
                  item={childItem}
                  depth={depth + 1}
                />
              ))}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

export default function FileExplorer() {
  const [newFileName, setNewFileName] = useState('')
  const [showNewFile, setShowNewFile] = useState(false)
  const { files, projectName, createFile } = useIdeStore()

  const fileTree = buildFileTree(files)

  const handleCreateFile = () => {
    if (newFileName.trim()) {
      createFile(newFileName.trim())
      setNewFileName('')
      setShowNewFile(false)
    }
  }

  return (
    <div className="h-full flex flex-col bg-dark-900 border-r border-dark-700">
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-dark-700">
        <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
          Explorer
        </span>
        <div className="flex items-center gap-1">
          <button
            className="p-1 text-gray-400 hover:text-neon-cyan rounded hover:bg-dark-700"
            onClick={() => setShowNewFile(true)}
            title="New File"
          >
            <FilePlus size={16} />
          </button>
          <button
            className="p-1 text-gray-400 hover:text-neon-cyan rounded hover:bg-dark-700"
            title="New Folder"
          >
            <FolderPlus size={16} />
          </button>
        </div>
      </div>

      {/* Project Name */}
      <div className="px-3 py-2 border-b border-dark-700">
        <div className="flex items-center gap-2 text-gray-300">
          <Folder size={16} className="text-neon-cyan" />
          <span className="text-sm font-medium truncate">{projectName}</span>
        </div>
      </div>

      {/* New File Input */}
      {showNewFile && (
        <div className="px-3 py-2 border-b border-dark-700">
          <input
            type="text"
            value={newFileName}
            onChange={(e) => setNewFileName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCreateFile()
              if (e.key === 'Escape') {
                setShowNewFile(false)
                setNewFileName('')
              }
            }}
            placeholder="filename.js"
            className="w-full bg-dark-800 text-white text-sm px-2 py-1 rounded border border-dark-600 focus:border-neon-cyan outline-none"
            autoFocus
          />
        </div>
      )}

      {/* File Tree */}
      <div className="flex-1 overflow-y-auto py-2">
        {Object.keys(fileTree).length === 0 ? (
          <div className="px-3 py-4 text-gray-500 text-sm text-center">
            No files yet.
            <br />
            <button
              className="text-neon-cyan hover:underline mt-2"
              onClick={() => setShowNewFile(true)}
            >
              Create a file
            </button>
          </div>
        ) : (
          Object.entries(fileTree)
            .sort(([, a], [, b]) => {
              if (a.type !== b.type) return a.type === 'folder' ? -1 : 1
              return 0
            })
            .map(([name, item]) => (
              <TreeItem key={name} name={name} item={item} />
            ))
        )}
      </div>
    </div>
  )
}
