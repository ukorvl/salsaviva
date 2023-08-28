/**
 * @file Represents UI with information about teacher.
 */

import {memo} from 'react';
import clsx from 'clsx';
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
  'pointer-events-none',
  'absolute',
  'bottom-0',
  'left-0',
  'z-10',
  'mb-16',
);
const nameCn = clsx('text-4xl', 'font-bold', 'text-center', 'pointer-events-auto');

/**
 * @param {TeacherInfoProps} props Props.
 * @returns React component.
 */
function TeacherInfo({isVisible, name, danceStyles, subtitle}: TeacherInfoProps) {
  return (
    <div className={containerCn}>
      <div className={nameCn}>{name}</div>
      <div>{subtitle}</div>
      <div>{danceStyles.join(', ')}</div>
    </div>
  );
}

export default memo(TeacherInfo);
