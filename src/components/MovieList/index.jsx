import { Container, MovieTile } from 'components';
import styles from './styles.module.scss';

const MovieList = ({ list }) => {
  return (
    <section>
      <Container>
        <div className={styles.grid}>
          {list.map((item, index) => (
            <MovieTile key={item.id} index={index + 1} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieList;
