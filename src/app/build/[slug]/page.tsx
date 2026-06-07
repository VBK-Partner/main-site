import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import StickyHeader from '@/components/shared/StickyHeader'
import Footer from '@/components/shared/Footer'
import MobileCtaBar from '@/components/shared/MobileCtaBar'
import { BUILD_SERVICES, getService } from '@/lib/build-services'

export function generateStaticParams() {
  return BUILD_SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) return { title: 'Послугу не знайдено' }
  const url = `https://vbk-partner.com/build/${svc.slug}`
  const title = `${svc.title} — ціни і умови | VBK Partner`
  return {
    title: `${svc.title} — ціни і умови`,
    description: svc.short,
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      siteName: 'VBK Partner',
      locale: 'uk_UA',
      url,
      title,
      description: svc.short,
      images: svc.photo ? [{ url: svc.photo }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: svc.short,
    },
  }
}

export default async function BuildServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const svc = getService(slug)
  if (!svc) notFound()

  const url = `https://vbk-partner.com/build/${svc.slug}`
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    serviceType: 'Будівельно-ремонтні роботи',
    description: svc.short,
    url,
    provider: {
      '@type': 'Organization',
      name: 'VBK Partner',
      url: 'https://vbk-partner.com',
    },
    areaServed: { '@type': 'Country', name: 'Ukraine' },
    ...(svc.priceTable
      ? {
          offers: svc.priceTable.rows.map(([name, unit, price]) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name },
            priceCurrency: 'UAH',
            description: `${price} / ${unit}`,
          })),
        }
      : {}),
  }

  const related = BUILD_SERVICES.filter((s) => s.slug !== svc.slug).slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <StickyHeader accent="orange" ctaHref="/build#quiz" ctaLabel="Розрахувати вартість" />
      <main style={{ fontFamily: 'var(--font-display)', background: 'var(--color-bg)' }}>
        {/* Hero */}
        <section className="pt-20 md:pt-28 pb-10 md:pb-12" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <Link
              href="/build#expertise"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] mb-6 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-orange)' }}
            >
              <ArrowLeft size={14} strokeWidth={2} />
              До всіх послуг
            </Link>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
              <div
                className="aspect-[4/3] overflow-hidden border"
                style={{ borderColor: 'var(--color-border)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={svc.heroPhoto || svc.photo}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p
                  className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                  style={{ color: 'var(--color-orange)' }}
                >
                  Будівельні послуги
                </p>
                <h1
                  className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4"
                  style={{ color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
                >
                  {svc.title}
                </h1>
                <p
                  className="text-base md:text-lg mb-6"
                  style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}
                >
                  {svc.lead}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/build#quiz"
                    className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
                    style={{ background: 'var(--color-orange)' }}
                  >
                    Розрахувати вартість →
                  </Link>
                  {svc.priceTable && (
                    <a
                      href="#prices"
                      className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-70"
                      style={{ color: 'var(--color-orange)', border: '1px solid var(--color-orange)' }}
                    >
                      Дивитись прайс
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-12 md:py-20">
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
            <h2
              className="font-bold text-2xl md:text-3xl mb-4"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
            >
              Про послугу
            </h2>
            <p
              className="text-base md:text-lg"
              style={{ color: 'var(--color-text-sec)', lineHeight: 1.75 }}
            >
              {svc.intro}
            </p>
          </div>
        </section>

        {/* Sections (what we do, groups…) */}
        {svc.sections.length > 0 && (
          <section className="py-12 md:py-20" style={{ background: 'var(--color-bg-subtle)' }}>
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              {svc.sections.map((sec, si) => (
                <div key={si} className={si > 0 ? 'mt-12 md:mt-14' : ''}>
                  <h2
                    className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8"
                    style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
                  >
                    {sec.h}
                  </h2>
                  {sec.text && (
                    <p
                      className="text-base mb-6 max-w-3xl"
                      style={{ color: 'var(--color-text-sec)', lineHeight: 1.7 }}
                    >
                      {sec.text}
                    </p>
                  )}
                  {sec.bullets && (
                    <ul className="grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3 max-w-4xl">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <span
                            className="mt-2 shrink-0 w-1.5 h-1.5"
                            style={{ background: 'var(--color-orange)' }}
                          />
                          <span
                            className="font-medium"
                            style={{ color: 'var(--color-text-sec)', fontSize: '0.95rem', lineHeight: 1.55 }}
                          >
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.groups && (
                    <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10">
                      {sec.groups.map((g, gi) => (
                        <div key={gi}>
                          <h3
                            className="font-bold text-lg mb-4"
                            style={{ color: 'var(--color-text)', letterSpacing: '-0.01em' }}
                          >
                            {g.h}
                          </h3>
                          <ul className="flex flex-col gap-2.5">
                            {g.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3">
                                <span
                                  className="mt-2 shrink-0 w-1.5 h-1.5"
                                  style={{ background: 'var(--color-orange)' }}
                                />
                                <span
                                  className="font-medium"
                                  style={{ color: 'var(--color-text-sec)', fontSize: '0.95rem', lineHeight: 1.55 }}
                                >
                                  {b}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Objects */}
        {svc.objects && svc.objects.length > 0 && (
          <section className="py-12 md:py-20">
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start">
                <div className="md:w-64 shrink-0">
                  <p
                    className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                    style={{ color: 'var(--color-orange)' }}
                  >
                    Об’єкти
                  </p>
                  <h2
                    className="font-bold text-xl sm:text-2xl md:text-3xl"
                    style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
                  >
                    З якими працюємо
                  </h2>
                </div>
                <ul className="flex-1 grid md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-3">
                  {svc.objects.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 shrink-0 w-1.5 h-1.5"
                        style={{ background: 'var(--color-orange)' }}
                      />
                      <span
                        className="font-medium"
                        style={{ color: 'var(--color-text-sec)', fontSize: '1rem', lineHeight: 1.55 }}
                      >
                        {o}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Why VBK */}
        {svc.why && svc.why.length > 0 && (
          <section className="py-12 md:py-20" style={{ background: 'var(--color-bg-subtle)' }}>
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: 'var(--color-orange)' }}
              >
                Чому ВБК Партнер
              </p>
              <h2
                className="font-bold text-xl sm:text-2xl md:text-3xl mb-8 md:mb-10"
                style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
              >
                Як ми працюємо
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {svc.why.map((w, i) => (
                  <div
                    key={i}
                    className="p-5 md:p-6"
                    style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                  >
                    <div
                      className="font-black text-2xl mb-3 tabular-nums"
                      style={{ color: 'var(--color-orange)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p
                      className="font-medium"
                      style={{ color: 'var(--color-text-sec)', fontSize: '0.9rem', lineHeight: 1.6 }}
                    >
                      {w}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Price table or CTA */}
        <section id="prices" className="py-12 md:py-20">
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <p
              className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
              style={{ color: 'var(--color-orange)' }}
            >
              Прайс
            </p>
            <h2
              className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8"
              style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
            >
              Ціни на {svc.title.toLowerCase()}
            </h2>

            {svc.priceTable ? (
              <>
                <div className="overflow-x-auto border" style={{ borderColor: 'var(--color-border)' }}>
                  <table className="w-full text-sm min-w-[480px]">
                    <thead>
                      <tr style={{ background: 'var(--color-bg-subtle)' }}>
                        <th
                          className="text-left px-3 md:px-4 py-3 font-semibold"
                          style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}
                        >
                          Найменування робіт
                        </th>
                        <th
                          className="text-left px-3 md:px-4 py-3 font-semibold w-24 md:w-32"
                          style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}
                        >
                          Од. виміру
                        </th>
                        <th
                          className="text-left px-3 md:px-4 py-3 font-semibold w-28 md:w-40"
                          style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}
                        >
                          Ціна
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {svc.priceTable.rows.map(([name, unit, price], ri) => (
                        <tr
                          key={ri}
                          style={{ borderTop: ri === 0 ? 'none' : '1px solid var(--color-border)' }}
                        >
                          <td className="px-3 md:px-4 py-3" style={{ color: 'var(--color-text)' }}>
                            {name}
                          </td>
                          <td className="px-3 md:px-4 py-3" style={{ color: 'var(--color-text-sec)' }}>
                            {unit}
                          </td>
                          <td
                            className="px-3 md:px-4 py-3 font-semibold"
                            style={{ color: 'var(--color-text)' }}
                          >
                            {price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {svc.priceTable.note && (
                  <p
                    className="mt-4 text-xs"
                    style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}
                  >
                    {svc.priceTable.note}
                  </p>
                )}
              </>
            ) : (
              <div
                className="p-6 md:p-10"
                style={{ background: 'var(--color-bg-subtle)', border: '1px solid var(--color-border)' }}
              >
                <p
                  className="text-base md:text-lg mb-4 max-w-2xl"
                  style={{ color: 'var(--color-text-sec)', lineHeight: 1.65 }}
                >
                  Вартість формуємо індивідуально — після виїзду на обʼєкт або за технічним
                  завданням. Прозорий кошторис із розшифровкою матеріалів і робіт, без
                  «дотягнень» по факту.
                </p>
                <Link
                  href="/build#quiz"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
                  style={{ background: 'var(--color-orange)' }}
                >
                  Розрахувати вартість →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20" style={{ background: '#111' }}>
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto text-center">
            <h2
              className="font-black uppercase text-white mb-4"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.02em' }}
            >
              Готові обговорити ваш об’єкт?
            </h2>
            <p
              className="mb-8 max-w-2xl mx-auto"
              style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.6 }}
            >
              Виїзд інженера і кошторис — безкоштовно. Дайте кілька деталей, і ми зателефонуємо
              з пропозицією.
            </p>
            <Link
              href="/build#quiz"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-85"
              style={{ background: 'var(--color-orange)' }}
            >
              Залишити заявку →
            </Link>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="py-12 md:py-20" style={{ background: 'var(--color-bg-subtle)' }}>
            <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              <p
                className="text-xs font-semibold tracking-[0.22em] uppercase mb-3"
                style={{ color: 'var(--color-orange)' }}
              >
                Інші послуги
              </p>
              <h2
                className="font-bold text-xl sm:text-2xl md:text-3xl mb-6 md:mb-8"
                style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}
              >
                Що ще ми робимо
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/build/${r.slug}`}
                    className="group flex flex-col overflow-hidden"
                    style={{
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-bg)',
                    }}
                  >
                    <div className="relative overflow-hidden" style={{ height: 180 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.photo}
                        alt={r.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        style={{ filter: 'brightness(0.65)' }}
                      />
                    </div>
                    <div className="p-5">
                      <h3
                        className="font-bold text-base mb-2"
                        style={{ color: 'var(--color-text)', letterSpacing: '-0.01em' }}
                      >
                        {r.title}
                      </h3>
                      <p
                        className="text-sm"
                        style={{ color: 'var(--color-text-sec)', lineHeight: 1.5 }}
                      >
                        {r.short}
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
      <MobileCtaBar accent="orange" href="/build#quiz" label="Розрахувати вартість" />
    </>
  )
}
