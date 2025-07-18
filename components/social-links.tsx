import { MessageCircle, Twitter, Github, Send } from "lucide-react"

export function SocialLinks() {
  const socialLinks = [
    {
      name: "Discord",
      icon: MessageCircle,
      href: "#",
      color: "hover:text-indigo-400 hover:border-indigo-400",
      description: "Join our community",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "hover:text-blue-400 hover:border-blue-400",
      description: "Follow for updates",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "hover:text-gray-400 hover:border-gray-400",
      description: "View our code",
    },
    {
      name: "Telegram",
      icon: Send,
      href: "#",
      color: "hover:text-cyan-400 hover:border-cyan-400",
      description: "Join discussions",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
          Join Our Community
        </h2>
        <p className="text-xl text-gray-600 dark:text-slate-300 mb-12">
          Connect with us on social media and stay updated with the latest news
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`group bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-105 ${link.color} block shadow-lg`}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <link.icon className="w-6 h-6 text-gray-600 dark:text-slate-300 group-hover:text-current transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{link.name}</h3>
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
