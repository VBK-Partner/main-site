'use client'

import { useState } from 'react'

interface Props {
  source: string
}

export default function SubscribeForm({ source }: Props) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'done' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: `subscribe:${source}` }),
      })
      setStatus(res.ok ? 'done' : 'error')
      if (res.ok) setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="border p-6 md:p-8 mt-8" style={{ background: 'var(--color-bg-subtle)', borderColor: 'var(--color-border)' }}>
      <p className="font-bold text-lg mb-1" style={{ color: 'var(--color-text)' }}>
        Дізнавайтеся першим про акції та знижки
      </p>
      <p className="text-sm mb-4" style={{ color: 'var(--color-text-sec)' }}>
        Підпишіться на нашу e-mail розсилку
      </p>
      {status === 'done' ? (
        <p className="text-sm font-semibold" style={{ color: 'var(--color-wood)' }}>Дякуємо за підписку!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} required
            className="flex-1 px-4 py-3 border text-sm outline-none"
            style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)', color: 'var(--color-text)' }} />
          <button type="submit" disabled={status === 'sending'}
            className="px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity disabled:opacity-60"
            style={{ background: 'var(--color-wood)', color: '#fff' }}>
            {status === 'sending' ? 'Відправляємо...' : 'Підписатися'}
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-xs mt-2" style={{ color: '#dc2626' }}>Помилка. Спробуйте ще раз.</p>}
    </div>
  )
}
