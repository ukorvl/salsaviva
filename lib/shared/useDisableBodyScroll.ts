import {useEffect} from 'react';
import {isServer} from '@/utils/isServer';

/**
 * Disable body scroll if overflow element is open.
 * Prevent layout shift by adding padding right to body.
 * @param open Is open.
 */
export default function useDisableBodyScroll(open: boolean) {
  const isSSR = isServer();

  const scrollBarWidth = !isSSR ? window.innerWidth - document.body.clientWidth : 0;

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
