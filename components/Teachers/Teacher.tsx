import teachersListConfig from './teachersListConfig';

/**
 * Props.
 */
type TeacherBlockProps = (typeof teachersListConfig)[number];

/**
 * @param {TeacherBlockProps} props Props.
 * @returns React component.
 */
export default function Teacher({name}: TeacherBlockProps) {
  return <div>{name}</div>;
}
