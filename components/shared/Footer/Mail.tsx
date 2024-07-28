import clsx from 'clsx';
import {memo} from 'react';
import {env} from '@/app/env.mjs';
import UniversalLink from '../UniversalLink/UniversalLink';

const {CONTACT_EMAIL} = env;

const containerCn = clsx('hidden', 'md:flex', 'justify-center');
const anchorCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Mail() {
  return (
    <div className={containerCn}>
      <UniversalLink
        className={anchorCn}
        href={`mailto:${CONTACT_EMAIL}`}
        rel="noopener noreferrer"
      >
        {CONTACT_EMAIL}
      </UniversalLink>
    </div>
  );
}

export default memo(Mail);
