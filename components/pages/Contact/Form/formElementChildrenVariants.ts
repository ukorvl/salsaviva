/**
 * Frmaer motion variants for form children elements.
 */
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

export default variants;
