import clsx from 'clsx';
import {memo} from 'react';
import {env} from '@/app/env.mjs';

const {CONTACT_PHONE} = env;

const containerCn = clsx('hidden', 'md:flex', 'justify-center');
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
        rel="noopener noreferrer"
      >
        {CONTACT_PHONE}
      </a>
    </div>
  );
}

export default memo(Phone);
