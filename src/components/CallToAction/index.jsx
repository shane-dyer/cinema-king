import { Container, ButtonLink } from 'components';
import styles from './styles.module.scss';

const CallToAction = ({ title, button }) => (
  <section className={styles.banner}>
    <Container>
      {title && <h2>{title}</h2>}
      {button?.href && button?.text ? (
        <ButtonLink href={button.href}>{button.text}</ButtonLink>
      ) : null}
    </Container>
  </section>
);

export default CallToAction;
