import clsx from 'clsx';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {CONTACT_PHONE} = envConfig;

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
        href={`tel:${CONTACT_PHONE}`}
      >
        {CONTACT_PHONE}
      </a>
    </div>
  );
}

export default memo(Phone);
