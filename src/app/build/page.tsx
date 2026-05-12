import type { Metadata } from 'next'
import StickyHeader from '@/components/shared/StickyHeader'
import BuildHero from '@/components/build/BuildHero'
import BuildBento from '@/components/build/BuildBento'
import BuildProcess from '@/components/build/BuildProcess'
import BuildExpertise from '@/components/build/BuildExpertise'
import BuildPortfolio from '@/components/build/BuildPortfolio'
import BuildQuiz from '@/components/build/BuildQuiz'
import MobileCtaBar from '@/components/shared/MobileCtaBar'

export const metadata: Metadata = {
  title: 'Будівництво промислових об\'єктів під ключ | VBK Partner',
  description:
    'Будівництво ангарів, складів та виробничих об\'єктів під ключ. Власна спецтехніка, фіксована ціна, 10 років гарантії. Розрахуйте вартість онлайн.',
  openGraph: {
    title: 'Будівництво промислових об\'єктів під ключ | VBK Partner',
    description: 'Власна спецтехніка. Фіксована ціна. 10 років гарантії.',
    url: 'https://vbk-partner.com/build',
  },
  alternates: { canonical: 'https://vbk-partner.com/build' },
}

export default function BuildPage() {
  return (
    <>
      <StickyHeader
        accent="orange"
        ctaHref="#quiz"
        ctaLabel="Розрахувати вартість"
      />
      <main>
        <BuildHero />
        <BuildBento />
        <BuildProcess />
        <BuildExpertise />
        <BuildPortfolio />
        <BuildQuiz />
        {/* Cross-promo → wood */}
        <section style={{ background: 'var(--color-wood-light)', fontFamily: 'var(--font-display)' }}>
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-wood)' }}>Також від ВБК Партнер</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Постачаємо пиломатеріали оптом</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-sec)' }}>Брус, дошка, вагонка, палети від власного виробництва.</p>
            </div>
            <a href="/wood" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-wood)', color: 'white' }}>
              Перейти до пиломатеріалів →
            </a>
          </div>
        </section>
      </main>
      <MobileCtaBar accent="orange" href="#quiz" label="Розрахувати вартість" />
    </>
  )
}
