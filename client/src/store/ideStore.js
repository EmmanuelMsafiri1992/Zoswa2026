import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Default project templates
const defaultTemplates = {
  'html-css-js': {
    name: 'HTML/CSS/JS Website',
    language: 'html',
    files: [
      { path: 'index.html', content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My Website</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>Hello World!</h1>\n  <script src="script.js"></script>\n</body>\n</html>' },
      { path: 'style.css', content: 'body {\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 20px;\n  background: #1a1a2e;\n  color: #eee;\n}\n\nh1 {\n  color: #00fff5;\n}' },
      { path: 'script.js', content: 'console.log("Hello from JavaScript!");\n\ndocument.querySelector("h1").addEventListener("click", () => {\n  alert("You clicked the heading!");\n});' }
    ]
  },
  'python': {
    name: 'Python Script',
    language: 'python',
    files: [
      { path: 'main.py', content: '# Python Script\nprint("Hello, World!")\n\n# Simple function\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Python"))\n\n# List comprehension\nnumbers = [1, 2, 3, 4, 5]\nsquares = [n ** 2 for n in numbers]\nprint(f"Squares: {squares}")' }
    ]
  },
  'javascript': {
    name: 'JavaScript',
    language: 'javascript',
    files: [
      { path: 'index.js', content: '// JavaScript Example\nconsole.log("Hello, World!");\n\n// Arrow function\nconst greet = (name) => `Hello, ${name}!`;\nconsole.log(greet("JavaScript"));\n\n// Array methods\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log("Doubled:", doubled);' }
    ]
  },
  'typescript': {
    name: 'TypeScript',
    language: 'typescript',
    files: [
      { path: 'index.ts', content: '// TypeScript Example\ninterface Person {\n  name: string;\n  age: number;\n}\n\nfunction greet(person: Person): string {\n  return `Hello, ${person.name}! You are ${person.age} years old.`;\n}\n\nconst user: Person = { name: "TypeScript", age: 12 };\nconsole.log(greet(user));' }
    ]
  },
  'nodejs': {
    name: 'Node.js API',
    language: 'javascript',
    files: [
      { path: 'index.js', content: '// Simple Node.js HTTP Server\nconst http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { "Content-Type": "application/json" });\n  res.end(JSON.stringify({ message: "Hello from Node.js!", path: req.url }));\n});\n\nconst PORT = 3000;\nserver.listen(PORT, () => {\n  console.log(`Server running at http://localhost:${PORT}`);\n});' },
      { path: 'package.json', content: '{\n  "name": "nodejs-api",\n  "version": "1.0.0",\n  "main": "index.js",\n  "scripts": {\n    "start": "node index.js"\n  }\n}' }
    ]
  },
  'react': {
    name: 'React App',
    language: 'jsx',
    files: [
      { path: 'App.jsx', content: 'import React, { useState } from "react";\n\nfunction App() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div className="app">\n      <h1>React Counter</h1>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increment</button>\n      <button onClick={() => setCount(count - 1)}>Decrement</button>\n    </div>\n  );\n}\n\nexport default App;' },
      { path: 'index.html', content: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>React App</title>\n</head>\n<body>\n  <div id="root"></div>\n</body>\n</html>' }
    ]
  },
  'sql': {
    name: 'SQL Database',
    language: 'sql',
    files: [
      { path: 'schema.sql', content: '-- Create tables\nCREATE TABLE users (\n  id INTEGER PRIMARY KEY,\n  name TEXT NOT NULL,\n  email TEXT UNIQUE NOT NULL,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);\n\nCREATE TABLE posts (\n  id INTEGER PRIMARY KEY,\n  user_id INTEGER REFERENCES users(id),\n  title TEXT NOT NULL,\n  content TEXT,\n  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\n);' },
      { path: 'queries.sql', content: '-- Insert sample data\nINSERT INTO users (name, email) VALUES ("John Doe", "john@example.com");\nINSERT INTO users (name, email) VALUES ("Jane Smith", "jane@example.com");\n\nINSERT INTO posts (user_id, title, content) VALUES (1, "First Post", "Hello World!");\nINSERT INTO posts (user_id, title, content) VALUES (2, "Second Post", "Welcome to SQL!");\n\n-- Query data\nSELECT * FROM users;\nSELECT u.name, p.title FROM users u JOIN posts p ON u.id = p.user_id;' }
    ]
  },
  'java': {
    name: 'Java Application',
    language: 'java',
    files: [
      { path: 'Main.java', content: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, Java!");\n        \n        // Simple class usage\n        Person person = new Person("Java", 28);\n        person.greet();\n    }\n}\n\nclass Person {\n    private String name;\n    private int age;\n    \n    public Person(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void greet() {\n        System.out.println("Hello, my name is " + name + " and I am " + age + " years old.");\n    }\n}' }
    ]
  },
  'csharp': {
    name: 'C# Application',
    language: 'csharp',
    files: [
      { path: 'Program.cs', content: 'using System;\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        Console.WriteLine("Hello, C#!");\n        \n        // Simple class usage\n        var person = new Person("C#", 23);\n        person.Greet();\n    }\n}\n\nclass Person\n{\n    public string Name { get; set; }\n    public int Age { get; set; }\n    \n    public Person(string name, int age)\n    {\n        Name = name;\n        Age = age;\n    }\n    \n    public void Greet()\n    {\n        Console.WriteLine($"Hello, my name is {Name} and I am {Age} years old.");\n    }\n}' }
    ]
  },
  'php': {
    name: 'PHP Website',
    language: 'php',
    files: [
      { path: 'index.php', content: '<?php\necho "Hello, PHP!\\n";\n\n// Simple function\nfunction greet($name) {\n    return "Hello, $name!";\n}\n\necho greet("World") . "\\n";\n\n// Array operations\n$numbers = [1, 2, 3, 4, 5];\n$squared = array_map(fn($n) => $n ** 2, $numbers);\nprint_r($squared);\n?>' }
    ]
  },
  'c': {
    name: 'C Program',
    language: 'c',
    files: [
      { path: 'main.c', content: '#include <stdio.h>\n\nint main() {\n    printf("Hello, C!\\n");\n    \n    // Simple loop\n    for (int i = 1; i <= 5; i++) {\n        printf("%d squared = %d\\n", i, i * i);\n    }\n    \n    return 0;\n}' }
    ]
  },
  'cpp': {
    name: 'C++ Program',
    language: 'cpp',
    files: [
      { path: 'main.cpp', content: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nint main() {\n    cout << "Hello, C++!" << endl;\n    \n    // Vector example\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    cout << "Squares: ";\n    for (int n : numbers) {\n        cout << n * n << " ";\n    }\n    cout << endl;\n    \n    return 0;\n}' }
    ]
  },
  'go': {
    name: 'Go Program',
    language: 'go',
    files: [
      { path: 'main.go', content: 'package main\n\nimport "fmt"\n\nfunc main() {\n\tfmt.Println("Hello, Go!")\n\t\n\t// Slice example\n\tnumbers := []int{1, 2, 3, 4, 5}\n\tfmt.Print("Squares: ")\n\tfor _, n := range numbers {\n\t\tfmt.Printf("%d ", n*n)\n\t}\n\tfmt.Println()\n}' }
    ]
  },
  'rust': {
    name: 'Rust Program',
    language: 'rust',
    files: [
      { path: 'main.rs', content: 'fn main() {\n    println!("Hello, Rust!");\n    \n    // Vector example\n    let numbers = vec![1, 2, 3, 4, 5];\n    let squares: Vec<i32> = numbers.iter().map(|n| n * n).collect();\n    println!("Squares: {:?}", squares);\n}' }
    ]
  },
  'ruby': {
    name: 'Ruby Script',
    language: 'ruby',
    files: [
      { path: 'main.rb', content: '# Ruby Script\nputs "Hello, Ruby!"\n\n# Method definition\ndef greet(name)\n  "Hello, #{name}!"\nend\n\nputs greet("World")\n\n# Array operations\nnumbers = [1, 2, 3, 4, 5]\nsquares = numbers.map { |n| n ** 2 }\nputs "Squares: #{squares}"' }
    ]
  }
}

// Language configurations
export const languageConfig = {
  // Browser-executed languages
  html: { name: 'HTML', mode: 'html', engine: 'iframe', icon: '🌐' },
  css: { name: 'CSS', mode: 'css', engine: 'iframe', icon: '🎨' },
  javascript: { name: 'JavaScript', mode: 'javascript', engine: 'browser', icon: '⚡' },
  typescript: { name: 'TypeScript', mode: 'typescript', engine: 'browser', icon: '📘' },
  python: { name: 'Python', mode: 'python', engine: 'pyodide', icon: '🐍' },
  sql: { name: 'SQL', mode: 'sql', engine: 'sql', icon: '🗄️' },

  // Server-executed languages (via Piston API)
  java: { name: 'Java', mode: 'java', engine: 'piston', icon: '☕' },
  csharp: { name: 'C#', mode: 'csharp', engine: 'piston', icon: '🔷' },
  php: { name: 'PHP', mode: 'php', engine: 'piston', icon: '🐘' },
  ruby: { name: 'Ruby', mode: 'ruby', engine: 'piston', icon: '💎' },
  c: { name: 'C', mode: 'c', engine: 'piston', icon: '⚙️' },
  cpp: { name: 'C++', mode: 'cpp', engine: 'piston', icon: '⚙️' },
  go: { name: 'Go', mode: 'go', engine: 'piston', icon: '🔵' },
  rust: { name: 'Rust', mode: 'rust', engine: 'piston', icon: '🦀' },
  kotlin: { name: 'Kotlin', mode: 'kotlin', engine: 'piston', icon: '🟣' },
  swift: { name: 'Swift', mode: 'swift', engine: 'piston', icon: '🍎' },
  perl: { name: 'Perl', mode: 'perl', engine: 'piston', icon: '🐪' },
  r: { name: 'R', mode: 'r', engine: 'piston', icon: '📊' },
  lua: { name: 'Lua', mode: 'lua', engine: 'piston', icon: '🌙' },
  bash: { name: 'Bash', mode: 'shell', engine: 'piston', icon: '🐚' },
  haskell: { name: 'Haskell', mode: 'haskell', engine: 'piston', icon: 'λ' },
  scala: { name: 'Scala', mode: 'scala', engine: 'piston', icon: '🔴' },
  jsx: { name: 'React JSX', mode: 'javascript', engine: 'browser', icon: '⚛️' },
  json: { name: 'JSON', mode: 'json', engine: 'none', icon: '📋' },
  markdown: { name: 'Markdown', mode: 'markdown', engine: 'iframe', icon: '📝' },
  yaml: { name: 'YAML', mode: 'yaml', engine: 'none', icon: '📄' },
  xml: { name: 'XML', mode: 'xml', engine: 'none', icon: '📰' }
}

// Get language from file extension
export const getLanguageFromPath = (path) => {
  const ext = path.split('.').pop().toLowerCase()
  const extMap = {
    html: 'html', htm: 'html',
    css: 'css',
    js: 'javascript', mjs: 'javascript',
    ts: 'typescript', tsx: 'typescript',
    jsx: 'jsx',
    py: 'python',
    sql: 'sql',
    java: 'java',
    cs: 'csharp',
    php: 'php',
    rb: 'ruby',
    c: 'c', h: 'c',
    cpp: 'cpp', cc: 'cpp', cxx: 'cpp', hpp: 'cpp',
    go: 'go',
    rs: 'rust',
    kt: 'kotlin', kts: 'kotlin',
    swift: 'swift',
    pl: 'perl', pm: 'perl',
    r: 'r',
    lua: 'lua',
    sh: 'bash', bash: 'bash',
    hs: 'haskell',
    scala: 'scala',
    json: 'json',
    md: 'markdown',
    yaml: 'yaml', yml: 'yaml',
    xml: 'xml'
  }
  return extMap[ext] || 'text'
}

// Monaco language mode mapping
export const getMonacoLanguage = (language) => {
  const modeMap = {
    javascript: 'javascript',
    typescript: 'typescript',
    jsx: 'javascript',
    python: 'python',
    java: 'java',
    csharp: 'csharp',
    php: 'php',
    ruby: 'ruby',
    c: 'c',
    cpp: 'cpp',
    go: 'go',
    rust: 'rust',
    kotlin: 'kotlin',
    swift: 'swift',
    perl: 'perl',
    r: 'r',
    lua: 'lua',
    bash: 'shell',
    haskell: 'haskell',
    scala: 'scala',
    html: 'html',
    css: 'css',
    sql: 'sql',
    json: 'json',
    markdown: 'markdown',
    yaml: 'yaml',
    xml: 'xml'
  }
  return modeMap[language] || 'plaintext'
}

export const useIdeStore = create(
  persist(
    (set, get) => ({
      // Project state
      project: null,
      projectId: null,
      projectName: 'Untitled Project',
      projectLanguage: 'javascript',

      // Files state
      files: [],
      activeFile: null,
      openTabs: [],

      // Editor state
      theme: 'vs-dark',
      fontSize: 14,
      tabSize: 2,
      wordWrap: 'on',
      minimap: true,

      // Execution state
      isRunning: false,
      output: '',
      outputType: 'console', // 'console' | 'preview' | 'sql'
      sqlResults: null,

      // Terminal state
      terminalHistory: [],

      // UI state
      sidebarCollapsed: false,
      bottomPanelCollapsed: false,
      showPreview: false,
      previewUrl: '',

      // Project actions
      createProject: (template = 'javascript') => {
        const templateData = defaultTemplates[template] || defaultTemplates.javascript
        const projectId = `project_${Date.now()}`

        set({
          projectId,
          projectName: templateData.name,
          projectLanguage: templateData.language,
          files: templateData.files.map(f => ({ ...f, isModified: false })),
          activeFile: templateData.files[0]?.path || null,
          openTabs: templateData.files.length > 0 ? [templateData.files[0].path] : [],
          output: '',
          sqlResults: null
        })

        return projectId
      },

      loadProject: (project) => {
        set({
          project,
          projectId: project._id || project.id,
          projectName: project.name,
          projectLanguage: project.language,
          files: project.files.map(f => ({ ...f, isModified: false })),
          activeFile: project.files[0]?.path || null,
          openTabs: project.files.length > 0 ? [project.files[0].path] : [],
          output: '',
          sqlResults: null,
          theme: project.settings?.theme || 'vs-dark',
          fontSize: project.settings?.fontSize || 14,
          tabSize: project.settings?.tabSize || 2
        })
      },

      // File actions
      createFile: (path, content = '') => {
        const { files, openTabs } = get()
        if (files.find(f => f.path === path)) return false

        set({
          files: [...files, { path, content, isModified: true }],
          activeFile: path,
          openTabs: [...openTabs, path]
        })
        return true
      },

      deleteFile: (path) => {
        const { files, openTabs, activeFile } = get()
        const newFiles = files.filter(f => f.path !== path)
        const newTabs = openTabs.filter(t => t !== path)

        set({
          files: newFiles,
          openTabs: newTabs,
          activeFile: activeFile === path
            ? (newTabs[newTabs.length - 1] || null)
            : activeFile
        })
      },

      renameFile: (oldPath, newPath) => {
        const { files, openTabs, activeFile } = get()

        set({
          files: files.map(f => f.path === oldPath ? { ...f, path: newPath, isModified: true } : f),
          openTabs: openTabs.map(t => t === oldPath ? newPath : t),
          activeFile: activeFile === oldPath ? newPath : activeFile
        })
      },

      updateFileContent: (path, content) => {
        const { files } = get()
        set({
          files: files.map(f =>
            f.path === path ? { ...f, content, isModified: true } : f
          )
        })
      },

      // Tab actions
      openTab: (path) => {
        const { openTabs } = get()
        if (!openTabs.includes(path)) {
          set({ openTabs: [...openTabs, path], activeFile: path })
        } else {
          set({ activeFile: path })
        }
      },

      closeTab: (path) => {
        const { openTabs, activeFile } = get()
        const newTabs = openTabs.filter(t => t !== path)
        const index = openTabs.indexOf(path)

        set({
          openTabs: newTabs,
          activeFile: activeFile === path
            ? (newTabs[Math.max(0, index - 1)] || null)
            : activeFile
        })
      },

      setActiveFile: (path) => set({ activeFile: path }),

      // Editor settings
      setTheme: (theme) => set({ theme }),
      setFontSize: (fontSize) => set({ fontSize }),
      setTabSize: (tabSize) => set({ tabSize }),
      setWordWrap: (wordWrap) => set({ wordWrap }),
      setMinimap: (minimap) => set({ minimap }),

      // Execution
      setIsRunning: (isRunning) => set({ isRunning }),
      setOutput: (output, type = 'console') => set({ output, outputType: type }),
      appendOutput: (text) => set(state => ({ output: state.output + text })),
      clearOutput: () => set({ output: '', sqlResults: null }),
      setSqlResults: (results) => set({ sqlResults: results, outputType: 'sql' }),

      // UI
      toggleSidebar: () => set(state => ({ sidebarCollapsed: !state.sidebarCollapsed })),
      toggleBottomPanel: () => set(state => ({ bottomPanelCollapsed: !state.bottomPanelCollapsed })),
      setShowPreview: (show) => set({ showPreview: show }),
      setPreviewUrl: (url) => set({ previewUrl: url }),

      // Terminal
      addTerminalOutput: (line) => set(state => ({
        terminalHistory: [...state.terminalHistory, line]
      })),
      clearTerminal: () => set({ terminalHistory: [] }),

      // Get current file content
      getCurrentFileContent: () => {
        const { files, activeFile } = get()
        const file = files.find(f => f.path === activeFile)
        return file?.content || ''
      },

      getFile: (path) => {
        const { files } = get()
        return files.find(f => f.path === path)
      },

      // Mark files as saved
      markAllFilesSaved: () => {
        set(state => ({
          files: state.files.map(f => ({ ...f, isModified: false }))
        }))
      },

      // Reset state
      resetProject: () => set({
        project: null,
        projectId: null,
        projectName: 'Untitled Project',
        projectLanguage: 'javascript',
        files: [],
        activeFile: null,
        openTabs: [],
        output: '',
        sqlResults: null,
        terminalHistory: []
      }),

      // Get templates
      getTemplates: () => defaultTemplates
    }),
    {
      name: 'ide-storage',
      partialize: (state) => ({
        theme: state.theme,
        fontSize: state.fontSize,
        tabSize: state.tabSize,
        wordWrap: state.wordWrap,
        minimap: state.minimap
      })
    }
  )
)

export default useIdeStore
