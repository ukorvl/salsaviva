'use client';

import {useEffect} from 'react';
import debounce from 'lodash/debounce';

/**
 * Scroll event handler.
 */
export type ScrollHandler = (props: {scrollTop?: number}) => void;

const delay = 100;

/**
 * Hook to run callback on scroll event.
 * @param onScrollCB Calback.
 */
export default function useScroll(onScrollCB: ScrollHandler) {
  useEffect(() => {
    const onScroll = debounce(() => {
      const {scrollTop} = document.documentElement;

      onScrollCB({scrollTop});
    }, delay);

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [onScrollCB]);
}
