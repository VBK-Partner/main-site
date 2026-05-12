import Quiz from '@/components/shared/Quiz'
import type { QuizStep } from '@/components/shared/Quiz'
import { Check } from 'lucide-react'

const STEPS: QuizStep[] = [
  {
    question: 'Що потрібно?',
    options: ['Вагонка / оздоблення', 'Брус', 'Дошка', 'Палети / піддони', 'Інше'],
  },
  {
    question: 'Обсяг?',
    options: ['До 5 м³', '5–20 м³', '20–100 м³', '100+ м³'],
  },
  {
    question: 'Доставка?',
    options: ['Потрібна', 'Самовивіз'],
  },
]

const TRUST = [
  'Є в наявності на складі',
  'Ціна без посередника',
  'Доставка по всій Україні',
]

export default function WoodQuiz() {
  return (
    <section id="quiz" style={{ background: '#0D0905', fontFamily: 'var(--font-display)' }}>

      {/* Top accent stripe */}
      <div className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, var(--color-wood-mid) 0%, transparent 60%)' }} />

      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-20 items-start">

          {/* Left — info */}
          <div className="md:sticky md:top-24">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--color-wood-mid)' }} />
              <span className="text-xs font-bold tracking-[0.28em] uppercase"
                style={{ color: 'var(--color-wood-mid)' }}>Отримати прайс</span>
            </div>

            {/* Headline */}
            <h2 className="font-black uppercase leading-[0.88] mb-6"
              style={{ color: '#F5EDD8', fontSize: 'clamp(2.4rem,4vw,4.2rem)', letterSpacing: '-0.03em' }}>
              Уточніть<br />наявність<br />і отримайте<br />
              <span style={{ color: 'var(--color-wood-mid)' }}>прайс</span>
            </h2>
            <p className="leading-relaxed mb-10"
              style={{ color: 'rgba(245,237,216,0.38)', fontSize: '0.9rem', maxWidth: '30ch' }}>
              Заповніть 3 кроки — менеджер уточнить наявність і умови поставки.
            </p>

            {/* Trust list */}
            <div className="flex flex-col gap-4">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(122,78,45,0.2)', border: '1px solid rgba(232,210,180,0.3)' }}>
                    <Check size={11} strokeWidth={3} style={{ color: 'var(--color-wood-mid)' }} />
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(245,237,216,0.48)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quiz */}
          <div className="pt-2">
            <Quiz steps={STEPS} source="wood" accent="wood" theme="dark" />
          </div>

        </div>
      </div>
    </section>
  )
}
