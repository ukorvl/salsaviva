import {m} from 'framer-motion';
import clsx from 'clsx';
import teachersListConfig from './teachersListConfig';
import ImageWrapper from '../ImageWrapper/ImageWrapper';

/**
 * Props.
 */
type TeacherBlockProps = (typeof teachersListConfig)[number];

const imageCn = clsx('w-full');
const textCn = clsx('text-3xl', 'mt-4');

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
    <m.div>
      <ImageWrapper
        src={`/images/${imgSrc}`}
        blurDataURL={`/images/blured/${imgSrc}`}
        alt={name}
        className={imageCn}
        fill={false}
        width={300}
        height={1000}
      />
    </m.div>
  );
}
