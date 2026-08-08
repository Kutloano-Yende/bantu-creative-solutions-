import type { MetadataRoute } from 'next';

const SITE_URL = 'https://www.bantucreativesolutions.co.za';

// Single-page site — the sections are anchors on the homepage, so the sitemap
// lists the one canonical URL.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
