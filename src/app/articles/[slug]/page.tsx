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

        {/* Hero */}
        <section className="pt-20 md:pt-28 pb-8 md:pb-10" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
            <Link
              href={backHref}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] mb-6 hover:opacity-70 transition-opacity"
              style={{ color: accentColor }}
            >
              <ArrowLeft size={14} strokeWidth={2} />
              {isWood ? 'До пиломатеріалів' : 'До будівництва'}
            </Link>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: accentColor }}
            >
              Стаття · {article.readTime}
            </p>
            <h1
              className="font-bold text-2xl sm:text-3xl md:text-5xl mb-4 md:mb-5"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              {article.title}
            </h1>
            <p
              className="text-base md:text-lg"
              style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}
            >
              {article.lead}
            </p>
          </div>
        </section>

        {/* Cover */}
        <section className="py-6 md:py-10">
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-4xl mx-auto">
            <div
              className="aspect-[16/9] overflow-hidden border"
              style={{ borderColor: 'var(--color-border)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="pb-14 md:pb-20">
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
            {article.body.map((b, i) => (
              <div key={i} className="mb-8">
                {b.h && (
                  <h2
                    className="font-bold text-lg sm:text-xl md:text-2xl mb-3"
                    style={{ color: 'var(--color-text)', letterSpacing: '-0.01em' }}
                  >
                    {b.h}
                  </h2>
                )}
                {b.text && (
                  <p
                    className="text-base mb-3"
                    style={{ color: 'var(--color-text-sec)', lineHeight: 1.7 }}
                  >
                    {b.text}
                  </p>
                )}
                {b.bullets && (
                  <ul className="flex flex-col gap-2 pl-2 sm:pl-4">
                    {b.bullets.map((bullet, bi) => (
                      <li
                        key={bi}
                        className="text-base relative pl-4"
                        style={{ color: 'var(--color-text-sec)', lineHeight: 1.65 }}
                      >
                        <span
                          className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full"
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
        </section>

        {/* CTA */}
        <section style={{ background: isWood ? 'var(--color-wood-light)' : 'var(--color-orange-light)' }}>
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3
                className="text-lg sm:text-xl md:text-2xl font-bold mb-2"
                style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
              >
                {isWood ? 'Потрібен прайс або консультація?' : 'Готові обговорити ваш проект?'}
              </h3>
              <p className="text-sm" style={{ color: 'var(--color-text-sec)' }}>
                {isWood
                  ? 'Менеджер допоможе підібрати позиції під вашу задачу і назве актуальну ціну.'
                  : 'Виїдемо на обʼєкт, прорахуємо кошторис, дамо фіксовану ціну.'}
              </p>
            </div>
            <Link
              href={ctaHref}
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
              style={{ background: accentColor, color: 'white' }}
            >
              {ctaLabel} →
            </Link>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section style={{ background: 'var(--color-bg-subtle)' }}>
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-12 md:py-16">
              <h3
                className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8"
                style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
              >
                Читайте також
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                {related.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group flex flex-col border transition-all hover:shadow-lg"
                    style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={a.cover}
                        alt={a.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <p
                        className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3"
                        style={{ color: accentColor }}
                      >
                        Стаття · {a.readTime}
                      </p>
                      <h4
                        className="font-bold text-lg mb-2"
                        style={{ color: 'var(--color-text)', letterSpacing: '-0.01em', lineHeight: 1.3 }}
                      >
                        {a.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                        {a.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
      <MobileCtaBar accent={accent} href={ctaHref} label={ctaLabel} />
    </>
  )
}
