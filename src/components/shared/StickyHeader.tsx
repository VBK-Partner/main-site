'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Phone, ArrowLeft } from 'lucide-react'

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
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 h-14 transition-all duration-300"
      style={{
        background: scrolled ? 'var(--color-bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--color-border)' : 'none',
        fontFamily: 'var(--font-display)',
      }}
    >
      <div className="flex items-center gap-6">
        <Link href="/"
          className="flex items-center gap-1.5 transition-colors text-sm"
          style={{ color: scrolled ? 'var(--color-text-muted)' : 'rgba(255,255,255,0.55)' }}>
          <ArrowLeft size={13} strokeWidth={1.5} />
          <span className="hidden sm:inline text-xs tracking-[0.08em] uppercase">Головна</span>
        </Link>
        <span className="font-bold tracking-[0.12em] uppercase text-sm select-none"
          style={{ color: scrolled ? 'var(--color-text)' : 'white' }}>
          ВБК<span style={{ color: accentColor }}>·</span>ПАРТНЕР
        </span>
      </div>

      <a href={ctaHref}
        className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] px-5 py-2 transition-all duration-200 hover:opacity-85"
        style={{ background: accentColor, color: 'white' }}>
        <Phone size={12} strokeWidth={2} />
        <span className="hidden sm:inline">{ctaLabel}</span>
        <span className="sm:hidden">Зв&apos;язок</span>
      </a>
    </header>
  )
}
