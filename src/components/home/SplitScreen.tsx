'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

const STATS = [
  { num: '200+',       label: 'успішних проектів' },
  { num: '10 000 м³',  label: 'деревини на рік' },
  { num: '10+',        label: 'років на ринку' },
]

const MESSENGERS = [
  {
    name: 'Viber',
    href: 'viber://chat?number=%2B380730161111',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M11.4 0c-1.6.1-4.6.4-6.3 2C3.9 3.3 3.4 5.2 3.3 7.5c0 2.4-.1 6.7 4 7.9v1.8s0 .7.5.9c.6.2.9-.4 1.4-1l.9-1c2.9.2 5.1-.4 5.4-.5.6-.2 3.7-.6 4.3-4.9.5-4.5-.3-7.3-1.7-8.6C17.3.4 14.4 0 12.7 0h-1.3zm.1 1.9h.1c1.4 0 4 .3 5.1 1.4 1.1 1 1.6 3.5 1.2 7.4-.4 3.6-2.6 3.9-3.1 4-.3.1-2.2.6-4.8.4-.8.8-1.4 1.4-1.7 1.7l-.4.4s-.1.1-.2.1c-.1 0-.1-.1-.1-.2v-2.1c-3.5-1-3.3-4.5-3.2-6.6.1-2 .6-3.5 1.5-4.4.9-.9 3-1.2 4.4-1.2l1.2.1z"/>
      </svg>
    ),
  },
  {
    name: 'Telegram',
    href: 'https://t.me/+380730161111',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/>
      </svg>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/380730161111',
    icon: (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
        <path d="M20.5 3.5C18.3 1.2 15.3 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.5 5.8 1.5 6.6 0 12-5.4 12-12 0-3.3-1.3-6.3-3.5-8.4zm-3 14.9c-.3.6-1.4 1.2-1.9 1.3-.5.1-1.1.1-1.8-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.7-4-4.8-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.2.5-.3.7-.3h.5c.2.1.4 0 .6.5.2.6.8 1.9.8 2 .1.2.1.3 0 .5-.1.2-.2.3-.3.5-.1.2-.3.4-.4.5-.1.1-.3.3-.1.6.2.3.8 1.2 1.6 2 1.1 1 2 1.3 2.3 1.4.3.1.4.1.6-.1.1-.2.6-.8.8-1 .2-.2.3-.2.6-.1.3.1 1.6.8 1.9.9.3.1.5.2.6.3 0 .1 0 .7-.2 1.3z"/>
      </svg>
    ),
  },
]

export default function SplitScreen() {
  const [hovered, setHovered] = useState<'build' | 'wood' | null>(null)
  const buildW = hovered === 'build' ? 60 : hovered === 'wood' ? 40 : 50
  const woodW  = 100 - buildW

  return (
    <div className="relative w-screen h-screen overflow-hidden"
      style={{ fontFamily: 'var(--font-display)' }}>

      {/* ─── Header ─── */}
      <header className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8 md:px-12 h-14 md:h-16"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), transparent)' }}>
        <a href="/" aria-label="ВБК Партнер" className="flex items-center shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="ВБК Партнер"
            className="h-8 md:h-11 w-auto select-none"
            style={{ filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.45))' }} />
        </a>
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a href="tel:+380730161111"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Phone size={14} strokeWidth={1.5} />
            <span className="hidden sm:inline">+38 (073) 016-11-11</span>
          </a>
          <div className="flex items-center gap-1.5 sm:gap-2 sm:pl-3 sm:ml-1" style={{ borderLeft: '1px solid rgba(255,255,255,0.18)' }}>
            {MESSENGERS.map(m => (
              <a key={m.name} href={m.href} target="_blank" rel="noopener noreferrer"
                aria-label={m.name}
                className="w-7 h-7 flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{ color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.10)' }}>
                {m.icon}
              </a>
            ))}
          </div>
        </div>
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
          <img src="/images/photo/Головна%20-%20будівництво.jpg" alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: `brightness(${hovered === 'build' ? 0.5 : hovered === 'wood' ? 0.18 : 0.38})`,
              transform: `scale(${hovered === 'build' ? 1.04 : 1})`,
              transition: 'transform 600ms ease, filter 600ms ease',
            }} />

          {/* Gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
          {/* Dim overlay when opposite is hovered */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'rgba(0,0,0,0.55)',
              opacity: hovered === 'wood' ? 1 : 0,
              transition: 'opacity 440ms ease',
            }} />
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

          {/* Content — fixed-width inner so it doesn't reflow when panel resizes */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-12 pt-20 pb-28 md:pb-20">
            <span className="text-xs font-bold tracking-[0.28em] uppercase"
              style={{ color: 'var(--color-orange)' }}>
              01 — Будівництво
            </span>

            <div style={{ width: 'min(560px, 100%)' }}>
              <h2 className="font-extrabold uppercase text-white mb-4 md:mb-6"
                style={{ fontSize: 'clamp(1.55rem,5vw,4.2rem)', lineHeight: 1.08, letterSpacing: '-0.02em' }}>
                Будівництво<br />та реконструкція<br />
                <span style={{ color: 'var(--color-orange)' }}>комерційних,<br />виробничих об&apos;єктів</span>
              </h2>
              <p className="text-white/55 mb-6 md:mb-8"
                style={{ fontSize: 'clamp(0.82rem,1vw,0.98rem)', lineHeight: 1.65, maxWidth: '40ch' }}>
                Комплексне нове будівництво, реконструкція та капітальний ремонт офісів, складів, виробництв, об&apos;єктів HoReCa, будівництво та монтаж твердопаливних котелень.
              </p>
              <div className="flex items-center gap-4">
                <span className="font-semibold uppercase tracking-[0.14em] text-sm text-white">
                  Обговорити проєкт
                </span>
                <span className="w-9 h-9 flex items-center justify-center border border-white/25"
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
          <img src="/images/photo/Головна%20-%20ліс%201.jpg" alt="" aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: `brightness(${hovered === 'wood' ? 0.5 : hovered === 'build' ? 0.18 : 0.38}) sepia(15%)`,
              transform: `scale(${hovered === 'wood' ? 1.04 : 1})`,
              transition: 'transform 600ms ease, filter 600ms ease',
            }} />

          {/* Gradient */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(200deg, transparent 30%, rgba(0,0,0,0.75) 100%)' }} />
          {/* Dim overlay when opposite is hovered */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'rgba(0,0,0,0.55)',
              opacity: hovered === 'build' ? 1 : 0,
              transition: 'opacity 440ms ease',
            }} />
          {/* Wood glow on hover */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 80% 85%, rgba(122,78,45,0.30) 0%, transparent 55%)',
              opacity: hovered === 'wood' ? 1 : 0,
              transition: 'opacity 500ms ease',
            }} />

          {/* Content — right-aligned, fixed-width inner */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 md:p-12 pt-20 pb-28 md:pb-20 items-end text-right">
            <span className="text-xs font-bold tracking-[0.28em] uppercase"
              style={{ color: 'var(--color-wood-mid)' }}>
              02 — Пиломатеріали
            </span>

            <div style={{ width: 'min(540px, 100%)' }}>
              <h2 className="font-extrabold uppercase mb-4 md:mb-6"
                style={{ fontSize: 'clamp(1.55rem,5vw,4.2rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#F5EDD8' }}>
                Пиломатеріали<br />
                <span style={{ color: 'var(--color-wood-mid)' }}>власного виробництва</span>
              </h2>
              <p className="mb-6 md:mb-8 ml-auto"
                style={{ fontSize: 'clamp(0.82rem,1vw,0.98rem)', lineHeight: 1.65, color: 'rgba(245,237,216,0.55)', maxWidth: '40ch' }}>
                Прямі поставки бруса, дошки, палет з виробництва. Опт для бізнесу.
              </p>
              <div className="flex items-center justify-end gap-4">
                <span className="font-semibold uppercase tracking-[0.14em] text-sm"
                  style={{ color: '#F5EDD8' }}>
                  Замовити прайс
                </span>
                <span className="w-9 h-9 flex items-center justify-center border"
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
        style={{ background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(14px)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {STATS.map(({ num, label }, i) => (
          <div key={label} className="flex-1 flex items-center justify-center gap-3 py-4"
            style={{ borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}>
            <span className="font-bold text-white text-lg" style={{ letterSpacing: '-0.02em' }}>
              {num}
            </span>
            <span className="text-xs tracking-[0.08em]" style={{ color: 'rgba(255,255,255,0.45)' }}>
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
