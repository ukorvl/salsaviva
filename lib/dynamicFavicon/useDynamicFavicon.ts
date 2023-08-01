'use client';

import {useEffect} from 'react';
import {usePageVisibility} from 'react-page-visibility';
import toggleFavicon from './toggleFavicon';

/**
 * Toggles webiste favicon when page becomes visible/hidden.
 */
export default function useDynamicFavicon() {
  const isVisible = usePageVisibility();

  useEffect(() => {
    toggleFavicon(isVisible);
  }, [isVisible]);
}
