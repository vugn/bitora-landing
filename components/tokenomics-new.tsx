import { Button } from "@/components/ui/button"
import { PieChart, FileText, TrendingUp, Zap, ArrowRightLeft, Shield } from "lucide-react"

export function Tokenomics() {
    const tokenUtilities = [
        {
            icon: TrendingUp,
            title: "Transaction Fees",
            description: "Native token for all network transactions with fixed fee structure"
        },
        {
            icon: Zap,
            title: "Protocol Governance",
            description: "Participate in protocol upgrades and network decisions"
        },
        {
            icon: ArrowRightLeft,
            title: "ERC-20 Migration",
            description: "Seamless migration from ERC-20 tokens to native BTO protocol"
        },
        {
            icon: Shield,
            title: "Network Security",
            description: "Secure the network through validator participation and consensus"
        }
    ]

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
                        Powering cross-chain utility with transparent token economics
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Token Information */}
                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Token Information</h3>

                        <div className="space-y-6">
                            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="text-gray-600 dark:text-slate-300 font-medium">Token Name</span>
                                <span className="text-gray-900 dark:text-white font-bold">Bitora</span>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="text-gray-600 dark:text-slate-300 font-medium">Token Symbol</span>
                                <span className="text-gray-900 dark:text-white font-bold">BTO</span>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="text-gray-600 dark:text-slate-300 font-medium">Total Supply</span>
                                <span className="text-gray-900 dark:text-white font-bold">Fixed Supply</span>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="text-gray-600 dark:text-slate-300 font-medium">Launch Date</span>
                                <span className="text-gray-900 dark:text-white font-bold">Q4 2025</span>
                            </div>

                            <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg">
                                <span className="text-gray-600 dark:text-slate-300 font-medium">Network Type</span>
                                <span className="text-gray-900 dark:text-white font-bold">Native Blockchain</span>
                            </div>
                        </div>
                    </div>

                    {/* Token Utility */}
                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Token Utility</h3>

                        <div className="space-y-6">
                            {tokenUtilities.map((utility, index) => (
                                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800/70 transition-colors">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <utility.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{utility.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-slate-300">{utility.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Documentation and Resources */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 dark:border-white/10">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Documentation & Resources</h3>
                        <p className="text-gray-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                            Get detailed information about BTO tokenomics, technical specifications, and migration processes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                variant="outline"
                                size="lg"
                                disabled
                                className="bg-white/50 dark:bg-slate-800/50 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed"
                            >
                                <FileText className="w-4 h-4 mr-2" />
                                Documentation (Coming Soon)
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                disabled
                                className="bg-white/50 dark:bg-slate-800/50 border-gray-300 dark:border-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed"
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
