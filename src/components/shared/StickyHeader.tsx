'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'

interface StickyHeaderProps {
  accent: 'orange' | 'wood'
  ctaHref: string
  ctaLabel: string
}

export default function StickyHeader({ accent, ctaHref, ctaLabel }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const accentColor = accent === 'orange' ? 'var(--color-orange)' : 'var(--color-wood)'

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 h-12 md:h-14 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--color-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        fontFamily: 'var(--font-display)',
      }}
    >
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
        <Link href="/"
          className="flex items-center gap-1.5 transition-colors text-sm shrink-0"
          style={{ color: scrolled ? 'var(--color-text-muted)' : 'rgba(255,255,255,0.55)' }}>
          <ArrowLeft size={13} strokeWidth={1.5} />
          <span className="hidden sm:inline text-xs tracking-[0.08em] uppercase">Головна</span>
        </Link>
        <Link href="/" aria-label="ВБК Партнер" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="ВБК Партнер"
            className="h-7 md:h-9 w-auto select-none"
            style={{
              filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
            }} />
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
        {(accent === 'orange'
          ? [
              { href: '#expertise', label: 'Напрямки' },
              { href: '#portfolio', label: 'Об\u2019єкти' },
              { href: '#process',   label: 'Цінності' },
              { href: '#quiz',      label: 'Заявка' },
              { href: '/wood',      label: 'Пиломатеріали' },
            ]
          : [
              { href: '#expertise', label: 'Продукція' },
              { href: '#catalog',   label: 'Каталог' },
              { href: '#sectors',   label: 'Для кого' },
              { href: '#quiz',      label: 'Прайс' },
              { href: '/build',     label: 'Будівництво' },
            ]
        ).map(({ href, label }) => (
          <a key={href} href={href}
            className="text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:opacity-100"
            style={{ color: scrolled ? 'var(--color-text-sec)' : 'rgba(255,255,255,0.75)' }}>
            {label}
          </a>
        ))}
      </nav>

      <a href={ctaHref}
        className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] px-3 sm:px-4 md:px-5 py-2 md:py-2 transition-all duration-200 hover:opacity-85 shrink-0"
        style={{ background: accentColor, color: 'white' }}>
        <span className="hidden sm:inline">{ctaLabel}</span>
        <span className="sm:hidden">Зв&apos;язок</span>
      </a>
    </header>
  )
}
