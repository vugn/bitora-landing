import { Button } from "@/components/ui/button"
import { PieChart, FileText, TrendingUp } from "lucide-react"

export function Tokenomics() {
  const tokenDistribution = [
    { category: "Public Sale", percentage: 30, color: "bg-blue-500" },
    { category: "Team & Advisors", percentage: 20, color: "bg-purple-500" },
    { category: "Development", percentage: 25, color: "bg-green-500" },
    { category: "Marketing", percentage: 15, color: "bg-yellow-500" },
    { category: "Reserve", percentage: 10, color: "bg-red-500" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <PieChart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Tokenomics
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400">
            Transparent and sustainable token distribution model
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Token Distribution Chart */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Token Distribution</h3>

            {/* Visual Chart */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 via-green-500 via-yellow-500 to-red-500 p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">BITORA</div>
                    <div className="text-sm text-slate-400">Token</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Distribution List */}
            <div className="space-y-3">
              {tokenDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${item.color}`} />
                    <span className="text-slate-300">{item.category}</span>
                  </div>
                  <span className="text-white font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Token Utility</h3>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Transaction fees and network operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Governance voting rights</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Staking rewards and yield farming</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Access to premium features</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Documentation</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Get detailed information about our tokenomics, technology, and roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 bg-transparent"
                >
                  Read Whitepaper
                </Button>
                <Button
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300 bg-transparent"
                >
                  Technical Brief
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
