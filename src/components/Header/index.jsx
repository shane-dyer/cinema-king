import { Logo, NavBar } from 'components';
import styles from './styles.module.scss';

const NavItems = [
  {
    id: 1,
    title: 'Movies',
  },
  {
    id: 2,
    title: 'Games',
  },
  {
    id: 3,
    title: 'Podcasts',
  },
  {
    id: 4,
    title: 'Awards',
  },
  {
    id: 5,
    title: 'Shopping',
  },
  {
    id: 6,
    title: 'Win',
  },
];

const Header = () => (
  <header className={styles.header} role="header">
    <Logo />
    <NavBar items={NavItems} />
  </header>
);

export default Header;
