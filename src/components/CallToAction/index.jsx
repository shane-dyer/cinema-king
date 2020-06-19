import { Container } from 'components';
import styles from './styles.module.scss';

const CallToAction = ({ children }) => (
  <section className={styles.banner}>
    <Container>{children}</Container>
  </section>
);

export default CallToAction;
