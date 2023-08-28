import clsx from 'clsx';
import AppearInViewport from '@/components/AppearInViewport/AppearInViewport';
import MainPageVideoPlayer from '@/components/MainPageVideoPlayer/MainPageVideoPlayer';
import CATLink from '@/components/CATLink/CATLink';
import SocialIcons from '@/components/SocialIcons/SocialIcons';

const containerCn = clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'grow');
const titleCn = clsx('font-light', 'text-8xl', 'mt-24');
const subtitleCn = clsx('text-1.5xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx('font-sans', 'select-none');
const exploreCn = clsx('mt-auto');

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
      <SocialIcons />
      <MainPageVideoPlayer />
    </>
  );
}
