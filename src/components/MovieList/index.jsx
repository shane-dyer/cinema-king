import { useState } from 'react';
import { Container, MovieTile } from 'components';
import { shuffleArray } from 'utils';
import styles from './styles.module.scss';

const MovieList = ({ list }) => {
  const [movies, setMovies] = useState(list);

  const handleShuffleClick = () => {
    setMovies(shuffleArray(movies));
  };

  return (
    <section>
      <Container>
        <button type="button" onClick={handleShuffleClick}>
          Shuffle Movie List
        </button>
        <div className={styles.grid}>
          {movies.map((item, index) => (
            <MovieTile key={item.id} index={index + 1} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MovieList;
