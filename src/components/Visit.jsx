import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Instagram, Clock } from 'lucide-react'

const HOURS = [
  ['Monday',    '7:30 AM – 2:30 PM'],
  ['Tuesday',   '7:30 AM – 2:30 PM'],
  ['Wednesday', '7:30 AM – 2:30 PM'],
  ['Thursday',  '7:30 AM – 2:30 PM'],
  ['Friday',    '7:30 AM – 2:30 PM'],
  ['Saturday',  '8:00 AM – 1:00 PM'],
  ['Sunday',    'Closed']
]

export default function Visit() {
  return (
    <section id="visit" className="relative py-20 md:py-28 bg-cream-50">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-black text-white p-8 md:p-10 border-l-4 border-accent-burnt"
        >
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] text-accent-burnt">
            <span className="inline-block w-2 h-2 bg-accent-burnt" /> Come past
          </span>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide mt-3">
            DROP IN.
          </h2>
          <p className="text-white/75 mt-4 text-sm leading-relaxed">
            Walk-up only — no online ordering. Counter sells smokes,
            cold drinks and the bits you forgot at home.
          </p>

          <div className="mt-8 space-y-3 text-white/90">
            <Row icon={<MapPin size={16} />}    title="Address" body="20/30-34 Maffra Street, Coolaroo, VIC 3048" />
            <Row icon={<Phone size={16} />}     title="Call us" body="(03) 9000 0000" />
            <Row icon={<Mail size={16} />}      title="Email"   body="hello@maffras.cafe" />
            <Row icon={<Instagram size={16} />} title="Follow"  body="@maffrascafe" />
          </div>

          <div className="mt-8 pt-6 border-t border-white/15">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-accent-burnt font-bold">
              <Clock size={12} /> Hours
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {HOURS.map(([day, hrs]) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-white/80">{day}</span>
                  <span className={hrs === 'Closed' ? 'text-accent-burnt font-bold' : 'text-white'}>{hrs}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-xs text-white/50 leading-relaxed">
            Closed Sundays. Public holidays vary — give us a ring.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 relative overflow-hidden border-4 border-black min-h-[460px]"
        >
          <iframe
            title="Map to Maffra's Cafe"
            src="https://maps.google.com/maps?q=20%2F30-34%20Maffra%20Street%20Coolaroo%20VIC&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="absolute inset-0 w-full h-full grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute top-4 left-4 bg-accent-burnt text-white px-3 py-2 max-w-[220px]">
            <div className="font-display text-2xl leading-none tracking-wide pt-1">WE'RE HERE</div>
            <div className="text-xs mt-1.5 text-white/90">Maffra's Cafe — a few minutes from Coolaroo Station</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Row({ icon, title, body }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 inline-flex w-7 h-7 bg-white/10 items-center justify-center shrink-0">
        {icon}
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-bold">{title}</div>
        <div className="font-medium text-sm">{body}</div>
      </div>
    </div>
  )
}
