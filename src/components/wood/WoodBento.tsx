import { ArrowRight } from 'lucide-react'

const PARAGRAPHS = [
  'ВБК Партнер виробляє пиломатеріали на власному деревообробному підприємстві — від сировини до готового матеріалу на вашому об\u2019єкті. Використовуємо сертифіковану деревину, контролюємо якість на кожному етапі обробки.',
  'Сьогодні наша пилорама виробляє понад 10 000 м³ деревини на рік та понад 400 м³ готової продукції на складі: стандартні позиції відвантажуємо в день замовлення, нестандартні розміри виготовляємо під специфікацію.',
  'Власний транспорт — ще одна перевага. Доставляємо по Україні — погоджуємо умови індивідуально залежно від обсягу і відстані.',
  'Ви купуєте деревину безпосередньо у виробника. Жодних торгових надбавок, жодних \u00abперекладань\u00bb відповідальності — ми самі обробляємо і реалізуємо матеріал. Це означає чесну ціну, стабільну якість і розуміння продукту, яке є лише у тих, хто його виробляє.',
]

const ADVANTAGES = [
  { num: '01', title: 'Ціна виробника',                        text: 'Жодної торгової надбавки між виробником і вами — ми є виробниками.' },
  { num: '02', title: 'Контроль від розпилу до відвантаження', text: 'Якість матеріалу перевіряється на виробництві, а не у вас на об\u2019єкті.' },
  { num: '03', title: 'Нестандартні розміри',                  text: 'Потрібен брус незвичного перерізу або дошка нетипової товщини? Виготовимо під вашу специфікацію.' },
  { num: '04', title: 'Документи в комплекті',                 text: 'Накладні, рахунки, договори — все офіційно. Зручно для бухгалтерії та податкової.' },
]

export default function WoodBento() {
  return (
    <section style={{ background: '#100C08', fontFamily: 'var(--font-display)' }}>
      <div className="mx-auto max-w-screen-xl px-5 sm:px-8 md:px-14 lg:px-20 py-16 md:py-28">

        {/* Top: headline + full-width text */}
        <div style={{ borderTop: '1px solid rgba(245,237,216,0.07)', paddingTop: '2.5rem' }}>

          {/* Label + headline */}
          <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-5"
            style={{ color: 'var(--color-wood-mid)' }}>Про виробництво</p>
          <h2 className="font-black uppercase leading-[0.95] mb-10 md:mb-14"
            style={{ color: '#F5EDD8', fontSize: 'clamp(1.6rem,5vw,4rem)', letterSpacing: '-0.03em' }}>
            Від лісу<br />до готового матеріалу
          </h2>

          {/* 4 paragraphs in 2 cols on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-x-16 mb-10 md:mb-14">
            {PARAGRAPHS.map((para, i) => (
              <p key={i} style={{ color: 'rgba(245,237,216,0.52)', fontSize: '0.92rem', lineHeight: 1.75 }}>
                {para}
              </p>
            ))}
          </div>

          <a href="#quiz"
            className="inline-flex items-center gap-2 mb-14 md:mb-20 text-xs font-bold uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
            style={{ color: 'var(--color-wood-mid)' }}>
            Замовити <ArrowRight size={12} strokeWidth={3} />
          </a>

        </div>

        {/* Bottom: 4 advantages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ borderTop: '1px solid rgba(245,237,216,0.07)' }}>
          {ADVANTAGES.map(({ num, title, text }, i) => (
            <div key={num} className="reveal flex flex-col py-8 px-0"
              style={{
                paddingLeft:  i % 2 === 1 ? '1.5rem' : '0',
                paddingRight: i % 2 === 0 ? '1.5rem' : '0',
                borderLeft: i % 2 === 1 ? '1px solid rgba(245,237,216,0.07)' : 'none',
                transitionDelay: `${i * 80}ms`,
              }}>
              <span className="font-black tabular-nums mb-4 block"
                style={{ color: 'var(--color-wood-mid)', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
                {num}
              </span>
              <h3 className="font-bold mb-3"
                style={{ color: '#F5EDD8', fontSize: '0.95rem', lineHeight: 1.4 }}>
                {title}
              </h3>
              <p style={{ color: 'rgba(245,237,216,0.45)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
