import clsx from 'clsx';
import Link from 'next/link';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {LOCATION_ADDRESS_TEXT, LOCATION_GOOGLE_MAPS_LINK} = envConfig;

const containerCn = clsx('flex', 'justify-center', 'flex-nowrap', 'gap-4');
const addressCn = clsx('non-italic');
const linkCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Location() {
  return (
    <div className={containerCn}>
      <Link
        href={LOCATION_GOOGLE_MAPS_LINK}
        target="_blank"
        className={linkCn}
      >
        <address className={addressCn}>{LOCATION_ADDRESS_TEXT}</address>
      </Link>
    </div>
  );
}

export default memo(Location);
