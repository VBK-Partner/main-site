import { ArrowRight } from 'lucide-react'

export default function WoodHero() {
  return (
    <section className="relative min-h-screen flex flex-col"
      style={{ background: '#080503', fontFamily: 'var(--font-display)' }}>

      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/photo/Головна%20-%20ліс%201.jpg" alt="" aria-hidden="true"
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
      <div className="absolute bottom-0 left-0 w-full sm:w-[600px] h-[300px] max-w-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(122,78,45,0.18) 0%, transparent 65%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1
                      px-5 sm:px-8 md:px-14 lg:px-20 max-w-screen-xl mx-auto w-full
                      pt-20 md:pt-24 pb-0">

        {/* Category tag */}
        <div className="flex items-center gap-3 mb-auto pt-4">
          <span className="text-[10px] font-black tracking-[0.35em] uppercase"
            style={{ color: 'var(--color-wood-mid)' }}>Пиломатеріали</span>
          <div className="h-px w-10" style={{ background: 'var(--color-wood-mid)', opacity: 0.6 }} />
        </div>

        {/* Headline */}
        <div className="mt-6 mb-0">
          <h1 className="font-extrabold uppercase break-words"
            style={{
              color: '#F5EDD8',
              fontSize: 'clamp(1.85rem,6vw,6.6rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
            }}>
            Пиломатеріали<br /><em className="not-italic" style={{ color: 'var(--color-wood-mid)' }}>власного виробництва</em>
          </h1>
        </div>

        {/* Full-width rule */}
        <div className="w-full mt-10" style={{ height: '1px', background: 'rgba(245,237,216,0.1)' }} />

        {/* Bottom info row */}
        <div className="grid grid-cols-1 md:grid-cols-3"
          style={{ borderBottom: '1px solid rgba(245,237,216,0.1)' }}>

          {/* Col 1 — Description + CTAs */}
          <div className="flex flex-col justify-between gap-6 md:gap-8 py-6 md:py-8 md:pr-10"
            style={{ borderRight: '1px solid rgba(245,237,216,0.08)' }}>
            <p style={{ color: 'rgba(245,237,216,0.55)', fontSize: '0.92rem', lineHeight: 1.65 }} className="md:max-w-[40ch]">
              Брус, дошка, палети, вагонка — без переплат. Між лісом і вашим замовленням більше нікого немає.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#quiz"
                className="inline-flex items-center gap-3 px-6 py-3 font-bold uppercase tracking-[0.12em] text-xs text-white hover:opacity-90 transition-opacity"
                style={{ background: 'var(--color-wood)' }}>
                Замовити прайс <ArrowRight size={13} strokeWidth={3} />
              </a>
            </div>
          </div>

          {/* Col 2 — Stats */}
          <div className="flex flex-col justify-between py-8 md:px-10 gap-0"
            style={{ borderRight: '1px solid rgba(245,237,216,0.08)' }}>
            {[
              { num: '400+',  label: 'м³ постійно на складі' },
              { num: '100%',  label: 'відповідність ДСТУ' },
              { num: 'ОПТ', label: 'без посередника — пряма ціна' },
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

          {/* Col 3 — B2B */}
          <div className="flex flex-col justify-end py-8 md:pl-10">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'rgba(245,237,216,0.18)' }}>
              B2B-партнерство
            </p>
            <p className="font-bold mb-3"
              style={{ color: 'rgba(245,237,216,0.7)', fontSize: '0.88rem', lineHeight: 1.5 }}>
              Для бізнесу, якому потрібна стабільність
            </p>
            <p style={{ color: 'rgba(245,237,216,0.62)', fontSize: '0.84rem', lineHeight: 1.65 }}>
              Якщо ваш бізнес регулярно потребує деревини — ми готові стати вашим постійним постачальником на вигідних умовах.
            </p>
            <p className="mt-2" style={{ color: 'rgba(245,237,216,0.62)', fontSize: '0.84rem', lineHeight: 1.65 }}>
              Стабільні поставки важливіші за разово знижену ціну. Ми це розуміємо і пропонуємо партнерство, а не разову угоду.
            </p>
          </div>

        </div>


      </div>
    </section>
  )
}
