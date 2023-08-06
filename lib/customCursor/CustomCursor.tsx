import dynamic from 'next/dynamic';
import {isPrefersReducedMotion} from '@/utils/isPrefersReducedMotion';
import options from './customCursorOptions';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

/**
 * @returns Custom cursor.
 */
export default function CustomCursor() {
  return isPrefersReducedMotion ? null : <AnimatedCursor {...options} />;
}
