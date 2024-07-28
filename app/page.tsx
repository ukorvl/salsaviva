import clsx from 'clsx';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import MainPageVideoPlayer from '@/components/pages/MainPageVideoPlayer/MainPageVideoPlayer';
import CATLink from '@/components/shared/CATLink/CATLink';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';
import getSocialicons from './socialIcons';

const containerCn = clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'grow');
const titleCn = clsx('font-light', 'text-6xl', 'md:text-8xl', 'mt-24', 'text-center');
const subtitleCn = clsx(
  'text-lg',
  'md:text-1.5xl',
  'font-light',
  'tracking-widest',
  'text-center',
  'p-12',
  'md:p-0',
);
const titleContainerCn = clsx('font-sans', 'select-none');
const exploreCn = clsx('mt-auto', 'md:inline', 'hidden');
const iconsCn = clsx('fixed', 'lg:left-4', 'lg:-translate-y-2/4', 'lg:top-2/4');

/**
 * @returns React component.
 */
export default function Home() {
  return (
    <>
      <div className={containerCn}>
        <AppearInViewport className={titleContainerCn}>
          <h1 className={titleCn}>
            SALSA<span className="font-extrabold">VIVA</span>
          </h1>
          <h6 className={subtitleCn}>SOCIAL DANCE SCHOOL</h6>
        </AppearInViewport>
        <CATLink
          text="EXPLORE"
          className={exploreCn}
          path="/about"
          rel="noopener noreferrer"
        />
      </div>
      <SocialIcons
        direction="column"
        className={iconsCn}
        icons={getSocialicons('xl')}
      />
      <MainPageVideoPlayer />
    </>
  );
}
