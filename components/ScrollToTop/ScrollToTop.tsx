'use client';

import {CSSProperties, useCallback, useState} from 'react';
import {m} from 'framer-motion';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleArrowUp} from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import useScroll, {ScrollHandler} from '@/lib/shared/useScroll';
import isPrefersReducedMotion from '@/utils/isPrefersReducedMotion';

/**
 * Props.
 */
type ScrollToTopButtonProps = {
  /** @default 1000 */
  offset?: number;
} & Pick<CSSProperties, 'top' | 'left' | 'bottom' | 'right'>;

const variants = {
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: '2rem'},
};

const btnCn = clsx('fixed');

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
    <m.button
      className={btnCn}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={variants}
      transition={{duration: 0.5, ease: 'easeOut'}}
      onClick={() => scrollToTop(!isPrefersReducedMotion())}
      aria-hidden={true}
      style={position}
    >
      <FontAwesomeIcon
        icon={faCircleArrowUp}
        size="2xl"
      />
    </m.button>
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
