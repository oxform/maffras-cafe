import { motion } from 'framer-motion'

// Swap these for actual photos of the shop & counter when you have them.
const PHOTO_TALL   = 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=900&q=80&auto=format&fit=crop'
const PHOTO_SQUARE = 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=900&q=80&auto=format&fit=crop'

export default function About() {
  return (
    <section id="story" className="relative py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[3/4] overflow-hidden border-4 border-black"
          >
            <img src={PHOTO_TALL} alt="Behind the counter at Maffra's" className="w-full h-full object-cover grayscale-[40%]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute -bottom-6 -right-3 md:-right-8 w-36 md:w-44 aspect-square overflow-hidden border-4 border-accent-burnt"
          >
            <img src={PHOTO_SQUARE} alt="Pastries on the counter" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt">
            <span className="inline-block w-2 h-2 bg-accent-burnt" /> About
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3 max-w-2xl">
            A SMALL CAFE DOING WHAT SMALL CAFES DO.
          </h2>

          <p className="text-black/80 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
            Maffra's has been on the corner for years. We do coffee, breakfast and a hot
            lunch — nothing flash. Most mornings it's the same faces, the same orders, and
            that's exactly how we like it.
          </p>

          <p className="text-black/80 text-base md:text-lg leading-relaxed mt-4 max-w-2xl">
            We also stock cigarettes, drinks and the bits and pieces you forget on your way
            to work. If we don't have it, the shop next door probably does.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
            <Stat n="7:30" label="Open from" />
            <Stat n="40+"  label="On the menu" />
            <Stat n="$"    label="Cheap as" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, label }) {
  return (
    <div className="border-l-4 border-accent-burnt pl-3">
      <div className="font-display text-4xl md:text-5xl text-black tracking-wide leading-none pt-1">{n}</div>
      <div className="text-[10px] uppercase tracking-[0.22em] text-black/65 mt-2 font-bold">{label}</div>
    </div>
  )
}
