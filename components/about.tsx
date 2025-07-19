"use client"
import { Shield, Zap, Globe, Users, Code, DollarSign, Lock, Layers } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function About() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const features = [
    {
      icon: Code,
      title: "Smart Tokenization",
      description: "Launch branded utility tokens in minutes with full exchange compatibility and integrated pricing logic.",
    },
    {
      icon: DollarSign,
      title: "Fixed Fee Model",
      description: "Native protocol-level fixed fee structure creating a sustainable economic engine for all transactions.",
    },
    {
      icon: Layers,
      title: "Commerce-Grade Architecture",
      description: "Modular logic supporting live payments, microservices, and real-world service integrations.",
    },
    {
      icon: Lock,
      title: "Compliance-Ready",
      description: "Optional controls for identity, permissions, and fiat gateways pre-built into the protocol.",
    },
    {
      icon: Shield,
      title: "Sovereign Blockchain",
      description: "Zero reliance on external chains. Optimized for speed, scale, and direct real-world deployment.",
    },
    {
      icon: Zap,
      title: "Predictable Economics",
      description: "Permissionless creation with predictable costs, clear economics, and full autonomy.",
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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* What is Bitora Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            What is Bitora?
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-left">
            <p className="text-xl text-gray-700 dark:text-slate-200 leading-relaxed">
              Bitora is a next-generation blockchain protocol purpose-built to power programmable value exchange, real-world utility, and tokenized business infrastructure.
            </p>

            <p className="text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
              It is not a meme, an app, or just another chain. Bitora is a high-performance economic protocol designed to operate as the foundation layer for decentralized systems that interact with the real world.
            </p>

            <div className="bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-blue-900/30 dark:to-purple-900/30 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 dark:border-white/10 mt-8">
              <p className="text-lg text-gray-700 dark:text-slate-200 leading-relaxed mb-4">
                Whether you're building for commerce, utility, or community, Bitora enables permissionless creation with predictable cost, clear economics, and full autonomy.
              </p>
              <p className="text-base text-blue-600 dark:text-blue-400 font-medium">
                This isn't just infrastructure — it's the protocol backbone for a new class of applications and real-world systems.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Key Protocol Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 group shadow-lg"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h4>
                <p className="text-gray-600 dark:text-slate-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Loading Status */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="relative bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-slate-700"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 dark:from-blue-600/10 dark:via-purple-600/10 dark:to-blue-600/10 animate-pulse" />

            {/* Content */}
            <div className="relative z-10 p-8">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Bitora Protocol Status
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-lg">Programmable value, built for utility.</p>
              </motion.div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-300">Loading Progress</span>
                  <span className="text-sm text-blue-600 dark:text-blue-300">
                    {Math.round((currentStep / loadingSteps.length) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${(currentStep / loadingSteps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Loading Steps */}
              <div className="space-y-4 max-h-80 overflow-y-auto">
                {loadingSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-start space-x-4 p-4 rounded-lg transition-all duration-500 ${index < currentStep
                      ? 'bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-500/30'
                      : index === currentStep
                        ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-500/50'
                        : 'bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-600/30'
                      }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: index <= currentStep ? 1 : 0.5,
                      x: 0
                    }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Status Icon */}
                    <div className="flex-shrink-0 mt-1">
                      {index < currentStep ? (
                        <motion.div
                          className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </motion.div>
                      ) : index === currentStep ? (
                        <motion.div
                          className="w-4 h-4 bg-blue-500 rounded-full"
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                      ) : (
                        <div className="w-4 h-4 bg-gray-400 dark:bg-slate-600 rounded-full" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-semibold transition-colors ${index < currentStep
                        ? 'text-green-700 dark:text-green-300'
                        : index === currentStep
                          ? 'text-blue-700 dark:text-blue-300'
                          : 'text-gray-500 dark:text-slate-400'
                        }`}>
                        {step.text}
                      </h4>
                      <p className={`text-sm mt-1 transition-colors ${index < currentStep
                        ? 'text-green-600 dark:text-green-200/80'
                        : index === currentStep
                          ? 'text-blue-600 dark:text-blue-200/80'
                          : 'text-gray-400 dark:text-slate-500'
                        }`}>
                        {step.detail}
                      </p>
                    </div>

                    {/* Loading Indicator for Current Step */}
                    {index === currentStep && (
                      <motion.div
                        className="flex space-x-1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        {[0, 1, 2].map((dot) => (
                          <motion.div
                            key={dot}
                            className="w-1 h-1 bg-blue-400 rounded-full"
                            animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              delay: dot * 0.2
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Final Status */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isComplete ? 1 : 0.7 }}
                transition={{ duration: 0.5 }}
              >
                {isComplete ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 rounded-full"
                  >
                    <motion.div
                      className="w-4 h-4 bg-white rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(255, 255, 255, 0.7)",
                          "0 0 0 10px rgba(255, 255, 255, 0)",
                          "0 0 0 0 rgba(255, 255, 255, 0)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="font-bold text-white">Protocol Ready - Loading Soon...</span>
                  </motion.div>
                ) : (
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-300">
                    <motion.div
                      className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="font-medium">Initialization in progress...</span>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
