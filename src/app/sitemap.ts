import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/wood-products";
import { ARTICLES } from "@/lib/articles";
import { BUILD_SERVICES } from "@/lib/build-services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vbk-partner.com";
  const lastModified = "2025-06-04";
  return [
    { url: base,             lastModified, changeFrequency: "monthly", priority: 1   },
    { url: `${base}/build`,  lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wood`,   lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...BUILD_SERVICES.map((s) => ({
      url: `${base}/build/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...PRODUCTS.map((p) => ({
      url: `${base}/wood/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...ARTICLES.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
