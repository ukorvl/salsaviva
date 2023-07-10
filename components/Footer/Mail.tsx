import clsx from 'clsx';
import {memo} from 'react';
import envConfig from '@/lib/env/envConfig';

const {CONTACT_EMAIL} = envConfig;

const containerCn = clsx('flex', 'justify-center');
const anchorCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Mail() {
  return (
    <div className={containerCn}>
      <a
        className={anchorCn}
        href={`mailto:${CONTACT_EMAIL}`}
      >
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}

export default memo(Mail);
