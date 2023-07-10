import Link from 'next/link';
import {memo} from 'react';
import clsx from 'clsx';
import envConfig from '@/lib/env/envConfig';

const {FACEBOOK_ADDRESS, INSTAGRAM_ADDRESS, TELEGRAM_ADDRESS} = envConfig;

const linksConfig = [
  {
    title: 'Facebook',
    href: FACEBOOK_ADDRESS,
  },
  {
    title: 'Instagram',
    href: INSTAGRAM_ADDRESS,
  },
  {
    title: 'Telegram',
    href: TELEGRAM_ADDRESS,
  },
] as const;

const linkCn = 'animated-link';
const containerCn = clsx('flex', 'justify-center', 'gap-16', 'w-full');

/**
 * @returns React component.
 */
function SocialLinksList() {
  return (
    <div className={containerCn}>
      {linksConfig.map(({title, href}) => (
        <Link
          key={title}
          href={href}
          target="_blank"
          className={linkCn}
        >
          {title.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}

export default memo(SocialLinksList);
