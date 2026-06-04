'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PRODUCTS, CATEGORIES, type Category } from '@/lib/wood-products'

export default function WoodCatalog() {
  const [active, setActive] = useState<Category | 'all'>('all')

  const filtered = active === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === active)

  return (
    <section id="catalog" className="py-20 md:py-28" style={{ background: 'var(--color-bg-subtle)', fontFamily: 'var(--font-display)' }}>
      <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
          style={{ color: 'var(--color-wood)' }}>Каталог</p>
        <h2 className="font-bold text-3xl md:text-4xl mb-10"
          style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
          Наш асортимент продукції
        </h2>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map(({ key, label }) => (
            <button key={key} onClick={() => setActive(key)}
              className="px-5 py-2 text-sm font-semibold uppercase tracking-[0.08em] border transition-all"
              style={{
                background: active === key ? 'var(--color-wood)' : 'transparent',
                color:      active === key ? '#fff' : 'var(--color-text-sec)',
                borderColor: active === key ? 'var(--color-wood)' : 'var(--color-border)',
              }}>
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {filtered.map(({ slug, title, short, photo }) => (
            <Link key={slug} href={`/wood/${slug}`}
              className="flex flex-col border overflow-hidden group cursor-pointer transition-shadow hover:shadow-lg"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="h-36 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-2 p-5 flex-1">
                <h3 className="font-bold text-base"
                  style={{ color: 'var(--color-text)', lineHeight: 1.3 }}>{title}</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{short}</p>
                <span className="mt-auto pt-2 text-xs font-semibold uppercase tracking-[0.1em]"
                  style={{ color: 'var(--color-wood)' }}>
                  Детальніше →
                </span>
              </div>
            </Link>
          ))}
        </div>
        <p className="text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
          Натисніть на позицію — детальний опис, розміри та форма запиту
        </p>
      </div>
    </section>
  )
}
