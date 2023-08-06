'use client';

import {LazyMotion} from 'framer-motion';
import {LocationChangeTracker} from '@/lib/gtag/LocationChangeTracker';
import useDynamicFavicon from '@/lib/dynamicFavicon/useDynamicFavicon';
import TopMenu from '@/components/TopMenu/TopMenu';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import {loadFeatures} from '@/lib/framerMotion/loadFeatures';
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTop';
import CustomCursor from '@/lib/customCursor/CustomCursor';

/**
 * @param {{children}} props Props.
 * @returns Global template.
 */
export default function Template({children}: {children: React.ReactNode}) {
  useDynamicFavicon();

  return (
    <LazyMotion features={loadFeatures}>
      <LocationChangeTracker />
      <TopMenu />
      <ScrollToTopButton
        bottom={50}
        right={50}
      />
      <SocialIcons />
      {children}
      <CustomCursor />
    </LazyMotion>
  );
}
