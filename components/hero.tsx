"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown, Sparkles } from "lucide-react"
import ScrollVelocity from "@/components/ui/scroll-velocity"
import DarkVeil from "@/components/ui/dark-veil"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const scrollToNewsletter = () => {
    scrollToSection('newsletter')
  }

  const scrollToAbout = () => {
    scrollToSection('about')
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-blue-50/60 to-purple-50/80 dark:from-slate-900/80 dark:via-blue-900/60 dark:to-purple-900/80" />

      {/* Theme Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <ThemeToggle />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-bounce" />
      </div>

      {/* Background Scroll Velocity Text */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10 select-none">
        <ScrollVelocity
          texts={[
            "BTO PROTOCOL • BLOCKCHAIN INNOVATION • CROSS-CHAIN UTILITY •",
            "• NATIVE CONSENSUS • DECENTRALIZED FUTURE • NEXT STANDARD •"
          ]}
          velocity={30}
          className="text-gray-900 dark:text-white"
          parallaxClassName="py-2"
          scrollerClassName="text-2xl md:text-4xl font-bold tracking-wider"
        />
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10">
        {/* Logo/Brand */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/25">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-600 dark:from-white dark:via-blue-100 dark:to-purple-100 bg-clip-text text-transparent leading-tight">
          The Next Blockchain
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 dark:from-blue-400 dark:via-blue-500 dark:to-purple-500 bg-clip-text text-transparent animate-pulse">
            Standard Is Loading…
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Powering a New Era of Blockchain Innovation
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={scrollToNewsletter}
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            Stay in the Loop
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Discover BTO Protocol
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20"
          onClick={scrollToAbout}
        >
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
        </div>
      </div>
    </section>
  )
}
