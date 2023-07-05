import Link from 'next/link';
import {memo} from 'react';
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

/**
 * @returns React component.
 */
function SocialLinksList() {
  return (
    <div>
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
