import { Link } from 'react-router-dom';
import styles from './Home.module.scss';

// TODO: Replace with actual auth context or Redux state
const isLoggedIn = false; // temporary flag

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Discover the World's Finest Cocktails</h1>
        <p>
          From timeless classics to premium mixes — explore recipes, stories,
          and flavors like never before.
        </p>

        <div className={styles.cta}>
          {!isLoggedIn ? (
            <>
              <Link to="/login" className={styles.btn}>Login</Link>
              <Link to="/register" className={`${styles.btn} ${styles.premium}`}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/free-cocktails" className={styles.btn}>Explore Cocktails</Link>
              <Link to="/pricing" className={`${styles.btn} ${styles.premium}`}>Become Premium</Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
