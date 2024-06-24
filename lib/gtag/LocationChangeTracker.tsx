'use client';

import {useEffect} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';

/**
 * Location change tracker props.
 */
type LocationChangeTrackerProps = {
  trackingId: string;
};

/**
 * @param {LocationChangeTrackerProps} props Props.
 * @returns React component.
 */
export function LocationChangeTracker({trackingId}: LocationChangeTrackerProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const url = pathname + searchParams.toString();

  useEffect(() => {
    window.gtag('config', trackingId, {
      page_path: url,
    });
  }, [url, trackingId]);

  return null;
}
