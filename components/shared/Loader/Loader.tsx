'use client';

import {OnScreen} from '@ukorvl/react-on-screen';
import clsx from 'clsx';
import {ComponentProps} from 'react';
import PuffLoader from 'react-spinners/PuffLoader';

/**
 * Loader size.
 */
type LoaderSize = 'sm' | 'lg' | 'md';

/**
 * Loader props.
 */
type LoaderProps = {
  /** @default md */
  size?: LoaderSize;
  /** @default white */
  color?: ComponentProps<typeof PuffLoader>['color'];
};

const containerBaseCn = clsx(
  'flex justify-content-center align-items-center p-4',
  'transition-opacity',
  'duration-300',
);
// eslint-disable-next-line jsdoc/require-jsdoc
const containerCn = (isOnScreen: boolean) =>
  clsx(containerBaseCn, isOnScreen ? 'opacity-100' : 'opacity-0');

/**
 * @param {LoaderProps} props Props.
 * @returns React component.
 */
export default function Loader({size = 'md', color = 'white'}: LoaderProps) {
  return (
    <OnScreen<HTMLDivElement>>
      {({ref, isOnScreen}) => (
        <div
          className={containerCn(isOnScreen)}
          ref={ref}
        >
          <PuffLoader
            size={mapSizeToValue(size)}
            color={color}
            aria-label="Loading"
            role="status"
          />
        </div>
      )}
    </OnScreen>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
function mapSizeToValue(s: LoaderSize) {
  switch (s) {
    case 'md':
      return 150;
    case 'lg':
      return 200;
    case 'sm':
      return 100;
    default:
      return 150;
  }
}
