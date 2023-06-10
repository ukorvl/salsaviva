import clsx from 'clsx';
import {ButtonHTMLAttributes, DetailedHTMLProps, forwardRef} from 'react';

/**
 * Button own props.
 */
type ButtonOwnProps = {
  /** @default */
  outline?: boolean;
};

/**
 * Props.
 */
type ButtonProps = ButtonOwnProps &
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

/**
 * @returns React component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {className, children, ...restProps},
  ref,
) {
  const cn = clsx(
    className,
    'inline-flex items-center justify-center gap-4 relative p-4 overflow-hidden font-medium text-white bg-red rounded-lg',
  );

  return (
    <button
      className={cn}
      ref={ref}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
