import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, User, Mail, MessageCircle } from 'lucide-react'
import { WHATSAPP_LINK } from '../data.js'

export default function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) {
      next.email = 'Please enter your email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email address'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = () => {
    if (validate()) setSubmitted(true)
  }

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((er) => ({ ...er, [key]: undefined }))
  }

  return (
    <section id="waitlist" className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2.5rem]"
      >
        <div className="border-gradient relative rounded-[2.5rem]">
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-6 py-14 sm:px-12 sm:py-16">
            {/* glow accents */}
            <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-neon-blue/20 blur-3xl" />
            <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-neon-violet/20 blur-3xl" />

            <div className="relative mx-auto grid max-w-4xl items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.4em] text-neon-cyan">
                  Be first in line
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
                  Join the <span className="text-gradient-aurora">waitlist</span>
                </h2>
                <p className="mt-4 max-w-sm text-white/55">
                  Get early-access pricing, firmware previews and a heads-up the moment
                  DeskMate X1 ships. No spam, ever.
                </p>

                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-emerald-300 transition-colors hover:text-emerald-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  Prefer WhatsApp? Tap to join the group
                </a>
              </div>

              <div className="glass rounded-3xl p-6">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-8 text-center"
                    >
                      <CheckCircle2 className="h-14 w-14 text-emerald-400" />
                      <h3 className="mt-4 font-display text-xl font-semibold">You're on the list!</h3>
                      <p className="mt-2 text-sm text-white/55">
                        Thanks {form.name.split(' ')[0]} — we'll reach out at{' '}
                        <span className="text-neon-cyan">{form.email}</span>.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-white/40">
                          Name
                        </label>
                        <div className="relative">
                          <User className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                          <input
                            type="text"
                            value={form.name}
                            onChange={update('name')}
                            placeholder="Ada Lovelace"
                            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-neon-blue/60"
                          />
                        </div>
                        {errors.name && (
                          <p className="mt-1.5 font-mono text-[11px] text-rose-400">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-white/40">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                          <input
                            type="email"
                            value={form.email}
                            onChange={update('email')}
                            placeholder="you@desk.dev"
                            className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-neon-blue/60"
                          />
                        </div>
                        {errors.email && (
                          <p className="mt-1.5 font-mono text-[11px] text-rose-400">{errors.email}</p>
                        )}
                      </div>

                      <button
                        onClick={handleSubmit}
                        className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-semibold text-black transition-transform hover:scale-[1.02]"
                      >
                        Notify Me
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <p className="text-center font-mono text-[10px] text-white/30">
                        Frontend demo · no data leaves your browser
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
