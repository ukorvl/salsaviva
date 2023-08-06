import {isServer} from './isServer';

const query = '(prefers-reduced-motion: reduce)';

/**
 * @returns True if the user has requested reduced motion.
 */
function getIsPrefersReducedMotion() {
  if (isServer()) {
    return false;
  }

  const mediaQueryList = window.matchMedia(query);
  return mediaQueryList.matches;
}

export const isPrefersReducedMotion = getIsPrefersReducedMotion();
