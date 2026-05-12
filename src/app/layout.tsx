import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import ScrollReveal from '@/components/shared/ScrollReveal'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
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
    <html lang="uk" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ScrollReveal />
        {children}
      </body>
    </html>
  )
}
