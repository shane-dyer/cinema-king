import { Logo } from 'components';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles.header} role="header">
    <Logo />
  </header>
);

export default Header;
