import {MetadataRoute} from 'next';
import {origin} from './origin';

/**
 * @returns Robots.tsx template.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${origin}/sitemap.xml`,
  };
}
