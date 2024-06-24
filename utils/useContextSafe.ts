import React from 'react';

/**
 * @param context - React context.
 * @returns Context value.
 */
export const useContextSafe = <T>(context: React.Context<T>) => {
  const contextValue = React.useContext(context);

  if (contextValue === undefined) {
    throw new Error(context.displayName + 'must be used within a Provider with a value');
  }

  return contextValue;
};
