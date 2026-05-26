import { ArrowRight, Phone } from 'lucide-react'

export default function BuildHero() {
  return (
    <section className="relative min-h-screen flex flex-col"
      style={{ background: '#0A0A0A', fontFamily: 'var(--font-display)' }}>

      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/images/photo/Головна%20-%20будівництво.jpg" alt="" aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: 'brightness(0.45)', objectPosition: 'center 35%' }} />

      {/* Gradient — dark left column, lighter right */}
      <div className="absolute inset-0" style={{
        background: `
          linear-gradient(105deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.3) 100%),
          linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.75) 100%)
        `,
      }} />
      {/* Orange low-glow */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 0% 100%, rgba(232,75,0,0.12) 0%, transparent 65%)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1
                      px-8 md:px-14 lg:px-20 max-w-screen-xl mx-auto w-full
                      pt-24 pb-0">

        {/* ── Category tag ── */}
        <div className="flex items-center gap-3 mb-auto pt-4">
          <span className="text-[10px] font-black tracking-[0.35em] uppercase"
            style={{ color: 'var(--color-orange)' }}>Будівництво</span>
          <div className="h-px w-10" style={{ background: 'var(--color-orange)', opacity: 0.6 }} />
        </div>

        {/* ── Headline ── */}
        <div className="mt-6 mb-0">
          <h1 className="font-extrabold uppercase text-white"
            style={{
              fontSize: 'clamp(2.6rem,6vw,6.6rem)',
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
            }}>
            Будівельно-<br />ремонтні <em className="not-italic" style={{ color: 'var(--color-orange)' }}>роботи</em>
          </h1>
        </div>

        {/* ── Full-width rule ── */}
        <div className="w-full mt-10" style={{ height: '1px', background: 'rgba(255,255,255,0.12)' }} />

        {/* ── Bottom info row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 mt-0 mb-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>

          {/* Col 1 — Description + CTAs */}
          <div className="flex flex-col justify-between gap-8 py-8 md:pr-10"
            style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.92rem', lineHeight: 1.65, maxWidth: '38ch' }}>
              Виконуємо будівельно-ремонтні роботи на комерційних і виробничих об&apos;єктах будь-якої складності. Від окремого виду робіт до повного циклу. Будівництво та монтаж твердопаливних котелень. Безкоштовний виїзд інженера на об&apos;єкт та прозорий кошторис до початку робіт — ви точно знаєте вартість і терміни ще до підписання договору.
            </p>
            <div className="flex flex-col items-start gap-3">
              <a href="#quiz"
                className="inline-flex items-center gap-3 px-6 py-3 text-white font-bold uppercase tracking-[0.12em] text-xs hover:opacity-90 transition-opacity"
                style={{ background: 'var(--color-orange)' }}>
                Залишити заявку <ArrowRight size={13} strokeWidth={3} />
              </a>
              <span className="text-[11px] tracking-[0.06em]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Виїзд на об&apos;єкт та кошторис — безкоштовно
              </span>
              <a href="tel:+380000000000"
                className="inline-flex items-center gap-2 mt-1 text-xs font-medium transition-colors hover:text-white"
                style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Phone size={13} strokeWidth={1.5} />
                +38 (000) 000-00-00
              </a>
            </div>
          </div>

          {/* Col 2 — Stats */}
          <div className="flex flex-col justify-between py-8 md:px-10 gap-0"
            style={{ borderRight: '1px solid rgba(255,255,255,0.1)' }}>
            {[
              { num: '200+',  label: "реалізованих об'єктів" },
              { num: '10+',   label: 'років на ринку' },
              { num: '0 грн', label: 'виїзд та кошторис' },
            ].map(({ num, label }, i) => (
              <div key={label} className="flex items-baseline gap-3"
                style={{ paddingTop: i > 0 ? '1rem' : 0, borderTop: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
                <span className="font-black text-white tabular-nums"
                  style={{ fontSize: 'clamp(1.5rem,2.4vw,2.2rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {num}
                </span>
                <span className="text-[10px] tracking-[0.08em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.3)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Col 3 — Free visit note */}
          <div className="flex flex-col justify-end py-8 md:pl-10">
            <p className="text-[10px] font-bold tracking-[0.22em] uppercase mb-2"
              style={{ color: 'rgba(255,255,255,0.18)' }}>
              Гарантія якості
            </p>
            <p className="leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', maxWidth: '24ch' }}>
              Виїзд на об&apos;єкт та підготовка кошторису — безкоштовно.
            </p>
          </div>

        </div>



      </div>
    </section>
  )
}
