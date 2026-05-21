import { motion } from 'framer-motion'
import { TECH_SPECS } from '../data.js'
import { SectionHeading } from './Features.jsx'

export default function TechSpecs() {
  return (
    <section id="specs" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="Under the hood"
        title="Serious hardware, quietly"
        subtitle="A maker-grade stack chosen for reliability, low power and room to hack."
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
        {TECH_SPECS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="border-gradient relative h-full rounded-2xl">
              <div className="glass relative h-full overflow-hidden flex flex-col items-center text-center sm:items-start sm:text-left rounded-2xl p-5">
                <div className="pointer-events-none absolute -bottom-6 -right-6 h-20 w-20 rounded-full bg-neon-blue/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-neon-cyan">
                  <s.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-white/40">
                  {s.label}
                </p>
                <p className="mt-1 font-display text-xl font-bold text-white">{s.value}</p>
                <p className="mt-0.5 font-mono text-[11px] text-white/45">{s.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
