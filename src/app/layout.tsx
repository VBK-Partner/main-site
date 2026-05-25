import type { Metadata } from 'next'
import { Manrope, Onest } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/shared/ScrollReveal'

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

const onest = Onest({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-onest',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'VBK Partner — Будівництво та Пиломатеріали',
  description:
    "VBK Partner — будівництво комерційних об'єктів під ключ та пиломатеріали від виробника. Власна спецтехніка, фіксована ціна, доставка по регіону.",
  metadataBase: new URL('https://vbk-partner.com'),
  openGraph: {
    type: 'website',
    url: 'https://vbk-partner.com',
    title: 'VBK Partner — Будівництво та Пиломатеріали',
    description:
      "Будівництво промислових об'єктів під ключ та пиломатеріали від виробника.",
    siteName: 'VBK Partner',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk" className={`${manrope.variable} ${onest.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
