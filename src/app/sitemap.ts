import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/wood-products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vbk-partner.com";
  const lastModified = "2025-06-04";
  return [
    { url: base,             lastModified, changeFrequency: "monthly", priority: 1   },
    { url: `${base}/build`,  lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/wood`,   lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...PRODUCTS.map((p) => ({
      url: `${base}/wood/${p.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
