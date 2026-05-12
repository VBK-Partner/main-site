import { ArrowRight, FileText, Phone } from 'lucide-react'

export default function WoodHero() {
  return (
    <section className="relative min-h-screen flex flex-col"
      style={{ background: '#080503', fontFamily: 'var(--font-display)' }}>

      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/wood-banner.png" alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.42) sepia(20%)', objectPosition: 'center 30%' }} />

      {/* Gradient */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(105deg, rgba(8,5,3,0.90) 0%, rgba(8,5,3,0.65) 45%, rgba(8,5,3,0.28) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.0) 40%, rgba(8,5,3,0.8) 100%)
        `,
      }} />
      {/* Wood glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(122,78,45,0.18) 0%, transparent 65%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1
                      px-8 md:px-14 lg:px-20 max-w-screen-xl mx-auto w-full
                      pt-24 pb-0">

        {/* Category tag */}
        <div className="flex items-center gap-3 mb-auto pt-4">
          <span className="text-[10px] font-black tracking-[0.35em] uppercase"
            style={{ color: 'var(--color-wood-mid)' }}>Пиломатеріали</span>
          <div className="h-px w-10" style={{ background: 'var(--color-wood-mid)', opacity: 0.6 }} />
        </div>

        {/* Headline */}
        <div className="mt-6 mb-0">
          <h1 className="font-black uppercase leading-[0.88]"
            style={{
              color: '#F5EDD8',
              fontSize: 'clamp(2.8rem,6.5vw,7rem)',
              letterSpacing: '-0.03em',
            }}>
            Пиломатеріали<br />власного<br />
            <em className="not-italic" style={{ color: 'var(--color-wood-mid)' }}>виробництва</em>
          </h1>
        </div>

        {/* Full-width rule */}
        <div className="w-full mt-10" style={{ height: '1px', background: 'rgba(245,237,216,0.1)' }} />

        {/* Bottom info row */}
        <div className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderBottom: '1px solid rgba(245,237,216,0.1)' }}>

          {/* Col 1 — Description + CTAs */}
          <div className="flex flex-col justify-between gap-8 py-8 md:pr-10"
            style={{ borderRight: '1px solid rgba(245,237,216,0.08)' }}>
            <p className="leading-relaxed"
              style={{ color: 'rgba(245,237,216,0.5)', fontSize: '0.88rem', maxWidth: '30ch' }}>
              Власна лісозаготівельна база та деревообробне виробництво. Брус, дошка, вагонка, палети оптом.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#quiz"
                className="inline-flex items-center gap-3 px-6 py-3 font-bold uppercase tracking-[0.12em] text-xs text-white hover:opacity-90 transition-opacity"
                style={{ background: 'var(--color-wood)' }}>
                Замовити <ArrowRight size={13} strokeWidth={3} />
              </a>
              <a href="/price-list.pdf" target="_blank" rel="noopener"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-medium border transition-colors hover:opacity-80"
                style={{ color: 'rgba(245,237,216,0.55)', borderColor: 'rgba(245,237,216,0.18)' }}>
                <FileText size={13} strokeWidth={1.5} />
                Прайс
              </a>
              <a href="tel:+380000000000"
                className="inline-flex items-center gap-2 py-3 text-xs font-medium transition-opacity hover:opacity-80"
                style={{ color: 'rgba(245,237,216,0.38)' }}>
                <Phone size={13} strokeWidth={1.5} />
                <span className="hidden sm:inline">+38 (000) 000-00-00</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Stats */}
          <div className="flex flex-col justify-between py-8 md:px-10 gap-0"
            style={{ borderRight: '1px solid rgba(245,237,216,0.08)' }}>
            {[
              { num: '500+',       label: 'м³ на складі' },
              { num: 'Без',         label: 'посередника — пряма ціна' },
              { num: 'По Україні', label: 'доставка власним транспортом' },
            ].map(({ num, label }, i) => (
              <div key={label} className="flex items-baseline gap-3"
                style={{ paddingTop: i > 0 ? '1rem' : 0, borderTop: i > 0 ? '1px solid rgba(245,237,216,0.07)' : 'none' }}>
                <span className="font-black tabular-nums"
                  style={{ color: '#F5EDD8', fontSize: 'clamp(1.5rem,2.4vw,2.2rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {num}
                </span>
                <span className="text-[10px] tracking-[0.08em] uppercase"
                  style={{ color: 'rgba(245,237,216,0.3)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Col 3 — Note */}
          <div className="flex flex-col justify-end py-8 md:pl-10">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2"
              style={{ color: 'rgba(245,237,216,0.18)' }}>
              Гарантія
            </p>
            <p className="leading-relaxed"
              style={{ color: 'rgba(245,237,216,0.35)', fontSize: '0.85rem', maxWidth: '24ch' }}>
              Власне виробництво — ціна без переплат і посередників.
            </p>
          </div>

        </div>


      </div>
    </section>
  )
}
