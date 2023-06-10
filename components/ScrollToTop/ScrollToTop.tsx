'use client';

import {CSSProperties, useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import throttle from 'lodash/throttle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

/**
 * Props.
 */
type ScrollToTopButtonProps = {
  /** @default 1000 */
  offset?: number;
} & Pick<CSSProperties, 'top' | 'left' | 'bottom' | 'right'>;

const variants = {
  visible: {opacity: 1, x: 0},
  hidden: {opacity: 0, x: '-100%'},
};

/**
 * @param {ScrollToTopButtonProps} props Props.
 * @returns React component.
 */
export default function ScrollToTopButton({offset = 1000, ...restProps}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(getScrollOffset() >= offset);

  useEffect(() => {
    // eslint-disable-next-line jsdoc/require-jsdoc
    const onScroll = throttle(() => {
      setVisible(getScrollOffset() >= offset);
    });

    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [offset]);

  return (
    <motion.button
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      onClick={() => scrollToTop()}
      aria-hidden={true}
      {...restProps}
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
