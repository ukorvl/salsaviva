import clsx from 'clsx';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {CONTACT_EMAIL} = envConfig;

const anchorCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Mail() {
  return (
    <a
      className={anchorCn}
      href={`mailto:${CONTACT_EMAIL}`}
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export default memo(Mail);
