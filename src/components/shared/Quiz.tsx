'use client'

import { useState } from 'react'
import { ArrowRight, Check, Phone } from 'lucide-react'

export interface QuizStep {
  question: string
  options: string[]
}

interface QuizProps {
  id?: string
  steps: QuizStep[]
  source: string
  accent: 'orange' | 'wood'
  theme?: 'light' | 'dark'
}

type State = 'idle' | 'submitting' | 'done' | 'error'

const MESSENGERS = ['Viber', 'Telegram', 'Дзвінок']

export default function Quiz({ id = 'quiz', steps, source, accent, theme = 'light' }: QuizProps) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>(Array(steps.length).fill(''))
  const [phone, setPhone] = useState('')
  const [messenger, setMessenger] = useState('')
  const [state, setState] = useState<State>('idle')
  const [hoveredOpt, setHoveredOpt] = useState<string | null>(null)

  const total = steps.length + 1
  const progress = Math.round((step / total) * 100)

  const isDark = theme === 'dark'

  const accentColor = accent === 'orange' ? 'var(--color-orange)' : 'var(--color-wood)'

  const textPrimary = isDark ? '#FFFFFF' : 'var(--color-text)'
  const textMuted   = isDark ? 'rgba(255,255,255,0.28)' : 'var(--color-text-muted)'
  const trackBg     = isDark ? 'rgba(255,255,255,0.08)' : 'var(--color-border)'
  const ruleLine    = isDark ? 'rgba(255,255,255,0.08)' : 'var(--color-border)'
  const inputBg     = isDark ? 'rgba(255,255,255,0.06)' : 'var(--color-bg)'
  const inputBorder = isDark ? 'rgba(255,255,255,0.14)' : 'var(--color-border-strong)'
  const messBg      = isDark ? 'rgba(255,255,255,0.04)' : 'var(--color-bg)'
  const selMessBg   = isDark
    ? (accent === 'orange' ? 'rgba(232,75,0,0.2)' : 'rgba(122,78,45,0.25)')
    : (accent === 'orange' ? 'var(--color-orange-light)' : 'var(--color-wood-light)')
  const textSec     = isDark ? 'rgba(255,255,255,0.45)' : 'var(--color-text-sec)'

  function selectOption(option: string) {
    const next = answers.map((a, i) => (i === step ? option : a))
    setAnswers(next)
    setTimeout(() => setStep((s) => s + 1), 260)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone || !messenger) return
    setState('submitting')
    const formattedAnswers = answers.map((a, i) => `${steps[i].question}: ${a}`)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, messenger, source, answers: formattedAnswers }),
      })
      setState(res.ok ? 'done' : 'error')
    } catch {
      setState('error')
    }
  }

  if (state === 'done') {
    return (
      <div id={id} className="py-12" style={{ fontFamily: 'var(--font-display)' }}>
        <div className="w-12 h-12 flex items-center justify-center mb-6"
          style={{ background: accentColor }}>
          <Check size={20} className="text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-bold mb-2" style={{ color: textPrimary }}>Заявку прийнято</h3>
        <p className="text-sm" style={{ color: textSec }}>Зв&apos;яжемося протягом 30 хвилин</p>
      </div>
    )
  }

  return (
    <div id={id} style={{ fontFamily: 'var(--font-display)' }}>

      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase" style={{ color: textMuted }}>
            {Math.min(step + 1, total)} / {total}
          </span>
          <span className="text-[11px] font-bold tabular-nums" style={{ color: accentColor }}>{progress}%</span>
        </div>
        <div className="h-[2px] w-full" style={{ background: trackBg }}>
          <div className="h-[2px] transition-all duration-500"
            style={{ width: `${progress}%`, background: accentColor }} />
        </div>
      </div>

      {/* Question */}
      {step < steps.length && (
        <div>
          <p className="font-bold mb-8"
            style={{ fontSize: 'clamp(1.05rem,1.6vw,1.25rem)', color: textPrimary, letterSpacing: '-0.01em' }}>
            {steps[step].question}
          </p>

          {/* Full-width editorial option rows */}
          <div className="flex flex-col" style={{ borderTop: `1px solid ${ruleLine}` }}>
            {steps[step].options.map((opt, idx) => {
              const isSelected = answers[step] === opt
              const isHovered  = hoveredOpt === opt
              const active = isSelected || isHovered

              return (
                <button
                  key={opt}
                  onClick={() => selectOption(opt)}
                  onMouseEnter={() => setHoveredOpt(opt)}
                  onMouseLeave={() => setHoveredOpt(null)}
                  className="relative flex items-center gap-5 py-4 px-0 text-left transition-all duration-200 overflow-hidden"
                  style={{
                    borderBottom: `1px solid ${ruleLine}`,
                    background: 'transparent',
                  }}>
                  {/* Animated left fill line */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] transition-transform duration-200 origin-top"
                    style={{
                      background: accentColor,
                      transform: active ? 'scaleY(1)' : 'scaleY(0)',
                    }} />

                  {/* Number */}
                  <span className="text-[11px] font-bold tabular-nums ml-5 w-5 flex-shrink-0 transition-colors duration-200"
                    style={{ color: active ? accentColor : textMuted }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Divider */}
                  <span className="w-px h-4 flex-shrink-0 transition-colors duration-200"
                    style={{ background: active ? accentColor : ruleLine }} />

                  {/* Label */}
                  <span className="flex-1 font-medium transition-colors duration-200"
                    style={{
                      fontSize: 'clamp(0.9rem,1.2vw,1rem)',
                      color: active ? textPrimary : textSec,
                    }}>
                    {opt}
                  </span>

                  {/* Right indicator */}
                  <span className="flex-shrink-0 mr-1 transition-all duration-200">
                    {isSelected
                      ? <Check size={15} strokeWidth={2.5} style={{ color: accentColor }} />
                      : <ArrowRight size={14} strokeWidth={1.5}
                          style={{ color: accentColor, opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateX(0)' : 'translateX(-6px)', transition: 'opacity 200ms, transform 200ms' }} />
                    }
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Phone step */}
      {step === steps.length && (
        <form onSubmit={handleSubmit}>
          <p className="font-bold mb-8"
            style={{ fontSize: 'clamp(1.05rem,1.6vw,1.25rem)', color: textPrimary, letterSpacing: '-0.01em' }}>
            Як з вами зв&apos;язатися?
          </p>
          <div className="flex flex-col gap-3 mb-6">
            <div className="relative">
              <Phone size={14} strokeWidth={1.5} className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: textMuted }} />
              <input type="tel" placeholder="+38 (0__) ___-__-__" value={phone}
                onChange={e => setPhone(e.target.value)} required
                className="w-full pl-11 pr-5 py-4 text-sm outline-none"
                style={{ border: `1px solid ${inputBorder}`, color: textPrimary, background: inputBg }} />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {MESSENGERS.map(m => {
                const isSel = messenger === m
                return (
                  <button key={m} type="button" onClick={() => setMessenger(m)}
                    className="py-3 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-200"
                    style={{
                      border: `1px solid ${isSel ? accentColor : inputBorder}`,
                      background: isSel ? selMessBg : messBg,
                      color: isSel ? textPrimary : textSec,
                    }}>{m}</button>
                )
              })}
            </div>
          </div>
          <button type="submit" disabled={state === 'submitting' || !phone || !messenger}
            className="w-full flex items-center justify-center gap-3 py-4 text-white font-bold uppercase tracking-[0.14em] text-sm transition-opacity disabled:opacity-40"
            style={{ background: accentColor }}>
            {state === 'submitting' ? 'Надсилаємо…' : 'Надіслати заявку'}
            {state !== 'submitting' && <ArrowRight size={15} strokeWidth={2.5} />}
          </button>
          {state === 'error' && (
            <p className="text-xs mt-3" style={{ color: '#fc6b6b' }}>Помилка. Спробуйте ще раз.</p>
          )}
        </form>
      )}
    </div>
  )
}
