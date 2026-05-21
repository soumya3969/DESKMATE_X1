import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()
    const completionDurationMs = 1000
    let frameId = 0

    const tick = () => {
      const elapsedMs = performance.now() - startedAt
      const normalized = Math.min(1, elapsedMs / completionDurationMs)
      const eased = 1 - Math.pow(1 - normalized, 3)
      const nextProgress = eased * 100

      setProgress((previous) => (nextProgress > previous ? nextProgress : previous))

      if (normalized < 1) {
        frameId = window.requestAnimationFrame(tick)
      }
    }

    frameId = window.requestAnimationFrame(tick)

    return () => {
      window.cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-void"
    >
      <div className="absolute inset-0 bg-grid opacity-30 mask-fade-b" />
      <div className="absolute h-72 w-72 rounded-full bg-neon-violet/20 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center"
      >
        <div className="relative mb-8 h-24 w-24">
          <motion.span
            className="absolute inset-0 rounded-2xl border border-neon-blue/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />
          <motion.span
            className="absolute inset-2 rounded-2xl border border-neon-violet/40"
            animate={{ rotate: -360 }}
            transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl font-extrabold text-gradient">X1</span>
          </div>
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.4em] text-white/50">
          DeskMate X1
        </p>

        <div className="mt-6 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-aurora"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.16, ease: 'easeOut' }}
          />
        </div>
        <p className="mt-3 font-mono text-[10px] tracking-widest text-white/40">
          INITIALIZING SYSTEM · {Math.floor(progress)}%
        </p>
      </motion.div>
    </motion.div>
  )
}
