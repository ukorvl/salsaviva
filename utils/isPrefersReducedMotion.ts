import {isServer} from './isServer';

const query = '(prefers-reduced-motion: reduce)';

/**
 * @returns True if the user has requested reduced motion.
 */
export default function isPrefersReducedMotion() {
  if (isServer()) {
    return false;
  }

  const mediaQueryList = window.matchMedia(query);
  return mediaQueryList.matches;
}
