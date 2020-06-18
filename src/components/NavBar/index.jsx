import Link from 'next/link';
import styles from './styles.module.scss';

const NavBar = ({ items }) => {
  if (!Array.isArray(items) || !items.length) return null;

  return (
    <nav role="navigation">
      <ul className={styles.list}>
        {items.map(({ id, title }) => (
          <li key={id}>
            <Link href={`#${title.toLowerCase()}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
