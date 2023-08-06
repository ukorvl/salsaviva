import {m, useScroll, useTransform} from 'framer-motion';
import {useRef} from 'react';
import clsx from 'clsx';
import teachersListConfig from './teachersListConfig';

/**
 * Props.
 */
type TeacherBlockProps = (typeof teachersListConfig)[number];

const nameCn = clsx('text-7xl');
const textCn = clsx('text-3xl', 'mt-4');

/**
 * @param {TeacherBlockProps} props Props.
 * @returns React component.
 */
export default function Teacher({name, style, superPowers, groupLessons}: TeacherBlockProps) {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target: ref, offset: ['start end', 'end end']});
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.9, 1], [0, 1, 1, 0]);

  return (
    <m.div
      style={{opacity}}
      ref={ref}
    >
      <div className={nameCn}>{name}</div>
      <div className={textCn}>{style}</div>
      <div className={textCn}>{`Super powers: ${superPowers}`}</div>
      <div className={textCn}>{`Group lessons: ${groupLessons}`}</div>
    </m.div>
  );
}
