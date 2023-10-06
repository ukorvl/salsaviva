import {useCallback, useState} from 'react';
import {formspreeRequest} from './formspreeRequest';

/**
 * Formspree state.
 */
export type FormspreeState = {
  status: 'idle' | 'submitting' | 'success' | 'error';
};

/**
 * @param formId Form id.
 * @returns Formspree state and submit function.
 */
export default function useFormspree<T extends Record<string, unknown>>(
  formId: string,
): [FormspreeState, (data: T) => Promise<Response | undefined>] {
  const [state, setState] = useState<FormspreeState>({
    status: 'idle',
  });

  const submit = useCallback(
    async (data: T) => {
      setState({status: 'submitting'});

      try {
        const response = await formspreeRequest<T>(formId, data);
        setState({status: 'success'});

        return response;
      } catch (error) {
        setState({status: 'error'});
      }
    },
    [formId],
  );

  return [state, submit];
}
