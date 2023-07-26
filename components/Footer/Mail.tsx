import clsx from 'clsx';
import {memo} from 'react';

const {NEXT_PUBLIC_CONTACT_EMAIL} = process.env;

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
        href={`mailto:${NEXT_PUBLIC_CONTACT_EMAIL}`}
      >
        {NEXT_PUBLIC_CONTACT_EMAIL}
      </a>
    </div>
  );
}

export default memo(Mail);
