import Link, {LinkProps} from 'next/link';
import {AnchorHTMLAttributes, forwardRef} from 'react';

/**
 * Props.
 */
type UniversalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  LinkProps;

const externalLinkOpenings = ['https://', 'http://', 'mailto:', 'tel:'];

/**
 * @param href Href.
 * @returns True if link is external.
 */
function isLinkExternal(href: string) {
  return externalLinkOpenings.some(opening => href.startsWith(opening));
}

/**
 * @returns React component.
 */
const UniversalLink = forwardRef<HTMLAnchorElement, UniversalLinkProps>(function UniversalLink(
  {children, href, ...props},
  ref,
) {
  if (typeof href === 'object' || !isLinkExternal(href)) {
    return (
      <Link
        href={href}
        ref={ref}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      ref={ref}
      {...props}
    >
      {children}
    </a>
  );
});

export default UniversalLink;
