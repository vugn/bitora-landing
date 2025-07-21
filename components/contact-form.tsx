"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactMessage } from "@/lib/brevo"
import { MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function ContactForm() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.3 })
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
    <motion.section
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-950 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
            animate={{
              boxShadow: [
                '0 10px 30px -5px rgba(59, 130, 246, 0.3)',
                '0 10px 30px -5px rgba(147, 51, 234, 0.5)',
                '0 10px 30px -5px rgba(59, 130, 246, 0.3)'
              ],
              rotate: [0, 360]
            }}
            transition={{
              boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          >
            <img
              src="/images/logo/vectorlogo.svg"
              alt="Bitora Logo"
              className="w-10 h-10 object-contain filter brightness-0 invert"
            />

            {/* Orbital Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-white/20 rounded-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '72px', height: '72px', left: '-4px', top: '-4px' }}
            />
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-blue-300 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-blue-300 dark:text-blue-300">
            Have questions about Bitora? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)",
            borderColor: "rgba(59, 130, 246, 0.3)"
          }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />

          <form onSubmit={handleSubmit} className="relative space-y-6 z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-blue-300 mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="Your name"
                  disabled={status === "loading"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-blue-300 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400"
                  placeholder="your@email.com"
                  disabled={status === "loading"}
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-blue-300 mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400"
                placeholder="What's this about?"
                disabled={status === "loading"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-blue-300 mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-white/80 dark:bg-white/10 border-gray-300 dark:border-white/20 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-slate-400 focus:border-blue-500 dark:focus:border-blue-400 resize-none"
                placeholder="Tell us more about your inquiry..."
                disabled={status === "loading"}
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading" || !formData.name || !formData.email || !formData.message}
              className="w-full bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-blue-900 text-white py-3 font-semibold shadow-lg shadow-blue-800/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-700/40 hover:scale-105"
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
        </motion.div>
      </div>
    </motion.section>
  )
}
