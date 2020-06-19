import HoverIcon from './HoverIcon';
import styles from './styles.module.scss';

const MovieTile = ({ name, release_date, post_url, index }) => (
  <article className={styles.tile}>
    <div className={styles.image}>
      <div className={styles.overlay}>
        <HoverIcon />
      </div>
      <img src={post_url} alt={name} />
    </div>
    <div className={styles.index}>{index}.</div>
    <div className={styles.name}>
      <h4>{name}</h4>
      <span>({new Date(release_date).getFullYear()})</span>
    </div>
  </article>
);

export default MovieTile;
