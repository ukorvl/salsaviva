import {faFacebook, faInstagram, faTelegram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';

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
} = process.env;

/**
 * Social icons config.
 */
const iconsConfig: IconConfig[] = [
  {
    icon: faFacebook,
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS ?? '',
    size: '2x',
    target: '_blank',
  },
  {
    icon: faInstagram,
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS ?? '',
    size: '2x',
    target: '_blank',
  },
  {
    icon: faWhatsapp,
    href: NEXT_PUBLIC_WHATSAPP_ADDRESS ?? '',
    size: '2x',
    target: '_blank',
  },
  {
    icon: faTelegram,
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS ?? '',
    size: '2x',
    target: '_blank',
  },
];

export default iconsConfig;
