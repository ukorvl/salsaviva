import {useEffect, RefObject} from 'react';
import debounce from 'lodash/debounce';

/**
 * Scroll event handler.
 */
export type ScrollHandler = (props: {scrollTop?: number}) => void;

const delay = 50;

/**
 * Hook to change title background on mouse move.
 * @param ref Ref.
 */
export default function useTitleDynamicBackground<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.backgroundPosition = '-25% 70%';

    const handleResize = debounce((e: MouseEvent) => {
      //const {clientX, clientY} = e;
      element.style.backgroundSize = '0 30%';
    }, delay);

    document.addEventListener('mouseover', handleResize);

    return () => document.removeEventListener('mouseover', handleResize);
  }, [ref]);
}
