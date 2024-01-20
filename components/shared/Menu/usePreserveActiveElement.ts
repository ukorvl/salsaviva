import {useEffect, useRef} from 'react';

/**
 * This hook is used to preserve the active element when the menu is opened.
 * @param isOpen - Whether the menu is open or not.
 */
export const usePreserveActiveElement = (isOpen: boolean) => {
  const activeElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      const activeElement = document.activeElement;

      if (activeElement instanceof HTMLElement) {
        activeElementRef.current = activeElement;
      }
    } else if (activeElementRef.current) {
      activeElementRef.current.focus();
      activeElementRef.current = null;
    }
  }, [isOpen]);
};
