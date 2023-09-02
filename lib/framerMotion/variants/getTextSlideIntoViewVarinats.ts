import type {Variants} from 'framer-motion';
import {HorizontalDirection} from '../types/Direction';

// eslint-disable-next-line jsdoc/require-jsdoc
const getTextSlideIntoViewVarinats = (from: HorizontalDirection): Variants => ({
  hidden: {
    opacity: 0,
    x: from === 'left' ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
});

export default getTextSlideIntoViewVarinats;
