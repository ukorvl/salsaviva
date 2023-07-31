import {SVGMotionProps, m} from 'framer-motion';
import clsx from 'clsx';
import menuButtonSize from './menuButtonSize';

const pathCn = clsx('fill-white', 'stroke-white');

// eslint-disable-next-line jsdoc/require-jsdoc
const Path = ({variants}: SVGMotionProps<SVGPathElement>) => (
  <m.path
    strokeWidth={menuButtonSize / 18}
    strokeLinecap="round"
    variants={variants}
    className={pathCn}
  />
);

/**
 * @returns React component.
 */
export default function MenuToggleSvgContent() {
  const svgViewBoxSize = menuButtonSize / 2;
  const svgElSize = svgViewBoxSize / 1.5;
  const svgElOffset = (svgViewBoxSize - svgElSize) / 2;

  return (
    <svg
      width={svgViewBoxSize}
      height={svgViewBoxSize}
      viewBox={`0 0 ${svgViewBoxSize} ${svgViewBoxSize}`}
    >
      <Path
        variants={{
          closed: {
            d: `M ${svgElOffset},${svgElOffset} L ${svgElSize + svgElOffset},${svgElOffset}`,
          },
          open: {
            d: `M ${svgElOffset},${svgElOffset} L ${svgElSize + svgElOffset},${
              svgElSize + svgElOffset
            }`,
          },
        }}
      />
      <Path
        variants={{
          closed: {
            d: `M ${svgElOffset},${svgElSize + svgElOffset} L ${svgElSize + svgElOffset},${
              svgElSize + svgElOffset
            }`,
          },
          open: {
            d: `M ${svgElOffset},${svgElSize + svgElOffset} L ${
              svgElSize + svgElOffset
            },${svgElOffset}`,
          },
        }}
      />
    </svg>
  );
}
