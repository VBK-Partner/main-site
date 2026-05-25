const ITEMS = [
  {
    num: '01',
    accent: 'Один підрядник',
    title: 'Один підрядник — весь обсяг робіт',
    desc: 'Закриваємо «під ключ» усі етапи проєкту. Не потрібно шукати окремо проєктувальників, мулярів, електриків та оздоблювальників. Усуваємо перекладання відповідальності — за кінцевий результат відповідаємо ми.',
  },
  {
    num: '02',
    accent: 'Гнучкість',
    title: 'Власні матеріали або матеріали замовника',
    desc: 'Працюємо як зі своїми матеріалами, так і з давальницькою сировиною. Якщо матеріали вже закуплені — професійно змонтуємо. Якщо ні — надамо власні пиломатеріали та партнерські ціни на будматеріали.',
  },
  {
    num: '03',
    accent: 'Якість',
    title: 'Профільні бригади під кожен процес',
    desc: 'Загальнобудівельні, покрівельні, фасадні, оздоблювальні, інженерні — кожен напрямок виконує профільна бригада. Ви отримуєте професійну якість кожного вузла об\u2019єкта.',
  },
  {
    num: '04',
    accent: 'Прозорість',
    title: 'Прозорий старт без фінансових ризиків',
    desc: 'Безкоштовно виїжджаємо на об\u2019єкт, проводимо заміри та готуємо детальний кошторис без передоплат. Ви захищені від прихованих платежів і приймаєте рішення на основі точних розрахунків.',
  },
]

export default function BuildProcess() {
  return (
    <section id="process" style={{ background: 'var(--color-dark-2)', fontFamily: 'var(--font-display)' }}>
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-12 md:pt-28 md:pb-14
                      flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--color-orange)' }}>Як вирішуємо задачу клієнта</p>
          <h2 className="font-bold text-3xl md:text-4xl text-white"
            style={{ letterSpacing: '-0.02em' }}>
            Наші цінності
          </h2>
        </div>
        <a href="#quiz"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
          style={{ background: 'var(--color-orange)', color: 'white' }}>
          Обговорити проєкт →
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        {ITEMS.map(({ num, title, desc, accent }, i) => (
          <div key={num} className="reveal relative overflow-hidden group"
            style={{
              transitionDelay: `${i * 100}ms`,
              borderRight: i < ITEMS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
            }}>
            <span className="absolute right-2 top-0 font-black select-none pointer-events-none"
              style={{
                fontSize: 'clamp(5rem,11vw,10rem)',
                color: 'rgba(255,255,255,0.025)',
                letterSpacing: '-0.05em',
                lineHeight: 1,
              }}>
              {num}
            </span>

            <div className="relative p-8 lg:p-10 flex flex-col gap-5 min-h-[360px] justify-end">
              <span className="inline-block text-xs font-bold tracking-[0.18em] uppercase px-3 py-1 self-start mb-2"
                style={{ background: 'rgba(232,75,0,0.15)', color: 'var(--color-orange)' }}>
                {accent}
              </span>
              <span className="font-black text-5xl leading-none"
                style={{ color: 'var(--color-orange)', letterSpacing: '-0.04em', opacity: 0.85 }}>
                {num}
              </span>
              <h3 className="font-bold text-white text-lg"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                {desc}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                style={{ background: 'var(--color-orange)' }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
