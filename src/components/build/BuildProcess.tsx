const ITEMS = [
  {
    num: '01',
    title: 'Матеріали власні або замовника',
    desc: 'Виконання робіт можливе як із використанням ТМЦ компанії, так і на базі матеріалів замовника.',
    accent: 'Гнучкість',
  },
  {
    num: '02',
    title: 'Профільні бригади під кожен вид робіт',
    desc: 'Загальнобудівельні, покрівельні, фасадні, оздоблювальні, інженерні — кожен напрямок виконує профільна бригада.',
    accent: 'Якість',
  },
  {
    num: '03',
    title: 'Безкоштовний виїзд і кошторис',
    desc: 'Виїжджаємо на об\'єкт, оцінюємо обсяги та готуємо кошторис під конкретне завдання. Без попередньої оплати.',
    accent: 'Прозорість',
  },
]

export default function BuildProcess() {
  return (
    <section style={{ background: 'var(--color-dark-2)', fontFamily: 'var(--font-display)' }}>

      {/* Header strip */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-12 md:pt-28 md:pb-14
                      flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--color-orange)' }}>Як вирішуємо задачу</p>
          <h2 className="font-bold text-3xl md:text-4xl text-white"
            style={{ letterSpacing: '-0.02em' }}>
            Чому обирають ВБК Партнер
          </h2>
        </div>
        <a href="#quiz"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
          style={{ background: 'var(--color-orange)', color: 'white' }}>
          Залишити заявку →
        </a>
      </div>

      {/* 3 columns full-width */}
      <div className="grid md:grid-cols-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {ITEMS.map(({ num, title, desc, accent }, i) => (
          <div key={num} className="reveal relative overflow-hidden group"
            style={{
              transitionDelay: `${i * 100}ms`,
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
            {/* Background number */}
            <span className="absolute right-0 top-0 font-black select-none pointer-events-none leading-none"
              style={{
                fontSize: 'clamp(6rem,14vw,12rem)',
                color: 'rgba(255,255,255,0.025)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
              }}>
              {num}
            </span>

            <div className="relative p-10 lg:p-14 flex flex-col gap-5 min-h-[320px] justify-end">
              {/* Accent tag */}
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 self-start mb-2"
                style={{ background: 'rgba(232,75,0,0.15)', color: 'var(--color-orange)' }}>
                {accent}
              </span>
              {/* Step number */}
              <span className="font-black text-6xl leading-none"
                style={{ color: 'var(--color-orange)', letterSpacing: '-0.04em', opacity: 0.85 }}>
                {num}
              </span>
              <h3 className="font-bold text-white text-xl leading-snug"
                style={{ letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
                {desc}
              </p>
              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: 'var(--color-orange)' }} />
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
