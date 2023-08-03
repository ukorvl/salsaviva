import {memo} from 'react';
import clsx from 'clsx';
import UniservsalLink from '../UniservsalLink/UniservsalLink';

const {NEXT_PUBLIC_FACEBOOK_ADDRESS, NEXT_PUBLIC_INSTAGRAM_ADDRESS, NEXT_PUBLIC_TELEGRAM_ADDRESS} =
  process.env;

const linksConfig = [
  {
    title: 'Facebook',
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS,
  },
  {
    title: 'Instagram',
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS,
  },
  {
    title: 'Telegram',
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS,
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
        <UniservsalLink
          key={title}
          href={href ?? ''}
          target="_blank"
          className={linkCn}
        >
          {title.toUpperCase()}
        </UniservsalLink>
      ))}
    </div>
  );
}

export default memo(SocialLinksList);
