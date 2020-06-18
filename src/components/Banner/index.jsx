import styles from './styles.module.scss';

const Banner = ({ title, category }) => {
  return (
    <section className={styles.banner}>
      {title && <h1>{title}</h1>}
      {category && (
        <div className={styles.category}>
          <span>{category}</span>
        </div>
      )}
    </section>
  );
};

export default Banner;
