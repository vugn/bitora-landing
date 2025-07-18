import Link from "next/link"
import { ArrowLeft, Mail, MessageCircle, Phone, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function SupportPage() {
    const supportOptions = [
        {
            icon: MessageCircle,
            title: "Live Chat",
            description: "Get instant help from our support team",
            availability: "24/7 Available",
            action: "Start Chat",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: Mail,
            title: "Email Support",
            description: "Send us your questions via email",
            availability: "Response within 24h",
            action: "Send Email",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: Phone,
            title: "Phone Support",
            description: "Speak directly with our experts",
            availability: "Mon-Fri 9AM-5PM UTC",
            action: "Call Now",
            color: "from-purple-500 to-pink-600"
        }
    ]

    const quickActions = [
        "Check transaction status",
        "Reset password",
        "Update account information",
        "Download whitepaper",
        "Join community channels",
        "Report a bug"
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
                        <div className="max-w-6xl mx-auto">
                            <Link href="/">
                                <Button variant="ghost" className="mb-8">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Home
                                </Button>
                            </Link>

                            <div className="text-center mb-16">
                                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                                    Support Center
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-slate-300 max-w-2xl mx-auto">
                                    We're here to help you with any questions or issues. Choose the best way to reach us.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                                {/* Support Options */}
                                <div className="lg:col-span-2">
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How can we help you?</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        {supportOptions.map((option, index) => (
                                            <div key={index} className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                                                <div className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-xl flex items-center justify-center mb-4`}>
                                                    <option.icon className="w-6 h-6 text-white" />
                                                </div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{option.title}</h3>
                                                <p className="text-gray-600 dark:text-slate-300 text-sm mb-3">{option.description}</p>
                                                <div className="flex items-center gap-2 mb-4">
                                                    <Clock className="w-4 h-4 text-green-500" />
                                                    <span className="text-sm text-green-600 dark:text-green-400">{option.availability}</span>
                                                </div>
                                                <Button className="w-full">
                                                    {option.action}
                                                </Button>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Contact Form */}
                                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 shadow-lg">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h3>

                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                                        Name *
                                                    </label>
                                                    <Input
                                                        placeholder="Your name"
                                                        className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                                        Email *
                                                    </label>
                                                    <Input
                                                        type="email"
                                                        placeholder="your@email.com"
                                                        className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                                    Subject *
                                                </label>
                                                <Input
                                                    placeholder="How can we help?"
                                                    className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2">
                                                    Message *
                                                </label>
                                                <Textarea
                                                    placeholder="Please describe your issue or question in detail..."
                                                    rows={5}
                                                    className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 resize-none"
                                                />
                                            </div>

                                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                                                Send Message
                                            </Button>
                                        </form>
                                    </div>
                                </div>

                                {/* Sidebar */}
                                <div className="space-y-6">
                                    {/* Quick Actions */}
                                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                                        <ul className="space-y-2">
                                            {quickActions.map((action, index) => (
                                                <li key={index}>
                                                    <button className="text-left text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm transition-colors">
                                                        • {action}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-lg">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>

                                        <div className="space-y-4">
                                            <div className="flex items-start gap-3">
                                                <Mail className="w-5 h-5 text-blue-500 mt-0.5" />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white">Email</div>
                                                    <div className="text-sm text-gray-600 dark:text-slate-400">support@bitora.com</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <Phone className="w-5 h-5 text-green-500 mt-0.5" />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white">Phone</div>
                                                    <div className="text-sm text-gray-600 dark:text-slate-400">+1 (555) 123-4567</div>
                                                </div>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-purple-500 mt-0.5" />
                                                <div>
                                                    <div className="font-medium text-gray-900 dark:text-white">Address</div>
                                                    <div className="text-sm text-gray-600 dark:text-slate-400">
                                                        123 Blockchain St<br />
                                                        Crypto City, CC 12345
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Help Resources */}
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-200 dark:border-blue-800/30">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Help Resources</h3>
                                        <div className="space-y-3">
                                            <Link href="/docs">
                                                <Button variant="ghost" className="w-full justify-start text-left">
                                                    📚 Documentation
                                                </Button>
                                            </Link>
                                            <Link href="/faq">
                                                <Button variant="ghost" className="w-full justify-start text-left">
                                                    ❓ FAQ
                                                </Button>
                                            </Link>
                                            <Button variant="ghost" className="w-full justify-start text-left">
                                                💬 Community Forum
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start text-left">
                                                📺 Video Tutorials
                                            </Button>
                                        </div>
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
