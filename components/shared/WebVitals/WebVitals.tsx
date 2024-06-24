'use client';

import {useReportWebVitals} from 'next/web-vitals';

/**
 * Returns web vitals report.
 * This app is configured to use GA as web vitals analyzer and visualizer.
 * @returns React component.
 */
export default function WebVitals() {
  useReportWebVitals(metric => {
    const {name, value, id} = metric;

    window.gtag('event', name, {
      event_label: id,
      value: Math.round(name === 'CLS' ? value * 1000 : value),
      non_interaction: true,
    });
  });

  return null;
}
