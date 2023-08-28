'use client';

import clsx from 'clsx';
import {AnimatePresence} from 'framer-motion';
import {useState} from 'react';
import bgVideoConfig from './bgVideosConfig';
import VideoBackground from './VideoBackground';

const containerCn = clsx('fixed', 'top-0', 'left-0', 'w-full', 'h-full');

/**
 * @returns React component.
 */
export default function MainPageVideoPlayer() {
  const [vidIndex, setVidIndex] = useState(0);
  // eslint-disable-next-line jsdoc/require-jsdoc
  const incrementVidIndex = () =>
    vidIndex < bgVideoConfig.length - 1 ? setVidIndex(vidIndex + 1) : setVidIndex(0);
  const {src, type} = bgVideoConfig[vidIndex];

  return (
    <div className={containerCn}>
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
