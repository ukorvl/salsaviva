'use client';

import {Variants, m} from 'framer-motion';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import config from './config';

const variants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  hidden: {
    x: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

/**
 * @returns React component.
 */
export default function WhyJoinBlock() {
  const containerCn =
    'w-full flex flex-col items-center justify-center border-t-8 border-white border-dashed px-4';
  const titleCn = 'w-full text-8xl mt-24 text-accent2 text-right justify-end mr-32 mb-32';
  const gridCn = 'grid grid-cols-3 w-full gap-4';

  return (
    <AppearInViewport
      className={containerCn}
      transition={{staggerChildren: 0.2, delayChildren: 0.75, delay: 0.5}}
    >
      <h2 className={titleCn}>Why join Salsaviva?</h2>
      <div className={gridCn}>
        {config.map((Item, idx) => (
          <m.div
            key={`whyJoin-${idx}`}
            variants={variants}
          >
            <Item />
          </m.div>
        ))}
      </div>
    </AppearInViewport>
  );
}
