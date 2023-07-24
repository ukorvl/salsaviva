/**
 * Dynamically import lib features.
 * @returns Framer motion lib features.
 */
export async function loadFeatures() {
  const res = await import('./features');
  return res.default;
}
