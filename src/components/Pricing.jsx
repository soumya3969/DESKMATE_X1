import { motion } from 'framer-motion'
import { Check, Bell, MessageCircle } from 'lucide-react'
import { PRICING, WHATSAPP_LINK } from '../data.js'
import { SectionHeading } from './Features.jsx'

export default function Pricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <SectionHeading
        kicker="Launch pricing"
        title="Reserve your DeskMate X1"
        subtitle="Founding-batch pricing for the first builders. No charge today — you only confirm at launch."
      />

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
        {PRICING.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`group relative overflow-hidden rounded-3xl ${
              plan.highlight ? 'shadow-glow-violet' : ''
            }`}
          >
            <div className="border-gradient relative h-full rounded-3xl">
              <div
                className={`glass relative flex h-full flex-col overflow-hidden rounded-3xl p-7 ${
                  plan.highlight ? 'bg-white/[0.05]' : ''
                }`}
              >
                {plan.highlight && (
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-violet/25 blur-3xl" />
                )}

                <div className="relative flex items-center justify-between">
                  <h3 className="font-display md:text-2xl text-lg font-bold">{plan.name}</h3>
                  <span
                    className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${
                      plan.highlight
                        ? 'bg-aurora text-white'
                        : 'border border-white/15 text-white/60'
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>

                <p className="relative mt-2 text-sm text-white/55">{plan.tagline}</p>

                <div className="relative mt-6 flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold text-gradient">
                    {plan.price}
                  </span>
                  <span className="mb-2 font-mono text-sm text-white/40 line-through">
                    {plan.original}
                  </span>
                </div>

                <ul className="relative mt-6 flex-1 space-y-3">
                  {plan.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-blue/15 text-neon-cyan">
                        <Check className="h-3 w-3" />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#waitlist"
                    className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.02] ${
                      plan.highlight
                        ? 'bg-white text-black'
                        : 'border border-white/15 text-white hover:bg-white/5'
                    }`}
                  >
                    <Bell className="h-4 w-4" />
                    {plan.cta}
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-400/20"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Join WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
