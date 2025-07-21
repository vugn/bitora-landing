"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"

// Animated particle field component
function AnimatedParticles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null!)
  
  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * 10
      temp[i * 3 + 1] = (Math.random() - 0.5) * 10
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return temp
  }, [count])

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x -= delta / 10
      mesh.current.rotation.y -= delta / 15
      
      // Animate individual particles
      const positions = mesh.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime + i) * 0.01
      }
      mesh.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <Points ref={mesh} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  )
}

// Floating geometric shapes
function FloatingGeometry() {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(state.clock.elapsedTime + i * 2) * 0.5
        child.rotation.x = state.clock.elapsedTime * (0.5 + i * 0.1)
        child.rotation.z = state.clock.elapsedTime * (0.3 + i * 0.05)
      })
    }
  })

  return (
    <group ref={groupRef}>
      {/* Wireframe spheres */}
      <mesh position={[-3, 1, -2]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshBasicMaterial color="#1e40af" wireframe />
      </mesh>
      <mesh position={[3, -1, -3]}>
        <sphereGeometry args={[0.2, 12, 12]} />
        <meshBasicMaterial color="#3b82f6" wireframe />
      </mesh>
      <mesh position={[1, 2, -1]}>
        <sphereGeometry args={[0.4, 20, 20]} />
        <meshBasicMaterial color="#60a5fa" wireframe />
      </mesh>
      
      {/* Wireframe boxes */}
      <mesh position={[-2, -2, -2]}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshBasicMaterial color="#8b5cf6" wireframe />
      </mesh>
      <mesh position={[2, 3, -2]}>
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial color="#a855f7" wireframe />
      </mesh>
    </group>
  )
}

interface FuturisticBackgroundProps {
  className?: string
  particleCount?: number
  showGeometry?: boolean
}

export function FuturisticBackground({ 
  className = "", 
  particleCount = 1000,
  showGeometry = true 
}: FuturisticBackgroundProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* 3D Canvas Background */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <AnimatedParticles count={particleCount} />
        {showGeometry && <FloatingGeometry />}
      </Canvas>
      
      {/* Animated gradient overlays */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Scanning lines effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(59, 130, 246, 0.03) 100px)'
        }}
        animate={{ x: [-100, 100] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}

export default FuturisticBackground