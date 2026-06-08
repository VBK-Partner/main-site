import Link from 'next/link'
import { Building2, Warehouse, Factory, UtensilsCrossed, ShoppingBag, Flame } from 'lucide-react'
import { BUILD_SERVICES } from '@/lib/build-services'

const OBJECTS = [
  { label: 'Офіси та ділові центри',               Icon: Building2       },
  { label: 'Склади та логістичні комплекси',        Icon: Warehouse        },
  { label: 'Виробничі цехи та промислові будівлі',  Icon: Factory          },
  { label: 'HoReCa — ресторани, кафе, готелі',      Icon: UtensilsCrossed  },
  { label: 'Рітейл — магазини, ТЦ, мережеві точки', Icon: ShoppingBag      },
  { label: 'Твердопаливні котельні',                Icon: Flame            },
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
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {BUILD_SERVICES.map(({ slug, cardTitle, photo }, i) => (
          <Link key={slug} href={`/build/${slug}`}
            className="reveal group relative overflow-hidden block aspect-[16/10] sm:aspect-[4/3]"
            style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photo} alt={cardTitle}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ filter: 'brightness(0.55)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.78) 100%)' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(232,75,0,0.75)' }} />

            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
              <h3 className="font-bold text-white text-sm md:text-base lg:text-lg mb-2"
                style={{ letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                {cardTitle}
              </h3>
              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Дивитись послугу та ціни →
              </span>
            </div>
            <span className="absolute top-3 left-3 md:top-4 md:left-4 text-[10px] md:text-xs font-bold tracking-widest"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
          </Link>
        ))}
      </div>

      {/* Object types section */}
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
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-6 mb-8 md:mb-10">
              {OBJECTS.map(({ label, Icon }, i) => (
                <li key={label} className="reveal flex items-center gap-4"
                  style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-sm"
                    style={{ background: 'var(--color-bg-subtle)', border: '1px solid rgba(0,0,0,0.08)' }}>
                    <Icon size={20} strokeWidth={1.5} style={{ color: 'var(--color-orange)' }} />
                  </span>
                  <span className="font-medium"
                    style={{ color: 'var(--color-text-sec)', fontSize: '0.95rem', lineHeight: 1.35 }}>
                    {label}
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
