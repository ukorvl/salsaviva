'use client';

import clsx from 'clsx';
import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import useDisableRightClick from '@/lib/shared/useDisableRightClick';
import bgVideoConfig from './bgVideosConfig';
import VideoBackground from './VideoBackground';
import usePreloadVideo from './usePreloadVideo';

const containerCn = clsx('fixed', 'top-0', 'left-0', 'w-full', 'h-full');

/**
 * @returns React component.
 */
export default function VideoPlayer() {
  const [vidIndex, setVidIndex] = useState(0);
  const videosListLength = bgVideoConfig.length;
  const nextVidIndex = vidIndex < videosListLength - 1 ? vidIndex + 1 : 0;
  // eslint-disable-next-line jsdoc/require-jsdoc
  const incrementVidIndex = () => setVidIndex(nextVidIndex);
  const {src, type} = bgVideoConfig[vidIndex];
  usePreloadVideo(bgVideoConfig[nextVidIndex].src);
  const ref = useDisableRightClick<HTMLDivElement>();

  return (
    <div
      className={containerCn}
      ref={ref}
    >
      <AnimatePresence mode="wait">
        {
          <VideoBackground
            key={src}
            src={src}
            type={type}
            onBeforeEnded={incrementVidIndex}
          />
        }
      </AnimatePresence>
    </div>
  );
}
