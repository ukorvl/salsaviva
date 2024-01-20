'use client';

import {useReportWebVitals} from 'next/web-vitals';
import * as gtag from '@/lib/gtag/gtag';

/**
 * Returns web vitals report.
 * @returns React component.
 */
export default function WebVitals() {
  useReportWebVitals(metric => {
    const {name, value, id} = metric;

    gtag.event(name, {
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  });

  return null;
}
