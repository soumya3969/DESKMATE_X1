import { motion } from 'framer-motion'
import { USE_CASES } from '../data.js'
import { SectionHeading } from './Features.jsx'

export default function UseCases() {
  return (
    <section id="usecases" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="Who it's for"
        title="Built for people who ship"
        subtitle="Whether you write code, study late or curate the perfect battlestation — DeskMate X1 fits in."
      />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {USE_CASES.map((u, i) => (
          <motion.div
            key={u.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-3xl"
          >
            <div className="border-gradient relative h-full rounded-3xl">
              <div className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7">
                <div className="pointer-events-none absolute inset-0 bg-aurora opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]" />

                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neon-violet transition-transform duration-500 group-hover:scale-110 group-hover:text-neon-cyan">
                  <u.icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-6 font-display text-2xl font-semibold">{u.title}</h3>
                <p className="relative mt-3 flex-1 leading-relaxed text-white/55">{u.desc}</p>

                <p className="relative mt-6 font-mono text-xs text-neon-blue/70">{u.tag}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
