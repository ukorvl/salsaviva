import clsx from 'clsx';
import {memo} from 'react';
import UniservsalLink from '../UniservsalLink/UniservsalLink';

const {NEXT_PUBLIC_CONTACT_EMAIL} = process.env;

const containerCn = clsx('flex', 'justify-center');
const anchorCn = clsx('animated-link');

/**
 * @returns React component.
 */
function Mail() {
  return (
    <div className={containerCn}>
      <UniservsalLink
        className={anchorCn}
        href={`mailto:${NEXT_PUBLIC_CONTACT_EMAIL}`}
      >
        {NEXT_PUBLIC_CONTACT_EMAIL}
      </UniservsalLink>
    </div>
  );
}

export default memo(Mail);
