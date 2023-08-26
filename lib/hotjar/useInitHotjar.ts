'use client';

import {useEffect} from 'react';
import Hotjar from '@hotjar/browser';

const {NODE_ENV, NEXT_PUBLIC_HOTJAR_ID, NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION} = process.env;

/**
 * Initialize Hotjar.
 */
export default function useInitHotjar() {
  useEffect(() => {
    if (NODE_ENV !== 'production') {
      return;
    }

    if ([NEXT_PUBLIC_HOTJAR_ID, NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION].some(v => v === undefined)) {
      return;
    }

    Hotjar.init(Number(NEXT_PUBLIC_HOTJAR_ID), Number(NEXT_PUBLIC_HOTJAR_SNIPPET_VERSION));
  }, []);
}
