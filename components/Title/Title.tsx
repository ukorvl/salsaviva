'use client';

import {memo} from 'react';
import {Variants, motion} from 'framer-motion';

const titleCn =
  'font-light text-9xl text-transparent bg-clip-text bg-gradient-to-r from-accent3 to-accent1';
const subtitleCn = 'text-2xl font-light tracking-widest text-center';
const titleContainerCn = 'font-sans select-none';

const variants: Variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

/**
 * @returns React component.
 */
function Title() {
  return (
    <motion.div
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
    </motion.div>
  );
}

export default memo(Title);
