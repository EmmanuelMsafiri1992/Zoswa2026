import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  Terminal,
  Braces,
  Database,
  Globe,
  Cpu,
  Layers,
  ChevronRight,
  ArrowUpRight,
  Play,
  MousePointer2,
  Smartphone,
  Brain,
  BarChart3,
  Link as LinkIcon,
  Shield,
  Cloud,
  Heart,
  DollarSign,
  GraduationCap,
  FileCode,
  FileText,
  Clock,
} from 'lucide-react'
import Button from '../components/ui/Button'
import { studentProjects, studentProjectCategories } from '../data/studentProjects'

export default function Home() {
  const navigate = useNavigate()
  const [activeTrack, setActiveTrack] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [activeProjectCategory, setActiveProjectCategory] = useState('all')
  const heroRef = useRef(null)

  // Icon mapping for project categories
  const categoryIcons = {
    Globe, Smartphone, Brain, BarChart3, Cpu, LinkIcon, Shield, Cloud, Heart, DollarSign
  }

  // Get featured projects (first 6 from selected category or all)
  const featuredProjects = activeProjectCategory === 'all'
    ? studentProjects.slice(0, 9)
    : studentProjects.filter(p => p.category === activeProjectCategory).slice(0, 6)

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  // Typing animation for code
  const codeSnippets = [
    'const future = await learn();',
    '<div class="developer">You</div>',
    'SELECT skills FROM zoswa;',
    'git commit -m "hired!"',
  ]

  useEffect(() => {
    let currentSnippet = 0
    let currentChar = 0
    let isDeleting = false

    const type = () => {
      const snippet = codeSnippets[currentSnippet]

      if (!isDeleting) {
        setTypedText(snippet.substring(0, currentChar + 1))
        currentChar++

        if (currentChar === snippet.length) {
          setTimeout(() => { isDeleting = true }, 2000)
        }
      } else {
        setTypedText(snippet.substring(0, currentChar - 1))
        currentChar--

        if (currentChar === 0) {
          isDeleting = false
          currentSnippet = (currentSnippet + 1) % codeSnippets.length
        }
      }
    }

    const interval = setInterval(type, isDeleting ? 50 : 100)
    return () => clearInterval(interval)
  }, [])

  // Auto-rotate tracks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrack((prev) => (prev + 1) % 6)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const tracks = [
    { name: 'Web Interfaces', icon: Globe, color: '#00fff5', tag: 'frontend' },
    { name: 'Server Systems', icon: Database, color: '#a855f7', tag: 'backend' },
    { name: 'Full Applications', icon: Layers, color: '#22c55e', tag: 'fullstack' },
    { name: 'Cloud & Deploy', icon: Terminal, color: '#f97316', tag: 'devops' },
    { name: 'Machine Intelligence', icon: Cpu, color: '#ec4899', tag: 'ai' },
    { name: 'Digital Foundations', icon: Braces, color: '#eab308', tag: 'basics' },
  ]

  return (
    <div className="relative">
      {/* Organic background shapes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{
            y: backgroundY,
            background: 'radial-gradient(circle, rgba(0,255,245,0.08) 0%, transparent 70%)',
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/3 -right-20 w-[400px] h-[400px]"
          style={{
            background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px]"
          style={{
            background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Section 1: Hero - Unconventional diagonal split */}
      <section ref={heroRef} className="min-h-screen relative pt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">

            {/* Left content - offset positioning */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 lg:col-start-1 relative z-10"
            >
              {/* Quirky label */}
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-gradient-to-r from-neon-cyan to-transparent" />
                <span className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Not another tutorial site
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8">
                <span className="block text-white">Stop</span>
                <span className="block text-white">Watching.</span>
                <span className="block mt-2 bg-gradient-to-r from-neon-cyan via-purple-400 to-neon-pink bg-clip-text text-transparent">
                  Start Building.
                </span>
              </h1>

              <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
                Your browser becomes your IDE. Write real code, see instant results,
                ship actual projects. No setup. No excuses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/register')}
                  className="group relative px-8 py-4 bg-white text-dark-900 font-bold rounded-full overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Now — Free
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  onClick={() => navigate('/tracks')}
                  className="px-8 py-4 text-gray-300 font-medium flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Play className="w-4 h-4" />
                  See how it works
                </motion.button>
              </div>

              {/* Social proof - minimal */}
              <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {['E', 'M', 'S', 'A', 'J'].map((letter, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-dark-900 flex items-center justify-center text-xs font-bold"
                      style={{
                        background: `linear-gradient(135deg, ${tracks[i].color}40, ${tracks[i].color}20)`,
                        color: tracks[i].color
                      }}
                    >
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="text-white font-semibold">2,847</span> started this week
                </p>
              </div>
            </motion.div>

            {/* Right content - Interactive terminal */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-6 lg:col-start-7 relative"
            >
              {/* Floating code terminal */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-purple-500/20 rounded-3xl blur-3xl" />

                {/* Terminal window */}
                <div className="relative bg-dark-800/90 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
                  {/* Terminal header */}
                  <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs text-gray-500 font-mono">zoswa://learn</span>
                    <div className="w-16" />
                  </div>

                  {/* Terminal content */}
                  <div className="p-6 font-mono text-sm">
                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <span className="text-neon-green">→</span>
                      <span>~/your-future</span>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-neon-cyan">$</span>
                      <span className="text-white">{typedText}</span>
                      <span className="w-2 h-5 bg-neon-cyan animate-pulse" />
                    </div>

                    {/* Output preview */}
                    <div className="mt-6 p-4 bg-dark-900/50 rounded-lg border border-white/5">
                      <div className="text-gray-400 text-xs mb-2">// Output</div>
                      <div className="text-neon-green">✓ Skills: Loading...</div>
                      <div className="text-neon-cyan mt-1">✓ Career: Transforming...</div>
                      <div className="text-purple-400 mt-1">✓ Future: Bright</div>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 px-4 py-2 bg-dark-700 rounded-full border border-white/10 text-xs text-gray-400"
                >
                  <span className="text-neon-green">●</span> Live Preview
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-dark-700 rounded-full border border-white/10 text-xs"
                >
                  <span className="text-neon-cyan font-bold">+50 XP</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <MousePointer2 className="w-5 h-5 text-gray-600" />
          <span className="text-xs text-gray-600">Scroll</span>
        </motion.div>
      </section>

      {/* Section 2: Paths - Horizontal scrolling cards */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header - Left aligned, minimal */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-neon-cyan text-sm font-mono mb-4 block">001</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white">
                Pick your weapon.
              </h2>
            </div>
            <Link
              to="/tracks"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              View all paths
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Track cards - Staggered grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track, index) => {
              const Icon = track.icon
              const isActive = activeTrack === index

              return (
                <motion.div
                  key={track.tag}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => navigate('/register')}
                  className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                    isActive
                      ? 'bg-dark-700/80 border-2'
                      : 'bg-dark-800/50 border border-white/5 hover:border-white/10'
                  }`}
                  style={{
                    borderColor: isActive ? `${track.color}40` : undefined,
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${track.color}20, transparent)`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: track.color }} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{track.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {track.tag === 'frontend' && 'React, CSS, TypeScript & beyond'}
                    {track.tag === 'backend' && 'Node.js, APIs, Databases'}
                    {track.tag === 'fullstack' && 'End-to-end web development'}
                    {track.tag === 'devops' && 'Docker, AWS, CI/CD pipelines'}
                    {track.tag === 'ai' && 'Python, ML, LLMs & prompts'}
                    {track.tag === 'basics' && 'OS, Office, Digital skills'}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center gap-2 text-sm" style={{ color: track.color }}>
                    <span>Start learning</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTrack"
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        boxShadow: `0 0 40px ${track.color}20`,
                      }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 3: How it works - Vertical timeline */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-purple-400 text-sm font-mono mb-4 block">002</span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Three panels. Zero friction.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Instructions on the left. Your code in the middle. Live results on the right.
              That's it. That's the whole thing.
            </p>
          </div>

          {/* Interface mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-purple-500/10 to-neon-pink/10 rounded-3xl blur-3xl" />

            <div className="relative bg-dark-800 rounded-2xl border border-white/10 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-4 px-4 py-3 bg-dark-900 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-4 py-1 bg-dark-700 rounded-full text-xs text-gray-500">
                    learn.zoswa.com/css-flexbox
                  </div>
                </div>
                <div className="w-16" />
              </div>

              {/* Three column layout */}
              <div className="grid grid-cols-3 divide-x divide-white/5 min-h-[400px]">
                {/* Left - Instructions */}
                <div className="p-6 bg-dark-800/50">
                  <div className="text-xs text-neon-cyan font-mono mb-4">STEP 3 OF 5</div>
                  <h4 className="text-white font-bold mb-3">Center the box</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Use <code className="px-1.5 py-0.5 bg-dark-700 rounded text-neon-cyan text-xs">justify-content</code> and <code className="px-1.5 py-0.5 bg-dark-700 rounded text-neon-cyan text-xs">align-items</code> to center the content.
                  </p>
                  <div className="p-3 bg-dark-900/50 rounded-lg border border-neon-green/20">
                    <div className="text-xs text-neon-green">✓ Hint</div>
                    <p className="text-xs text-gray-400 mt-1">Both properties need the value "center"</p>
                  </div>
                </div>

                {/* Middle - Code editor */}
                <div className="p-6 bg-dark-900 font-mono text-sm">
                  <div className="text-gray-600 mb-2">styles.css</div>
                  <div className="space-y-1">
                    <div><span className="text-purple-400">.container</span> {'{'}</div>
                    <div className="pl-4"><span className="text-neon-cyan">display</span>: flex;</div>
                    <div className="pl-4"><span className="text-neon-cyan">justify-content</span>: center;</div>
                    <div className="pl-4"><span className="text-neon-cyan">align-items</span>: center<span className="animate-pulse">|</span>;</div>
                    <div>{'}'}</div>
                  </div>
                </div>

                {/* Right - Preview */}
                <div className="p-6 bg-white flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-neon-cyan to-purple-500 flex items-center justify-center text-white font-bold">
                    BOX
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Pricing - Dead simple */}
      <section className="py-32 relative">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-neon-pink text-sm font-mono mb-4 block">003</span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            7 bucks. Everything.
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            No tiers. No "pro" features locked away. No yearly upsell.
            <br />
            Just one price for the whole thing.
          </p>

          {/* Price card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink rounded-3xl blur-xl opacity-30" />

            <div className="relative bg-dark-800 rounded-3xl border border-white/10 p-12">
              <div className="flex items-baseline justify-center gap-1 mb-6">
                <span className="text-2xl text-gray-400">$</span>
                <span className="text-8xl font-black text-white">7</span>
                <span className="text-xl text-gray-500">/mo</span>
              </div>

              <ul className="text-left space-y-3 mb-8 text-gray-400">
                {[
                  'All 6 learning paths',
                  'Browser-based code editor',
                  'Unlimited lessons & projects',
                  'Completion certificates',
                  'Cancel whenever',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-neon-green">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <Button
                size="xl"
                className="w-full"
                onClick={() => navigate('/register')}
              >
                Try 7 days free
              </Button>

              <p className="text-xs text-gray-600 mt-4">
                No card needed to start
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Student Projects */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-neon-green text-sm font-mono mb-4 block">004</span>
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Final Year Projects.
              </h2>
              <p className="text-gray-400 max-w-lg">
                Complete project packages with source code, documentation, proposals & more.
                Ready to submit, ready to defend.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors mt-4 md:mt-0"
            >
              View all 200+ projects
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveProjectCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeProjectCategory === 'all'
                  ? 'bg-white text-dark-900'
                  : 'bg-dark-700/50 text-gray-400 hover:text-white border border-white/10'
              }`}
            >
              All Projects
            </motion.button>
            {studentProjectCategories.slice(0, 6).map((cat) => {
              const IconComponent = categoryIcons[cat.icon] || Globe
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveProjectCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    activeProjectCategory === cat.id
                      ? 'text-dark-900'
                      : 'bg-dark-700/50 text-gray-400 hover:text-white border border-white/10'
                  }`}
                  style={{
                    backgroundColor: activeProjectCategory === cat.id ? cat.color : undefined,
                  }}
                >
                  <IconComponent className="w-4 h-4" />
                  {cat.name}
                </motion.button>
              )
            })}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {featuredProjects.map((project, index) => {
                const category = studentProjectCategories.find(c => c.id === project.category)
                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="group relative bg-dark-800/50 rounded-2xl border border-white/5 hover:border-white/10 overflow-hidden cursor-pointer"
                    onClick={() => navigate('/projects')}
                  >
                    {/* Category badge */}
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        backgroundColor: `${category?.color}20`,
                        color: category?.color,
                      }}
                    >
                      {category?.name}
                    </div>

                    <div className="p-6">
                      {/* Title */}
                      <h3 className="text-lg font-bold text-white mb-3 pr-20 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-500"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-dark-700 rounded text-xs text-gray-500">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {project.duration}
                          </span>
                          <span className={`px-2 py-0.5 rounded ${
                            project.difficulty === 'Advanced'
                              ? 'bg-red-500/10 text-red-400'
                              : project.difficulty === 'Intermediate'
                              ? 'bg-yellow-500/10 text-yellow-400'
                              : 'bg-green-500/10 text-green-400'
                          }`}>
                            {project.difficulty}
                          </span>
                        </div>
                        <span className="text-xl font-bold text-white">
                          ${project.price}
                        </span>
                      </div>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-5 h-5 text-neon-cyan" />
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/projects')}
              className="px-8 py-4 bg-gradient-to-r from-neon-green/10 to-neon-cyan/10 border border-neon-green/30 text-white font-semibold rounded-full inline-flex items-center gap-3 hover:border-neon-green/50 transition-colors"
            >
              <GraduationCap className="w-5 h-5 text-neon-green" />
              Browse All Student Projects
              <ChevronRight className="w-4 h-4" />
            </motion.button>
            <p className="text-sm text-gray-500 mt-4">
              200+ projects across 10 categories • Complete documentation included
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Final CTA - Minimal */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-black text-white mb-8">
              Your move.
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto">
              The gap between "I want to code" and "I can code" is smaller than you think.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/register')}
              className="px-12 py-5 bg-white text-dark-900 font-bold text-lg rounded-full"
            >
              Begin now
            </motion.button>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <span className="text-[300px] font-black text-white select-none">Z</span>
        </div>
      </section>
    </div>
  )
}
