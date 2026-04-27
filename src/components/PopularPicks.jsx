import { motion } from 'framer-motion'
import { popularPicks } from '../data/menu'

export default function PopularPicks() {
  return (
    <section id="popular" className="relative py-20 md:py-28 bg-black text-white">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt">
              <span className="inline-block w-2 h-2 bg-accent-burnt" /> What the regulars get
            </span>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3 max-w-3xl">
              THE USUALS.
            </h2>
          </div>
          <a href="#menu" className="text-xs font-bold uppercase tracking-[0.25em] text-white/80 hover:text-accent-burnt transition-colors">
            See the full menu →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularPicks.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group relative overflow-hidden border-2 border-white/10 hover:border-accent-burnt transition-colors"
            >
              <div className="aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="absolute top-0 left-0 bg-accent-burnt text-white text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
                Popular
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/85 to-transparent">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-sans font-bold text-base leading-snug">{p.name}</h3>
                  <span className="font-bold text-accent-burnt shrink-0">${p.price.toFixed(2)}</span>
                </div>
                <p className="text-xs text-white/65 mt-1 line-clamp-2">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
