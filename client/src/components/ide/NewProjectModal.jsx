import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Search, Code2, Database, Globe, Cpu, Terminal, FileCode } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useIdeStore } from '../../store/ideStore'

const projectCategories = [
  {
    name: 'Web Development',
    icon: Globe,
    templates: [
      { id: 'html-css-js', name: 'HTML/CSS/JS Website', description: 'Basic web page with HTML, CSS, and JavaScript', icon: '🌐' },
      { id: 'react', name: 'React App', description: 'React component with state and hooks', icon: '⚛️' },
      { id: 'nodejs', name: 'Node.js API', description: 'Simple HTTP server with Node.js', icon: '🟢' },
      { id: 'typescript', name: 'TypeScript', description: 'TypeScript with type definitions', icon: '📘' }
    ]
  },
  {
    name: 'Programming Languages',
    icon: Code2,
    templates: [
      { id: 'javascript', name: 'JavaScript', description: 'Plain JavaScript file', icon: '⚡' },
      { id: 'python', name: 'Python', description: 'Python script with examples', icon: '🐍' },
      { id: 'java', name: 'Java', description: 'Java application with classes', icon: '☕' },
      { id: 'csharp', name: 'C#', description: 'C# console application', icon: '🔷' },
      { id: 'php', name: 'PHP', description: 'PHP script', icon: '🐘' },
      { id: 'ruby', name: 'Ruby', description: 'Ruby script', icon: '💎' }
    ]
  },
  {
    name: 'Systems Programming',
    icon: Cpu,
    templates: [
      { id: 'c', name: 'C', description: 'C program with stdio', icon: '⚙️' },
      { id: 'cpp', name: 'C++', description: 'C++ with STL examples', icon: '⚙️' },
      { id: 'go', name: 'Go', description: 'Go program', icon: '🔵' },
      { id: 'rust', name: 'Rust', description: 'Rust program', icon: '🦀' }
    ]
  },
  {
    name: 'Database',
    icon: Database,
    templates: [
      { id: 'sql', name: 'SQL Database', description: 'SQL queries and schema', icon: '🗄️' }
    ]
  }
]

export default function NewProjectModal({ onClose }) {
  const navigate = useNavigate()
  const { createProject } = useIdeStore()
  const [search, setSearch] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  // Filter templates by search
  const filteredCategories = projectCategories.map(category => ({
    ...category,
    templates: category.templates.filter(t =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
    )
  })).filter(c => c.templates.length > 0)

  const handleCreate = () => {
    if (selectedTemplate) {
      createProject(selectedTemplate.id)
      onClose()
      navigate('/ide/new?template=' + selectedTemplate.id, { replace: true })
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-dark-800 rounded-xl border border-dark-600 shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dark-600">
          <h2 className="text-lg font-semibold text-white">New Project</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-white rounded hover:bg-dark-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-3 border-b border-dark-600">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full bg-dark-700 text-white pl-10 pr-4 py-2 rounded-lg border border-dark-600 focus:border-neon-cyan outline-none"
            />
          </div>
        </div>

        {/* Templates */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredCategories.map((category) => (
            <div key={category.name} className="mb-6">
              <h3 className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">
                <category.icon size={16} />
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {category.templates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template)}
                    className={`flex items-start gap-3 p-4 rounded-lg border text-left transition-all
                      ${selectedTemplate?.id === template.id
                        ? 'border-neon-cyan bg-neon-cyan/10'
                        : 'border-dark-600 hover:border-dark-500 hover:bg-dark-700'
                      }`}
                  >
                    <span className="text-2xl">{template.icon}</span>
                    <div>
                      <div className="font-medium text-white">{template.name}</div>
                      <div className="text-sm text-gray-400">{template.description}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No templates found matching "{search}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center gap-3 px-6 py-4 border-t border-dark-600">
          <div className="text-sm text-gray-500">
            {selectedTemplate && (
              <span>Selected: <span className="text-neon-cyan">{selectedTemplate.name}</span></span>
            )}
          </div>
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-dark-700"
            >
              Cancel
            </button>
            <button
              onClick={handleCreate}
              disabled={!selectedTemplate}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-colors
                ${selectedTemplate
                  ? 'bg-neon-cyan text-dark-900 hover:bg-neon-cyan/90'
                  : 'bg-dark-600 text-gray-500 cursor-not-allowed'
                }`}
            >
              Create Project
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
