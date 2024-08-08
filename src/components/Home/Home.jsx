import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to eric's fake store.</h1>
      <p className={styles.homeDescription}>
        Discover our selection of fake products, random as they come. Delivered
        straight from nowhere to your thoughts.
      </p>
      <button className={styles.shopBtn}>
        <Link to="store">Shop Now</Link>
      </button>

      <p>Carousel here...</p>
    </div>
  );
}

export default Home;
