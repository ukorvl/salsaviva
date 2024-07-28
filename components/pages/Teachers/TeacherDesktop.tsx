import {useHover} from '@/lib/shared/useHover';
import {TeachersListConfigItem} from './teachersListConfig';
import TeacherTemplate from './TeacherTemplate';

/**
 * Props.
 */
type TeacherDesktopProps = TeachersListConfigItem;

/**
 * @param props Props.
 * @returns React component.
 */
export default function TeacherDesktop(props: TeacherDesktopProps) {
  const [ref, isHover] = useHover<HTMLDivElement>();

  return (
    <TeacherTemplate
      {...props}
      isDescriptionVisible={isHover}
      ref={ref}
    />
  );
}
