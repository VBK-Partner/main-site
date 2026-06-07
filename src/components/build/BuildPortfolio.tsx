const PROJECTS = [
  {
    title: 'Ремонтні роботи в БЦ',
    area: '1 200 м²',
    works: 'Виконали комплексний ремонт комерційних площ бізнес-центру, поєднавши капітальну підготовку та фінішне оздоблення. Демонтаж, заміна віконних систем та вхідних груп для енергоефективності. Повний цикл малярних робіт — від високоточного вирівнювання стін до брендованого фарбування. Чистий монтаж міжкімнатних дверей та фурнітури з суворим дотриманням дедлайнів.',
    photo: '/images/photo/Внутр%20ремонт%20роботи.png',
  },
  {
    title: 'Фасадні роботи в ТЦ',
    area: '3 500 м²',
    works: 'Реалізували масштабну модернізацію та зовнішнє оновлення торгового центру. Повний комплекс фасадних робіт: капітальний ремонт основи, надійна теплоізоляція, фінішне декоративне оздоблення. Повна заміна скління на енергоефективні вітражні системи, нові вхідні групи. Зносостійкі матеріали — преміальний вигляд та захист від негоди на роки.',
    photo: '/images/photo/Фасадні%20роботи.jpg',
  },
  {
    title: 'Реконструкція виробничого приміщення',
    area: '4 800 м²',
    works: 'Повна технічна модернізація промислового об\u2019єкта під сучасні потужності виробництва. Посилили несні конструкції, замінили промислові вікна на енергозберігаючі, встановили автоматизовані вхідні групи. Капітальний комплекс внутрішніх та фасадних малярних робіт із надміцних матеріалів. Об\u2019єкт здано в чітку відповідність до всіх будівельних норм та стандартів безпеки.',
    photo: '/images/photo/реконструкція.jpg',
  },
]

export default function BuildPortfolio() {
  return (
    <section id="portfolio" className="py-16 md:py-28"
      style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>Портфоліо</p>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Реалізовані об&apos;єкти
            </h2>
          </div>
          <a href="#quiz"
            className="text-sm font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            style={{ color: 'var(--color-orange)' }}>
            Обговорити ваш проєкт →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {PROJECTS.map(({ title, area, works, photo }, i) => (
            <div key={title} className="reveal group flex flex-col overflow-hidden"
              style={{
                transitionDelay: `${i * 80}ms`,
                border: '1px solid var(--color-border)',
                background: 'var(--color-bg)',
              }}>
              <div className="relative overflow-hidden h-44 md:h-56">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
                <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-xs font-bold tracking-[0.15em] uppercase px-2.5 py-1.5"
                  style={{ background: 'var(--color-orange)', color: 'white' }}>
                  {area}
                </span>
              </div>
              <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                <h3 className="font-bold text-base md:text-lg"
                  style={{ color: 'var(--color-text)', letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                  {title}
                </h3>
                <p style={{ color: 'var(--color-text-sec)', fontSize: '0.88rem', lineHeight: 1.65 }}>
                  {works}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-center" style={{ color: 'var(--color-text-muted)' }}>
          Детальні фото надаємо за запитом
        </p>

        <div className="mt-10 text-center">
          <a href="#quiz"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
            style={{ background: 'var(--color-orange)' }}>
            Обговорити проєкт →
          </a>
        </div>
      </div>
    </section>
  )
}
