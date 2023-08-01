'use client';

import {LazyMotion, AnimatePresence, m} from 'framer-motion';
import {LocationChangeTracker} from '@/lib/gtag/LocationChangeTracker';
import useDynamicFavicon from '@/lib/dynamicFavicon/useDynamicFavicon';
import TopMenu from '@/components/TopMenu/TopMenu';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
import {loadFeatures} from '@/lib/framerMotion/loadFeatures';
import ScrollToTopButton from '@/components/ScrollToTop/ScrollToTop';

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
      <AnimatePresence mode="wait">
        <m.div
          initial={{x: 300, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          exit={{x: 300, opacity: 0}}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  );
}
