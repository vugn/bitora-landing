import { Button } from "@/components/ui/button"
import { PieChart, FileText, TrendingUp, Zap, Vote, Gift, Crown } from "lucide-react"

export function Tokenomics() {
  const tokenDistribution = [
    { category: "Public Sale", percentage: 30, color: "bg-blue-500", fill: "#3b82f6" },
    { category: "Team & Advisors", percentage: 20, color: "bg-purple-500", fill: "#a855f7" },
    { category: "Development", percentage: 25, color: "bg-green-500", fill: "#22c55e" },
    { category: "Marketing", percentage: 15, color: "bg-yellow-500", fill: "#eab308" },
    { category: "Reserve", percentage: 10, color: "bg-red-500", fill: "#ef4444" },
  ]

  // Calculate stroke-dasharray values for SVG circle
  const radius = 80
  const circumference = 2 * Math.PI * radius
  let cumulativePercentage = 0

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <PieChart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            BTO Tokenomics
          </h2>
          <p className="text-xl text-gray-600 dark:text-slate-300">
            Powering cross-chain utility with transparent token distribution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Token Distribution Chart */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Token Distribution</h3>

            {/* Chart Container */}
            <div className="flex flex-col items-center space-y-6">
              {/* SVG Pie Chart */}
              <div className="relative w-64 h-64">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                  {/* Background circle */}
                  <circle
                    cx="100"
                    cy="100"
                    r={radius}
                    fill="none"
                    stroke="rgb(229 231 235)"
                    strokeWidth="2"
                    className="dark:stroke-gray-700"
                  />

                  {tokenDistribution.map((item, index) => {
                    const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`
                    const strokeDashoffset = -cumulativePercentage * circumference / 100
                    cumulativePercentage += item.percentage

                    return (
                      <circle
                        key={index}
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={item.fill}
                        strokeWidth="12"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-1000 ease-in-out hover:stroke-[14px] cursor-pointer"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))'
                        }}
                      />
                    )
                  })}
                </svg>

                {/* Center content - positioned absolutely */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-xl font-bold text-gray-900 dark:text-white">BITORA</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400 uppercase tracking-wide">Token</div>
                  </div>
                </div>
              </div>

              {/* Chart Legend */}
              <div className="w-full max-w-sm">
                <div className="text-center mb-3">
                  <div className="text-sm text-gray-500 dark:text-slate-500">Total Supply</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">1,000,000,000</div>
                </div>
              </div>
            </div>

            {/* Distribution List */}
            <div className="mt-6 space-y-2">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-slate-300 uppercase tracking-wide mb-3">Distribution Breakdown</h4>
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-white/5 transition-all duration-200 group">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full shadow-sm group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: item.fill }}
                    />
                    <span className="text-gray-700 dark:text-slate-300 font-medium text-sm">{item.category}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-900 dark:text-white font-bold text-sm">{item.percentage}%</span>
                    <div className="text-xs text-gray-500 dark:text-slate-500">
                      {(item.percentage * 10000000).toLocaleString()} tokens
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            {/* Token Utility */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Token Utility</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Network Fees</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400">Transaction fees and network operations</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Vote className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Governance</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400">Voting rights and proposals</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Staking Rewards</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400">Earn rewards through staking</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Crown className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">Premium Access</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400">Exclusive features and benefits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Documentation */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Documentation</h3>
              </div>
              <p className="text-gray-600 dark:text-slate-300 mb-6 text-sm">
                Get detailed information about our tokenomics, technology, and roadmap.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300 bg-transparent dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white text-sm py-2"
                >
                  Read Whitepaper
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 bg-transparent dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-400 dark:hover:text-white text-sm py-2"
                >
                  Technical Brief
                </Button>
              </div>
            </div>

            {/* Token Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Token Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1B</div>
                  <div className="text-xs text-gray-600 dark:text-slate-400">Total Supply</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Fixed</div>
                  <div className="text-xs text-gray-600 dark:text-slate-400">Supply Type</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">5%</div>
                  <div className="text-xs text-gray-600 dark:text-slate-400">APY Staking</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">Q1</div>
                  <div className="text-xs text-gray-600 dark:text-slate-400">Launch Date</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
