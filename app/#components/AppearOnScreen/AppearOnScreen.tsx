import {OnScreen} from '@ukorvl/react-on-screen';
import {Children, ReactElement, RefObject} from 'react';
import {Variants, motion} from 'framer-motion';

/**
 * Props.
 */
type AppearOnScreenProps = {
  children: (param: {ref: RefObject<any>}) => ReactElement;
  /** @default '5rem'' */
  margin?: string;
};

/**
 * @param {AppearOnScreenProps} props Props.
 * @returns React component.
 */
export default function AppearOnScreen({
  children,
  margin = '5rem',
}: AppearOnScreenProps): ReactElement {
  const variants: Variants = {
    visible: {opacity: 1, x: 0},
    hidden: {opacity: 0, x: '-100%'},
  };

  return (
    <OnScreen<any>
      once
      margin={margin}
    >
      {({ref, isOnScreen}) => (
        <motion.div
          animate={isOnScreen ? 'visible' : 'hidden'}
          variants={variants}
        >
          {Children.only(children({ref}))}
        </motion.div>
      )}
    </OnScreen>
  );
}
