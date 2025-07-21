import { Button } from "@/components/ui/button"
import { PieChart, FileText, TrendingUp, Zap, ArrowRightLeft, Shield } from "lucide-react"

export function Tokenomics() {
  const tokenUtilities = [
    {
      icon: TrendingUp,
      title: "Transaction Fees",
      description: "Internal trading fee: $1.00 per transaction, paid in BTO tokens"
    },
    {
      icon: Zap,
      title: "Token Creation",
      description: "Flat $3.00 fee for token creation through the BITZZA protocol"
    },
    {
      icon: ArrowRightLeft,
      title: "Pizza Transaction Fee",
      description: "$0.15 per transaction, paid in BTO tokens"
    },
    {
      icon: Shield,
      title: "Burning Mechanism",
      description: "Tokens burned on transactions to reduce supply and increase scarcity"
    }
  ]

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <img
              src="/images/logo/vectorlogo.svg"
              alt="Bitora Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            BTO Tokenomics
          </h2>
          <p className="text-xl text-gray-600 dark:text-blue-300">
            Sustainable token economics with real-world utility
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Token Information */}
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-blue-950/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-8 text-center">Token Information</h3>

            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/50 rounded-lg">
                <span className="text-gray-600 dark:text-blue-300 font-medium">Token Name</span>
                <span className="text-gray-900 dark:text-blue-200 font-bold">Bitora</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/50 rounded-lg">
                <span className="text-gray-600 dark:text-blue-300 font-medium">Token Symbol</span>
                <span className="text-gray-900 dark:text-blue-200 font-bold">BTO</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/50 rounded-lg">
                <span className="text-gray-600 dark:text-blue-300 font-medium">Total Supply</span>
                <span className="text-gray-900 dark:text-blue-200 font-bold">100,000,000 BTO</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/50 rounded-lg">
                <span className="text-gray-600 dark:text-blue-300 font-medium">Initial Price</span>
                <span className="text-gray-900 dark:text-blue-200 font-bold">$0.17 per BTO</span>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-black/50 rounded-lg">
                <span className="text-gray-600 dark:text-blue-300 font-medium">Launch Date</span>
                <span className="text-gray-900 dark:text-blue-200 font-bold">Q3 2025</span>
              </div>
            </div>
          </div>

          {/* Token Utility */}
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-blue-950/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-8 text-center">Token Utility</h3>

            <div className="space-y-6">
              {tokenUtilities.map((utility, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-black/50 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-950/30 transition-colors">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-800 to-blue-950 rounded-lg flex items-center justify-center flex-shrink-0">
                    <utility.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-blue-300 mb-2">{utility.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-blue-200">{utility.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Token Allocation */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-8 text-center">Token Allocation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">50%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Public Sale</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">50,000,000 BTO allocated for public token sale in tiered rounds to raise $35 million.</p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">15%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Team & Founders</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">15,000,000 BTO reserved for team and founders, locked and vested over 12 to 24 months.</p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">15%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Ecosystem & Rewards</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">15,000,000 BTO for ecosystem development, staking, liquidity mining, and loyalty programs.</p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">10%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Treasury</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">10,000,000 BTO held in company treasury for operational costs, legal expenses, and marketing.</p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">5%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Partnerships & Advisors</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">5,000,000 BTO designated for partnerships and advisors, locked and vested according to agreements.</p>
            </div>
            <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-blue-950/50 shadow-md">
              <div className="text-center mb-2">
                <span className="text-blue-700 dark:text-blue-400 font-bold text-xl">5%</span>
                <h4 className="font-medium text-gray-900 dark:text-blue-300">Community Initiatives</h4>
              </div>
              <p className="text-sm text-gray-600 dark:text-blue-200">5,000,000 BTO reserved for community initiatives such as airdrops, giveaways, and strategic future use.</p>
            </div>
          </div>
        </div>

        {/* Fee Structure */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-8 text-center">Fee Structure & Token Lock</h3>
          <div className="bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl p-8 border border-gray-200 dark:border-blue-950/50 shadow-lg">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Token Sales</h4>
                <p className="text-gray-600 dark:text-blue-200 mb-2">Initial price set at $0.17 per BTO token, increasing in four tiers up to $1.00 per token during fundraising rounds.</p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Fee Structure</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-blue-200">
                  <li>Internal peer-to-peer trading fee: $1.00 per transaction, paid in BTO tokens.</li>
                  <li>Token creation fee through the BITZZA protocol: a flat $3.00 fee, paid in BTO tokens.</li>
                  <li>Pizza sale transaction fee: $0.15 per transaction, paid in BTO tokens.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">Token Lock & Vesting</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-blue-200">
                  <li>All tokens purchased during fundraising are locked until the utility launch (after first 10 pizza stores open).</li>
                  <li>Team and founder tokens are vested gradually over a period of 12 to 24 months.</li>
                  <li>A small percentage of tokens may be burned on transactions to reduce supply and increase scarcity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation and Resources */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-blue-950/30 to-black/40 dark:from-blue-950/30 dark:to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-900/50 dark:border-blue-900/50">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-blue-300 mb-4">Documentation & Resources</h3>
            <p className="text-gray-600 dark:text-blue-200 mb-8 max-w-2xl mx-auto">
              Get detailed information about BTO tokenomics, technical specifications, and migration processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                disabled
                className="bg-white/50 dark:bg-black/40 border-gray-300 dark:border-blue-900/30 text-gray-500 dark:text-blue-300/50 cursor-not-allowed"
              >
                <FileText className="w-4 h-4 mr-2" />
                Documentation (Coming Soon)
              </Button>

              <Button
                variant="outline"
                size="lg"
                disabled
                className="bg-white/50 dark:bg-black/40 border-gray-300 dark:border-blue-900/30 text-gray-500 dark:text-blue-300/50 cursor-not-allowed"
              >
                <ArrowRightLeft className="w-4 h-4 mr-2" />
                Migration Guide (Coming Soon)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
