import {useEffect} from 'react';

/**
 * Disable body scroll if oevrflow element is open.
 * @param open Is open.
 */
export default function useDisableBodyScroll(open: boolean) {
  useEffect(() => {
    if (open) {
      if (getBodyHasOverflow()) {
        const scrollbarWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.paddingRight = 'unset';
    }
  }, [open]);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getBodyHasOverflow() {
  return window.innerHeight < document.body.clientHeight;
}
