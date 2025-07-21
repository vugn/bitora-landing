"use client"
import { CheckCircle, Circle, Clock, Zap, Cpu, Network, Database, Rocket, Shield } from "lucide-react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Sphere } from "@react-three/drei"
import { useSpring, animated } from "@react-spring/web"
import { FuturisticBackground } from "./ui/futuristic-background"
import { AnimatedText } from "./ui/animated-text"
import * as THREE from "three"

export function Roadmap() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  const inView = useInView(sectionRef, { once: true, amount: 0.1 })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const roadmapItems = [
    {
      phase: "Phase 1",
      title: "Conception & Architectural Framework",
      status: "upcoming",
      timeline: "Q3 2025",
      icon: Cpu,
      gradient: "from-blue-500 to-purple-600",
      items: [
        "Engineer a bespoke native blockchain with Cosmos SDK",
        "Implement tokenomics with fixed 100M BTO supply",
        "Establish fee structure and deflationary mechanics",
        "Deploy on-chain smart contract frameworks"
      ],
    },
    {
      phase: "Phase 2",
      title: "Capital Formation",
      status: "upcoming",
      timeline: "Q3-Q4 2025",
      icon: Database,
      gradient: "from-green-500 to-blue-600",
      items: [
        "Capital raise of $35M USD at $0.17 per BTO",
        "KYC/AML compliance framework implementation",
        "Strategic capital allocation for development",
        "Token lock mechanism implementation"
      ],
    },
    {
      phase: "Phase 3",
      title: "Infrastructure Maturation",
      status: "upcoming",
      timeline: "Q4 2025",
      icon: Shield,
      gradient: "from-purple-500 to-pink-600",
      items: [
        "Multi-platform BTO wallet deployment",
        "P2P liquidity pool architecture",
        "System audits and penetration testing",
        "Smart contract verification protocols"
      ],
    },
    {
      phase: "Phase 4",
      title: "Retail Utility Realization",
      status: "upcoming",
      timeline: "Q1 2026",
      icon: Zap,
      gradient: "from-yellow-500 to-orange-600",
      items: [
        "Launch of first 10 brick-and-mortar outlets",
        "Activate token burn mechanism (0.15 BTO/sale)",
        "Deploy dynamic pricing oracles",
        "Real-time ledger synchronization implementation"
      ],
    },
    {
      phase: "Phase 5",
      title: "Decentralized Trading Platform",
      status: "upcoming",
      timeline: "Q2 2026",
      icon: Network,
      gradient: "from-cyan-500 to-blue-600",
      items: [
        "Smart contract-enforced trading platform",
        "Implement $1 BTO transaction fee mechanism",
        "Peer-to-peer asset exchange framework",
        "Organic price discovery system activation"
      ],
    },
    {
      phase: "Phase 6",
      title: "Token Creation Protocol",
      status: "upcoming",
      timeline: "Q3 2026",
      icon: Circle,
      gradient: "from-indigo-500 to-purple-600",
      items: [
        "Gasless token issuance protocol deployment",
        "5-step native token creation workflow",
        "$3 BTO fee implementation for token creation",
        "Integration with trading modules and exchanges"
      ],
    },
    {
      phase: "Phase 7",
      title: "Network Expansion",
      status: "upcoming",
      timeline: "Q3 2026 - Q2 2027",
      icon: Rocket,
      gradient: "from-red-500 to-pink-600",
      items: [
        "Scale to 200 franchise stores nationwide",
        "Advanced POS systems with blockchain integration",
        "Supply chain optimization via transaction data",
        "Continued token burn implementation"
      ],
    },
    {
      phase: "Phase 8",
      title: "Public Exchange Integration",
      status: "upcoming",
      timeline: "Q2-Q3 2027",
      icon: Network,
      gradient: "from-emerald-500 to-teal-600",
      items: [
        "List BTO on BitMart, Gate.io, KuCoin",
        "Ethereum bridge protocol for ERC20 migration",
        "Cross-chain interoperability frameworks",
        "Liquidity pool monitoring and optimization"
      ],
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-6 h-6 text-green-400" />
      case "in-progress":
        return <Clock className="w-6 h-6 text-blue-400" />
      default:
        return <Circle className="w-6 h-6 text-slate-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "border-green-600/50 bg-green-900/20"
      case "in-progress":
        return "border-blue-700/50 bg-blue-900/20"
      default:
        return "border-blue-800/30 bg-blue-900/10"
    }
  }

  return (
    <motion.section 
      ref={sectionRef}
      id="roadmap" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ y, opacity }}
    >
      <FuturisticBackground />
      
      {/* Animated Circuit Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scaleX: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>
      
      <div className="relative max-w-6xl mx-auto z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated Logo */}
          <motion.div 
            className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-8"
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
              className="w-12 h-12 object-contain filter brightness-0 invert"
            />
            
            {/* Orbital Ring */}
            <motion.div
              className="absolute inset-0 border-2 border-white/20 rounded-3xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '88px', height: '88px', left: '-4px', top: '-4px' }}
            />
          </motion.div>
          
          {/* Animated Title */}
          <AnimatedText
            text="BTO Protocol Roadmap"
            variant="neon"
            className="text-4xl sm:text-5xl font-bold mb-6"
          />
          
          {/* Animated Subtitle */}
          <motion.p 
            className="text-xl text-blue-200 mb-4 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6, textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
          >
            An Exposition on Architecting a Sovereign Consensus-Layer Blockchain with Intrinsic Real-World Utility
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {roadmapItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            >
              {/* Enhanced Connector Line */}
              {index % 2 === 0 && index < roadmapItems.length - 1 && (
                <motion.div 
                  className="hidden lg:block absolute top-1/2 left-full w-12 h-1 z-0"
                  animate={{
                    background: [
                      'linear-gradient(90deg, rgba(59, 130, 246, 0.3), transparent)',
                      'linear-gradient(90deg, rgba(147, 51, 234, 0.5), transparent)',
                      'linear-gradient(90deg, rgba(59, 130, 246, 0.3), transparent)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              <motion.div
                className={`relative z-10 bg-black/70 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/30 shadow-2xl overflow-hidden group-hover:border-blue-400/50 transition-all duration-500`}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  animate={{
                    background: [
                      `linear-gradient(45deg, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`,
                      `linear-gradient(135deg, ${item.gradient.split(' ')[3]}, ${item.gradient.split(' ')[1]})`,
                      `linear-gradient(45deg, ${item.gradient.split(' ')[1]}, ${item.gradient.split(' ')[3]})`
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                {/* Enhanced Header */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <div className="flex items-center gap-4 flex-grow">
                    {/* Animated Icon Container */}
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center relative group-hover:scale-110 transition-transform duration-300`}
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
                        <item.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Status Indicator */}
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {getStatusIcon(item.status)}
                      </motion.div>
                      
                      {/* Orbital Ring */}
                      <motion.div
                        className="absolute inset-0 border border-white/20 rounded-2xl"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{ width: '72px', height: '72px', left: '-4px', top: '-4px' }}
                      />
                    </motion.div>
                    
                    {/* Text Content */}
                    <div className="flex-grow">
                      <motion.div 
                        className="text-sm text-blue-400 font-semibold mb-1 tracking-wider uppercase"
                        animate={{
                          textShadow: [
                            '0 0 10px rgba(59, 130, 246, 0.3)',
                            '0 0 20px rgba(59, 130, 246, 0.5)',
                            '0 0 10px rgba(59, 130, 246, 0.3)'
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {item.phase}
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300"
                        animate={{
                          textShadow: [
                            '0 0 10px rgba(255, 255, 255, 0.3)',
                            '0 0 20px rgba(255, 255, 255, 0.5)',
                            '0 0 10px rgba(255, 255, 255, 0.3)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {item.title}
                      </motion.h3>
                    </div>
                  </div>
                  
                  {/* Enhanced Timeline Badge */}
                  <motion.div 
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 rounded-xl font-semibold whitespace-nowrap backdrop-blur-sm"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.2)',
                        '0 0 30px rgba(59, 130, 246, 0.4)',
                        '0 0 20px rgba(59, 130, 246, 0.2)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    {item.timeline}
                  </motion.div>
                </div>

                {/* Enhanced Items List */}
                <div className="relative z-10">
                  <ul className="space-y-4">
                    {item.items.map((subItem, subIndex) => (
                      <motion.li 
                        key={subIndex} 
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 1 + index * 0.1 + subIndex * 0.05 }}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <motion.div 
                          className={`w-3 h-3 bg-gradient-to-r ${item.gradient} rounded-full mt-1.5 flex-shrink-0 shadow-lg`}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              '0 0 10px rgba(59, 130, 246, 0.3)',
                              '0 0 20px rgba(59, 130, 246, 0.6)',
                              '0 0 10px rgba(59, 130, 246, 0.3)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: subIndex * 0.2 }}
                        />
                        <span className="text-blue-100 leading-relaxed group-hover/item:text-white transition-colors duration-300">
                          {subItem}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-bl-3xl pointer-events-none"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
     </motion.section>
  )
}
