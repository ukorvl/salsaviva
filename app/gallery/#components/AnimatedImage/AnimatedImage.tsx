'use client';

import {useState} from 'react';
import {m} from 'framer-motion';
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
export default function AnimatedImage({src, blurDataURL}: LazyImageProps) {
  const [isInView, setIsInView] = useState(false);

  return (
    <m.div
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
    </m.div>
  );
}
