import clsx from 'clsx';
import Link from 'next/link';
import AppearInViewport from '@/components/AppearInViewport/AppearInViewport';
import MainPageVideoPlayer from '@/components/MainPageVideoPlayer/MainPageVideoPlayer';

const containerCn = clsx('relative', 'z-10');
const titleCn = clsx('font-light', 'text-9xl', 'text-transparent', 'bg-clip-text');
const subtitleCn = clsx('text-2xl', 'font-light', 'tracking-widest', 'text-center');
const titleContainerCn = clsx(
  'font-sans',
  'select-none',
  'bg-gradient-to-r',
  'from-accent3',
  'to-accent0',
  'bg-clip-text',
);
const exploreCn = clsx('text-center', 'text-2xl');
const exploreLinkCn = clsx('tracking-widest', 'underline', 'underline-offset-2', 'leading-4');

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
        >
          <Link
            href="/about"
            className={exploreLinkCn}
          >
            EXPLORE
          </Link>
        </AppearInViewport>
      </div>
      <MainPageVideoPlayer />
    </>
  );
}
