import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Thermometer, Droplets, CloudSun, BatteryCharging } from 'lucide-react'
import { SectionHeading } from './Features.jsx'
import { useWeather } from '../hooks/useWeather'

function RoundDashboard() {
  const { temperature } = useWeather();
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const sec = now.getSeconds()
  const min = now.getMinutes()
  const hour = now.getHours() % 12

  const ticks = Array.from({ length: 60 })

  return (
    <div className="relative flex aspect-square w-full max-w-[26rem] items-center justify-center">
      {/* RGB ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        animate={{
          background: [
            'radial-gradient(circle, rgba(91,140,255,0.35), transparent 65%)',
            'radial-gradient(circle, rgba(157,107,255,0.35), transparent 65%)',
            'radial-gradient(circle, rgba(79,214,255,0.35), transparent 65%)',
            'radial-gradient(circle, rgba(91,140,255,0.35), transparent 65%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* outer ring */}
      <div className="border-gradient relative flex aspect-square w-full items-center justify-center rounded-full shadow-glow-lg">
        <div className="glass-strong absolute inset-3 rounded-full" />

        {/* tick marks */}
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          {ticks.map((_, i) => {
            const angle = (i / 60) * Math.PI * 2 - Math.PI / 2
            const major = i % 5 === 0
            const r1 = 185
            const r2 = major ? 168 : 176
            return (
              <line
                key={i}
                x1={200 + r1 * Math.cos(angle)}
                y1={200 + r1 * Math.sin(angle)}
                x2={200 + r2 * Math.cos(angle)}
                y2={200 + r2 * Math.sin(angle)}
                stroke={major ? 'rgba(155,180,255,0.7)' : 'rgba(155,180,255,0.25)'}
                strokeWidth={major ? 2.5 : 1.5}
                strokeLinecap="round"
              />
            )
          })}
          {/* clock hands */}
          <g stroke="white" strokeLinecap="round">
            <line
              x1="200"
              y1="200"
              x2={200 + 80 * Math.cos((hour / 12 + min / 720) * Math.PI * 2 - Math.PI / 2)}
              y2={200 + 80 * Math.sin((hour / 12 + min / 720) * Math.PI * 2 - Math.PI / 2)}
              strokeWidth="6"
              stroke="#cdd9ff"
            />
            <line
              x1="200"
              y1="200"
              x2={200 + 120 * Math.cos((min / 60) * Math.PI * 2 - Math.PI / 2)}
              y2={200 + 120 * Math.sin((min / 60) * Math.PI * 2 - Math.PI / 2)}
              strokeWidth="4"
              stroke="#9d6bff"
            />
            <line
              x1="200"
              y1="200"
              x2={200 + 140 * Math.cos((sec / 60) * Math.PI * 2 - Math.PI / 2)}
              y2={200 + 140 * Math.sin((sec / 60) * Math.PI * 2 - Math.PI / 2)}
              strokeWidth="2"
              stroke="#4fd6ff"
            />
          </g>
          <circle cx="200" cy="200" r="7" fill="#cdd9ff" />
        </svg>

        {/* center metrics */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
            {now.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short' })}
          </span>
          <span className="mt-1 font-mono text-3xl font-bold tabular-nums">
            {now.getHours().toString().padStart(2, '0')}:
            {now.getMinutes().toString().padStart(2, '0')}
          </span>
          <div className="mt-3 flex items-center gap-3 font-mono text-xs text-white/60">
            <span className="flex items-center gap-1">
              <CloudSun className="h-3.5 w-3.5 text-neon-cyan" />
              {temperature}°
            </span>
            <span className="flex items-center gap-1">
              <Droplets className="h-3.5 w-3.5 text-neon-blue" />
              48%
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function FloatingChip({ icon: Icon, label, value, className, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`glass-strong z-20 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-card ${className}`}
    >
      <motion.span
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay }}
        className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 text-neon-blue"
      >
        <Icon className="h-4 w-4" />
      </motion.span>
      <div>
        <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">{label}</p>
        <p className="font-display text-sm font-semibold">{value}</p>
      </div>
    </motion.div>
  )
}

export default function ProductShowcase() {
  const { temperature } = useWeather();

  return (
    <section id="showcase" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="The Display"
        title="A dashboard that feels alive"
        subtitle="Layered glass, a luminous RGB halo and a live round interface — engineered to be glanced at, never fiddled with."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex flex-col max-w-2xl items-center justify-center py-10"
      >
        <FloatingChip
          icon={Thermometer}
          label="Room Temp"
          value="23.4°C"
          delay={0.2}
          className="absolute hidden sm:flex left-0 top-6 sm:-left-6"
        />
        <FloatingChip
          icon={BatteryCharging}
          label="Battery"
          value="92% · USB-C"
          delay={0.35}
          className="absolute hidden sm:flex bottom-10 left-2 sm:-left-8"
        />
        <FloatingChip
          icon={CloudSun}
          label="Weather Sync"
          value={`Live · ${temperature}°C`}
          delay={0.5}
          className="absolute hidden sm:flex right-0 top-12 sm:-right-6"
        />
        <FloatingChip
          icon={Droplets}
          label="Humidity"
          value="48% RH"
          delay={0.65}
          className="absolute hidden sm:flex bottom-8 right-2 sm:-right-8"
        />

        <RoundDashboard />

        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:hidden">
          <FloatingChip icon={Thermometer} label="Room Temp" value="23.4°C" delay={0.2} className="relative w-full" />
          <FloatingChip icon={BatteryCharging} label="Battery" value="92% · USB-C" delay={0.35} className="relative w-full" />
          <FloatingChip icon={CloudSun} label="Weather Sync" value={`Live · ${temperature}°C`} delay={0.5} className="relative w-full" />
          <FloatingChip icon={Droplets} label="Humidity" value="48% RH" delay={0.65} className="relative w-full" />
        </div>
      </motion.div>
    </section>
  )
}
