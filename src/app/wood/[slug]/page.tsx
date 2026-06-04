'use client'

import Link from 'next/link'
import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { getProduct, type Product, type BodyBlock } from '@/lib/wood-products'
import ProductInquiryModal from '@/components/wood/ProductInquiryModal'
import SubscribeForm from '@/components/wood/SubscribeForm'
import StickyHeader from '@/components/shared/StickyHeader'
import Footer from '@/components/shared/Footer'

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const product = getProduct(slug)
  if (!product) notFound()
  return <ProductView product={product} />
}

function ProductView({ product }: { product: Product }) {
  const [modalOpen, setModalOpen] = useState(false)
  const isPartnership = product.cta === 'partnership'
  const ctaLabel = isPartnership ? 'Обговорити умови співпраці' : 'Уточнити наявність і ціну'

  return (
    <>
      <StickyHeader accent="wood" ctaHref="#inquiry" ctaLabel={ctaLabel} />
      <main style={{ fontFamily: 'var(--font-display)', background: 'var(--color-bg)' }}>

        {/* Top: image + meta */}
        <section className="pt-24 md:pt-28 pb-12" style={{ background: 'var(--color-bg-subtle)' }}>
          <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
            <Link href="/wood#catalog"
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] mb-6 hover:opacity-70 transition-opacity"
              style={{ color: 'var(--color-wood)' }}>
              <ArrowLeft size={14} strokeWidth={2} />
              До каталогу
            </Link>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="aspect-[4/3] overflow-hidden border" style={{ borderColor: 'var(--color-border)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={product.photo} alt={product.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: 'var(--color-wood)' }}>
                  Пиломатеріали
                </p>
                <h1 className="font-bold text-3xl md:text-4xl mb-2"
                  style={{ color: 'var(--color-text)', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  {product.title}
                </h1>
                {product.subtitle && (
                  <p className="text-base mb-4" style={{ color: 'var(--color-text-sec)' }}>
                    {product.subtitle}
                  </p>
                )}
                {product.bodyLead && (
                  <p className="text-sm md:text-base mb-6" style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                    {product.bodyLead}
                  </p>
                )}
                {(product.priceMeta || product.priceDiscount) && (
                  <div className="border-l-4 pl-4 py-2 mb-6" style={{ borderColor: 'var(--color-wood)' }}>
                    {product.priceMeta && <p className="font-bold text-base" style={{ color: 'var(--color-text)' }}>{product.priceMeta}</p>}
                    {product.priceDiscount && <p className="text-xs mt-1" style={{ color: 'var(--color-text-muted)' }}>{product.priceDiscount}</p>}
                  </div>
                )}
                <button onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-wood)', color: '#fff' }}>
                  {ctaLabel} →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Table */}
        {product.rows && product.tableHeader && (
          <section id="inquiry" className="py-12 md:py-16">
            <div className="px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto">
              <h2 className="font-bold text-2xl md:text-3xl mb-6"
                style={{ color: 'var(--color-text)', letterSpacing: '-0.02em' }}>
                {product.tableType === 'pellet' ? 'Технічні характеристики' : 'Розміри та ціни'}
              </h2>
              <div className="overflow-x-auto border" style={{ borderColor: 'var(--color-border)' }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: 'var(--color-bg-subtle)' }}>
                      {product.tableHeader.map((h, i) => (
                        <th key={i} className="text-left px-4 py-3 font-semibold"
                          style={{ color: 'var(--color-text)', borderBottom: '1px solid var(--color-border)' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {product.rows.map((row, ri) => (
                      <tr key={ri} style={{ borderTop: ri === 0 ? 'none' : '1px solid var(--color-border)' }}>
                        {row.map((cell, ci) => (
                          <td key={ci} className="px-4 py-3"
                            style={{ color: ci === 0 ? 'var(--color-text)' : 'var(--color-text-sec)' }}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6">
                <button onClick={() => setModalOpen(true)}
                  className="px-8 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-90"
                  style={{ background: 'var(--color-wood)', color: '#fff' }}>
                  {ctaLabel} →
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Body */}
        {product.body && product.body.length > 0 && (
          <section className="py-12 md:py-16" style={{ background: 'var(--color-bg-subtle)' }}>
            <div className="px-8 md:px-16 lg:px-24 max-w-3xl mx-auto">
              {product.body.map((b: BodyBlock, i: number) => {
                const isSubscribe = b.h === 'Дізнавайтеся першим про акції та знижки'
                if (isSubscribe) return <SubscribeForm key={i} source={product.slug} />
                return (
                  <div key={i} className="mb-8">
                    {b.h && <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--color-text)' }}>{b.h}</h3>}
                    {b.text && <p className="text-sm md:text-base mb-3" style={{ color: 'var(--color-text-sec)', lineHeight: 1.7 }}>{b.text}</p>}
                    {b.bullets && (
                      <ul className="flex flex-col gap-2 pl-4">
                        {b.bullets.map((bullet, bi) => (
                          <li key={bi} className="text-sm md:text-base relative pl-4"
                            style={{ color: 'var(--color-text-sec)', lineHeight: 1.6 }}>
                            <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full" style={{ background: 'var(--color-wood)' }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

      </main>
      <Footer />
      <ProductInquiryModal
        product={product.title}
        variant={product.cta || 'price'}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  )
}
