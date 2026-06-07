import Link from 'next/link'
import { getArticlesByCategory, type ArticleCategory } from '@/lib/articles'

export default function ArticlesSection({
  category,
  accent,
}: {
  category: ArticleCategory
  accent: 'orange' | 'wood'
}) {
  const articles = getArticlesByCategory(category)
  if (articles.length === 0) return null

  const accentColor = accent === 'orange' ? 'var(--color-orange)' : 'var(--color-wood)'
  const accentBg = accent === 'orange' ? 'var(--color-orange-light)' : 'var(--color-wood-light)'

  return (
    <section
      id="articles"
      style={{ background: 'var(--color-bg)', fontFamily: 'var(--font-display)' }}
    >
      <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: accentColor }}
            >
              Корисне
            </p>
            <h2
              className="font-bold text-2xl sm:text-3xl md:text-4xl"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
            >
              Статті
            </h2>
            <p className="mt-3 text-sm md:text-base max-w-xl" style={{ color: 'var(--color-text-sec)' }}>
              {category === 'build'
                ? 'Розбираємо, як правильно ставити завдання підряднику, з чого складається кошторис і чому одні рішення служать 30 років, а інші — 5.'
                : 'Як обирати пиломатеріали під свою задачу, на чому можна зекономити, а на чому — точно не варто.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/articles/${a.slug}`}
              className="group flex flex-col border transition-all hover:shadow-lg"
              style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}
            >
              <div className="aspect-[16/10] overflow-hidden" style={{ background: accentBg }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.cover}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <p
                  className="text-[11px] font-semibold tracking-[0.18em] uppercase mb-3"
                  style={{ color: accentColor }}
                >
                  Стаття · {a.readTime}
                </p>
                <h3
                  className="font-bold text-base md:text-xl mb-3"
                  style={{ color: 'var(--color-text)', letterSpacing: '-0.01em', lineHeight: 1.3 }}
                >
                  {a.title}
                </h3>
                <p className="text-sm flex-1" style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                  {a.excerpt}
                </p>
                <span
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] transition-opacity group-hover:opacity-70"
                  style={{ color: accentColor }}
                >
                  Читати →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
