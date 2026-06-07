'use client'

import { useState } from 'react'

type Variant = 'price' | 'partnership'

interface Props {
  product: string
  variant: Variant
  open: boolean
  onClose: () => void
}

export default function ProductInquiryModal({ product, variant, open, onClose }: Props) {
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  if (!open) return null

  const isPartnership = variant === 'partnership'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone,
          name: isPartnership ? name : undefined,
          company: isPartnership ? company : undefined,
          source: `${isPartnership ? 'partnership' : 'product'}:${product}`,
        }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  function close() {
    setPhone(''); setName(''); setCompany(''); setStatus('idle')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      onClick={e => { if (e.target === e.currentTarget) close() }}>
      <div className="w-full max-w-sm p-6 md:p-8 border max-h-[calc(100vh-2rem)] overflow-y-auto"
        style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', fontFamily: 'var(--font-display)' }}>
        {status === 'done' ? (
          <div className="text-center py-4">
            <p className="font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>Дякуємо!</p>
            <p className="text-sm" style={{ color: 'var(--color-text-sec)' }}>Менеджер звʼяжеться найближчим часом.</p>
            <button onClick={close} className="mt-6 text-sm underline" style={{ color: 'var(--color-wood)' }}>Закрити</button>
          </div>
        ) : (
          <>
            <h3 className="font-bold text-xl mb-1" style={{ color: 'var(--color-text)' }}>
              {isPartnership ? 'Обговорити умови співпраці' : 'Уточнити наявність'}
            </h3>
            <p className="text-sm mb-6" style={{ color: 'var(--color-text-sec)' }}>{product}</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              {isPartnership && (
                <>
                  <input type="text" placeholder="Імʼя" value={name} onChange={e => setName(e.target.value)} required
                    className="w-full px-4 py-3 border text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }} />
                  <input type="text" placeholder="Компанія" value={company} onChange={e => setCompany(e.target.value)}
                    className="w-full px-4 py-3 border text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }} />
                </>
              )}
              <input type="tel" placeholder="Ваш телефон" value={phone} onChange={e => setPhone(e.target.value)} required
                className="w-full px-4 py-3 border text-sm outline-none"
                style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }} />
              {status === 'error' && <p className="text-xs" style={{ color: '#dc2626' }}>Помилка. Спробуйте ще раз.</p>}
              <button type="submit" disabled={status === 'sending'}
                className="mt-1 py-3.5 md:py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity disabled:opacity-60"
                style={{ background: 'var(--color-wood)', color: '#fff' }}>
                {status === 'sending' ? 'Відправляємо...' : 'Надіслати запит'}
              </button>
              <button type="button" onClick={close}
                className="text-xs underline" style={{ color: 'var(--color-text-muted)' }}>
                Скасувати
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
