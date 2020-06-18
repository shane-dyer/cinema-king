import Link from 'next/link';
import styles from './styles.module.scss';

const ButtonLink = ({ children, href }) => (
  <Link href={href}>
    <a className={styles.button}>{children}</a>
  </Link>
);

export default ButtonLink;
