import {m} from 'framer-motion';
import clsx from 'clsx';
import {useHover} from '@/lib/shared/useHover';
import useDisableRightClick from '@/lib/shared/useDisableRightClick';
import {TeachersListConfigItem} from './teachersListConfig';
import ImageWrapper from '../../shared/ImageWrapper/ImageWrapper';
import TeacherInfo from './TeacherInfo';

/**
 * Props.
 */
type TeacherBlockProps = TeachersListConfigItem;

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

const cardCn = clsx('aspect-square', 'relative', 'overflow-hidden', 'relative');
const imgCn = clsx('object-cover', 'w-full', 'h-full');

/**
 * @param {TeacherBlockProps} props Props.
 * @returns React component.
 */
export default function Teacher({name, danceStyles, imgSrc, subtitle}: TeacherBlockProps) {
  const [ref, isHover] = useHover<HTMLDivElement>();
  const imgRef = useDisableRightClick<HTMLImageElement>();

  return (
    <m.div
      className={cardCn}
      variants={variants}
      ref={ref}
    >
      <TeacherInfo
        name={name}
        danceStyles={danceStyles}
        isVisible={isHover}
        subtitle={subtitle}
      />
      <ImageWrapper
        src={`/images/${imgSrc}`}
        blurDataURL={`/images/blured/${imgSrc}`}
        alt={name}
        className={imgCn}
        ref={imgRef}
      />
    </m.div>
  );
}
