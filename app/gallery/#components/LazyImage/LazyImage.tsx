'use client';

import {useState} from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

/**
 * Props.
 */
export type LazyImageProps = {
  src: string;
  blurDataURL: string;
};

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px,
  rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px,
  rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

/**
 * @param {LazyImageProps} props Props.
 * @returns React component.
 */
export default function LazyImage({src, blurDataURL}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      initial={false}
      animate={
        isInView
          ? {WebkitMaskImage: visibleMask, maskImage: visibleMask}
          : {WebkitMaskImage: hiddenMask, maskImage: hiddenMask}
      }
      transition={{duration: 1, delay: 1}}
      viewport={{once: true}}
      onViewportEnter={() => setIsInView(true)}
    >
      <Image
        src={src}
        alt=""
        placeholder="blur"
        blurDataURL={blurDataURL}
        fill
      />
    </motion.div>
  );
}
