const PROJECTS = [
  {
    type: 'Склад логістичний',
    area: '1 200 м²',
    city: 'Київська обл.',
    works: 'Металоконструкції, покрівля, фасад, внутрішнє оздоблення',
    photo: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80',
  },
  {
    type: 'Виробничий цех',
    area: '850 м²',
    city: 'Бориспіль',
    works: 'Нове будівництво під ключ, інженерні системи, котельня',
    photo: 'https://images.unsplash.com/photo-1565372196580-4a52a4a2e1e8?auto=format&fit=crop&w=900&q=80',
  },
  {
    type: 'Офісний центр',
    area: '620 м²',
    city: 'Київ',
    works: 'Реконструкція, фасад мокрий, внутрішнє оздоблення',
    photo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80',
  },
]

export default function BuildPortfolio() {
  return (
    <section className="py-20 md:py-28"
      style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>Портфоліо</p>
            <h2 className="font-bold text-3xl md:text-4xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Реалізовані об'єкти
            </h2>
          </div>
          <a href="#quiz"
            className="text-sm font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            style={{ color: 'var(--color-orange)' }}>
            Обговорити ваш проєкт →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map(({ type, area, city, works, photo }, i) => (
            <div key={type} className="reveal group flex flex-col overflow-hidden"
              style={{
                transitionDelay: `${i * 80}ms`,
                border: '1px solid var(--color-border)',
              }}>
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '220px' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt={type}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  style={{ transition: 'transform 0.7s ease' }}
                />
                <div className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)' }} />
                <span className="absolute bottom-4 left-4 text-xs font-bold tracking-[0.15em] uppercase px-2.5 py-1.5"
                  style={{ background: 'var(--color-orange)', color: 'white' }}>
                  {type}
                </span>
              </div>
              {/* Info */}
              <div className="p-6 flex flex-col gap-3 flex-1"
                style={{ background: 'var(--color-bg)' }}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-bold text-2xl" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
                    {area}
                  </span>
                  <span className="text-xs font-medium"
                    style={{ color: 'var(--color-text-muted)' }}>
                    {city}
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-sec)' }}>
                  {works}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
          Детальне портфоліо з фото — надаємо за запитом
        </p>
      </div>
    </section>
  )
}
