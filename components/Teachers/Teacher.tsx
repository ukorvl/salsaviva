import {m} from 'framer-motion';
import clsx from 'clsx';
import teachersListConfig from './teachersListConfig';
import ImageWrapper from '../ImageWrapper/ImageWrapper';

/**
 * Props.
 */
type TeacherBlockProps = (typeof teachersListConfig)[number];

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

const cardCn = clsx('aspect-square', 'relative', 'filter grayscale-50', 'overflow-hidden');
const imgCn = clsx('object-cover', 'w-full', 'h-full');

/**
 * @param {TeacherBlockProps} props Props.
 * @returns React component.
 */
export default function Teacher({
  name,
  style,
  superPowers,
  groupLessons,
  imgSrc,
}: TeacherBlockProps) {
  return (
    <m.div
      className={cardCn}
      variants={variants}
    >
      <ImageWrapper
        src={`/images/${imgSrc}`}
        blurDataURL={`/images/blured/${imgSrc}`}
        alt={name}
        className={imgCn}
      />
    </m.div>
  );
}
