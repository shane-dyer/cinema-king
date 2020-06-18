import { Container, NavBar } from 'components';
import styles from './styles.module.scss';

const NavItems = [
  {
    id: 1,
    title: 'Help',
  },
  {
    id: 2,
    title: 'Shop',
  },
  {
    id: 3,
    title: 'FAQs',
  },
  {
    id: 4,
    title: 'About Us',
  },
  {
    id: 5,
    title: 'Careers',
  },
  {
    id: 6,
    title: 'Blog',
  },
  {
    id: 7,
    title: 'Contact',
  },
];

const Footer = () => (
  <footer className={styles.footer} role="footer">
    <Container>
      <NavBar items={NavItems} />
    </Container>
  </footer>
);

export default Footer;
