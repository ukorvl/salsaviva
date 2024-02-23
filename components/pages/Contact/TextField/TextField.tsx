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
  name: string;
  type?: 'text' | 'tel' | 'email' | 'number';
  placeholder: string;
  hasError?: boolean;
};

/**
 * Props.
 */
export type TextFieldProps = TextFieldOwnProps &
  Omit<TextFieldNativeProps, keyof TextFieldOwnProps>;

// eslint-disable-next-line jsdoc/require-jsdoc
const labelCn = (hasError: TextFieldProps['hasError']) =>
  clsx(
    'block',
    'relative',
    'border-b',
    'border-gray-200',
    'focus-within:border-white',
    'overflow-hidden',
    'transition-border',
    'duration-300',
    'ease-in-out',
    'pt-3',
    'rounded-sm',
    hasError && 'border-red-500! text-red-500!',
  );

const inputCn = clsx(
  'bg-transparent',
  'peer',
  'border-none',
  'outline-none',
  'focus:ring-0',
  'focus:border-transparent',
  'placeholder-transparent',
  ':placeholder-shown:overflow-elipsis',
);

const spanCn = clsx(
  'absolute',
  'start-0',
  'top-2',
  '-translate-y-1/2',
  'text-sm',
  'text-white',
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
  {label, id: outerId, type = 'text', hasError, ...rest},
  ref,
) => {
  const innerId = useId();
  const id = outerId || innerId;

  return (
    <label
      htmlFor={id}
      className={labelCn(hasError)}
    >
      <input
        id={id}
        type={type}
        ref={ref}
        className={inputCn}
        {...rest}
      />
      <span className={spanCn}>{label}</span>
    </label>
  );
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(TextFieldComponent);

TextField.displayName = 'TextField';

export default TextField;
