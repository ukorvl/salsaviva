'use client';

import tailwindConfig from '../../tailwind.config';
import useWindowDimensions from './useWindowDimensions';

const mobileMaxScreenSize = tailwindConfig.theme.extend.screens.sm;

/**
 * Numeric mobile max screen size.
 */
export const numericMobileMaxScreenSize = parseInt(mobileMaxScreenSize.replace('px', ''));

/**
 * @returns Is mobile.
 */
export default function useIsMobile() {
  const {width} = useWindowDimensions();

  const isMobile = width ? width <= numericMobileMaxScreenSize : false;

  return [isMobile];
}
