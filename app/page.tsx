import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import { ContactForm } from "@/components/contact-form"
import { Roadmap } from "@/components/roadmap"
import { Tokenomics } from "@/components/tokenomics"
import { SocialLinks } from "@/components/social-links"
import { Statistics } from "@/components/statistics"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950">
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />

        {/* Content */}
        <div className="relative z-10">
          <Hero />
          <About />
          <Statistics />
          <Newsletter />
          <ContactForm />
          <Roadmap />
          <Tokenomics />
          <SocialLinks />
          <Footer />
        </div>
      </div>
    </main>
  )
}
