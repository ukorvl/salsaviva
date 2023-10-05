import clsx from 'clsx';
import {memo} from 'react';
import {env} from '@/app/env.mjs';
import UniversalLink from '../UniversalLink/UniversalLink';

const {NEXT_PUBLIC_LOCATION_ADDRESS_TEXT, NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK} = env;

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
        href={NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK ?? ''}
        target="_blank"
        className={linkCn}
      >
        <address className={addressCn}>{NEXT_PUBLIC_LOCATION_ADDRESS_TEXT}</address>
      </UniversalLink>
    </div>
  );
}

export default memo(Location);
