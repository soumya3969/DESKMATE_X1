import { motion } from 'framer-motion'
import { FEATURES } from '../data.js'

function SectionHeading({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs uppercase tracking-[0.4em] text-neon-blue"
      >
        {kicker}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.05 }}
        className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-white/55"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export { SectionHeading }

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="Capabilities"
        title="Eight modules. One desk."
        subtitle="Every feature is tuned to keep your essentials glanceable and your focus intact."
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl p-px"
          >
            <div className="border-gradient relative h-full rounded-3xl">
              <div className="glass relative h-full overflow-hidden rounded-3xl p-5">
                <div
                  className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${f.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-neon-blue transition-colors group-hover:text-neon-cyan">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <div className="text-right">
                      <p className="font-mono text-lg font-semibold text-white">{f.metric}</p>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-white/40">
                        {f.metricLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{f.desc}</p>

                  <div className="mt-4 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 12 }).map((_, k) => (
                      <span
                        key={k}
                        className="h-1 flex-1 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-neon-blue/40"
                        style={{ transitionDelay: `${k * 20}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
