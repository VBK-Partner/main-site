const PRODUCTS = [
  {
    title: 'Вагонка та оздоблювальні матеріали',
    desc: 'Відповідає європейським стандартам, якісна обробка, точна геометрія. Терасна дошка, дошка для підлоги, імітація бруса.',
    photo: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Брус',
    desc: 'Свіжопил та сухий строганий брус від виробника. Розміри: 200×200, 150×150, 100×100, 50×50, 40×40 мм та інші.',
    photo: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Дошка обрізна та строганна',
    desc: 'Свіжопил та суха строганна всіх розмірів. Для підлоги, обшивки стін, обрешітки та будівельних робіт.',
    photo: 'https://images.unsplash.com/photo-1474440692490-2e83ae13ba29?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Палети та піддони',
    desc: 'Стандарт EUR/EPAL та нестандартні під замовлення. Для логістики, складування, харчового та агросектору.',
    photo: 'https://images.unsplash.com/photo-1600074169098-16a54d791d0d?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Сухостій та додаткові матеріали',
    desc: 'Сухостій усіх розмірів. Також: фанера ламінована, плити OSB, цегла будівельна.',
    photo: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=700&q=70',
  },
]

const ADVANTAGES = [
  {
    title: 'Є на складі — відвантажуємо швидко',
    desc: 'Готова продукція в наявності або виготовлення за вашою специфікацією.',
    icon: '→',
  },
  {
    title: 'Від лісу до готового матеріалу',
    desc: 'Заготовляємо ліс, обробляємо на власному виробництві, реалізуємо напряму. Ціна без посередника.',
    icon: '→',
  },
  {
    title: 'Контроль якості на виробництві',
    desc: 'Якість матеріалу контролюється від розпилювання до відвантаження. Документи на продукцію — у комплекті.',
    icon: '→',
  },
]

export default function WoodExpertise() {
  return (
    <section style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-14 md:pt-28 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-wood)' }}>Асортимент</p>
        <h2 className="font-bold text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Наша продукція
        </h2>
      </div>

      {/* Photo cards — full width */}
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
              style={{ background: 'rgba(122,78,45,0.75)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <span className="text-xs font-bold tracking-widest mb-2"
                style={{ color: 'var(--color-wood-mid)' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-bold text-white text-base leading-snug mb-1"
                style={{ letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.9)' }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Advantages strip */}
      <div style={{ background: '#120D08' }}>
        <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-20 md:py-28">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
            style={{ color: 'var(--color-wood-mid)' }}>Чому замовляють у нас</p>
          <h3 className="font-bold text-2xl md:text-3xl mb-14"
            style={{ color: '#F5EDD8', letterSpacing: '-0.02em' }}>
            Переваги виробника
          </h3>
          <div className="grid md:grid-cols-3 gap-px" style={{ background: 'rgba(255,255,255,0.06)' }}>
            {ADVANTAGES.map(({ title, desc }, i) => (
              <div key={title} className="reveal flex flex-col gap-4 p-8 lg:p-10 group"
                style={{ background: '#120D08', transitionDelay: `${i * 80}ms` }}>
                <div className="w-8 h-px" style={{ background: 'var(--color-wood-mid)' }} />
                <h4 className="font-bold text-lg leading-snug"
                  style={{ color: '#F5EDD8', letterSpacing: '-0.01em' }}>
                  {title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,237,216,0.45)' }}>
                  {desc}
                </p>
                <div className="h-px w-0 group-hover:w-full transition-all duration-600"
                  style={{ background: 'var(--color-wood)' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
