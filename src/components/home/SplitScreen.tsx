'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

const STATS = [
  { num: '200+',  label: "реалізованих об'єктів" },
  { num: '1000+', label: 'м³ деревини на рік' },
  { num: 'Київ',  label: 'та вся Україна' },
]

export default function SplitScreen() {
  const [hovered, setHovered] = useState<'build' | 'wood' | null>(null)
  const buildW = hovered === 'build' ? 60 : hovered === 'wood' ? 40 : 50
  const woodW  = 100 - buildW

  return (
    <div className="relative w-screen h-screen overflow-hidden"
      style={{ fontFamily: 'var(--font-display)' }}>

      {/* ─── Header ─── */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-12 h-16"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)' }}>
        <span className="text-white font-bold tracking-[0.12em] uppercase text-sm select-none">
          ВБК<span style={{ color: 'var(--color-orange)' }}>·</span>ПАРТНЕР
        </span>
        <a href="tel:+380000000000"
          className="flex items-center gap-2 text-sm font-medium transition-colors"
          style={{ color: 'rgba(255,255,255,0.7)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'white')}
          onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}>
          <Phone size={14} strokeWidth={1.5} />
          <span className="hidden sm:inline">+38 (000) 000-00-00</span>
        </a>
      </header>

      {/* ─── Panels ─── */}
      <div className="flex flex-col md:flex-row w-full h-full">

        {/* BUILD */}
        <Link href="/build"
          className="relative overflow-hidden block"
          style={{ flex: `0 0 ${buildW}%`, transition: 'flex 440ms cubic-bezier(0.4,0,0.2,1)' }}
          onMouseEnter={() => setHovered('build')}
          onMouseLeave={() => setHovered(null)}>

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/building-banner.png" alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: `brightness(${hovered === 'build' ? 0.5 : 0.38})`,
              transform: `scale(${hovered === 'build' ? 1.04 : 1})`,
              transition: 'transform 600ms ease, filter 600ms ease',
            }} />

          {/* Gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
          {/* Orange glow on hover */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 20% 85%, rgba(232,75,0,0.22) 0%, transparent 55%)',
              opacity: hovered === 'build' ? 1 : 0,
              transition: 'opacity 500ms ease',
            }} />

          {/* Vertical divider */}
          <div className="absolute top-0 right-0 bottom-0 w-px hidden md:block"
            style={{ background: 'rgba(255,255,255,0.1)' }} />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 pt-20 pb-24 md:pb-20">
            <span className="text-xs font-bold tracking-[0.28em] uppercase"
              style={{ color: 'var(--color-orange)' }}>
              01 — Будівництво
            </span>

            <div>
              <h2 className="font-black uppercase text-white leading-[0.9] mb-6"
                style={{ fontSize: 'clamp(2.4rem,4.2vw,5.2rem)', letterSpacing: '-0.025em' }}>
                Будівництво<br />та реконструкція<br />
                <span style={{ color: 'var(--color-orange)' }}>комерційних об'єктів</span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-8 max-w-xs"
                style={{ fontSize: 'clamp(0.8rem,1.05vw,0.95rem)' }}>
                Офіси, склади, виробництва,<br />котельні — під ключ.
              </p>
              <div className="flex items-center gap-4 group">
                <span className="font-semibold uppercase tracking-[0.14em] text-sm text-white">
                  Обговорити проєкт
                </span>
                <span className="w-9 h-9 flex items-center justify-center border border-white/25 transition-all duration-250"
                  style={{
                    background: hovered === 'build' ? 'var(--color-orange)' : 'transparent',
                    borderColor: hovered === 'build' ? 'var(--color-orange)' : 'rgba(255,255,255,0.25)',
                    transition: 'background 250ms, border-color 250ms',
                  }}>
                  <ArrowRight size={14} className="text-white" />
                </span>
              </div>
            </div>
          </div>
        </Link>

        {/* WOOD */}
        <Link href="/wood"
          className="relative overflow-hidden block"
          style={{ flex: `0 0 ${woodW}%`, transition: 'flex 440ms cubic-bezier(0.4,0,0.2,1)' }}
          onMouseEnter={() => setHovered('wood')}
          onMouseLeave={() => setHovered(null)}>

          {/* Photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wood-banner.png" alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: `brightness(${hovered === 'wood' ? 0.5 : 0.38}) sepia(15%)`,
              transform: `scale(${hovered === 'wood' ? 1.04 : 1})`,
              transition: 'transform 600ms ease, filter 600ms ease',
            }} />

          {/* Gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(200deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
          {/* Wood glow on hover */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 85%, rgba(122,78,45,0.30) 0%, transparent 55%)',
              opacity: hovered === 'wood' ? 1 : 0,
              transition: 'opacity 500ms ease',
            }} />

          {/* Content — right-aligned */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 pt-20 pb-24 md:pb-20
                          items-end text-right">
            <span className="text-xs font-bold tracking-[0.28em] uppercase"
              style={{ color: 'var(--color-wood-mid)' }}>
              02 — Пиломатеріали
            </span>

            <div>
              <h2 className="font-black uppercase leading-[0.9] mb-6"
                style={{ fontSize: 'clamp(2.4rem,4.2vw,5.2rem)', letterSpacing: '-0.025em', color: '#F5EDD8' }}>
                Пиломатеріали<br />власного<br />
                <span style={{ color: 'var(--color-wood-mid)' }}>виробництва</span>
              </h2>
              <p className="leading-relaxed mb-8 max-w-xs ml-auto"
                style={{ fontSize: 'clamp(0.8rem,1.05vw,0.95rem)', color: 'rgba(245,237,216,0.5)' }}>
                Брус, дошка, вагонка, палети —<br />оптом для бізнесу.
              </p>
              <div className="flex items-center justify-end gap-4">
                <span className="font-semibold uppercase tracking-[0.14em] text-sm"
                  style={{ color: '#F5EDD8' }}>
                  Замовити прайс
                </span>
                <span className="w-9 h-9 flex items-center justify-center border transition-all duration-250"
                  style={{
                    background: hovered === 'wood' ? 'var(--color-wood)' : 'transparent',
                    borderColor: hovered === 'wood' ? 'var(--color-wood)' : 'rgba(245,237,216,0.25)',
                    transition: 'background 250ms, border-color 250ms',
                  }}>
                  <ArrowRight size={14} style={{ color: '#F5EDD8' }} />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ─── Stats bar ─── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 hidden md:flex"
        style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(14px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {STATS.map(({ num, label }, i) => (
          <div key={label} className="flex-1 flex items-center justify-center gap-3 py-4"
            style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <span className="font-bold text-white text-lg" style={{ letterSpacing: '-0.02em' }}>
              {num}
            </span>
            <span className="text-xs tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.38)' }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile bottom nav hint */}
      <div className="absolute bottom-0 left-0 right-0 z-20 md:hidden flex flex-col"
        style={{ background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(14px)' }}>
        <Link href="/build"
          className="flex items-center justify-between px-6 py-4 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <span className="text-white font-semibold text-sm tracking-wide">Будівництво</span>
          <ArrowRight size={14} style={{ color: 'var(--color-orange)' }} />
        </Link>
        <Link href="/wood" className="flex items-center justify-between px-6 py-4">
          <span className="font-semibold text-sm tracking-wide" style={{ color: '#F5EDD8' }}>Пиломатеріали</span>
          <ArrowRight size={14} style={{ color: 'var(--color-wood-mid)' }} />
        </Link>
      </div>

    </div>
  )
}
