'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowLeft, Menu, X } from 'lucide-react'

interface StickyHeaderProps {
  accent: 'orange' | 'wood'
  ctaHref: string
  ctaLabel: string
}

export default function StickyHeader({ accent, ctaHref, ctaLabel }: StickyHeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu on outside click / scroll
  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true, once: true })
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  const accentColor = accent === 'orange' ? 'var(--color-orange)' : 'var(--color-wood)'

  const navLinks = accent === 'orange'
    ? [
        { href: '#expertise', label: 'Напрямки' },
        { href: '#portfolio',  label: 'Об\u2019єкти' },
        { href: '#process',    label: 'Цінності' },
        { href: '#quiz',       label: 'Заявка' },
        { href: '/wood',       label: 'Пиломатеріали' },
      ]
    : [
        { href: '#expertise', label: 'Продукція' },
        { href: '#catalog',   label: 'Каталог' },
        { href: '#sectors',   label: 'Для кого' },
        { href: '#quiz',      label: 'Прайс' },
        { href: '/build',     label: 'Будівництво' },
      ]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-10 h-12 md:h-14 transition-all duration-300"
        style={{
          background: 'var(--color-bg)',
          borderBottom: '1px solid var(--color-border)',
          fontFamily: 'var(--font-display)',
        }}
      >
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-0">
          <Link href="/"
            className="flex items-center gap-1.5 transition-colors text-sm shrink-0"
            style={{ color: 'var(--color-text-muted)' }}>
            <ArrowLeft size={13} strokeWidth={1.5} />
            <span className="hidden sm:inline text-xs tracking-[0.08em] uppercase">Головна</span>
          </Link>
          <Link href="/" aria-label="ВБК Партнер" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo.png" alt="ВБК Партнер"
              className="h-7 md:h-9 w-auto select-none"
              style={{ filter: 'none' }} />
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href}
              className="text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:opacity-100"
              style={{ color: 'var(--color-text-sec)' }}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <a href={ctaHref}
            className="flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.1em] px-3 sm:px-4 md:px-5 py-2 transition-all duration-200 hover:opacity-85"
            style={{ background: accentColor, color: 'white' }}>
            <span className="hidden sm:inline">{ctaLabel}</span>
            <span className="sm:hidden">Зв&apos;язок</span>
          </a>
          {/* Burger — mobile only */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex items-center justify-center w-9 h-9 transition-colors"
            style={{ color: 'var(--color-text)' }}
            aria-label="Меню"
          >
            {menuOpen ? <X size={20} strokeWidth={1.8} /> : <Menu size={20} strokeWidth={1.8} />}
          </button>
        </div>
      </header>

      {/* Mobile dropdown */}
      <div
        className="md:hidden fixed top-12 left-0 right-0 z-40 transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? '400px' : '0',
          background: 'var(--color-bg)',
          borderBottom: menuOpen ? '1px solid var(--color-border)' : 'none',
          fontFamily: 'var(--font-display)',
        }}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3.5 text-sm font-semibold uppercase tracking-[0.1em] border-b transition-opacity hover:opacity-70"
              style={{
                color: 'var(--color-text)',
                borderColor: 'var(--color-border)',
                borderBottom: i === navLinks.length - 1 ? 'none' : undefined,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full mr-3 shrink-0"
                style={{ background: accentColor }}
              />
              {label}
            </a>
          ))}
          <a
            href={ctaHref}
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-opacity hover:opacity-85"
            style={{ background: accentColor }}
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </>
  )
}
