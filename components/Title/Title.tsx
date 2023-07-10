'use client';

import {memo, useRef} from 'react';
import {Variants, motion} from 'framer-motion';
import useDynamicBackground from '@/components/Title/useDynamicBackground';

const titleCn = 'font-light text-9xl text-transparent bg-clip-text';
const subtitleCn = 'text-2xl font-light tracking-widest text-center';
const titleContainerCn =
  'font-sans select-none bg-gradient-to-r from-accent3 to-accent1 bg-clip-text';

const variants: Variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

/**
 * @returns React component.
 */
function Title() {
  const ref = useRef(null);
  useDynamicBackground(ref);

  return (
    <motion.div
      className={titleContainerCn}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.5, delay: 0.3}}
      variants={variants}
    >
      <h1
        className={titleCn}
        ref={ref}
      >
        SALSA<span className="font-extrabold">VIVA</span>
      </h1>
      <h6 className={subtitleCn}>SOCIAL DANCE SCHOOL</h6>
    </motion.div>
  );
}

export default memo(Title);
