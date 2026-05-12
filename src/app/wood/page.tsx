import type { Metadata } from 'next'
import StickyHeader from '@/components/shared/StickyHeader'
import WoodHero from '@/components/wood/WoodHero'
import WoodBento from '@/components/wood/WoodBento'
import WoodExpertise from '@/components/wood/WoodExpertise'
import WoodCatalog from '@/components/wood/WoodCatalog'
import WoodQuiz from '@/components/wood/WoodQuiz'
import MobileCtaBar from '@/components/shared/MobileCtaBar'

export const metadata: Metadata = {
  title: "Пиломатеріали від виробника — дошка, брус, рейка | VBK Partner",
  description:
    "Пиломатеріали від виробника без посередників. Дошка, брус, рейка. 500+ м³ на складі, чесна ціна, доставка по регіону.",
  openGraph: {
    title: "Пиломатеріали від виробника | VBK Partner",
    description: "Без посередників. 500+ м³ на складі. Стабільна якість.",
    url: "https://vbk-partner.com/wood",
  },
  alternates: { canonical: "https://vbk-partner.com/wood" },
}

export default function WoodPage() {
  return (
    <>
      <StickyHeader
        accent="wood"
        ctaHref="/price-list.pdf"
        ctaLabel="Завантажити прайс"
      />
      <main>
        <WoodHero />
        <WoodBento />
        <WoodExpertise />
        <WoodCatalog />
        <WoodQuiz />
        {/* Cross-promo → build */}
        <section style={{ background: 'var(--color-orange-light)', fontFamily: 'var(--font-display)' }}>
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-orange)' }}>Також від ВБК Партнер</p>
              <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>Будівельно-ремонтні роботи</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-sec)' }}>Повний цикл будівельно-ремонтних робіт на комерційних об'єктах.</p>
            </div>
            <a href="/build" className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-orange)', color: 'white' }}>
              Дізнатися про будівництво →
            </a>
          </div>
        </section>
      </main>
      <MobileCtaBar accent="wood" href="#quiz" label="Отримати прайс-лист" />
    </>
  )
}
