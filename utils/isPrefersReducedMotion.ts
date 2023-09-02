import {isServer} from './isServer';

const query = '(prefers-reduced-motion: reduce)';
const isSupported = !isServer() && window.matchMedia(query).media !== 'not all';

/**
 * @returns True if the user has requested reduced motion.
 */
function getIsPrefersReducedMotion() {
  if (isSupported) {
    const mediaQueryList = window.matchMedia(query);
    return mediaQueryList.matches;
  }

  return false;
}

export const isPrefersReducedMotion = getIsPrefersReducedMotion();
