import clsx from 'clsx';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {CONTACT_PHONE} = envConfig;

const telCn = clsx('animated-link', 'tracking-wider');

/**
 * @returns React component.
 */
function Phone() {
  return (
    <a
      className={telCn}
      href={`tel:${CONTACT_PHONE}`}
    >
      {CONTACT_PHONE}
    </a>
  );
}

export default memo(Phone);
