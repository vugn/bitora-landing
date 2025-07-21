import { MessageCircle, Send } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Telegram",
      icon: Send,
      href: "https://t.me/BTOoffical",
      color: "hover:text-cyan-400 hover:border-cyan-400",
      description: "Join our community",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "https://discord.gg/Y889ChRb",
      color: "hover:text-indigo-400 hover:border-indigo-400",
      description: "Connect with us",
    },
  ]

  return (
    <section id="social-links" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
          <img
            src="/images/logo/vectorlogo.svg"
            alt="Bitora Logo"
            className="w-10 h-10 object-contain filter brightness-0 invert"
          />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-600 dark:text-blue-300 mb-12">
          Connect with us on social media and stay updated with the latest news
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`group bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-blue-950/50 transition-all duration-300 hover:scale-105 ${link.color} block shadow-lg`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-800/30 to-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-6 h-6 text-gray-600 dark:text-slate-300 group-hover:text-current transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-blue-300 mb-2">{link.name}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-current transition-colors duration-300">
                {link.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
