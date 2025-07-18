import Link from "next/link"
import { ArrowLeft, Book, Code, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DocsPage() {
    const sections = [
        {
            icon: Book,
            title: "Getting Started",
            description: "Learn the basics of Bitora ecosystem",
            items: [
                "Introduction to Bitora",
                "Setting up your wallet",
                "First transaction",
                "Understanding tokenomics"
            ]
        },
        {
            icon: Code,
            title: "Developer Guide",
            description: "Build on Bitora blockchain",
            items: [
                "API Documentation",
                "Smart Contract Development",
                "SDK Integration",
                "Testing Framework"
            ]
        },
        {
            icon: Users,
            title: "User Guide",
            description: "Complete user documentation",
            items: [
                "Account Management",
                "Transaction Guide",
                "Staking Tutorial",
                "Security Best Practices"
            ]
        },
        {
            icon: Zap,
            title: "Advanced Topics",
            description: "Deep dive into Bitora technology",
            items: [
                "Consensus Mechanism",
                "Network Architecture",
                "Governance System",
                "Economic Model"
            ]
        }
    ]

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
            <div className="relative">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30 dark:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 dark:from-blue-500/10 dark:via-transparent dark:to-purple-500/10" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <Link href="/">
                                <Button variant="ghost" className="mb-8">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Button>
                            </Link>

                            <div className="text-center mb-16">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    Documentation
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                                    Everything you need to know about Bitora ecosystem, from basic concepts to advanced development.
                                </p>
                            </div>

                            {/* Documentation Sections */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {sections.map((section, index) => (
                                    <div key={index} className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                                <section.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{section.title}</h3>
                                                <p className="text-sm text-gray-600 dark:text-slate-400">{section.description}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {section.items.map((item, itemIndex) => (
                                                <li key={itemIndex} className="flex items-center gap-2">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                                                    <span className="text-gray-700 dark:text-slate-300 text-sm">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Coming Soon Notice */}
                            <div className="mt-16 text-center">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        📚 Full Documentation Coming Soon
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                                        We're working hard to provide comprehensive documentation. Stay tuned for detailed guides, tutorials, and API references.
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                            Subscribe for Updates
                                        </Button>
                                        <Button variant="outline">
                                            Download Whitepaper
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
