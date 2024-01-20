'use client';

import {useEffect, useRef} from 'react';

/**
 * @returns Ref to register.
 */
export default function useDisableRightClick<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      // eslint-disable-next-line jsdoc/require-jsdoc
      const handleContextMenu = (e: Event) => {
        e.preventDefault();
        e.stopImmediatePropagation();
      };

      node.addEventListener('contextmenu', handleContextMenu);

      return () => {
        node.removeEventListener('contextmenu', handleContextMenu);
      };
    }
  }, [ref]);

  return ref;
}
