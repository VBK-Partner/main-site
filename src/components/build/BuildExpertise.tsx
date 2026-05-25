const SERVICES = [
  {
    title: 'Фасадні роботи',
    desc: 'Утеплення, штукатурка, оздоблення, фарбування — будь-який тип фасадної системи: мокрий фасад, вентильований, сендвіч-панелі. Для комерційних і промислових об\u2019єктів — матеріали класу зносостійкості.',
    photo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Покрівельні роботи',
    desc: 'Монтаж, ремонт і реконструкція покрівель будь-якої складності. Металочерепиця, профнастил, бітумна, натуральна і композитна черепиця. Кроквяна система, ізоляція, водостічні системи. Гарантія герметичності.',
    photo: 'https://images.unsplash.com/photo-1598359652793-ccd53b2d76f9?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Внутрішні та зовнішні ремонти',
    desc: 'Чорнові та чистові роботи на об\u2019єктах будь-якого призначення: комерційні площі, офіси, виробничі приміщення, склади. Підлога, перегородки, монтаж воріт, вікон, дверей.',
    photo: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Реконструкція виробничих об\u2019єктів',
    desc: 'Перепланування, розширення прольотів, надбудови, зміна призначення приміщення, підсилення несучих конструкцій. Ключова умова — без зупинки роботи підприємства, якщо це можливо.',
    photo: 'https://images.unsplash.com/photo-1565372196580-4a52a4a2e1e8?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Монтаж конструкцій',
    desc: 'Зведення каркасів, ферм, перекриттів та кроквяних систем — дерев\u2019яних та металевих. Використовуємо металопрокат перевірених заводів та дерев\u2019яні елементи власного виробництва.',
    photo: 'https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Твердопаливні котельні',
    desc: 'Будівництво, монтаж та введення в експлуатацію автономних котельних станцій для бізнесу. Повний цикл — від теплотехнічного проєкту до запуску. Енергетична незалежність об\u2019єкта.',
    photo: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=700&q=70',
  },
  {
    title: 'Нове будівництво під ключ',
    desc: 'Зводимо комерційні та виробничі об\u2019єкти: склади, цехи, офісні будівлі, логістичні центри. Від нульового циклу до введення в експлуатацію. Деревина для конструкцій — з власного виробництва.',
    photo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=700&q=70',
  },
]

const OBJECTS = [
  'Офіси та ділові центри',
  'Склади та логістичні комплекси',
  'Виробничі цехи та промислові будівлі',
  'HoReCa — ресторани, кафе, готелі',
  'Рітейл — магазини, ТЦ, мережеві точки',
  'Твердопаливні котельні',
]

export default function BuildExpertise() {
  return (
    <section id="expertise" style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>

      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-20 pb-14 md:pt-28 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-orange)' }}>Наші напрямки</p>
        <h2 className="font-bold text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Що ми робимо
        </h2>
      </div>

      {/* Photo cards — 7 items in a flexible grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ title, desc, photo }, i) => (
          <div key={title} className="reveal group relative overflow-hidden cursor-default"
            style={{ transitionDelay: `${(i % 4) * 60}ms`, aspectRatio: '4/3' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.55)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.78) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(232,75,0,0.75)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="font-bold text-white text-lg mb-2"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {title}
              </h3>
              <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.78rem', lineHeight: 1.55 }}>
                {desc}
              </p>
            </div>
            <span className="absolute top-4 left-4 text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </div>
        ))}
      </div>

      {/* Object types — same subtle bg, no white section */}
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-16 pb-20 md:pt-20 md:pb-28">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
          <div className="md:w-56 shrink-0">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>З якими об&apos;єктами</p>
            <h3 className="font-bold text-2xl md:text-3xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Працюємо
            </h3>
          </div>
          <div className="flex-1">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
              {OBJECTS.map((obj, i) => (
                <li key={obj} className="reveal flex items-start gap-3"
                  style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="mt-2 shrink-0 w-1.5 h-1.5"
                    style={{ background: 'var(--color-orange)' }} />
                  <span className="font-medium"
                    style={{ color: 'var(--color-text-sec)', fontSize: '1rem' }}>
                    {obj}
                  </span>
                </li>
              ))}
            </ul>
            <a href="#quiz"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-orange)' }}>
              Поговорити про об&apos;єкт →
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
