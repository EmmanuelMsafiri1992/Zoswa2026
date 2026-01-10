import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-dark-700 to-dark-800 border border-white/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 7h10l-10 10h10"
                    stroke="url(#footerGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="footerGrad" x1="7" y1="7" x2="17" y2="17">
                      <stop stopColor="#00fff5" />
                      <stop offset="1" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-lg font-black">
                <span className="text-white">zos</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-purple-400">wa</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 max-w-xs">
              Learn to code by writing code. Not by watching someone else do it.
            </p>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Learn</h4>
            <ul className="space-y-3">
              {[
                { name: 'Web Development', href: '/courses/frontend' },
                { name: 'Backend Development', href: '/courses/backend' },
                { name: 'DevOps & Cloud', href: '/courses/devops' },
                { name: 'AI & Machine Learning', href: '/courses/ai' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { name: 'Pricing', href: '/pricing' },
                { name: 'About', href: '/about' },
                { name: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-3">
              {[
                { name: 'Privacy', href: '/privacy' },
                { name: 'Terms', href: '/terms' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {currentYear} zoswa. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built for builders.
          </p>
        </div>
      </div>
    </footer>
  )
}
