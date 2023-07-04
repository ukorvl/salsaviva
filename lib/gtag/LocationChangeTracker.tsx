'use client';

import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import * as gtag from './gtag';

/**
 * @returns React component.
 */
export function LocationChangeTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = pathname + searchParams.toString();

  useEffect(() => {
    gtag.pageview(url);
  }, [url]);

  return null;
}
