'use client';

const activeTabIconsSet = [
  {
    rel: 'icon',
    sizes: 'any',
    href: '/icons/favicon.ico',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/icons/icon.svg',
  },
];

const disabledTabIconsSet = [
  {
    rel: 'icon',
    sizes: 'any',
    href: '/icons/favicon.dark.ico',
  },
  {
    rel: 'icon',
    type: 'image/svg+xml',
    href: '/icons/icon.dark.svg',
  },
];

const iconsMap = {
  active: activeTabIconsSet,
  disabled: disabledTabIconsSet,
};

/**
 * Change website favicon.
 * @param active Should use active favicon.
 */
export default function toggleFavicon(active: boolean) {
  const head = document.querySelector('head');

  const iconsToAdd = active ? iconsMap['active'] : iconsMap['disabled'];
  const iconsToRemove = active ? iconsMap['disabled'] : iconsMap['active'];

  iconsToRemove.forEach(({href}) => {
    const link = document.querySelector(`link[href="${href}"]`);
    link?.remove();
  });

  iconsToAdd.forEach(({rel, type, href, sizes}) => {
    const link = document.createElement('link');

    link.setAttribute('rel', rel);
    link.setAttribute('href', href);

    type && link.setAttribute('type', type);
    sizes && link.setAttribute('sizes', sizes);

    head?.appendChild(link);
  });
}
