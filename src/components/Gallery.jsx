import { motion } from 'framer-motion'

// Drop the URLs to your own photos here. Mix tall + wide for variety.
const PHOTOS = [
  { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80&auto=format&fit=crop', span: 'row-span-2', alt: 'Latte being made' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop', span: '',           alt: 'Counter detail' },
  { src: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=900&q=80&auto=format&fit=crop', span: '',           alt: 'Pastries on display' },
  { src: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=900&q=80&auto=format&fit=crop', span: 'col-span-2',  alt: 'Cafe interior' },
  { src: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=900&q=80&auto=format&fit=crop', span: '',           alt: 'Beans being ground' },
  { src: 'https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=900&q=80&auto=format&fit=crop', span: '',           alt: 'A morning brew' }
]

export default function Gallery() {
  return (
    <section className="relative py-20 md:py-28 bg-white border-t-2 border-black/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt">
              <span className="inline-block w-2 h-2 bg-accent-burnt" /> A peek inside
            </span>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3 max-w-2xl">
              HAVE A LOOK AROUND.
            </h2>
          </div>
          <p className="text-black/60 max-w-md text-xs italic">
            Placeholder photos — drop your own in here.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-2">
          {PHOTOS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`relative overflow-hidden border-2 border-black/15 group ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
