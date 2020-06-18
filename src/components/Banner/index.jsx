import { Container } from 'components';
import styles from './styles.module.scss';

const Banner = ({ title, category }) => (
  <section className={styles.banner}>
    <Container>
      {title && <h1>{title}</h1>}
      {category && (
        <div className={styles.category}>
          <span>{category}</span>
        </div>
      )}
    </Container>
  </section>
);

export default Banner;
