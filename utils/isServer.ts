/**
 * @returns True if code is running on the server.
 */
export function isServer() {
  return typeof window === 'undefined';
}
