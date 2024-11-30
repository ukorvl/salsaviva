import {faFacebook, faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import {ReactNode} from 'react';
import {env} from '@/app/env.mjs';
import UniversalLink from '@/components/shared/UniversalLink/UniversalLink';

/**
 * Icon configuration.
 */
export type IconConfig = {
  icon: ReactNode;
};

const {FACEBOOK_ADDRESS, INSTAGRAM_ADDRESS, TELEGRAM_ADDRESS, WHATSAPP_ADDRESS} = env;

const iconCn = clsx('transition-transform hover:-translate-y-0.5 hover:scale-105');

/**
 * @param size Size.
 * @returns Icons config.
 */
const getSocialicons = (size?: FontAwesomeIconProps['size']): IconConfig[] => [
  {
    icon: (
      <UniversalLink
        href={INSTAGRAM_ADDRESS ?? ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className={iconCn}
          icon={faInstagram}
          size={size}
        />
      </UniversalLink>
    ),
  },
  {
    icon: (
      <UniversalLink
        href={TELEGRAM_ADDRESS ?? ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className={iconCn}
          icon={faTelegram}
          size={size}
        />
      </UniversalLink>
    ),
  },
  {
    icon: (
      <UniversalLink
        href={FACEBOOK_ADDRESS ?? ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className={iconCn}
          icon={faFacebook}
          size={size}
        />
      </UniversalLink>
    ),
  },
  {
    icon: (
      <UniversalLink
        href={WHATSAPP_ADDRESS ?? ''}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className={iconCn}
          icon={faWhatsapp}
          size={size}
        />
      </UniversalLink>
    ),
  },
];

export default getSocialicons;
