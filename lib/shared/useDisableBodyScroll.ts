import {useEffect} from 'react';

/**
 * Disable body scroll if overflow element is open.
 * Prevent layout shift by adding padding right to body.
 * @param open Is open.
 */
export default function useDisableBodyScroll(open: boolean) {
  const scrollBarWidth = window.innerWidth - document.body.clientWidth;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 'unset';
    }
  }, [open, scrollBarWidth]);
}
