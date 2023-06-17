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
  /** @default false */
  outline?: boolean;
  /** @default 'md' */
  size?: ButtonSize;
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
);

const buttonDefaultCn = clsx(
  'bg-gradient-to-br from-accent0 to-accent2',
  'focus:ring-accent2',
  'hover:from-accent1 hover:to-accent3',
);

const buttonAlternateCn = clsx('');

const buttonOutlineCn = clsx('');

/**
 * @returns React component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {variant = 'default', size = 'md', className, outline = false, children, ...restProps},
  ref,
) {
  const cn = twMerge(
    clsx(
      baseButtonCn,
      buttonVariantMap[variant],
      buttonSizeMap[size],
      variant === 'default' ? buttonDefaultCn : buttonAlternateCn,
      outline && buttonOutlineCn,
    ),
    className,
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
