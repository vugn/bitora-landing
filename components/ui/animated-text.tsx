"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  variant?: 'typewriter' | 'fadeUp' | 'glitch' | 'neon'
}

export function AnimatedText({ 
  text, 
  className = "", 
  delay = 0, 
  duration = 0.05,
  variant = 'typewriter'
}: AnimatedTextProps) {
    const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isInView && variant === 'typewriter') {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1))
          setCurrentIndex(currentIndex + 1)
        }
      }, duration * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, currentIndex, text, duration, variant])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: duration,
        delayChildren: delay
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200
      }
    }
  }

  const glitchVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        repeat: 3,
        repeatType: "reverse" as const
      }
    }
  }

  if (variant === 'typewriter') {
    return (
      <span ref={ref} className={className}>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
        />
      </span>
    )
  }

  if (variant === 'glitch') {
    return (
      <motion.div
        // ref={ref}
        className={`relative ${className}`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={glitchVariants}
      >
        <span className="relative z-10">{text}</span>
        <motion.span
          className="absolute top-0 left-0 text-red-500 opacity-70"
          animate={{
            x: [0, -2, 2, 0],
            y: [0, 1, -1, 0]
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute top-0 left-0 text-blue-500 opacity-70"
          animate={{
            x: [0, 2, -2, 0],
            y: [0, -1, 1, 0]
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {text}
        </motion.span>
      </motion.div>
    )
  }

  if (variant === 'neon') {
    return (
      <motion.span
        ref={ref}
        className={`${className} relative`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay }}
      >
        <motion.span
          className="relative z-10"
          animate={{
            textShadow: [
              '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6',
              '0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6',
              '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {text}
        </motion.span>
      </motion.span>
    )
  }

  // Default fadeUp variant
  return (
    <motion.div
      // ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          // variants={letterVariants}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default AnimatedText