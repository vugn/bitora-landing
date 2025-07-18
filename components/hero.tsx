"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown, Sparkles } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
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

      <div className="text-center max-w-5xl mx-auto">
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
        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
          Bitora is
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            Coming Soon
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-slate-300 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
          The future of blockchain meets real-world payments.
          <br className="hidden sm:block" />
          Revolutionary ecosystem launching soon.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
          >
            Subscribe to Updates
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 bg-transparent"
          >
            Learn More
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-slate-400" />
        </div>
      </div>
    </section>
  )
}
