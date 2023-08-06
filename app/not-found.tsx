import UniversalLink from '@/components/UniversalLink/UniversalLink';

/**
 * @returns React component.
 */
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <UniversalLink href="/blog">all posts</UniversalLink>
      </p>
    </div>
  );
}
