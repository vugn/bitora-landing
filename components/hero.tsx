"use client"

import { useState, useEffect, useRef, Suspense } from "react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ChevronDown, Sparkles, Zap, Cpu, Network } from "lucide-react"
import ScrollVelocity from "@/components/ui/scroll-velocity"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial, Sphere } from "@react-three/drei"
import { useInView } from "react-intersection-observer"
import { gsap } from "gsap"
import * as THREE from "three"
import { useSpring, animated } from "@react-spring/web"
import VariableProximity from "./ui/variable-proximity"

// 3D Particle System Component
function ParticleField() {
  const ref = useRef<THREE.Points>(null!)
  const [sphere] = useState(() => {
    const positions = new Float32Array(2000 * 3)
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  })

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

// Floating Geometric Shapes
function FloatingShapes() {
  const shapes = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (shapes.current) {
      shapes.current.rotation.y = state.clock.elapsedTime * 0.1
      shapes.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
        child.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1)
        child.rotation.z = state.clock.elapsedTime * (0.3 + i * 0.05)
      })
    }
  })

  return (
    <group ref={shapes}>
      <Sphere args={[0.3]} position={[-4, 2, -2]}>
        <meshStandardMaterial color="#1e40af" wireframe />
      </Sphere>
      <Sphere args={[0.2]} position={[4, -1, -3]}>
        <meshStandardMaterial color="#3b82f6" wireframe />
      </Sphere>
      <Sphere args={[0.4]} position={[2, 3, -1]}>
        <meshStandardMaterial color="#60a5fa" wireframe />
      </Sphere>
    </group>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [ref, inView] = useInView({ threshold: 0.1 })
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const containerRef = useRef(null);

  useEffect(() => {
    setMounted(true)

    // GSAP animations for enhanced effects
    if (heroRef.current) {
      gsap.fromTo(
        ".hero-element",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
    }
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

  const springProps = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: inView ? 1 : 0, transform: inView ? 'scale(1)' : 'scale(0.8)' },
    config: { tension: 280, friction: 60 }
  })

  if (!mounted) return null

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ y, opacity }}
    >
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 1] }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <ParticleField />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </div>

      {/* Enhanced Gradient Overlay with Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-blue-950/70 dark:from-black/90 dark:via-black/80 dark:to-blue-950/70"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Theme Toggle */}
      <motion.div
        className="absolute top-6 right-6 z-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <ThemeToggle />
      </motion.div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        {/* Animated Circuit Lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          animate={{ x: [window.innerWidth + 100, -100] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating Tech Icons */}
        <motion.div
          className="absolute top-1/4 left-1/4"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Cpu className="w-6 h-6 text-blue-500 opacity-60" />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/3"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Network className="w-5 h-5 text-blue-400 opacity-70" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Zap className="w-7 h-7 text-blue-600 opacity-50" />
        </motion.div>

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-4 h-4 bg-blue-500 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-blue-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
            rotate: [0, 360]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Background Scroll Velocity Text */}
      <div className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-15 select-none">
        <ScrollVelocity
          texts={[
            "BTO PROTOCOL • BLOCKCHAIN INNOVATION • CROSS-CHAIN UTILITY •",
            "• NATIVE CONSENSUS • DECENTRALIZED FUTURE • LOADING... •"
          ]}
          velocity={30}
          className="text-blue-600 dark:text-blue-700"
          parallaxClassName="py-2"
          scrollerClassName="text-2xl md:text-4xl font-bold tracking-wider"
        />
      </div>

      <animated.div
        ref={ref}
        style={springProps}
        className="text-center max-w-5xl mx-auto relative z-20"
      >
        {/* Enhanced Logo/Brand */}
        <motion.div
          className="mb-8 flex justify-center hero-element"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
        >
          <div className="relative">
            <motion.div
              className="w-28 h-28 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/40"
              animate={{
                boxShadow: [
                  '0 25px 50px -12px rgba(59, 130, 246, 0.4)',
                  '0 25px 50px -12px rgba(147, 51, 234, 0.4)',
                  '0 25px 50px -12px rgba(59, 130, 246, 0.4)'
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.img
                src="/images/logo/vectorlogo.svg"
                alt="Bitora Logo"
                className="w-18 h-18 object-contain filter brightness-0 invert"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-3xl blur-lg opacity-40"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.6, 0.4]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Orbital Rings */}
            <motion.div
              className="absolute inset-0 border-2 border-blue-400/30 rounded-full"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ width: '140px', height: '140px', left: '-14px', top: '-14px' }}
            />
            <motion.div
              className="absolute inset-0 border border-purple-400/20 rounded-full"
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ width: '160px', height: '160px', left: '-24px', top: '-24px' }}
            />
          </div>
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight hero-element"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.span
            className="block bg-gradient-to-r from-white via-blue-100 to-blue-300 dark:from-white dark:via-blue-100 dark:to-blue-300 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            The Next Blockchain
          </motion.span>
          <br />

        </motion.h1>
        <motion.div
          ref={containerRef}
          style={{ position: 'relative' }}
        >
          <VariableProximity
            label={'Hover me! And then star React Bits on GitHub, or else...'}
            className={'variable-proximity-demo'}
            fromFontVariationSettings="'wght' 400, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            containerRef={containerRef}
            radius={100}
            falloff='linear'
          />
        </motion.div>
        {/* Enhanced Subtitle with Typewriter Effect */}
        <motion.div
          className="mb-8 hero-element"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            className="text-lg sm:text-xl text-blue-300 dark:text-blue-300 max-w-3xl mx-auto leading-relaxed"
            animate={{
              textShadow: [
                '0 0 10px rgba(59, 130, 246, 0.3)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 10px rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Powering a New Era of Blockchain Innovation
          </motion.p>
          {/* Animated Underline */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
            animate={{
              width: [128, 200, 128],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 hero-element"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="lg"
              onClick={scrollToNewsletter}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold shadow-2xl shadow-blue-600/40 transition-all duration-500 border-0 group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                    'linear-gradient(45deg, #8b5cf6, #3b82f6)',
                    'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Stay in the Loop
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="relative overflow-hidden border-2 border-blue-500/50 text-blue-400 hover:text-white px-10 py-5 text-lg font-semibold transition-all duration-500 bg-transparent backdrop-blur-sm group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0, 0.3, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Network className="w-5 h-5" />
                Discover BTO Protocol
              </span>
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer z-20 bottom-8"
          onClick={scrollToAbout}
          animate={{
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="relative p-3 rounded-full border border-blue-500/30 backdrop-blur-sm"
            animate={{
              borderColor: [
                'rgba(59, 130, 246, 0.3)',
                'rgba(147, 51, 234, 0.3)',
                'rgba(59, 130, 246, 0.3)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <ChevronDown className="w-6 h-6 text-blue-400" />
            <motion.div
              className="absolute inset-0 rounded-full bg-blue-500/10"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
          </motion.div>
        </motion.div>
      </animated.div>
    </motion.section>
  )
}
