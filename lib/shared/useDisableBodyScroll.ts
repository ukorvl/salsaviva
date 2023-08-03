import {useEffect} from 'react';

/**
 * Disable body scroll if oevrflow element is open.
 * @param open Is open.
 */
export default function useDisableBodyScroll(open: boolean) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';

      if (getBosyHasOevrflow()) {
        const scrollbarWidth = window.innerWidth - document.body.clientWidth;
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = 'unset';
    }
  }, [open]);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getBosyHasOevrflow() {
  return document.body.scrollHeight > document.body.clientHeight;
}
