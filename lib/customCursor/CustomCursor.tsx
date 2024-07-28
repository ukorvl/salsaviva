'use client';

import dynamic from 'next/dynamic';
import {isPrefersReducedMotion} from '@/utils/isPrefersReducedMotion';
import options from './customCursorOptions';
import useIsMobile from '../shared/useIsMobile';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

/**
 * @returns Custom cursor.
 */
export default function CustomCursor() {
  const [isMobile] = useIsMobile();
  const shouldLoad = !isPrefersReducedMotion && !isMobile;
  return shouldLoad ? <AnimatedCursor {...options} /> : null;
}
