import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Icosahedron, Torus, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Core() {
  const ref = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!ref.current) return
    ref.current.rotation.y = t * 0.18
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.18
  })

  return (
    <Icosahedron ref={ref} args={[1.25, 4]}>
      <MeshDistortMaterial
        color="#5b8cff"
        emissive="#3b5bff"
        emissiveIntensity={0.5}
        roughness={0.15}
        metalness={0.9}
        distort={0.35}
        speed={1.6}
      />
    </Icosahedron>
  )
}

function Rings() {
  const g1 = useRef()
  const g2 = useRef()
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (g1.current) g1.current.rotation.z = t * 0.3
    if (g2.current) g2.current.rotation.x = t * 0.22
  })
  return (
    <group>
      <Torus ref={g1} args={[2.1, 0.012, 16, 120]} rotation={[Math.PI / 2.4, 0, 0]}>
        <meshStandardMaterial color="#9d6bff" emissive="#9d6bff" emissiveIntensity={1.4} transparent opacity={0.7} />
      </Torus>
      <Torus ref={g2} args={[2.55, 0.008, 16, 120]} rotation={[Math.PI / 1.8, 0.4, 0]}>
        <meshStandardMaterial color="#4fd6ff" emissive="#4fd6ff" emissiveIntensity={1.2} transparent opacity={0.5} />
      </Torus>
    </group>
  )
}

function Particles({ count = 600 }) {
  const ref = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = r * Math.cos(phi)
    }
    return arr
  }, [count])

  useFrame((state) => {
    if (ref.current) ref.current.rotation.y = state.clock.getElapsedTime() * 0.04
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#9db4ff" size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  )
}

function Parallax({ children }) {
  const ref = useRef()
  useFrame((state) => {
    if (!ref.current) return
    const x = state.pointer.x * 0.4
    const y = state.pointer.y * 0.4
    ref.current.rotation.y += (x - ref.current.rotation.y) * 0.04
    ref.current.rotation.x += (-y - ref.current.rotation.x) * 0.04
  })
  return <group ref={ref}>{children}</group>
}

export default function FloatingOrb() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2.4} color="#5b8cff" />
        <pointLight position={[-5, -3, 2]} intensity={1.8} color="#9d6bff" />
        <pointLight position={[0, 0, 4]} intensity={1.2} color="#4fd6ff" />

        <Parallax>
          <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1.1}>
            <Core />
            <Rings />
          </Float>
          <Particles />
        </Parallax>
      </Suspense>
    </Canvas>
  )
}
