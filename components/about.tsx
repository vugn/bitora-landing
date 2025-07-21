"use client"
import { Shield, Zap, Globe, Users, Code, DollarSign, Lock, Layers, Cpu, Network, Database } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { useSpring, animated } from "@react-spring/web"
import { FuturisticBackground } from "@/components/ui/futuristic-background"
import { AnimatedText } from "@/components/ui/animated-text"

export function About() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.1, once: true })
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: Cpu,
      title: "Smart Tokenization",
      description: "Launch branded utility tokens in minutes with full exchange compatibility and integrated pricing logic.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Fixed Fee Model",
      description: "Native protocol-level fixed fee structure creating a sustainable economic engine for all transactions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Commerce-Grade Architecture",
      description: "Modular logic supporting live payments, microservices, and real-world service integrations.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: Lock,
      title: "Compliance-Ready",
      description: "Optional controls for identity, permissions, and fiat gateways pre-built into the protocol.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Sovereign Blockchain",
      description: "Zero reliance on external chains. Optimized for speed, scale, and direct real-world deployment.",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: Network,
      title: "Predictable Economics",
      description: "Permissionless creation with predictable costs, clear economics, and full autonomy.",
      gradient: "from-teal-500 to-blue-500"
    },
  ]

  const loadingSteps = [
    { text: "Initializing Core Framework", detail: "Booting base protocol logic and internal system contracts" },
    { text: "Loading Consensus Engine", detail: "Synchronizing core validators and finality thresholds" },
    { text: "Powering Network Nodes", detail: "Deploying mainnet and communication layers" },
    { text: "Activating BITORA Gateway", detail: "Enabling fixed-fee smart routing and transaction relays" },
    { text: "Linking Real-World Utility Layers", detail: "Connecting retail endpoints, merchant integrations, and fiat bridges" },
    { text: "Securing Protocol Integrity", detail: "Running cryptographic checks and protocol self-audits" },
    { text: "Optimizing Transaction Throughput", detail: "Calibrating for real-time, scalable, low-latency flow" },
    { text: "Deploying Developer Interface", detail: "Enabling token creation, pricing logic, and SDK access" },
    { text: "Initializing User Wallet Infrastructure", detail: "Finalizing mobile + web wallet layers with smart lock-in logic" },
    { text: "Bitora Protocol Coming Online", detail: "Next-generation blockchain utility layer activating" }
  ]

  useEffect(() => {
    if (currentStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1)
      }, 800)
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [currentStep, loadingSteps.length])

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'translateY(0px)' : 'translateY(50px)' },
    config: { tension: 280, friction: 60 }
  })

  return (
    <motion.section 
      ref={sectionRef}
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
      style={{ opacity }}
    >
      {/* Futuristic Background */}
      <FuturisticBackground 
        className="opacity-30" 
        particleCount={800}
        showGeometry={true}
      />
      
      {/* Enhanced Design elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-40 left-10 w-64 h-64 bg-blue-800/20 dark:bg-blue-900/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-40 right-10 w-72 h-72 bg-blue-700/20 dark:bg-blue-800/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating Circuit Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-2 h-20 bg-gradient-to-b from-blue-500 to-transparent"
          animate={{ 
            height: [80, 120, 80],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-20 h-2 bg-gradient-to-r from-purple-500 to-transparent"
          animate={{ 
            width: [80, 120, 80],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <animated.div 
        ref={ref}
        style={springProps}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl relative"
            animate={{ 
              boxShadow: [
                '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
                '0 25px 50px -12px rgba(147, 51, 234, 0.4)',
                '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
              ],
              rotate: [0, 360]
            }}
            transition={{ 
              boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          >
            <motion.img
              src="/images/logo/vectorlogo.svg"
              alt="Bitora Logo"
              className="w-12 h-12 object-contain filter brightness-0 invert"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Orbital Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '100px', height: '100px', left: '-10px', top: '-10px' }}
            />
          </motion.div>
          
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <AnimatedText
              text="About BTO Protocol"
              variant="neon"
              className="bg-gradient-to-r from-white via-blue-100 to-blue-300 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent"
            />
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <AnimatedText
              text="A high-performance blockchain architected for real-world utility with a fixed fee model."
              variant="typewriter"
              className="text-xl text-blue-300 dark:text-blue-300 max-w-3xl mx-auto"
              duration={0.03}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-black/60 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                animate={{
                  background: [
                    `linear-gradient(45deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`,
                    `linear-gradient(135deg, ${feature.gradient.split(' ')[3]}, ${feature.gradient.split(' ')[1]})`,
                    `linear-gradient(45deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Icon Container */}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300`}
                animate={{ 
                  boxShadow: [
                    '0 10px 25px -5px rgba(59, 130, 246, 0.3)',
                    '0 10px 25px -5px rgba(147, 51, 234, 0.3)',
                    '0 10px 25px -5px rgba(59, 130, 246, 0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Orbital Ring */}
                <motion.div
                  className="absolute inset-0 border border-white/20 rounded-2xl"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ width: '72px', height: '72px', left: '-4px', top: '-4px' }}
                />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300"
                  animate={{
                    textShadow: [
                      '0 0 10px rgba(59, 130, 246, 0.3)',
                      '0 0 20px rgba(59, 130, 246, 0.5)',
                      '0 0 10px rgba(59, 130, 246, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {feature.title}
                </motion.h3>
                <p className="text-blue-200 leading-relaxed group-hover:text-blue-100 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-bl-2xl"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Protocol Loading Terminal */}
        <motion.div 
          className="relative bg-black/95 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/30 shadow-2xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Terminal Header */}
          <motion.div 
            className="flex items-center gap-3 mb-6 pb-4 border-b border-blue-500/20"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <motion.div 
              className="flex gap-2"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div 
                className="w-4 h-4 bg-red-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-4 h-4 bg-yellow-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.div 
                className="w-4 h-4 bg-green-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              />
            </motion.div>
            <motion.span 
              className="text-blue-300 text-lg font-semibold ml-3 font-mono"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              bitora-protocol-initialization v2.1.0
            </motion.span>
          </motion.div>
          
          {/* Terminal Content */}
          <div className="font-mono text-sm text-blue-300 h-96 overflow-auto bg-gradient-to-br from-black/90 to-blue-950/20 p-4 rounded-xl">
            <motion.div 
              className="mb-2 text-blue-400 text-lg"
              animate={{
                textShadow: [
                  '0 0 10px rgba(59, 130, 246, 0.5)',
                  '0 0 20px rgba(59, 130, 246, 0.8)',
                  '0 0 10px rgba(59, 130, 246, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ~ Initializing BITORA Protocol (BTO) ~
            </motion.div>
            <div className="opacity-60 text-xs mb-4 text-blue-300">Starting core blockchain framework for next-gen utility...</div>

            {loadingSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className={`mb-4 ${index > currentStep ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: index <= currentStep ? 1 : 0, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center">
                  <motion.div 
                    className="text-blue-400 mr-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    &gt;
                  </motion.div>
                  <div className={`${index === currentStep && !isComplete ? "animate-pulse" : ""} text-blue-100`}>{step.text}</div>
                  {index < currentStep && (
                    <motion.div 
                      className="ml-2 text-green-400 text-xs px-2 py-1 bg-green-500/20 rounded"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      [COMPLETE]
                    </motion.div>
                  )}
                  {index === currentStep && !isComplete && (
                    <motion.div 
                      className="flex gap-1 ml-2"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-yellow-400 rounded-full"
                          animate={{ 
                            scale: [0.5, 1.2, 0.5],
                            opacity: [0.3, 1, 0.3]
                          }}
                          transition={{ 
                            duration: 1.2, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
                {index <= currentStep && (
                  <motion.div 
                    className="text-gray-400 text-xs pl-4 mt-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {step.detail}
                  </motion.div>
                )}
              </motion.div>
            ))}

            {isComplete && (
              <motion.div 
                className="text-green-400 font-bold mt-6 text-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  textShadow: [
                    '0 0 10px rgba(34, 197, 94, 0.5)',
                    '0 0 20px rgba(34, 197, 94, 0.8)',
                    '0 0 10px rgba(34, 197, 94, 0.5)'
                  ]
                }}
                transition={{ 
                  scale: { duration: 0.5 },
                  opacity: { duration: 0.5 },
                  textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                BTO PROTOCOL INITIALIZATION COMPLETE
              </motion.div>
            )}
          </div>
          
          {/* Scanning Line Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent pointer-events-none"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ width: '200%' }}
          />
          
          {/* Corner Glow */}
          <motion.div
            className="absolute -top-10 -right-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl pointer-events-none"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </animated.div>
    </motion.section>
  )
}
