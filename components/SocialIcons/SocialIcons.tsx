import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import {twMerge} from 'tailwind-merge';
import {memo} from 'react';
import iconsConfig from './iconsConfig';

const iconsCn = clsx(
  'flex',
  'flex-col',
  'justify-center',
  'gap-4',
  'select-none',
  'absolute',
  'left-4',
  '-translate-y-2/4',
  'top-2/4',
);
const iconCn = clsx('hover:scale-105 hover:-translate-y-0.5 transition-transform');

/**
 * @todo Add gradient color on hover.
 */

/**
 * @returns React component.
 */
function SocialIcons() {
  return (
    <div className={iconsCn}>
      {iconsConfig.map(({href, target, className, ...rest}) => (
        <Link
          key={href}
          href={href}
          target={target}
        >
          <FontAwesomeIcon
            className={twMerge(iconCn, className)}
            {...rest}
          />
        </Link>
      ))}
    </div>
  );
}

export default memo(SocialIcons);
