import Link from "next/link"
import { ArrowLeft, HelpCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
    const faqs = [
        {
            category: "General",
            items: [
                {
                    question: "What is Bitora?",
                    answer: "Bitora is a revolutionary blockchain ecosystem that bridges the gap between blockchain innovation and real-world payment solutions. We provide cutting-edge technology for seamless transactions with minimal fees."
                },
                {
                    question: "When will Bitora launch?",
                    answer: "Bitora is currently in development with a planned launch in Q1 2025. We're following our roadmap carefully to ensure a secure and robust platform at launch."
                },
                {
                    question: "What makes Bitora different from other blockchains?",
                    answer: "Bitora focuses specifically on real-world payment solutions with lightning-fast transactions, minimal fees, and enterprise-grade security. Our ecosystem is designed for both individual users and businesses."
                }
            ]
        },
        {
            category: "Tokenomics",
            items: [
                {
                    question: "What is the total supply of BITORA tokens?",
                    answer: "The total supply of BITORA tokens is fixed at 1,000,000,000 (1 billion) tokens. This is a deflationary model with no additional tokens to be minted."
                },
                {
                    question: "How are tokens distributed?",
                    answer: "Token distribution: 30% Public Sale, 25% Development, 20% Team & Advisors, 15% Marketing, 10% Reserve. This ensures sustainable development and community growth."
                },
                {
                    question: "Can I stake BITORA tokens?",
                    answer: "Yes! BITORA tokens can be staked to earn rewards. Staking helps secure the network and provides approximately 5% APY for token holders."
                }
            ]
        },
        {
            category: "Technical",
            items: [
                {
                    question: "What consensus mechanism does Bitora use?",
                    answer: "Bitora uses a Proof-of-Stake (PoS) consensus mechanism that's energy-efficient and provides fast transaction finality while maintaining security."
                },
                {
                    question: "What are the transaction fees?",
                    answer: "Bitora features minimal transaction fees, typically under $0.01 per transaction, making it ideal for both micro-transactions and large transfers."
                },
                {
                    question: "How fast are transactions?",
                    answer: "Bitora can process over 10,000 transactions per second with near-instant finality, making it suitable for real-world payment applications."
                }
            ]
        },
        {
            category: "Security",
            items: [
                {
                    question: "How secure is Bitora?",
                    answer: "Bitora maintains a 99.9% security score with enterprise-grade encryption, multi-signature wallets, and regular security audits by leading blockchain security firms."
                },
                {
                    question: "What wallets support BITORA tokens?",
                    answer: "BITORA tokens will be supported by major wallets including MetaMask, Trust Wallet, and our official Bitora Wallet app upon launch."
                },
                {
                    question: "How do I keep my tokens safe?",
                    answer: "Always use official wallets, enable 2FA, keep your private keys secure, and never share your seed phrase. Consider hardware wallets for large amounts."
                }
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
                    <div className="py-20 px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            <Link href="/">
                                <Button variant="ghost" className="mb-8">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Button>
                            </Link>

                            <div className="text-center mb-16">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <HelpCircle className="w-8 h-8 text-white" />
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    Frequently Asked Questions
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                                    Find answers to common questions about Bitora ecosystem, tokenomics, and technology.
                                </p>
                            </div>

                            {/* FAQ Sections */}
                            <div className="space-y-8">
                                {faqs.map((category, categoryIndex) => (
                                    <div key={categoryIndex} className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
                                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{category.category}</h2>

                                        <Accordion type="single" collapsible className="space-y-2">
                                            {category.items.map((faq, index) => (
                                                <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg">
                                                    <AccordionTrigger className="px-4 py-3 text-left hover:no-underline">
                                                        <span className="font-medium text-gray-900 dark:text-white">{faq.question}</span>
                                                    </AccordionTrigger>
                                                    <AccordionContent className="px-4 pb-4">
                                                        <p className="text-gray-600 dark:text-slate-300">{faq.answer}</p>
                                                    </AccordionContent>
                                                </AccordionItem>
                                            ))}
                                        </Accordion>
                                    </div>
                                ))}
                            </div>

                            {/* Contact Support */}
                            <div className="mt-16 text-center">
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800/30">
                                    <MessageSquare className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                        Can't find what you're looking for?
                                    </h3>
                                    <p className="text-gray-600 dark:text-slate-300 mb-6">
                                        Our support team is here to help. Get in touch with us for personalized assistance.
                                    </p>
                                    <div className="flex justify-center gap-4">
                                        <Link href="/support">
                                            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                                Contact Support
                                            </Button>
                                        </Link>
                                        <Button variant="outline">
                                            Join Community
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
