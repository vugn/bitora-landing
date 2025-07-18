"use client"

import { useState, useEffect } from "react"
import { Users, Globe, Zap, Shield } from "lucide-react"

export function Statistics() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      icon: Users,
      label: "Community Members",
      value: "10,000+",
      description: "Growing community",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "50+",
      description: "Global reach",
    },
    {
      icon: Zap,
      label: "Transactions/sec",
      value: "10,000+",
      description: "Lightning fast",
    },
    {
      icon: Shield,
      label: "Security Score",
      value: "99.9%",
      description: "Enterprise grade",
    },
  ]

  if (!mounted) return null

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Platform Statistics
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400">Real-time metrics from our growing ecosystem</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-slate-300 mb-1">{stat.label}</div>
              <div className="text-sm text-slate-400">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Placeholder for future explorer integration */}
        <div className="mt-12 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Blockchain Explorer</h3>
            <p className="text-slate-300 mb-4">
              Real-time blockchain data and analytics will be available here once mainnet launches.
            </p>
            <div className="inline-flex items-center gap-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-sm">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
