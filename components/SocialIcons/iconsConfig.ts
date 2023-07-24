import {FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import envConfig from '@/lib/env/envConfig';

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
} = envConfig;

/**
 * Social icons config.
 */
const iconsConfig: IconConfig[] = [
  {
    icon: ['fab', 'facebook'],
    href: NEXT_PUBLIC_FACEBOOK_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'instagram'],
    href: NEXT_PUBLIC_INSTAGRAM_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'whatsapp'],
    href: NEXT_PUBLIC_WHATSAPP_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'telegram'],
    href: NEXT_PUBLIC_TELEGRAM_ADDRESS,
    size: '2x',
    target: '_blank',
  },
];

export default iconsConfig;
