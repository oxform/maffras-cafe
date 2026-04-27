export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-accent-burnt">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-3 h-3 bg-accent-burnt" />
            <span className="font-display text-3xl tracking-wide pt-1">MAFFRA'S <span className="text-accent-burnt">CAFE</span></span>
          </div>
          <p className="text-white/70 mt-4 max-w-sm leading-relaxed text-sm">
            A small cafe on Maffra Street in Coolaroo. Coffee, brekkie, hot lunch
            and the smokes counter. Walk-up only — see you in the morning.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent-burnt mb-4 font-bold">Quick links</h4>
          <ul className="space-y-2 text-white/85 text-sm">
            <li><a href="#story"   className="link-underline">About</a></li>
            <li><a href="#menu"    className="link-underline">Menu</a></li>
            <li><a href="#popular" className="link-underline">Regulars order</a></li>
            <li><a href="#visit"   className="link-underline">Find us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-accent-burnt mb-4 font-bold">Contact</h4>
          <ul className="space-y-2 text-white/85 text-sm">
            <li>20/30-34 Maffra St, Coolaroo VIC 3048</li>
            <li>(03) 9000 0000</li>
            <li>hello@maffras.cafe</li>
            <li>Open today 7:30 AM – 2:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-between gap-3 text-[11px] text-white/55">
          <span>© {new Date().getFullYear()} Maffra's Cafe. Coolaroo, VIC.</span>
          <span>Tobacco sold in accordance with Victorian law. ID may be required.</span>
        </div>
      </div>
    </footer>
  )
}
