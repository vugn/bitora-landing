import { Shield, Zap, Globe, Users } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Shield,
      title: "Secure Blockchain",
      description: "Built on cutting-edge blockchain technology for maximum security and transparency.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant transactions with minimal fees for seamless real-world payments.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connecting blockchain innovation with real-world payment solutions worldwide.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community. Join the revolution.",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            The Future of Payments
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto">
            Bitora Ecosystem bridges the gap between blockchain innovation and real-world payment solutions, creating a
            seamless experience for users and businesses alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group shadow-lg"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
