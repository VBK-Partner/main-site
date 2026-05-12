import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://vbk-partner.com', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://vbk-partner.com/build', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://vbk-partner.com/wood', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ]
}
