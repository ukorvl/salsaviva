import {memo} from 'react';
import clsx from 'clsx';
import {m} from 'framer-motion';
import TransitionDuration from '@/lib/framerMotion/TransitionDuration';
import {TeachersListConfigItem} from './teachersListConfig';

/**
 * Props.
 */
type TeacherInfoProps = {
  isVisible: boolean;
  name: TeachersListConfigItem['name'];
  danceStyles: TeachersListConfigItem['danceStyles'];
  subtitle: TeachersListConfigItem['subtitle'];
};

const containerCn = clsx(
  'flex',
  'flex-col',
  'justify-end',
  'items-center',
  'w-full',
  'h-full',
  'absolute',
  'bottom-0',
  'left-0',
  'z-10',
  'mb-16',
  'overflow-hidden',
  'px-4',
  'text-center',
);
const nameCn = clsx('text-4xl', 'font-bold', 'text-center', 'pointer-events-auto');

const containerVariants = {
  visible: {opacity: 1, y: 0},
  hidden: {opacity: 0, y: '2rem', transition: {delay: 0.25}},
};

/**
 * @param {TeacherInfoProps} props Props.
 * @returns React component.
 */
function TeacherInfo({isVisible, name, danceStyles, subtitle}: TeacherInfoProps) {
  return (
    <m.div
      className={containerCn}
      animate={isVisible ? 'visible' : 'hidden'}
      variants={containerVariants}
      transition={{duration: TransitionDuration.MEDIUM, ease: 'easeOut'}}
    >
      <div className={nameCn}>{name}</div>
      <div>{subtitle}</div>
      <div>{danceStyles.join(', ')}</div>
    </m.div>
  );
}

export default memo(TeacherInfo);
