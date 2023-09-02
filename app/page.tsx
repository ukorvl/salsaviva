import clsx from 'clsx';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import MainPageVideoPlayer from '@/components/pages/MainPageVideoPlayer/MainPageVideoPlayer';
import CATLink from '@/components/shared/CATLink/CATLink';
import SocialIcons from '@/components/shared/SocialIcons/SocialIcons';

const containerCn = clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'grow');
const titleCn = clsx('font-light', 'text-8xl', 'mt-24');
const subtitleCn = clsx('text-1.5xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx('font-sans', 'select-none');
const exploreCn = clsx('mt-auto');
const iconsCn = clsx('fixed', 'left-4', '-translate-y-2/4', 'top-2/4');

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
        />
      </div>
      <SocialIcons
        iconSize="2xl"
        direction="column"
        className={iconsCn}
      />
      <MainPageVideoPlayer />
    </>
  );
}
