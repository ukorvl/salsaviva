'use client';

import {useEffect, useState} from 'react';
import debounce from 'lodash/debounce';
import {isServer} from '@/utils/isServer';

const delay = 100;

// eslint-disable-next-line jsdoc/require-jsdoc
function getWindowSize() {
  if (isServer()) {
    return {
      width: undefined,
      height: undefined,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

/**
 * @returns Window dimensions.
 */
export default function useWindowDimensions() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowSize(getWindowSize());
    }, delay);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
