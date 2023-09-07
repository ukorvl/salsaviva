import clsx from 'clsx';
import {
  DetailedHTMLProps,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
  useId,
} from 'react';

/**
 * Native props for input.
 */
type TextFieldNativeProps = Omit<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'ref'
>;

/**
 * Own component props for input.
 */
type TextFieldOwnProps = {
  label: string;
  type?: 'text' | 'tel' | 'email' | 'number';
  placeholder: string;
};

/**
 * Props.
 */
export type TextFieldProps = TextFieldOwnProps &
  Omit<TextFieldNativeProps, keyof TextFieldOwnProps>;

const labelCn = clsx(
  'block',
  'relative',
  'border-b',
  'border-gray-400',
  'focus-within:border-blue-500',
);

const inputCn = clsx(
  'bg-transparent',
  'peer',
  'w-full',
  'border-none',
  'outline-none',
  'focus:ring-0',
  'focus:border-transparent',
  'placeholder-transparent',
);

const spanCn = clsx(
  'absolute',
  'bottom-0',
  'left-0',
  'w-full',
  '-translate-y-1/2',
  'text-xs',
  'text-gray-700',
  'transition-all',
  'peer-placeholder-shown:top-1/2',
  'peer-placeholder-shown:text-sm',
  'peer-focus:top-2',
  'peer-focus:text-xs',
);

/**
 * @param {TextFieldProps} props - Props.
 * @param ref - Ref to input element.
 * @returns React element.
 */
const TextFieldComponent: ForwardRefRenderFunction<HTMLInputElement, TextFieldProps> = (
  {label, id: outerId, type = 'text', ...rest},
  ref,
) => {
  const innerId = useId();
  const id = outerId || innerId;

  return (
    <label
      htmlFor={id}
      className={labelCn}
    >
      <input
        id={id}
        type={type}
        ref={ref}
        className={inputCn}
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(TextFieldComponent);

TextField.displayName = 'TextField';

export default TextField;
