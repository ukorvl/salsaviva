import clsx from 'clsx';
import UniversalLink from '../UniversalLink/UniversalLink';
import teachersListConfig from './teachersListConfig';

const contentCn = clsx('w-full', 'h-full', 'flex', 'flex-col', 'items-center', 'justify-center');
const listCn = clsx('pt-24');
const liCn = clsx('mb-4');
const linkCn = clsx('text-3xl', 'animated-link', 'font-light');

/**
 * @returns React component.
 */
export default function TeachersList() {
  return (
    <ul className={listCn}>
      {teachersListConfig.map(({name, id}) => (
        <li
          key={id}
          className={liCn}
        >
          <UniversalLink
            href={`#${id}`}
            className={linkCn}
          >
            {name}
          </UniversalLink>
        </li>
      ))}
    </ul>
  );
}
