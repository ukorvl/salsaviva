import {useEffect} from 'react';

const preloadedVideosCache = new Map<string, boolean>();

/**
 * Hook for preloading video.
 * @param urlToPreload Url.
 */
export default function usePreloadVideo(urlToPreload: string) {
  useEffect(() => {
    if (!preloadedVideosCache.has(urlToPreload)) {
      const video = document.createElement('video');
      video.src = urlToPreload;
      video.preload = 'auto';
      video.load();
      preloadedVideosCache.set(urlToPreload, true);

      return () => {
        video.remove();
      };
    }
  }, [urlToPreload]);
}
