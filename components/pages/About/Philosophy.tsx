import clsx from 'clsx';
import AppearInViewport from '@/components/shared/AppearInViewport/AppearInViewport';
import ImageWrapper from '@/components/shared/ImageWrapper/ImageWrapper';

const textCn = clsx('text-5xl', 'z-10', 'leading-normal');
const containerCn = clsx(
  'px-32',
  'py-48',
  'text-center',
  'relative',
  'w-full',
  'flex',
  'items-center',
  'mt-24',
);
const imgCn = clsx('object-cover', 'z-0');

/**
 * @returns React component.
 */
export default function Philosophy() {
  return (
    <AppearInViewport
      className={containerCn}
      transition={{delay: 2}}
    >
      <ImageWrapper
        className={imgCn}
        src="/images/about.0.jpg"
        blurDataURL="images/blured/about.0.jpg"
        fill
      />
      <div className={textCn}>
        Our philosophy is to create a POSITIVE COMMUNITY where you develop joy, self-expression,
        personal growth, friendships and dance skills.
      </div>
    </AppearInViewport>
  );
}
