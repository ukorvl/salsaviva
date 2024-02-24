import clsx from 'clsx';
import {memo} from 'react';

/**
 * Props.
 */
type ErrorMessageProps = {
  message?: string;
  hasError?: boolean;
};

/**
 * @param {ErrorMessageProps} props Props.
 * @returns React component.
 */
function ErrorMessage({message, hasError}: ErrorMessageProps) {
  const messageCn = clsx('text-red-500', 'text-sm', 'mt-1', 'absolute', 'bottom-0', 'left-0');

  return <div className={messageCn}>{hasError ? message : null}</div>;
}

export default memo(ErrorMessage);
