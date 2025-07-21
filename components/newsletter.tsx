"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/lib/brevo"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      await subscribeToNewsletter(email)
      setStatus("success")
      setMessage("Successfully subscribed! Check your email for confirmation.")
      setEmail("")
    } catch (error) {
      setStatus("error")
      setMessage("Failed to subscribe. Please try again.")
    }
  }

  return (
    <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-black/50 dark:to-black/30 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-blue-200 dark:border-blue-950/50 shadow-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <img
              src="/images/logo/vectorlogo.svg"
              alt="Bitora Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
            Rewriting Blockchain. Stay in the Loop.
          </h2>
          <p className="text-xl text-blue-300 dark:text-blue-300 mb-8">
            Be the first to experience the next blockchain standard. Get exclusive updates, early access, and groundbreaking announcements.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400"
                disabled={status === "loading"}
              />
              <Button
                type="submit"
                disabled={status === "loading" || !email}
                className="bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-900 text-white px-8 font-semibold shadow-lg shadow-blue-800/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105"
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>

          {message && (
            <div
              className={`mt-4 flex items-center justify-center gap-2 ${status === "success" ? "text-green-400" : "text-red-400"
                }`}
            >
              {status === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
