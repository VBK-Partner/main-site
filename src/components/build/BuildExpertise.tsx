import Link from 'next/link'
import { BUILD_SERVICES } from '@/lib/build-services'

const SERVICES = BUILD_SERVICES.map((s) => ({
  slug: s.slug,
  title: s.cardTitle,
  desc: s.short,
  photo: s.photo,
}))

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
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-16 md:pt-28 pb-10 md:pb-16">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-orange)' }}>Наші напрямки</p>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
            Що ми робимо
        </h2>
      </div>

      {/* Photo cards — click → service detail page */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map(({ slug, title, desc, photo }, i) => (
          <Link key={slug} href={`/build/${slug}`} className="reveal group relative overflow-hidden block aspect-[16/10] sm:aspect-[4/3]"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.55)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.78) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(232,75,0,0.75)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
              <h3 className="font-bold text-white text-base md:text-lg mb-2"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {title}
              </h3>
              <p className="sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-300 sm:translate-y-2 sm:group-hover:translate-y-0"
                style={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.78rem', lineHeight: 1.55 }}>
                {desc}
              </p>
              <span className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white sm:opacity-0 sm:group-hover:opacity-100 sm:transition-opacity sm:duration-300">
                Дивитись послугу та ціни →
              </span>
            </div>
            <span className="absolute top-3 left-3 md:top-4 md:left-4 text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </Link>
        ))}
      </div>

      {/* Object types — same subtle bg, no white section */}
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto pt-12 md:pt-20 pb-16 md:pb-28">
        <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
          <div className="md:w-56 shrink-0">
            <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}>З якими об&apos;єктами</p>
            <h3 className="font-bold text-xl sm:text-2xl md:text-3xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
              Працюємо
            </h3>
          </div>
          <div className="flex-1 w-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 md:gap-y-4 mb-8 md:mb-10">
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
