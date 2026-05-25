import { ArrowRight } from 'lucide-react'

const STATS = [
  { num: '400+',            label: 'м³ постійно на складі' },
  { num: '100%',            label: 'відповідність ДСТУ' },
  { num: 'В день',         label: 'замовлення — відвантаження' },
  { num: 'По Україні',   label: 'доставка власним транспортом' },
]

export default function WoodBento() {
  return (
    <section style={{ background: '#100C08', fontFamily: 'var(--font-display)' }}>
      <div className="mx-auto max-w-screen-xl px-8 md:px-14 lg:px-20 py-20 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-0"
          style={{ borderTop: '1px solid rgba(245,237,216,0.07)', paddingTop: '3.5rem' }}>

          {/* Left — positioning */}
          <div className="flex flex-col justify-between lg:pr-16"
            style={{ borderRight: '1px solid rgba(245,237,216,0.07)' }}>
            <div>
              <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-8"
                style={{ color: 'var(--color-wood-mid)' }}>Про виробництво</p>
              <h2 className="font-black uppercase leading-[0.88] mb-8"
                style={{ color: '#F5EDD8', fontSize: 'clamp(2rem,4vw,4rem)', letterSpacing: '-0.03em' }}>
                Від лісу<br />до готового<br />матеріалу
              </h2>
              <p style={{ color: 'rgba(245,237,216,0.5)', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: '36ch' }}>
                ВБК Партнер — виробник пиломатеріалів повного циклу з власною лісозаготівельною базою та сучасними сушильними комплексами. Мінімальна ціна за куб без прихованих націнок.
              </p>
            </div>
            <a href="#quiz"
              className="inline-flex items-center gap-2 mt-10 text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70 self-start"
              style={{ color: 'var(--color-wood-mid)' }}>
              Замовити <ArrowRight size={12} strokeWidth={3} />
            </a>
          </div>

          {/* Right — 2×2 stats */}
          <div className="grid grid-cols-2 lg:pl-16">
            {STATS.map(({ num, label }, i) => (
              <div key={label}
                className="reveal flex flex-col justify-end py-8 pr-8"
                style={{
                  paddingLeft: i % 2 === 1 ? '2rem' : '0',
                  borderRight: i % 2 === 0 ? '1px solid rgba(245,237,216,0.07)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(245,237,216,0.07)' : 'none',
                  paddingTop: i >= 2 ? '2rem' : '0',
                  transitionDelay: `${i * 80}ms`,
                }}>
                <div className="font-black tabular-nums leading-none mb-2"
                  style={{ color: '#F5EDD8', fontSize: 'clamp(2.2rem,4vw,4rem)', letterSpacing: '-0.04em', whiteSpace: 'pre-line' }}>
                  {num}
                </div>
                <div className="text-xs font-medium"
                  style={{ color: 'rgba(245,237,216,0.3)' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
