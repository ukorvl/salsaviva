import clsx from 'clsx';
import {ButtonHTMLAttributes, DetailedHTMLProps, forwardRef} from 'react';
import {twMerge} from 'tailwind-merge';

/**
 * Button variant.
 */
type ButtonVariant = 'default' | 'alternate';

/**
 * Button variant.
 */
type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button own props.
 */
type ButtonOwnProps = {
  /** @default 'default' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
};

/**
 * Props.
 */
type ButtonProps = ButtonOwnProps &
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'ref'>;

const buttonSizeMap: Record<ButtonSize, string> = {
  sm: 'px-2 py-1 rounded-md text-sm',
  md: 'px-4 py-2 rounded-lg',
  lg: 'px-8 py-4 rounded-xl',
};

const baseButtonCn = clsx(
  'inline-flex',
  'justify-center',
  'items-center',
  'gap-4',
  'h-30',
  'relative',
  'overflow-hidden',
  'select-none',
  'focus:ring-4',
  'focus:outline-none',
  'focus:ring-white',
);

const buttonDefaultCn = clsx(
  'bg-gradient-to-br from-accent1 to-accent3',
  'hover:from-accent0 hover:to-accent2',
);

const buttonAlternateCn = clsx('hover:bg-transparent-white', 'focus:bg-transparent-white');

const buttonVariantMap: Record<ButtonVariant, string> = {
  default: buttonDefaultCn,
  alternate: buttonAlternateCn,
};

/**
 * @returns React component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variant = 'default', size = 'md', className, children, ...restProps},
  ref,
) {
  const cn = twMerge(clsx(baseButtonCn, buttonVariantMap[variant], buttonSizeMap[size]), className);

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
