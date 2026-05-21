import { lazy, Suspense, useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValue } from 'framer-motion'
import Loader from './components/Loader.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))

function CursorGlow() {
  const [hidden, setHidden] = useState(true)
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  useEffect(() => {
    if (window.matchMedia('(max-width: 768px)').matches) return
    const move = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setHidden(false)
    }
    const leave = () => setHidden(true)
    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseleave', leave, { passive: true })
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', leave)
    }
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference transition-opacity duration-300 md:block"
        style={{ x: cursorX, y: cursorY, opacity: hidden ? 0 : 1 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[99] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-500 md:block"
        style={{
          x: cursorX,
          y: cursorY,
          opacity: hidden ? 0 : 1,
          background:
            'radial-gradient(circle, rgba(91,140,255,0.12), rgba(157,107,255,0.06) 40%, transparent 70%)',
        }}
      />
    </>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minimumLoaderDurationMs = 1100
    const startedAt = performance.now()
    let closeTimeoutId

    const closeLoader = () => {
      const elapsedMs = performance.now() - startedAt
      const remainingMs = Math.max(0, minimumLoaderDurationMs - elapsedMs)

      closeTimeoutId = window.setTimeout(() => {
        setLoading(false)
      }, remainingMs)
    }

    const closeAfterPaint = () => {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          closeLoader()
        })
      })
    }

    if (document.readyState === 'complete') {
      closeAfterPaint()
    } else {
      window.addEventListener('load', closeAfterPaint, { once: true })
    }

    return () => {
      window.clearTimeout(closeTimeoutId)
      window.removeEventListener('load', closeAfterPaint)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : ''
  }, [loading])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      <CursorGlow />
      {!loading && (
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      )}
    </>
  )
}
