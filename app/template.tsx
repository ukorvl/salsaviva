'use client';

import {LazyMotion} from 'framer-motion';
import useDynamicFavicon from '@/lib/dynamicFavicon/useDynamicFavicon';
import {loadFeatures} from '@/lib/framerMotion/loadFeatures';
import ScrollToTopButton from '@/components/shared/ScrollToTop/ScrollToTop';

/**
 * @param {{children}} props Props.
 * @returns Global template.
 */
export default function Template({children}: {children: React.ReactNode}) {
  useDynamicFavicon();

  return (
    <LazyMotion features={loadFeatures}>
      <ScrollToTopButton
        bottom={50}
        right={50}
      />
      {children}
    </LazyMotion>
  );
}
