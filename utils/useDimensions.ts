'use client';

import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';

/**
 * Scroll event handler.
 */
export type ScrollHandler = (props: {scrollTop?: number}) => void;

const delay = 100;

/**
 * @returns Window dimensions.
 */
export default function useDimensions() {
  const [windowSize, setWindowSize] = useState<Record<'width' | 'height', number | undefined>>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, delay);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
