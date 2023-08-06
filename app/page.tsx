import clsx from 'clsx';
import AppearInViewport from '@/components/AppearInViewport/AppearInViewport';
import MainPageVideoPlayer from '@/components/MainPageVideoPlayer/MainPageVideoPlayer';
import UniversalLink from '@/components/UniversalLink/UniversalLink';

const containerCn = clsx('relative', 'z-10', 'flex', 'flex-col', 'items-center', 'grow');
const titleCn = clsx('font-light', 'text-8xl');
const subtitleCn = clsx('text-1.5xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx('font-sans', 'select-none');
const exploreCn = clsx('text-center', 'text-2xl', 'mt-auto');
const exploreLinkCn = clsx('tracking-wider', 'animated-link');

const exploreLinkVariants = {
  visible: {opacity: 1, y: 0, scale: 1},
  hidden: {opacity: 0, y: '2rem', scale: 0.9},
};

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
        <AppearInViewport
          transition={{delay: 1.2}}
          className={exploreCn}
          variants={exploreLinkVariants}
        >
          <UniversalLink
            href="/about"
            className={exploreLinkCn}
          >
            EXPLORE
          </UniversalLink>
        </AppearInViewport>
      </div>
      <MainPageVideoPlayer />
    </>
  );
}
