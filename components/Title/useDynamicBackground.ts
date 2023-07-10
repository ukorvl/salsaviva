import {useEffect, RefObject} from 'react';
import debounce from 'lodash/debounce';

/**
 * Scroll event handler.
 */
export type ScrollHandler = (props: {scrollTop?: number}) => void;

const delay = 50;

/**
 * Hook to change title background on mouse move over element.
 * @param ref Ref.
 */
export default function useDynamicBackground<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    element.style.backgroundColor = 'white';
    element.style.backgroundSize = '0';
    const handleResize = debounce((e: MouseEvent) => {
      element.style.backgroundColor = 'red';
    }, delay);

    window.addEventListener('mouseover', handleResize);

    return () => window.removeEventListener('mouseover', handleResize);
  }, [ref]);
}
