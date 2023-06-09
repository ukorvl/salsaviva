'use client';

import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import throttle from 'lodash/throttle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Props.
 */
type ScrollToTopButtonProps = {
  /** @default 1000 */
  top?: number;
};

const variants = {
  visible: {opacity: 1, x: 0},
  hidden: {opacity: 0, x: '-100%'},
};

/**
 * @param {ScrollToTopButtonProps} props Props.
 * @returns React component.
 */
export default function ScrollToTopButton({top = 1000}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(getScrollOffset() >= top);

  useEffect(() => {
    // eslint-disable-next-line jsdoc/require-jsdoc
    const onScroll = throttle(() => {
      setVisible(getScrollOffset() >= top);
    });

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [top]);

  return (
    <motion.button
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      onClick={() => scrollToTop()}
    >
      <FontAwesomeIcon icon={['fas', 'circle-up']} />
    </motion.button>
  );
}

// eslint-disable-next-line jsdoc/require-jsdoc
function getScrollOffset() {
  return document.documentElement.scrollTop;
}

// eslint-disable-next-line jsdoc/require-jsdoc
function scrollToTop(smooth: boolean = false) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}
