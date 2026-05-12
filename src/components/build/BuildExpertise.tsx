const SERVICES = [
  {
    title: 'Нове будівництво',
    desc: 'Зводимо будівлі будь-якого типу під ключ. Від проєктування та монтажу конструкцій до оздоблення та інженерних систем.',
    photo: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Реконструкція',
    desc: 'Перепланування, розширення, зміна призначення приміщень. Підсилення несучих конструкцій, надбудова.',
    photo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Капітальний ремонт',
    desc: 'Комплексне оновлення будівлі: конструктив, оздоблення, заміна інженерних систем. Комерційні та промислові об\'єкти.',
    photo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Покрівельні та фасадні роботи',
    desc: 'Покрівля будь-якої складності. Утеплення та оздоблення фасадів: мокрий фасад, вентильований фасад, вагонка.',
    photo: 'https://images.unsplash.com/photo-1598359652793-ccd53b2d76f9?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Монтаж конструкцій',
    desc: 'Монтаж металевих і дерев\'яних конструкцій: каркаси, ферми, перекриття, стропильні системи.',
    photo: 'https://images.unsplash.com/photo-1565372196580-4a52a4a2e1e8?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Інженерні системи',
    desc: 'Електромонтаж, сантехніка, опалення, вентиляція та кондиціонування. Котельні під ключ.',
    photo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Внутрішнє оздоблення',
    desc: 'Чорнова та чистова обробка, перегородки, підлоги, монтаж вікон, дверей і воріт.',
    photo: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Твердопаливні котельні',
    desc: 'Будівництво та монтаж котелень для комерційних і промислових об\'єктів. Від проєкту до запуску.',
    photo: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=70',
  },
]

const OBJECTS = [
  'Офіси та ділові центри',
  'Склади та логістичні комплекси',
  'Виробничі цехи та промислові будівлі',
  'HoReCa — ресторани, кафе, готелі',
  'Рітейл — магазини, торгові об\'єкти',
  'Котельні та інженерна інфраструктура',
]

export default function BuildExpertise() {
  return (
    <section style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-14 md:pt-28 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-orange)' }}>Що ми робимо</p>
        <h2 className="font-bold text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Повний цикл будівельно-<br className="hidden sm:block"/>ремонтних робіт
        </h2>
      </div>

      {/* Photo cards grid — full width, no padding */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, desc, photo }, i) => (
          <div key={title} className="reveal group relative overflow-hidden cursor-default"
            style={{ transitionDelay: `${(i % 4) * 60}ms`, aspectRatio: '4/3' }}>
            {/* Photo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.55)' }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 transition-opacity duration-300"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(232,75,0,0.75)' }} />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="font-bold text-white text-lg leading-snug mb-2"
                style={{ letterSpacing: '-0.01em' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ color: 'rgba(255,255,255,0.9)' }}>
                {desc}
              </p>
            </div>
            {/* Step number */}
            <span className="absolute top-4 left-4 text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.4)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* Object types */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="md:w-56 shrink-0">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>З якими об'єктами</p>
            <h3 className="font-bold text-2xl md:text-3xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Працюємо
            </h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 flex-1">
            {OBJECTS.map((obj, i) => (
              <li key={obj} className="reveal flex items-start gap-3"
                style={{ transitionDelay: `${i * 50}ms` }}>
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5"
                  style={{ background: 'var(--color-orange)' }} />
                <span className="text-base font-medium"
                  style={{ color: 'var(--color-text-sec)' }}>
                  {obj}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
