import clsx from 'clsx';
import {memo} from 'react';
import {env} from '@/app/env.mjs';
import UniversalLink from '../UniversalLink/UniversalLink';

const {LOCATION_ADDRESS_TEXT, LOCATION_GOOGLE_MAPS_LINK} = env;

const containerCn = clsx('flex', 'justify-center', 'flex-nowrap', 'gap-4');
const addressCn = clsx('not-italic');
const linkCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Location() {
  return (
    <div className={containerCn}>
      <UniversalLink
        href={LOCATION_GOOGLE_MAPS_LINK ?? ''}
        target="_blank"
        className={linkCn}
        rel="noopener noreferrer"
      >
        <address className={addressCn}>{LOCATION_ADDRESS_TEXT}</address>
      </UniversalLink>
    </div>
  );
}

export default memo(Location);
