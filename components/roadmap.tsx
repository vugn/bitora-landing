import { CheckCircle, Circle, Clock } from "lucide-react"

export function Roadmap() {
  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Foundation",
      status: "completed",
      items: ["Core team assembly", "Whitepaper development", "Initial concept validation", "Community building"],
    },
    {
      phase: "Phase 2",
      title: "Development",
      status: "in-progress",
      items: ["Smart contract development", "Security audits", "Beta testing platform", "Partnership negotiations"],
    },
    {
      phase: "Phase 3",
      title: "Launch",
      status: "upcoming",
      items: ["Mainnet deployment", "Token generation event", "Exchange listings", "Mobile app release"],
    },
    {
      phase: "Phase 4",
      title: "Expansion",
      status: "upcoming",
      items: ["Global partnerships", "Advanced features", "Cross-chain integration", "Enterprise solutions"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-400" />
      default:
        return <Circle className="w-6 h-6 text-slate-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-400/50 bg-green-400/10"
      case "in-progress":
        return "border-blue-400/50 bg-blue-400/10"
      default:
        return "border-slate-400/50 bg-slate-400/10"
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Roadmap
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300">Our journey to revolutionize blockchain payments</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line (hidden on mobile) */}
              {index < roadmapItems.length - 1 && (
                <div className="hidden xl:block absolute top-8 left-full w-8 h-0.5 bg-gradient-to-r from-blue-400/50 to-transparent z-0" />
              )}

              <div
                className={`relative z-10 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 transition-all duration-300 hover:scale-105 shadow-lg ${getStatusColor(item.status)}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  {getStatusIcon(item.status)}
                  <div>
                    <div className="text-sm text-gray-500 dark:text-slate-400 font-medium">{item.phase}</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                </div>

                <ul className="space-y-2">
                  {item.items.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-start gap-2 text-gray-600 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
