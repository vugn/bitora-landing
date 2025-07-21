"use client"

import { useState, useEffect, useRef } from "react"
import { Users, Globe, Zap, Shield } from "lucide-react"
import { motion, useInView } from "framer-motion"

export function Statistics() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.3 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    {
      icon: Users,
      label: "Community Members",
      value: "10,000+",
      description: "Growing community",
    },
    {
      icon: Globe,
      label: "Countries",
      value: "50+",
      description: "Global reach",
    },
    {
      icon: Zap,
      label: "Transactions/sec",
      value: "10,000+",
      description: "Lightning fast",
    },
    {
      icon: Shield,
      label: "Security Score",
      value: "99.9%",
      description: "Enterprise grade",
    },
  ]

  if (!mounted) return null

  return (
    <motion.section 
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
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
            Platform Statistics
          </h2>
          <p className="text-xl text-blue-300 dark:text-blue-300">Real-time metrics from our growing ecosystem</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative h-48 flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 text-center shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
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
              <div className="relative z-10 flex flex-col h-full">
                 <div className="w-12 h-12 bg-gradient-to-br from-blue-800 to-blue-950 rounded-xl flex items-center justify-center mx-auto mb-4 flex-shrink-0">
                   <stat.icon className="w-6 h-6 text-white" />
                 </div>
                 <div className="flex-1 flex flex-col justify-center">
                   <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                   <div className="text-lg font-semibold text-blue-300 mb-1">{stat.label}</div>
                   <div className="text-sm text-blue-200/70">{stat.description}</div>
                 </div>
               </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Placeholder for future explorer integration */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div 
            className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
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
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-4">Blockchain Explorer</h3>
              <p className="text-blue-200 mb-4">
                Real-time blockchain data and analytics will be available here once mainnet launches.
              </p>
              <div className="inline-flex items-center gap-2 text-blue-400">
                <motion.div 
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-sm">Coming Soon</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
