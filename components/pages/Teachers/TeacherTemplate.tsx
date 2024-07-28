import {m} from 'framer-motion';
import clsx from 'clsx';
import {forwardRef} from 'react';
import useDisableRightClick from '@/lib/shared/useDisableRightClick';
import ImageWrapper from '../../shared/ImageWrapper/ImageWrapper';
import TeacherInfo from './TeacherInfo';
import {TeachersListConfigItem} from './teachersListConfig';

/**
 * Props.
 */
type TeacherTemplateProps = {
  isDescriptionVisible: boolean;
} & TeachersListConfigItem;

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

const cardCn = clsx('aspect-square', 'overflow-hidden', 'relative');
const imgCn = clsx('object-cover', 'w-full', 'h-full');

/**
 * @param props Props.
 * @returns React component.
 */
export default forwardRef<HTMLDivElement, TeacherTemplateProps>(function TeacherTemplate(
  {isDescriptionVisible, name, danceStyles, imgSrc, subtitle},
  ref,
) {
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
        isVisible={isDescriptionVisible}
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
});
