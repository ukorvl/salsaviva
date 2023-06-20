'use client';

import {CSSProperties, useCallback, useState} from 'react';
import {motion} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import useScroll, {ScrollHandler} from '@/utils/useScroll';

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
export default function ScrollToTopButton({offset = 1000, ...position}: ScrollToTopButtonProps) {
  const [visible, setVisible] = useState(false);

  const scrollHandler: ScrollHandler = useCallback(
    ({scrollTop}) => {
      setVisible(scrollTop ? scrollTop > offset : false);
    },
    [offset],
  );

  useScroll(scrollHandler);

  return (
    <motion.button
      className="absolute"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      onClick={() => scrollToTop()}
      aria-hidden={true}
      style={position}
    >
      <FontAwesomeIcon icon={['fas', 'circle-arrow-up']} />
    </motion.button>
  );
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
