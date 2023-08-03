import UniservsalLink from '@/components/UniservsalLink/UniservsalLink';

/**
 * @returns React component.
 */
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <UniservsalLink href="/blog">all posts</UniservsalLink>
      </p>
    </div>
  );
}
