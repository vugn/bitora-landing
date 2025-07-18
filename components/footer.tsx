export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">Bitora</span>
            </div>
            <p className="text-gray-600 dark:text-slate-400 mb-4 max-w-md">
              Revolutionizing the future of blockchain payments with cutting-edge technology and real-world solutions.
            </p>
            <div className="text-sm text-gray-500 dark:text-slate-500">
              © {new Date().getFullYear()} Bitora Ecosystem. All rights reserved.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Tokenomics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-600 dark:text-slate-400">
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
