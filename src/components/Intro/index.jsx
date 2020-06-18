import { Container } from 'components';
import styles from './styles.module.scss';

const Intro = () => (
  <section>
    <Container>
      <div className={styles.intro}>
        <div className={styles.author}>
          <p className={styles.name}>
            by <span>Liam Coxon</span>
            <br />
            Contributor
          </p>
          <p className={styles.date}>March 18 2020</p>
        </div>
        <div className={styles.content}>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

export default Intro;
