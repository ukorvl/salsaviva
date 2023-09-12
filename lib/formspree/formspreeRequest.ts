/**
 * @param formId Form id.
 * @param data Data.
 * @returns Response.
 */
export async function formspreeRequest<T extends Record<string, unknown>>(
  formId: string,
  data: T,
): Promise<Response> {
  const url = `https://formspree.io/f/${formId}`;
  const body = JSON.stringify(data);
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors' as RequestMode,
  };

  const result = await fetch(url, {method: 'POST', body, ...options});
  return await result.json();
}
