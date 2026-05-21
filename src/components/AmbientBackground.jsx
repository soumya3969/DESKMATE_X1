import { useMemo, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

function Stars({ count = 90 }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 6,
        duration: Math.random() * 4 + 3,
      })),
    [count]
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
          }}
          animate={{ opacity: [0.1, 0.8, 0.1] }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[120] h-[2px] w-full origin-left bg-aurora"
    />
  )
}

export default function AmbientBackground() {
  const ref = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, (val) => val * 0.05)

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 z-0">
      {/* base color */}
      <div className="absolute inset-0 bg-void" />

      {/* animated grid */}
      <motion.div
        className="absolute inset-0 bg-grid opacity-[0.35] mask-fade-b"
        style={{ y }}
      />

      {/* aurora blobs */}
      <motion.div
        className="absolute -left-40 top-10 h-[40rem] w-[40rem] rounded-full bg-neon-blue/20 blur-[130px]"
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-40 top-1/3 h-[36rem] w-[36rem] rounded-full bg-neon-violet/20 blur-[140px]"
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-neon-cyan/10 blur-[150px]"
        animate={{ x: [0, 40, 0], y: [0, -40, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      <Stars />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,5,5,0.7))]" />
    </div>
  )
}
