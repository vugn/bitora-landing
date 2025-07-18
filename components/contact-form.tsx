"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactMessage } from "@/lib/brevo"
import { MessageSquare, CheckCircle, AlertCircle } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [responseMessage, setResponseMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus("loading")
    try {
      await sendContactMessage(formData)
      setStatus("success")
      setResponseMessage("Message sent successfully! We'll get back to you soon.")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setStatus("error")
      setResponseMessage("Failed to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageSquare className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-300 dark:text-slate-400">
            Have questions about Bitora? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                  placeholder="Your name"
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                placeholder="What's this about?"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 resize-none"
                placeholder="Tell us more about your inquiry..."
                disabled={status === "loading"}
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading" || !formData.name || !formData.email || !formData.message}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 font-semibold shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {responseMessage && (
            <div className={`mt-6 flex items-center gap-2 ${status === "success" ? "text-green-400" : "text-red-400"}`}>
              {status === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              <span>{responseMessage}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
