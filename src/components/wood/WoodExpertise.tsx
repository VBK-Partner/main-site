const PRODUCTS = [
  {
    title: 'Брус будівельний та конструкційний',
    desc: 'Свіжопиляний та сухий струганий брус. Стандартні розміри: 200×200, 150×150, 100×100, 50×50, 40×40 мм.\nМожливе випилювання за вашими кресленнями. Правильна форма, мінімальні відхилення, висока несуча здатність.',
    photo: '/images/photo/Брус.jpg',
  },
  {
    title: 'Дошка обрізна і стругана',
    desc: 'Свіжопил і камерна сушка — всі основні типорозміри для підлоги, обшивки, обрешітки, риштування і каркасів. Чистий верстатний розпил. Однакова якість від першої дошки до останньої в партії.',
    photo: '/images/photo/Дошка.jpg',
  },
  {
    title: 'Палети, піддони та дерев\u2019яна тара',
    desc: 'Виготовлення стандартних палет (EUR/EPAL), а також нестандартної тари під ваш розмір і вагу. Для логістики, складів, харчового та агросектору. Збірка за стандартами міцності, надійне кріплення.',
    photo: '/images/photo/піддони.jpg',
  },
  {
    title: 'Рейка дерев\u2019яна',
    desc: 'Для обрешітки, декоративних елементів та інших видів робіт. Стандартні перерізи в наявності, нестандарт — під замовлення.',
    photo: '/images/photo/%D0%A0%D0%B5%D0%B9%D0%BA%D0%B0%20%D0%BE%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0.jpg',
  },
  {
    title: 'Сухостій та додаткові матеріали',
    desc: 'Євровагонка, терасна дошка, дошка для підлоги, дранка, фанера ламінована, плити OSB, цегла будівельна.',
    photo: '/images/photo/%D1%81%D1%83%D1%85%D0%BE%D1%81%D1%82%D1%96%D0%B9%20%D1%82%D0%B0%20%D1%96%D0%BD%20%D0%BC%D0%B0%D1%80%D0%B5%D1%82%D1%96%D0%B0%D0%BB%D0%B8.jpg',
  },
]

const SECTORS = [
  {
    title: 'Промислове будівництво та девелопмент',
    desc: 'Постачання великих обсягів бруса та опалубної дошки для забудовників і генпідрядників. Гарантуємо суворе дотримання графіків будівництва та повний пакет документів для технагляду.',
  },
  {
    title: 'Покрівельні та фасадні компанії',
    desc: 'Комплектація монтажних бригад каліброваними пиломатеріалами (крокви, брус, рейка, обрешітка). Забезпечуємо точну геометрію виробів та можливість виготовлення нестандартних розмірів під проєкт.',
  },
  {
    title: 'Логістичні компанії та складські комплекси',
    desc: 'Безперебійне постачання стандартних і посилених дерев\u2019яних палет, європіддонів та палетних бортів. Наша тара адаптована під специфічні навантаження та регулярну експлуатацію.',
  },
  {
    title: 'Агропромисловий комплекс (АПК)',
    desc: 'Виробництво екологічно чистих дерев\u2019яних контейнерів для зберігання й транспортування овочів та фруктів. Також постачаємо матеріали для зведення інфраструктурних об\u2019єктів (складів, ангарів).',
  },
  {
    title: 'Виробничі та експортні підприємства',
    desc: 'Виготовлення захисної дерев\u2019яної тари (ящиків, каркасів, кріпильних брусків) під індивідуальні габарити вантажу. Продукція відповідає міжнародним стандартам для внутрішніх та експортних відвантажень.',
  },
  {
    title: 'Приватні забудовники та роздріб',
    desc: 'Продаж дошки, бруса та рейки для індивідуального будівництва й ремонту. Безкоштовно розраховуємо обсяг матеріалів за вашими кресленнями та організовуємо адресну доставку.',
  },
]

export default function WoodExpertise() {
  return (
    <section id="expertise" style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-16 md:pt-28 pb-10 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-wood)' }}>Асортимент</p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Наша продукція
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {PRODUCTS.map(({ title, desc, photo }, i) => (
          <div key={title} className="reveal group relative overflow-hidden aspect-[16/10] sm:aspect-[3/4]"
            style={{ transitionDelay: `${(i % 5) * 60}ms` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.5) saturate(0.8)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
              style={{ background: 'rgba(122,78,45,0.78)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <span className="text-xs font-bold tracking-widest mb-2"
                style={{ color: 'var(--color-wood-mid)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-bold text-white text-base mb-1"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {title}
              </h3>
              <p className="sm:opacity-0 sm:group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0 sm:transition-all sm:duration-300"
                style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.75rem', lineHeight: 1.55, whiteSpace: 'pre-line' }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Рішення для вашої сфери */}
      <div id="sectors" style={{ background: '#120D08' }}>
        <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-16 md:py-28">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--color-wood-mid)' }}>Кому ми постачаємо</p>
          <h3 className="font-bold text-xl sm:text-2xl md:text-3xl mb-4"
            style={{ color: '#F5EDD8', letterSpacing: '-0.02em' }}>
            Рішення для вашої сфери
          </h3>
          <p className="mb-10 md:mb-12"
            style={{ color: 'rgba(245,237,216,0.55)', fontSize: '0.95rem', lineHeight: 1.65, maxWidth: '60ch' }}>
            Постійні клієнти отримують вигідні індивідуальні умови в залежності від обсягів.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            {SECTORS.map(({ title, desc }, i) => (
              <div key={title} className="reveal flex flex-col gap-3 md:gap-4 p-6 md:p-8 lg:p-10 group"
                style={{ background: '#120D08', transitionDelay: `${i * 80}ms` }}>
                <div className="w-8 h-px" style={{ background: 'var(--color-wood-mid)' }} />
                <h4 className="font-bold text-base md:text-lg"
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

          <div className="mt-10 md:mt-12 text-center">
            <a href="#quiz"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3 md:py-3.5 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-wood)' }}>
              Зв&apos;язатись і обговорити умови поставки →
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
