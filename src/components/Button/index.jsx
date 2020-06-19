import Link from 'next/link';
import styles from './styles.module.scss';

const Button = ({ children, href, onClick }) => {
  if (href) {
    return (
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
