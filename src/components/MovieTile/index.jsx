import { useDispatch } from 'react-redux';
import { openModal } from 'store/reducers';
import HoverIcon from './HoverIcon';
import styles from './styles.module.scss';

const MovieTile = ({ name, release_date, post_url, index }) => {
  const dispatch = useDispatch();
  const releaseYear = new Date(release_date).getFullYear();

  const handleMovieClick = () => {
    dispatch(openModal({ name, releaseYear }));
  };

  return (
    <article className={styles.tile} onClick={handleMovieClick}>
      <div className={styles.image}>
        <div className={styles.overlay}>
          <HoverIcon />
        </div>
        <img src={post_url} alt={name} />
      </div>
      <div className={styles.index}>{index}.</div>
      <div className={styles.name}>
        <h4>{name}</h4>
        <span>({releaseYear})</span>
      </div>
    </article>
  );
};

export default MovieTile;
