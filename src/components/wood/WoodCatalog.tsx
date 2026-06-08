'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { PRODUCTS, CATEGORIES, type Category } from '@/lib/wood-products'

const CAT_LABELS: Record<string, string> = {
  brus:    'Брус',
  brusok:  'Брусок',
  doshka:  'Дошка',
  reyka:   'Рейка',
  palety:  'Палети',
  pelety:  'Пелети',
  inshe:   'Інше',
}

export default function WoodCatalog() {
  const [active, setActive] = useState<Category | 'all'>('all')

  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active)

  return (
    <section id="catalog" style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>
      <div className="px-5 sm:px-8 md:px-14 lg:px-20 max-w-screen-xl mx-auto py-16 md:py-28">

        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="text-[10px] font-bold tracking-[0.32em] uppercase mb-4"
            style={{ color: 'var(--color-wood)' }}>Асортимент</p>
          <h2 className="font-black uppercase leading-[0.95]"
            style={{ color: 'var(--color-text)', fontSize: 'clamp(1.6rem,5vw,3.6rem)', letterSpacing: '-0.03em' }}>
            Каталог продукції
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

          {/* Sidebar */}
          <aside className="lg:w-52 shrink-0">
            {/* Mobile: horizontal scroll tabs */}
            <div className="flex lg:hidden gap-2 overflow-x-auto pb-1 -mx-1 px-1">
              {CATEGORIES.map(({ key, label }) => (
                <button key={key} onClick={() => setActive(key)}
                  className="shrink-0 px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] border transition-all whitespace-nowrap"
                  style={{
                    background:  active === key ? 'var(--color-wood)' : 'transparent',
                    color:       active === key ? '#fff' : 'var(--color-text-sec)',
                    borderColor: active === key ? 'var(--color-wood)' : 'var(--color-border)',

                  }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Desktop: vertical sticky list */}
            <nav className="hidden lg:flex flex-col sticky top-24">
              <p className="text-[9px] font-bold tracking-[0.25em] uppercase mb-4"
                style={{ color: 'var(--color-text-muted)' }}>Категорії</p>
              {CATEGORIES.map(({ key, label }) => {
                const count = key === 'all' ? PRODUCTS.length : PRODUCTS.filter(p => p.cat === key).length
                const isActive = active === key
                return (
                  <button key={key} onClick={() => setActive(key)}
                    className="flex items-center justify-between py-3 text-left text-sm font-medium transition-all border-b cursor-pointer"
                    style={{
                      color:       isActive ? 'var(--color-text)' : 'var(--color-text-sec)',
                      borderColor: 'var(--color-border)',

                      paddingLeft: isActive ? '0.75rem' : '0',
                      borderLeft:  isActive ? '2px solid var(--color-wood)' : '2px solid transparent',
                    }}>
                    <span>{label}</span>
                    <span className="text-[10px] font-bold tabular-nums"
                      style={{ color: 'var(--color-text-muted)' }}>
                      {count}
                    </span>
                  </button>
                )
              })}

              <div className="mt-8 p-4" style={{ background: 'rgba(122,78,45,0.07)', border: '1px solid rgba(122,78,45,0.18)' }}>
                <p className="text-xs font-bold mb-2" style={{ color: 'var(--color-wood)' }}>
                  Потрібний нестандартний розмір?
                </p>
                <p className="text-xs mb-3" style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                  Виготовимо під вашу специфікацію
                </p>
                <a href="#quiz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-wood)' }}>
                  Запит <ArrowRight size={10} strokeWidth={3} />
                </a>
              </div>
            </nav>
          </aside>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-5 md:mb-6">
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                {filtered.length} позиц{filtered.length === 1 ? 'ія' : filtered.length < 5 ? 'ії' : 'ій'}
              </p>
              <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                Натисніть — деталі та ціни
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px"
              style={{ background: 'var(--color-border)' }}>
              {filtered.map(({ slug, title, short, photo, cat, priceMeta }) => (
                <Link key={slug} href={`/wood/${slug}`}
                  className="group flex flex-col overflow-hidden transition-all duration-300"
                  style={{ background: 'var(--color-bg-subtle)' }}>

                  {/* Photo */}
                  <div className="relative overflow-hidden"
                    style={{ aspectRatio: '4/3' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={photo} alt={title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                      style={{ filter: 'brightness(0.75) saturate(0.85)' }}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'rgba(122,78,45,0.25)' }} />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-[0.2em] px-2 py-1"
                      style={{ background: 'rgba(8,5,3,0.6)', color: '#F5EDD8' }}>
                      {CAT_LABELS[cat] ?? cat}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4 md:p-5"
                    style={{ borderTop: '1px solid var(--color-border)' }}>
                    <h3 className="font-bold text-sm md:text-base mb-1.5"
                      style={{ color: 'var(--color-text)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                      {title}
                    </h3>
                    <p className="text-xs mb-3 hidden sm:block"
                      style={{ color: 'var(--color-text)', lineHeight: 1.55, opacity: 0.6 }}>
                      {short}
                    </p>

                    <div className="mt-auto flex items-end justify-between gap-2">
                      {priceMeta && (
                        <span className="text-[10px]"
                          style={{ color: 'var(--color-text-sec)' }}>
                          {priceMeta}
                        </span>
                      )}
                      <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.15em] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: 'var(--color-wood)', whiteSpace: 'nowrap' }}>
                        Детальніше <ArrowRight size={9} strokeWidth={3} />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

