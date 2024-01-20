import clsx from 'clsx';
import {memo} from 'react';
import {env} from '@/app/env.mjs';
import UniversalLink from '../UniversalLink/UniversalLink';

const {NEXT_PUBLIC_CONTACT_EMAIL} = env;

const containerCn = clsx('flex', 'justify-center');
const anchorCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Mail() {
  return (
    <div className={containerCn}>
      <UniversalLink
        className={anchorCn}
        href={`mailto:${NEXT_PUBLIC_CONTACT_EMAIL}`}
      >
        {NEXT_PUBLIC_CONTACT_EMAIL}
      </UniversalLink>
    </div>
  );
}

export default memo(Mail);
