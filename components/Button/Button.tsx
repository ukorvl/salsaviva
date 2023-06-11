import clsx from 'clsx';
import {ButtonHTMLAttributes, DetailedHTMLProps, forwardRef} from 'react';

/**
 * Button variant.
 */
type ButtonVariant = 'default' | 'alternate';

/**
 * Button own props.
 */
type ButtonOwnProps = {
  /** @default 'default' */
  variant?: ButtonVariant;
  /** @default false */
  outlined?: boolean;
};

/**
 * Props.
 */
type ButtonProps = ButtonOwnProps &
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

const buttonVariantMap: Record<ButtonVariant, string> = {
  default: '',
  alternate: '',
};

/**
 * @returns React component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variant = 'default', className, outlined = false, children, ...restProps},
  ref,
) {
  const cn = clsx(
    className,
    buttonVariantMap[variant],
    'inline-flex items-center justify-center gap-4 relative px-4 py-2 overflow-hidden text-white rounded-lg select-none',
    'bg-gradient-to-br from-accent0 to-accent2',
    'focus:ring-4 focus:outline-none focus:ring-blue-300',
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
