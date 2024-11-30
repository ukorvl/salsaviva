import {useEffect, useRef} from 'react';

/**
 * Run callback when video is about to end.
 * @param onBeforeEnd Callback to run when video is about to end.
 * @param timeBeforeEnd Time before end in seconds.
 * @returns Ref to the video element.
 */
export default function useVideoBeforeEnd(onBeforeEnd: () => void, timeBeforeEnd: number) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current!;
    // eslint-disable-next-line jsdoc/require-jsdoc
    const handleTimeUpdate = () => {
      if (video.currentTime > video.duration - timeBeforeEnd) {
        onBeforeEnd();
      }
    };

    if (video) {
      video.addEventListener('timeupdate', handleTimeUpdate);
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [ref, onBeforeEnd, timeBeforeEnd]);

  return [ref];
}
