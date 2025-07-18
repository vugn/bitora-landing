"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("bitora-theme")
    if (stored) {
      const isDarkStored = stored === "dark"
      setIsDark(isDarkStored)
      document.documentElement.classList.toggle("dark", isDarkStored)
    } else {
      // Default to dark mode
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
    localStorage.setItem("bitora-theme", newIsDark ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
    >
      {isDark ? <Sun className="h-4 w-4 text-yellow-400" /> : <Moon className="h-4 w-4 text-blue-400" />}
    </Button>
  )
}
