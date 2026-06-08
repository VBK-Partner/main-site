import type { Metadata } from "next";
import { Manrope, Onest } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollReveal from "@/components/shared/ScrollReveal";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const onest = Onest({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "VBK Partner — Будівництво та Пиломатеріали",
    template: "%s | VBK Partner",
  },
  description:
    "VBK Partner — будівництво комерційних об'єктів під ключ та пиломатеріали від виробника. Власна спецтехніка, фіксована ціна, доставка по регіону.",
  metadataBase: new URL("https://vbk-partner.com"),
  alternates: { canonical: "https://vbk-partner.com" },
  openGraph: {
    type: "website",
    siteName: "VBK Partner",
    locale: "uk_UA",
    url: "https://vbk-partner.com",
    title: "VBK Partner — Будівництво та Пиломатеріали",
    description:
      "Будівництво промислових об'єктів під ключ та пиломатеріали від виробника.",
  },
  twitter: {
    card: "summary",
    title: "VBK Partner — Будівництво та Пиломатеріали",
    description:
      "Будівництво промислових об'єктів під ключ та пиломатеріали від виробника.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VBK Partner",
    alternateName: "ВБК Партнер",
    url: "https://vbk-partner.com",
    logo: "https://vbk-partner.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+380730161111",
      contactType: "customer service",
      availableLanguage: "Ukrainian",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Послуги VBK Partner",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Будівельно-ремонтні роботи та будівництво під ключ",
            url: "https://vbk-partner.com/build",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Пиломатеріали від виробника",
            url: "https://vbk-partner.com/wood",
          },
        },
      ],
    },
  };

  return (
    <html lang="uk" className={`${manrope.variable} ${onest.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X4J37BHCTL"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X4J37BHCTL');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
