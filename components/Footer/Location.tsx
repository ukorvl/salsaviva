import clsx from 'clsx';
import {memo} from 'react';
import UniservsalLink from '../UniservsalLink/UniservsalLink';

const {NEXT_PUBLIC_LOCATION_ADDRESS_TEXT, NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK} = process.env;

const containerCn = clsx('flex', 'justify-center', 'flex-nowrap', 'gap-4');
const addressCn = clsx('not-italic');
const linkCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Location() {
  return (
    <div className={containerCn}>
      <UniservsalLink
        href={NEXT_PUBLIC_LOCATION_GOOGLE_MAPS_LINK ?? ''}
        target="_blank"
        className={linkCn}
      >
        <address className={addressCn}>{NEXT_PUBLIC_LOCATION_ADDRESS_TEXT}</address>
      </UniservsalLink>
    </div>
  );
}

export default memo(Location);
