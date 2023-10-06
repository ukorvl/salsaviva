import clsx from 'clsx';
import {memo} from 'react';

/**
 * Props.
 */
type ErrorMessageProps = {
  message?: string;
  hasError?: boolean;
};

const messageCn = clsx('');

/**
 * @param {ErrorMessageProps} props Props.
 * @returns React component.
 */
function ErrorMessage({message, hasError}: ErrorMessageProps) {
  return <div className={messageCn}>{hasError ? message : null}</div>;
}

export default memo(ErrorMessage);
