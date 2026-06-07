import { ArrowRight } from 'lucide-react'

const STATS = [
  { num: '200+',              label: 'успішних проектів' },
  { num: '10+',               label: 'років на ринку' },
  { num: '0 грн',              label: 'виїзд і кошторис' },
  { num: 'Київ\nта вся\nУкраїна', label: 'географія робіт' },
]

export default function BuildBento() {
  return (
    <section style={{ background: '#111111', fontFamily: 'var(--font-display)' }}>
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 md:px-14 lg:px-20 py-16 md:py-28">

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 md:gap-16 lg:gap-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2.5rem' }}>

          {/* Left — positioning */}
          <div className="flex flex-col justify-between lg:pr-16
            lg:border-r lg:border-white/[0.07]">
            <div>
              <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-6 md:mb-8"
                style={{ color: 'var(--color-orange)' }}>Про компанію</p>
              <h2 className="font-black uppercase text-white leading-[0.95] mb-6 md:mb-8"
                style={{ fontSize: 'clamp(1.6rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
                Один<br />підрядник —<br />весь обсяг
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.65 }} className="md:max-w-[36ch]">
                ВБК Партнер — виробничо-будівельна компанія, яка спеціалізується на будівельно-ремонтних роботах на комерційних і виробничих об&apos;єктах та власному виробництві пиломатеріалів.
              </p>
            </div>
            <a href="#quiz"
              className="inline-flex items-center gap-2 mt-8 md:mt-10 text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70 self-start"
              style={{ color: 'var(--color-orange)' }}>
              Залишити заявку <ArrowRight size={12} strokeWidth={3} />
            </a>
          </div>

          {/* Right — 2×2 stats */}
          <div className="grid grid-cols-2 lg:pl-16">
            {STATS.map(({ num, label }, i) => (
              <div key={label}
                className="reveal flex flex-col justify-end py-6 md:py-8"
                style={{
                  paddingLeft: i % 2 === 1 ? '1rem' : '0',
                  paddingRight: i % 2 === 0 ? '1rem' : '0',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  paddingTop: i >= 2 ? '1.5rem' : '0',
                  transitionDelay: `${i * 80}ms`,
                }}>
                <div className="font-black text-white tabular-nums leading-none mb-2 break-words"
                  style={{ fontSize: 'clamp(1.4rem,4vw,4rem)', letterSpacing: '-0.04em', whiteSpace: 'pre-line' }}>
                  {num}
                </div>
                <div className="text-[11px] md:text-xs font-medium"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
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
