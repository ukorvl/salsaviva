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
export default function Button({}: ButtonProps) {
  return forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {className, ...restProps},
    ref,
  ) {
    const cn = clsx(className);

    return (
      <button
        className={cn}
        ref={ref}
        {...restProps}
      ></button>
    );
  });
}
