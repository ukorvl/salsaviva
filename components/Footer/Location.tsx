import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {LOCATION_ADDRESS_TEXT, LOCATION_GOOGLE_MAPS_LINK} = envConfig;

const containerCn = clsx('flex', 'justify-center', 'flex-nowrap', 'gap-4');

/**
 * @returns React component.
 */
function Location() {
  return (
    <div className={containerCn}>
      <Link
        href={LOCATION_GOOGLE_MAPS_LINK ?? 'fe'}
        target="_blank"
      >
        <FontAwesomeIcon
          size="2xl"
          icon={['fas', 'location-dot']}
        />
        <address>{LOCATION_ADDRESS_TEXT}</address>
      </Link>
    </div>
  );
}

export default memo(Location);
