'use client'

import { useState } from 'react'

type Category = 'all' | 'brus' | 'doshka' | 'palety' | 'reyka' | 'inshe'

const ITEMS = [
  { cat: 'brus',    name: 'Брус обрізний',         dims: '200×200, 150×150, 100×100 мм',   photo: '/images/photo/Брус.jpg' },
  { cat: 'brus',    name: 'Брус сухий струганий',  dims: 'усі розміри',                    photo: '/images/photo/Брус.jpg' },
  { cat: 'brus',    name: 'Брус свіжопил',         dims: 'усі розміри',                    photo: '/images/photo/Брус.jpg' },
  { cat: 'doshka',  name: 'Дошка обрізна',         dims: 'усі розміри',                    photo: '/images/photo/Дошка.jpg' },
  { cat: 'doshka',  name: 'Дошка стругана',        dims: 'усі розміри, камерна сушка',     photo: '/images/photo/Дошка.jpg' },
  { cat: 'doshka',  name: 'Терасна дошка',         dims: 'різні профілі',                  photo: '/images/photo/Дошка.jpg' },
  { cat: 'doshka',  name: 'Дошка для підлоги',     dims: '35 мм, 80–135 мм',               photo: '/images/photo/Дошка.jpg' },
  { cat: 'palety',  name: 'Палети EUR/EPAL',        dims: '1200×800 мм',                    photo: '/images/photo/піддони.jpg' },
  { cat: 'palety',  name: 'Піддони нестандартні',   dims: 'під ваш розмір і вагу',          photo: '/images/photo/піддони.jpg' },
  { cat: 'reyka',   name: 'Рейка дерев\u2019яна',  dims: 'стандартні перерізи',            photo: '/images/photo/Рейка.jpg' },
  { cat: 'reyka',   name: 'Рейка під замовлення',  dims: 'нестандартні перерізи',          photo: '/images/photo/Рейка.jpg' },
  { cat: 'inshe',   name: 'Євровагонка',           dims: 'усі розміри',                    photo: '/images/photo/Сухостій та інші.jpg' },
  { cat: 'inshe',   name: 'Імітація бруса',        dims: 'усі розміри',                    photo: '/images/photo/Сухостій та інші.jpg' },
  { cat: 'inshe',   name: 'Сухостій',              dims: 'усі розміри',                    photo: '/images/photo/Сухостій та інші.jpg' },
  { cat: 'inshe',   name: 'Фанера ламінована',     dims: 'Білорусь, Китай',                photo: '/images/photo/Сухостій та інші.jpg' },
  { cat: 'inshe',   name: 'Плити OSB',             dims: 'Україна',                        photo: '/images/photo/Сухостій та інші.jpg' },
  { cat: 'inshe',   name: 'Цегла будівельна',      dims: 'М100, М125, М150',               photo: '/images/photo/Сухостій та інші.jpg' },
]

const TABS: { key: Category; label: string }[] = [
  { key: 'all',    label: 'Все' },
  { key: 'brus',   label: 'Брус' },
  { key: 'doshka', label: 'Дошка' },
  { key: 'palety', label: 'Палети' },
  { key: 'reyka',  label: 'Рейка' },
  { key: 'inshe',  label: 'Сухостій та додаткові' },
]

export default function WoodCatalog() {
  const [active, setActive] = useState<Category>('all')
  const [modal, setModal] = useState<string | null>(null)
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'done'|'error'>('idle')

  const filtered = active === 'all' ? ITEMS : ITEMS.filter(i => i.cat === active)

  async function handleOrder(e: React.FormEvent) {
    e.preventDefault()
    if (!phone.trim()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, source: `catalog:${modal}`, answers: [] }),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

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
          {TABS.map(({ key, label }) => (
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
          {filtered.map(({ name, dims, photo }) => (
            <div key={name} className="flex flex-col border overflow-hidden group"
              style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
              <div className="h-36 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-bold text-base"
                  style={{ color: 'var(--color-text)', lineHeight: 1.3 }}>{name}</h3>
                <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{dims}</p>
                <button onClick={() => { setModal(name); setPhone(''); setStatus('idle') }}
                  className="mt-2 w-full py-2.5 text-xs font-semibold uppercase tracking-[0.1em] border transition-all hover:opacity-80"
                  style={{ borderColor: 'var(--color-wood)', color: 'var(--color-wood)' }}>
                  Уточнити наявність і ціну
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-center" style={{ color: 'var(--color-text-muted)' }}>
          Менеджер відповість і підбере умови поставки
        </p>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.5)' }}
          onClick={e => { if (e.target === e.currentTarget) setModal(null) }}>
          <div className="w-full max-w-sm p-8 border"
            style={{ background: 'var(--color-bg)', borderColor: 'var(--color-border)' }}>
            {status === 'done' ? (
              <div className="text-center py-4">
                <p className="font-bold text-xl mb-2" style={{ color: 'var(--color-text)' }}>Дякуємо!</p>
                <p className="text-sm" style={{ color: 'var(--color-text-sec)' }}>Менеджер зв&apos;яжеться найближчим часом.</p>
                <button onClick={() => setModal(null)} className="mt-6 text-sm underline" style={{ color: 'var(--color-wood)' }}>Закрити</button>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-xl mb-1" style={{ color: 'var(--color-text)' }}>Уточнити наявність</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--color-text-sec)' }}>{modal}</p>
                <form onSubmit={handleOrder} className="flex flex-col gap-4">
                  <input
                    type="tel"
                    placeholder="Ваш телефон"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
                    className="w-full px-4 py-3 border text-sm outline-none"
                    style={{ borderColor: 'var(--color-border)', color: 'var(--color-text)' }}
                  />
                  {status === 'error' && <p className="text-xs" style={{ color: '#dc2626' }}>Помилка. Спробуйте ще раз.</p>}
                  <button type="submit" disabled={status === 'sending'}
                    className="py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity disabled:opacity-60"
                    style={{ background: 'var(--color-wood)', color: '#fff' }}>
                    {status === 'sending' ? 'Відправляємо...' : 'Надіслати запит'}
                  </button>
                  <button type="button" onClick={() => setModal(null)}
                    className="text-xs underline" style={{ color: 'var(--color-text-muted)' }}>
                    Скасувати
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
