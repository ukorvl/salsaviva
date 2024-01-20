'use client';

import {useEffect, useState} from 'react';
import {isServer} from '@/utils/isServer';

const fastNetworkTypes = ['4g'];

// eslint-disable-next-line jsdoc/require-jsdoc
function isSupported() {
  if (isServer()) {
    return false;
  }

  return navigator && navigator.connection && navigator.connection.effectiveType;
}

/**
 * @returns Network speed.
 */
function getNetworkType() {
  if (!isSupported()) {
    return '4g';
  }

  return navigator.connection!.effectiveType!;
}

/**
 * Hook to get network speed.
 * @returns Network speed.
 */
export default function useNetworkSpeed() {
  const [networkType, setNetworkType] = useState(getNetworkType());
  const isNetworkFast = fastNetworkTypes.includes(networkType);

  // eslint-disable-next-line jsdoc/require-jsdoc
  const handleNetworkChange = () => {
    setNetworkType(getNetworkType());
  };

  useEffect(() => {
    isSupported() && navigator.connection!.addEventListener('change', handleNetworkChange);

    return () => {
      isSupported() && navigator.connection!.removeEventListener('change', handleNetworkChange);
    };
  }, [setNetworkType]);

  return [networkType, isNetworkFast];
}
