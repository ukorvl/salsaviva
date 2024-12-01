'use client';

import {IconConfig} from '@/app/socialIcons';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';
import clsx from 'clsx';
import useIsMobile from '@/lib/shared/useIsMobile';

type MainPageSocialIconsProps = {
  icons: IconConfig[];
};

const MainPageSocialIcons = ({icons}: MainPageSocialIconsProps) => {
  const iconsCn = clsx(
    'fixed',
    'lg:left-4',
    'lg:-translate-y-2/4',
    'lg:top-2/4',
    'left-2',
    'bottom-24',
    'translate-x-2/4',
  );
  const [isMobile] = useIsMobile();
  const direction = isMobile ? 'row' : 'column';

  return (
    <SocialIcons
      direction={direction}
      className={iconsCn}
      icons={icons}
    />
  );
};

export default MainPageSocialIcons;
