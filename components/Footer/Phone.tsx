import clsx from 'clsx';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {NEXT_PUBLIC_CONTACT_PHONE} = envConfig;

const containerCn = clsx('flex', 'justify-center');
const telCn = clsx('animated-link', 'tracking-wider');

/**
 * @returns React component.
 */
function Phone() {
  return (
    <div className={containerCn}>
      <a
        className={telCn}
        href={`tel:${NEXT_PUBLIC_CONTACT_PHONE}`}
      >
        {NEXT_PUBLIC_CONTACT_PHONE}
      </a>
    </div>
  );
}

export default memo(Phone);
