'use client';

import {memo} from 'react';
import {Variants, m} from 'framer-motion';
import clsx from 'clsx';

const titleCn = clsx('font-light', 'text-9xl', 'text-transparent', 'bg-clip-text', 'z-10');
const subtitleCn = clsx('text-2xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx(
  'font-sans',
  'select-none',
  'bg-gradient-to-r',
  'from-accent3',
  'to-accent0',
  'bg-clip-text',
);

const variants: Variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

/**
 * @returns React component.
 */
function Title() {
  return (
    <m.div
      className={titleContainerCn}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.5, delay: 0.3}}
      variants={variants}
    >
      <h1 className={titleCn}>
        SALSA<span className="font-extrabold">VIVA</span>
      </h1>
      <h6 className={subtitleCn}>SOCIAL DANCE SCHOOL</h6>
    </m.div>
  );
}

export default memo(Title);
