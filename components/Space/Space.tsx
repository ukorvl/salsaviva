import clsx from 'clsx';
import {Children, HTMLAttributes, ReactNode} from 'react';

// eslint-disable-next-line jsdoc/require-jsdoc
type SpaceSize = 'sm' | 'md' | 'lg' | 'xl';

// eslint-disable-next-line jsdoc/require-jsdoc
type SpaceDirection = 'vertical' | 'horizontal';

/**
 * Space own props.
 */
type SpaceOwnProps = {
  children: ReactNode;
  /** @default 'horizontal' */
  direction?: SpaceDirection;
  /** @default 'md' */
  size?: SpaceSize;
};

/**
 * Props.
 */
type SpaceProps = SpaceOwnProps & HTMLAttributes<HTMLDivElement>;

const sizeMap: Record<SpaceSize, number> = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
};

/**
 * @param {SpaceProps} props Props.
 * @returns React component.
 */
export default function Space({
  children,
  direction = 'horizontal',
  size = 'md',
  className,
}: SpaceProps) {
  const cn = clsx(
    'flex',
    `gap-${sizeMap[size]}`,
    direction === 'vertical' && 'flex-col',
    className,
  );

  return (
    <div className={cn}>
      {Children.map(children, child => {
        return <div>{child}</div>;
      })}
    </div>
  );
}
