import {motion} from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: {stiffness: 1000, velocity: -100},
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: {stiffness: 1000},
    },
  },
};

/**
 *
 * @param root0
 * @param root0.i
 */
export const MenuItem = () => {
  const style = {border: '2px solid white'};
  return (
    <motion.li
      variants={variants}
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.95}}
    >
      <div
        className="icon-placeholder"
        style={style}
      />
      <div
        className="text-placeholder"
        style={style}
      />
    </motion.li>
  );
};
