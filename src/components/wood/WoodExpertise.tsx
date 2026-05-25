const PRODUCTS = [
  {
    title: 'Брус будівельний та конструкційний',
    desc: 'Свіжопиляний та сухий струганий брус. Стандартні розміри: 200×200, 150×150, 100×100, 50×50, 40×40 мм. Можливе випилювання за вашими кресленнями. Правильна форма, мінімальні відхилення, висока несуча здатність.',
    photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Дошка обрізна і стругана',
    desc: 'Свіжопил і камерна сушка — всі основні типорозміри для підлоги, обшивки, обрешітки, риштування і каркасів. Чистий верстатний розпил. Однакова якість від першої дошки до останньої в партії.',
    photo: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Палети, піддони та дерев\u2019яна тара',
    desc: 'Виготовлення стандартних палет (EUR/EPAL), а також нестандартної тари під ваш розмір і вагу. Для логістики, складів, харчового та агросектору. Збірка за стандартами міцності, надійне кріплення.',
    photo: 'https://images.unsplash.com/photo-1600074169098-16a54d791d0d?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Рейка дерев\u2019яна',
    desc: 'Для обрешітки, декоративних елементів та інших видів робіт. Стандартні перерізи в наявності, нестандарт — під замовлення.',
    photo: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Сухостій та додаткові матеріали',
    desc: 'Євровагонка, терасна дошка, дошка для підлоги, імітація бруса, фанера ламінована, плити OSB, цегла будівельна.',
    photo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=70',
  },
]

const SECTORS = [
  {
    title: 'Будівельні компанії та підрядники',
    desc: 'Великі обсяги, документи для держтехнагляду, терміни під графік будівництва.',
  },
  {
    title: 'Покрівельники і фасадники',
    desc: 'Стропильна система, обрешітка, дошка під покрівельні роботи будь-якого типу.',
  },
  {
    title: 'Логістичні компанії та склади',
    desc: 'Палети і тара під специфічні навантаження, регулярні поставки за графіком.',
  },
  {
    title: 'Агробізнес',
    desc: 'Пакувальна тара для харчового виробництва, матеріал для об\u2019єктів агропромкомплексу.',
  },
  {
    title: 'Приватні забудовники',
    desc: 'Порахуємо обсяг по кресленню, підберемо матеріал під проєкт, доставимо.',
  },
]

export default function WoodExpertise() {
  return (
    <section style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-14 md:pt-28 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-wood)' }}>Асортимент</p>
        <h2 className="font-bold text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Наша продукція
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5">
        {PRODUCTS.map(({ title, desc, photo }, i) => (
          <div key={title} className="reveal group relative overflow-hidden"
            style={{ transitionDelay: `${(i % 5) * 60}ms`, aspectRatio: '3/4' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.5) saturate(0.8)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'rgba(122,78,45,0.78)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-widest mb-2"
                style={{ color: 'var(--color-wood-mid)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-bold text-white text-base mb-1"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {title}
              </h3>
              <p className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.75rem', lineHeight: 1.55 }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Рішення для вашої сфери */}
      <div style={{ background: '#120D08' }}>
        <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-20 md:py-28">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--color-wood-mid)' }}>Кому ми постачаємо</p>
          <h3 className="font-bold text-2xl md:text-3xl mb-4"
            style={{ color: '#F5EDD8', letterSpacing: '-0.02em' }}>
            Рішення для вашої сфери
          </h3>
          <p className="mb-12"
            style={{ color: 'rgba(245,237,216,0.55)', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '60ch' }}>
            Постійні клієнти отримують індивідуальні умови, домовленості під обсяг і ритм.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            {SECTORS.map(({ title, desc }, i) => (
              <div key={title} className="reveal flex flex-col gap-4 p-8 lg:p-10 group"
                style={{ background: '#120D08', transitionDelay: `${i * 80}ms` }}>
                <div className="w-8 h-px" style={{ background: 'var(--color-wood-mid)' }} />
                <h4 className="font-bold text-lg"
                  style={{ color: '#F5EDD8', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  {title}
                </h4>
                <p style={{ color: 'rgba(245,237,216,0.55)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {desc}
                </p>
                <div className="h-px w-0 group-hover:w-full transition-all duration-700 mt-auto"
                  style={{ background: 'var(--color-wood)' }} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#quiz"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-wood)' }}>
              Зв&apos;язатись і обговорити умови поставки →
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
