'use client';

import {ReactNode} from 'react';
import {LazyMotion} from 'framer-motion';
import {loadFeatures} from './loadFeatures';

/**
 * Component MotoinProvider props.
 */
type MotoinProviderProps = {
  children: ReactNode;
};

/**
 * @param {MotoinProviderProps} props Props.
 * @returns React component.
 */
export default function MotoinProvider({children}: MotoinProviderProps) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
