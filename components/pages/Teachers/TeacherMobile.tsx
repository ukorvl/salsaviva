import {useMotionValueEvent, useScroll} from 'framer-motion';
import {useRef, useState} from 'react';
import {TeachersListConfigItem} from './teachersListConfig';
import TeacherTemplate from './TeacherTemplate';

/**
 * Props.
 */
type TeacherMobileProps = TeachersListConfigItem;

/**
 * @param props Props.
 * @returns React component.
 */
export default function TeacherMobile(props: TeacherMobileProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });
  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setIsVisible(latest > 0.1 && latest < 1);
  });

  return (
    <TeacherTemplate
      {...props}
      isDescriptionVisible={isVisible}
      ref={ref}
    />
  );
}
