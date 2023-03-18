import styles from './movie-skeleton.module.sass';

const Movie = () => (
  <div className="row -mb3">
    <div className="col-1">
      <div className="AspectRatio -br10">
        <div className={styles.banner}></div>
      </div>
    </div>
    <div className="col-2">
      <h2>
        <div className={`SkeletonLine ${styles.headline}`}></div>
      </h2>
      <p>
        <span className={`SkeletonLine ${styles.year}`}></span>
        <span className={styles.separator}>&bull;</span>
        <span className={`SkeletonLine ${styles.rating}`}></span>
      </p>
      <p>
        <div className={`SkeletonLine ${styles.summaryLine}`}></div>
        <div className={`SkeletonLine ${styles.summaryLine}`}></div>
        <div className={`SkeletonLine ${styles.summaryLine}`}></div>
      </p>
    </div>
  </div>
);

export default Movie;
