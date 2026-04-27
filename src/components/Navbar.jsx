import { useState } from 'react'
import { Menu as MenuIcon, X, Phone } from 'lucide-react'

const links = [
  { href: '#story',   label: 'About' },
  { href: '#menu',    label: 'Menu' },
  { href: '#popular', label: 'Regulars order' },
  { href: '#visit',   label: 'Find us' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b-2 border-accent-burnt">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="inline-block w-3 h-3 rounded-full bg-accent-burnt" aria-hidden />
          <span className="font-display text-2xl md:text-3xl tracking-wide text-white leading-none pt-1">
            MAFFRA'S <span className="text-accent-burnt">CAFE</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+61390000000"
            className="ml-2 inline-flex items-center gap-2 text-sm font-semibold text-accent-burnt hover:text-white transition-colors"
          >
            <Phone size={14} /> (03) 9000 0000
          </a>
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-white"
        >
          <MenuIcon size={22} />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 bg-black/70 transition-opacity ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
      />
      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-72 bg-black border-l-2 border-accent-burnt shadow-2xl transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="font-display text-2xl text-white tracking-wide pt-1">MENU</span>
          <button onClick={() => setOpen(false)} className="p-2 text-white">
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col p-5 gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-white/90 hover:text-accent-burnt font-medium uppercase tracking-wider text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+61390000000"
            onClick={() => setOpen(false)}
            className="mt-3 text-center bg-accent-burnt text-white px-5 py-3 font-bold uppercase tracking-wider text-sm"
          >
            Call (03) 9000 0000
          </a>
        </nav>
      </aside>
    </header>
  )
}
