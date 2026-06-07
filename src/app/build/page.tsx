import type { Metadata } from "next";
import StickyHeader from "@/components/shared/StickyHeader";
import BuildHero from "@/components/build/BuildHero";
import BuildBento from "@/components/build/BuildBento";
import BuildProcess from "@/components/build/BuildProcess";
import BuildExpertise from "@/components/build/BuildExpertise";
import BuildPortfolio from "@/components/build/BuildPortfolio";
import BuildQuiz from "@/components/build/BuildQuiz";
import ArticlesSection from "@/components/shared/ArticlesSection";
import MobileCtaBar from "@/components/shared/MobileCtaBar";
import Footer from "@/components/shared/Footer";

export const metadata: Metadata = {
  title: "Будівельно-ремонтні роботи та будівництво під ключ",
  description:
    "Будівництво ангарів, складів та виробничих об'єктів під ключ. Фасадні й покрівельні роботи, монтаж котелень, реконструкція. Власна спецтехніка, фіксована ціна, 10 років гарантії.",
  keywords: [
    "будівництво під ключ",
    "будівельно-ремонтні роботи",
    "будівництво складів",
    "будівництво ангарів",
    "будівництво виробничих об'єктів",
    "покрівельні роботи",
    "фасадні роботи",
    "твердопаливні котельні",
    "монтаж конструкцій",
    "реконструкція будівель",
    "VBK Partner",
  ],
  alternates: { canonical: "https://vbk-partner.com/build" },
  openGraph: {
    type: "website",
    siteName: "VBK Partner",
    locale: "uk_UA",
    url: "https://vbk-partner.com/build",
    title: "Будівельно-ремонтні роботи та будівництво під ключ | VBK Partner",
    description:
      "Будівництво ангарів, складів та виробничих об'єктів під ключ. Власна спецтехніка, фіксована ціна, 10 років гарантії.",
  },
  twitter: {
    card: "summary",
    title: "Будівельно-ремонтні роботи та будівництво під ключ | VBK Partner",
    description:
      "Будівництво ангарів, складів та виробничих об'єктів під ключ. Фіксована ціна, 10 років гарантії.",
  },
};

export default function BuildPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Будівельно-ремонтні роботи та будівництво під ключ",
    serviceType: "Будівництво та ремонт",
    description:
      "Будівництво ангарів, складів та виробничих об'єктів під ключ. Фасадні й покрівельні роботи, монтаж котелень, реконструкція. Власна спецтехніка, фіксована ціна.",
    url: "https://vbk-partner.com/build",
    provider: {
      "@type": "Organization",
      name: "VBK Partner",
      url: "https://vbk-partner.com",
    },
    areaServed: { "@type": "Country", name: "Ukraine" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Будівельні послуги",
      itemListElement: [
        "Фасадні роботи",
        "Покрівельні роботи",
        "Внутрішні та зовнішні ремонти",
        "Реконструкція виробничих об'єктів",
        "Монтаж конструкцій",
        "Твердопаливні котельні",
        "Нове будівництво під ключ",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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
        <ArticlesSection category="build" accent="orange" />
        {/* Cross-promo → wood */}
        <section
          style={{
            background: "var(--color-wood-light)",
            fontFamily: "var(--font-display)",
          }}
        >
          <div className="px-5 sm:px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-12 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p
                className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
                style={{ color: "var(--color-wood)" }}
              >
                Також від ВБК Партнер
              </p>
              <h3
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: "var(--color-text)", letterSpacing: "-0.02em" }}
              >
                Постачаємо пиломатеріали оптом
              </h3>
              <p className="text-sm" style={{ color: "var(--color-text-sec)" }}>
                Брус, дошка, вагонка, палети від власного виробництва.
              </p>
            </div>
            <a
              href="/wood"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-opacity hover:opacity-85"
              style={{ background: "var(--color-wood)", color: "white" }}
            >
              Перейти до пиломатеріалів →
            </a>
          </div>
        </section>
        <Footer />
      </main>
      <MobileCtaBar accent="orange" href="#quiz" label="Розрахувати вартість" />
    </>
  );
}
