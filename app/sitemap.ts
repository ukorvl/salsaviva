import {MetadataRoute} from 'next';
import {origin} from './origin';

/**
 * @returns Sitemap template.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: origin,
      lastModified: new Date(),
    },
    {
      url: `${origin}/about`,
      lastModified: new Date(),
    },
    {
      url: `${origin}/gallery`,
      lastModified: new Date(),
    },
    {
      url: `${origin}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${origin}/teachers`,
      lastModified: new Date(),
    },
  ];
}
