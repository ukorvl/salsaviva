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
        document.documentElement.style.scrollbarGutter = 'stable';
      }
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.scrollbarGutter = 'auto';
    }
  }, [open]);
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getBosyHasOevrflow() {
  return document.body.scrollHeight > document.body.clientHeight;
}
