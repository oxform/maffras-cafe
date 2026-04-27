// Edge-to-edge red awning stripe between sections.
const ITEMS = [
  'Coffee from 7:30',
  'Hot food all day',
  'Pies, gozleme, rolls',
  'Cigarettes & essentials',
  'Cash or EFTPOS',
  'Take-away ready',
  'Walk-up only'
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative bg-accent-burnt text-white py-3 overflow-hidden">
      <div className="flex gap-10 whitespace-nowrap animate-marquee">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-2xl md:text-3xl tracking-wide">
            <span className="leading-none pt-1">{t}</span>
            <span className="text-white/70">★</span>
          </span>
        ))}
      </div>
    </div>
  )
}
