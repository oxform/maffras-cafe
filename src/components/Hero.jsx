import { motion } from 'framer-motion'
import { MapPin, Clock, Cigarette } from 'lucide-react'

// Replace with a real photo of the shopfront / counter when you have one.
const HERO_IMAGE = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=80&auto=format&fit=crop'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Inside Maffra's Cafe"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-20 md:pt-40 md:pb-24 min-h-screen flex flex-col justify-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt"
        >
          <span className="inline-block w-2 h-2 bg-accent-burnt" /> Open today
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-display text-white text-6xl sm:text-7xl md:text-[8rem] tracking-wide mt-3 max-w-4xl"
        >
          COFFEE.<br />
          BREKKIE.<br />
          <span className="text-accent-burnt">SMOKES.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/75 mt-6 max-w-md text-base leading-relaxed"
        >
          A small family-run cafe on Maffra Street.
          We open at 7:30. Walk-up only. Kettle's always on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-7 flex flex-wrap gap-4 items-center"
        >
          <a
            href="#menu"
            className="bg-accent-burnt text-white px-7 py-3 font-bold uppercase tracking-[0.18em] text-sm hover:bg-white hover:text-black transition-colors"
          >
            See the menu
          </a>
          <a
            href="#visit"
            className="text-white/90 hover:text-accent-burnt uppercase tracking-[0.18em] text-sm font-bold transition-colors"
          >
            How to find us →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl text-white"
        >
          <Info icon={<MapPin size={14} />}    title="Where" body="20/30-34 Maffra St, Coolaroo" />
          <Info icon={<Clock size={14} />}     title="Today" body="7:30 AM – 2:30 PM" />
          <Info icon={<Cigarette size={14} />} title="Also"  body="Cigarettes & essentials" />
        </motion.div>
      </div>
    </section>
  )
}

function Info({ icon, title, body }) {
  return (
    <div className="flex items-start gap-3 border-l-2 border-accent-burnt pl-3">
      <div>
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-accent-burnt font-bold">
          {icon} {title}
        </div>
        <div className="font-medium text-sm md:text-base mt-1">{body}</div>
      </div>
    </div>
  )
}
