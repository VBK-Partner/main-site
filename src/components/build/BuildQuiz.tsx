import Quiz from '@/components/shared/Quiz'
import type { QuizStep } from '@/components/shared/Quiz'
import { Check } from 'lucide-react'

const STEPS: QuizStep[] = [
  {
    question: 'Тип об\'єкта?',
    options: ['Офіс / діловий центр', 'Склад / логістика', 'Виробничий цех', 'HoReCa', 'Рітейл', 'Котельня', 'Інше'],
  },
  {
    question: 'Що потрібно?',
    options: ['Нове будівництво', 'Реконструкція', 'Капітальний ремонт', 'Окремий вид робіт'],
  },
  {
    question: 'Орієнтовна площа?',
    options: ['До 300 м²', '300–1 000 м²', '1 000+ м²'],
  },
]

const TRUST = [
  'Безкоштовний виїзд на об\'єкт',
  'Кошторис протягом 24 годин',
  'Без зайвих зобов\'язань',
]

export default function BuildQuiz() {
  return (
    <section id="quiz" style={{ background: '#0F0F0F', fontFamily: 'var(--font-display)' }}>

      {/* Top accent stripe */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, var(--color-orange) 0%, transparent 60%)' }} />

      <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 py-20 md:py-28">
        <div className="grid md:grid-cols-[5fr_7fr] gap-12 md:gap-20 items-start">

          {/* Left — info */}
          <div className="md:sticky md:top-24">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px" style={{ background: 'var(--color-orange)' }} />
              <span className="text-xs font-bold tracking-[0.28em] uppercase"
                style={{ color: 'var(--color-orange)' }}>Безкоштовний виїзд</span>
            </div>

            {/* Headline */}
            <h2 className="font-black uppercase text-white leading-[0.88] mb-6"
              style={{ fontSize: 'clamp(2.4rem,4vw,4.2rem)', letterSpacing: '-0.03em' }}>
              Розкажіть<br />про ваш<br />
              <span style={{ color: 'var(--color-orange)' }}>об&apos;єкт</span>
            </h2>
            <p className="leading-relaxed mb-10"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem', maxWidth: '30ch' }}>
              Заповніть 3 кроки — виїзд, оцінка обсягів та складання кошторису повністю безкоштовно.
            </p>

            {/* Trust list */}
            <div className="flex flex-col gap-4">
              {TRUST.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(232,75,0,0.15)', border: '1px solid rgba(232,75,0,0.35)' }}>
                    <Check size={11} strokeWidth={3} style={{ color: 'var(--color-orange)' }} />
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — quiz */}
          <div className="pt-2">
            <Quiz steps={STEPS} source="build" accent="orange" theme="dark" />
          </div>

        </div>
      </div>
    </section>
  )
}
