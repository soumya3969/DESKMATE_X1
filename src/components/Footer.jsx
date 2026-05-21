import { motion } from 'framer-motion'
import { Zap, Github, Twitter, Linkedin } from 'lucide-react'
import { FOOTER_LINKS } from '../data.js'

export default function Footer() {
  return (
    <footer className="relative mx-auto max-w-6xl px-5 pb-12 pt-20">
      <div className="border-gradient rounded-[2rem]">
        <div className="glass relative overflow-hidden rounded-[2rem] p-8 sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-neon-blue/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
            <div>
              <a href="#top" className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-aurora shadow-glow">
                  <Zap className="h-4 w-4 text-white" />
                </span>
                <span className="font-display text-lg font-bold">
                  DeskMate <span className="text-gradient-aurora">X1</span>
                </span>
              </a>
              <p className="mt-4 max-w-xs text-sm text-white/50">
                The smart, rechargeable productivity dashboard for your desk. Built on
                ESP32-S3 for makers and focus-seekers.
              </p>
              <div className="mt-5 flex gap-3">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-neon-blue/40 hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(FOOTER_LINKS).map(([group, links]) => (
              <div key={group}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  {group}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/55 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="relative mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
            <p className="font-mono text-[11px] text-white/40">
              © {new Date().getFullYear()} DeskMate X1. A concept product.
            </p>
            <p className="font-mono text-[11px] text-white/40">
              Designed for desks · Powered by ESP32-S3
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
