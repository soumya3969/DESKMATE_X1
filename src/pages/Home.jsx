import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import AmbientBackground, { ScrollProgress } from '../components/AmbientBackground.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import ProductShowcase from '../components/ProductShowcase.jsx'
import UseCases from '../components/UseCases.jsx'
import TechSpecs from '../components/TechSpecs.jsx'
import Pricing from '../components/Pricing.jsx'
import Waitlist from '../components/Waitlist.jsx'
import Footer from '../components/Footer.jsx'
import { WHATSAPP_LINK } from '../data.js'

function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 right-5 z-[95] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 shadow-[0_0_30px_-4px_rgba(16,185,129,0.7)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inline-flex h-full w-full animate-ping2 rounded-full bg-emerald-400 opacity-60" />
      <MessageCircle className="relative h-6 w-6 text-white" />
    </motion.a>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <AmbientBackground />
      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Features />
        <ProductShowcase />
        <UseCases />
        <TechSpecs />
        <Pricing />
        <Waitlist />
        <Footer />
      </main>

      <WhatsAppButton />
    </div>
  )
}
