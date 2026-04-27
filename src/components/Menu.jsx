import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search } from 'lucide-react'
import { categories, menu } from '../data/menu'

export default function Menu() {
  const [active, setActive] = useState('breakfast')
  const [query,  setQuery]  = useState('')

  const items = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (q) {
      return Object.entries(menu).flatMap(([cat, list]) =>
        list
          .filter(i => i.name.toLowerCase().includes(q) || i.desc.toLowerCase().includes(q))
          .map(i => ({ ...i, _cat: cat }))
      )
    }
    return menu[active].map(i => ({ ...i, _cat: active }))
  }, [active, query])

  return (
    <section id="menu" className="relative py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt">
              <span className="inline-block w-2 h-2 bg-accent-burnt" /> The menu
            </span>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3 max-w-3xl">
              WHAT WE'VE GOT GOING.
            </h2>
            <p className="text-black/65 mt-3 max-w-xl text-sm leading-relaxed">
              Prices and items can change — pop in or give us a ring to confirm.
              No online ordering; we're a walk-up shop.
            </p>
          </div>

          <label className="relative flex items-center w-full md:w-72">
            <Search size={16} className="absolute left-3 text-black/50" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search the menu…"
              className="w-full bg-white border-2 border-black pl-9 pr-3 py-2.5 text-sm placeholder:text-black/40 focus:outline-none focus:border-accent-burnt"
            />
          </label>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8 sticky top-[60px] z-30 bg-cream-50/95 backdrop-blur py-3 -mx-2 px-2">
          {categories.map(c => {
            const isActive = !query && active === c.id
            return (
              <button
                key={c.id}
                onClick={() => { setActive(c.id); setQuery('') }}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] transition-colors border-2 ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-black border-black/20 hover:border-black'
                }`}
              >
                {c.label}
              </button>
            )
          })}
        </div>

        {/* Items grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={query || active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3"
          >
            {items.length === 0 && (
              <div className="col-span-full text-center py-16">
                <div className="font-display text-3xl tracking-wide mb-2">NO MATCHES</div>
                <p className="text-black/60 text-sm">Try "muffin", "burger", or "kebab".</p>
              </div>
            )}

            {items.map((item, i) => (
              <motion.article
                key={`${item._cat}-${item.name}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: Math.min(i * 0.02, 0.3) }}
                className="group flex gap-4 p-3 bg-white border-2 border-black/15 hover:border-accent-burnt transition-colors"
              >
                <div className="relative shrink-0 w-24 h-24 md:w-28 md:h-28 overflow-hidden bg-black/10">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {item.popular && (
                    <span className="absolute top-1 left-1 bg-accent-burnt text-white text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5">
                      Hot
                    </span>
                  )}
                </div>

                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans font-bold text-[15px] leading-snug">{item.name}</h3>
                    <span className="font-display text-xl text-accent-burnt shrink-0 leading-none pt-1 tracking-wide">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="text-xs text-black/65 mt-1.5 leading-relaxed line-clamp-3">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
