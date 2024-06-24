'use client';

import {MutableRefObject, useEffect, useRef, useState} from 'react';

/**
 * @see {@link https://usehooks.com/useHover/}
 * @returns Ref to register and hover state.
 */
export const useHover = <T extends HTMLElement>(): [MutableRefObject<T | null>, boolean] => {
  const [value, setValue] = useState<boolean>(false);
  const ref = useRef<T | null>(null);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleMouseOver = (): void => setValue(true);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleMouseOut = (): void => setValue(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);
      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [ref]);
  return [ref, value];
};
