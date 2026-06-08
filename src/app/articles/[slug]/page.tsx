import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ARTICLES, getArticle } from '@/lib/articles'
import StickyHeader from '@/components/shared/StickyHeader'
import Footer from '@/components/shared/Footer'
import MobileCtaBar from '@/components/shared/MobileCtaBar'

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) return {}
  const url = `https://vbk-partner.com/articles/${article.slug}`
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      siteName: 'VBK Partner',
      locale: 'uk_UA',
      url,
      title: article.title,
      description: article.excerpt,
      images: [article.cover],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.cover],
    },
  }
}

export default async function ArticlePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const article = getArticle(slug)
  if (!article) notFound()

  const isWood = article.category === 'wood'
  const accent = isWood ? 'wood' : 'orange'
  const accentColor = isWood ? 'var(--color-wood)' : 'var(--color-orange)'
  const backHref = isWood ? '/wood#articles' : '/build#articles'
  const ctaHref = isWood ? '/wood#quiz' : '/build#quiz'
  const ctaLabel = isWood ? 'Замовити прайс' : 'Розрахувати вартість'

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: [`https://vbk-partner.com${article.cover}`],
    author: { '@type': 'Organization', name: 'VBK Partner' },
    publisher: {
      '@type': 'Organization',
      name: 'VBK Partner',
      url: 'https://vbk-partner.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://vbk-partner.com/articles/${article.slug}`,
    },
  }

  const related = ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== article.slug
  ).slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <StickyHeader accent={accent} ctaHref={ctaHref} ctaLabel={ctaLabel} />
      <main style={{ fontFamily: 'var(--font-display)', background: 'var(--color-bg)' }}>

        {/* Hero — full-bleed cover with overlay */}
        <section className="relative min-h-[55vh] md:min-h-[65vh] flex flex-col justify-end overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.15) 100%)',
              }}
            />
          </div>

          {/* Back link — top-left */}
          <div className="absolute top-0 left-0 right-0 pt-20 md:pt-24 px-5 sm:px-8 md:px-16 lg:px-24">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] hover:opacity-70 transition-opacity"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <ArrowLeft size={13} strokeWidth={2.5} />
              {isWood ? 'До пиломатеріалів' : 'До будівництва'}
            </Link>
          </div>

          {/* Title block */}
          <div className="relative px-5 sm:px-8 md:px-16 lg:px-24 pb-10 md:pb-14 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="inline-block px-2.5 py-1 text-[10px] font-bold tracking-[0.2em] uppercase"
                style={{ background: accentColor, color: 'white' }}
              >
                Стаття
              </span>
              <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>
                {article.readTime} читання
              </span>
            </div>
            <h1
              className="font-bold text-2xl sm:text-3xl md:text-5xl md:leading-[1.1]"
              style={{ color: 'white', letterSpacing: '-0.025em' }}
            >
              {article.title}
            </h1>
          </div>
        </section>

        {/* Body + Sidebar */}
        <section className="py-8 md:py-14">
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-start">

              {/* ── Main content ── */}
              <div className="flex-1 min-w-0">
                {/* Lead */}
                <p
                  className="text-base md:text-lg font-medium mb-8"
                  style={{
                    color: 'var(--color-text)',
                    lineHeight: 1.75,
                    background: 'var(--color-bg-subtle)',
                    padding: '1.25rem 1.5rem',
                    borderLeftWidth: '3px',
                    borderLeftStyle: 'solid',
                    borderLeftColor: accentColor,
                  }}
                >
                  {article.lead}
                </p>

                {article.body.map((b, i) => (
                  <div key={i} className="mb-8">
                    {b.h && (
                      <h2
                        className="font-bold text-xl sm:text-2xl mb-3 pb-3"
                        style={{
                          color: 'var(--color-text)',
                          letterSpacing: '-0.02em',
                          borderBottom: `1px solid var(--color-border)`,
                        }}
                      >
                        <span
                          className="inline-block w-1 h-5 mr-3 align-middle rounded-sm"
                          style={{ background: accentColor }}
                        />
                        {b.h}
                      </h2>
                    )}
                    {b.text && (
                      <p
                        className="text-base md:text-[17px]"
                        style={{ color: 'var(--color-text-sec)', lineHeight: 1.8 }}
                      >
                        {b.text}
                      </p>
                    )}
                    {b.bullets && (
                      <ul className="flex flex-col gap-3 mt-2">
                        {b.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            className="text-base md:text-[17px] flex gap-3"
                            style={{ color: 'var(--color-text-sec)', lineHeight: 1.7 }}
                          >
                            <span
                              className="shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full"
                              style={{ background: accentColor }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* ── Sidebar ── */}
              <aside className="w-full lg:w-80 lg:shrink-0 lg:sticky lg:top-24 flex flex-col gap-6">
                {/* CTA card */}
                <div
                  className="p-6 border"
                  style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-subtle)' }}
                >
                  <div
                    className="w-8 h-1 mb-4"
                    style={{ background: accentColor }}
                  />
                  <p className="font-bold text-base mb-2" style={{ color: 'var(--color-text)', letterSpacing: '-0.01em' }}>
                    {isWood ? 'Потрібен прайс або консультація?' : 'Готові обговорити ваш проект?'}
                  </p>
                  <p className="text-sm mb-5" style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                    {isWood
                      ? 'Менеджер підбере позиції і назве актуальну ціну.'
                      : 'Виїдемо на обʼєкт, прорахуємо кошторис, дамо фіксовану ціну.'}
                  </p>
                  <Link
                    href={ctaHref}
                    className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-[0.12em] transition-opacity hover:opacity-85"
                    style={{ background: accentColor, color: 'white' }}
                  >
                    {ctaLabel} →
                  </Link>
                </div>

                {/* Related in sidebar */}
                {related.length > 0 && (
                  <div
                    className="p-6 border"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg-subtle)' }}
                  >
                    <p className="text-xs font-bold tracking-[0.18em] uppercase mb-4" style={{ color: accentColor }}>
                      Читайте також
                    </p>
                    <div className="flex flex-col gap-4">
                      {related.map((a) => (
                        <Link
                          key={a.slug}
                          href={`/articles/${a.slug}`}
                          className="group flex gap-3 items-start"
                        >
                          <div className="w-16 h-12 shrink-0 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={a.cover}
                              alt={a.title}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className="text-sm font-semibold leading-snug group-hover:opacity-70 transition-opacity"
                              style={{ color: 'var(--color-text)' }}
                            >
                              {a.title}
                            </p>
                            <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>
                              {a.readTime}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>

            </div>
          </div>
        </section>

        <Footer />
      </main>
      <MobileCtaBar accent={accent} href={ctaHref} label={ctaLabel} />
    </>
  )
}
