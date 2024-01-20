import {faFacebook, faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import {env} from '@/app/env.mjs';

/**
 * Icon configuration.
 */
type IconConfig = {
  href: string;
} & FontAwesomeIconProps;

const {
  NEXT_PUBLIC_FACEBOOK_ADDRESS,
  NEXT_PUBLIC_INSTAGRAM_ADDRESS,
  NEXT_PUBLIC_TELEGRAM_ADDRESS,
  NEXT_PUBLIC_WHATSAPP_ADDRESS,
} = env;

/**
 * Social icons config.
 */
const iconsConfig: IconConfig[] = [
  {
    icon: faInstagram,
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS ?? '',
    target: '_blank',
  },
  {
    icon: faTelegram,
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS ?? '',
    target: '_blank',
  },
  {
    icon: faFacebook,
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS ?? '',
    target: '_blank',
  },
  {
    icon: faWhatsapp,
    href: NEXT_PUBLIC_WHATSAPP_ADDRESS ?? '',
    target: '_blank',
  },
];

export default iconsConfig;
