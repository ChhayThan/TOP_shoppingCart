import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { Link, useOutletContext } from "react-router-dom";
import HomeSlider from "./HomeSlider/HomeSlider";

function Home() {
  const [data] = useOutletContext();

  const navigate = useNavigate();
  function handleItemClick(item, itemTitle) {
    navigate(`../store/${itemTitle}`, { state: { data, item } });
  }
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to eric's fake store.</h1>
      <p className={styles.homeDescription}>
        Discover our selection of fake products, random as they come. Delivered
        straight from nowhere to your thoughts.
      </p>
      <Link
        to="../store"
        state={{ data, searchFilter: "" }}
        className={styles.shopLink}
      >
        Shop Now
      </Link>
      <p className={styles.featuredItems}>Featured Items</p>

      <HomeSlider data={data} handleItemClick={handleItemClick} />

      <div className={styles.footer}>Created by Eric C.</div>
    </div>
  );
}

export default Home;
