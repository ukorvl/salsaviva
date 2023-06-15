import {FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Link from 'next/link';
import envConfig from '@/lib/env/envConfig';

/**
 * Icon configuration.
 */
type IconConfig = {
  href: string;
} & FontAwesomeIconProps;

const {FACEBOOK_ADDRESS, INSTAGRAM_ADDRESS, TELEGRAM_ADDRESS} = envConfig;

/**
 * Social icons config.
 */
const iconsConfig: IconConfig[] = [
  {
    icon: ['fab', 'facebook'],
    href: FACEBOOK_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'instagram'],
    href: INSTAGRAM_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'whatsapp'],
    href: INSTAGRAM_ADDRESS,
    size: '2x',
    target: '_blank',
  },
  {
    icon: ['fab', 'telegram'],
    href: TELEGRAM_ADDRESS,
    size: '2x',
    target: '_blank',
  },
];

const iconsCn = clsx('flex', 'justify-center', 'flex-nowrap', 'gap-4');

/**
 * @returns React component.
 */
export default function Icons() {
  return (
    <div className={iconsCn}>
      {iconsConfig.map(({href, ...rest}) => (
        <Link
          key={href}
          href={href}
        >
          <FontAwesomeIcon {...rest} />
        </Link>
      ))}
    </div>
  );
}
