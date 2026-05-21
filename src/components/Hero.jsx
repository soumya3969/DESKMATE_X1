import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ArrowRight, CloudSun, Wifi, BatteryCharging } from 'lucide-react'
import FloatingOrb from './FloatingOrb.jsx'
import { STATUS_PILLS, STATS } from '../data.js'
import { useWeather } from '../hooks/useWeather'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

function LiveClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  const hh = now.getHours().toString().padStart(2, '0')
  const mm = now.getMinutes().toString().padStart(2, '0')
  const ss = now.getSeconds().toString().padStart(2, '0')
  return (
    <div className="flex items-baseline gap-1 font-mono">
      <span className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {hh}:{mm}
      </span>
      <span className="text-lg text-neon-cyan">{ss}</span>
    </div>
  )
}

function ProductMockup() {
  const { city, temperature, description } = useWeather();
  const [dayName, setDayName] = useState('Thursday');

  useEffect(() => {
    const updateDay = () => {
      setDayName(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()));
    };
    updateDay();
    const id = setInterval(updateDay, 60000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      variants={fade}
      initial="hidden"
      animate="show"
      custom={4}
      className="relative w-full max-w-sm"
    >
      <div className="absolute -inset-6 rounded-[2rem] bg-aurora opacity-20 blur-3xl" />
      <div className="border-gradient relative overflow-hidden rounded-[2rem] p-6 shadow-glow-lg">
        <div className="glass absolute inset-0 rounded-[2rem]" />
        <div className="relative">
          <div className="mb-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              DeskMate · Live
            </span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="font-mono text-[10px] text-emerald-400">SYNCED</span>
            </span>
          </div>

          <LiveClock />
          <p className="mt-1 font-mono text-xs text-white/40">{dayName} · {city}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="glass rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-neon-cyan">
                <CloudSun className="h-4 w-4" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                  Weather
                </span>
              </div>
              <p className="mt-2 font-display text-2xl font-bold">{temperature}°C</p>
              <p className="font-mono text-[10px] text-white/40">{description}</p>
            </div>
            <div className="glass rounded-2xl p-3.5">
              <div className="flex items-center gap-2 text-neon-violet">
                <BatteryCharging className="h-4 w-4" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                  Battery
                </span>
              </div>
              <p className="mt-2 font-display text-2xl font-bold">92%</p>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-neon-cyan"
                  initial={{ width: '60%' }}
                  animate={{ width: ['60%', '92%', '60%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>

          <div className="mt-3 glass flex items-center justify-between rounded-2xl p-3.5">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/40">
                Focus Timer
              </span>
              <p className="font-mono text-xl font-semibold text-white">24:58</p>
            </div>
            <div className="flex gap-1.5">
              {['#5b8cff', '#9d6bff', '#4fd6ff', '#5b8cff'].map((c, i) => (
                <motion.span
                  key={i}
                  className="h-8 w-1.5 rounded-full"
                  style={{ background: c }}
                  animate={{ scaleY: [0.4, 1, 0.5, 0.9, 0.4] }}
                  transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16 lg:items-center">
      {/* 3D object layer */}
      <div className="absolute inset-0 z-0 opacity-90 md:left-1/4">
        <FloatingOrb />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs text-white/70"
          >
            <Wifi className="h-3.5 w-3.5 text-neon-cyan" />
            Powered by ESP32-S3 · Now on waitlist
          </motion.span>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Your Smart <br />
            <span className="text-gradient-aurora animate-shimmer">Desk Companion</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-md text-lg leading-relaxed text-white/60"
          >
            Time, Weather, Productivity — all in one elegant display. A rechargeable
            dashboard that lives on your desk and keeps you in flow.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4"
          >
            <a
              href="#waitlist"
              className="group inline-flex justify-center items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Join Waitlist
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#showcase"
              className="group inline-flex justify-center items-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/5"
            >
              <Play className="h-4 w-4 text-neon-cyan" />
              Watch Demo
            </a>
          </motion.div>

          {/* status pills */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap gap-2.5"
          >
            {STATUS_PILLS.map((pill, i) => (
              <motion.span
                key={pill.label}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
                className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-xs text-white/70"
              >
                <pill.icon className="h-3.5 w-3.5 text-neon-blue" />
                {pill.label}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <ProductMockup />
        </div>
      </div>

      {/* stats strip */}
      <motion.div
        variants={fade}
        initial="hidden"
        animate="show"
        custom={6}
        className="relative z-10 mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-x-10 gap-y-6 px-5 lg:absolute lg:inset-x-0 lg:bottom-6 lg:mt-0 lg:gap-y-3"
      >
        {STATS.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl font-bold text-gradient">{s.value}</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
