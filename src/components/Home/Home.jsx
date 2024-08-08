import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { Link, useOutletContext } from "react-router-dom";

function Home() {
  const [data] = useOutletContext();

  const navigate = useNavigate();
  function handleItemClick(itemTitle) {
    navigate(`../store/${itemTitle}`);
  }
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.homeTitle}>Welcome to eric's fake store.</h1>
      <p className={styles.homeDescription}>
        Discover our selection of fake products, random as they come. Delivered
        straight from nowhere to your thoughts.
      </p>
      <Link to="../store" className={styles.shopLink}>
        Shop Now
      </Link>
      <p className={styles.featuredItems}>Featured Items</p>
      <div className={styles.itemContainer}>
        {data.map((object, index) => {
          if (index > 3) {
            return;
          }
          return (
            <div
              className={styles.item}
              key={object.id}
              onClick={() => handleItemClick(object.title)}
            >
              <img
                src={object.images[0]}
                alt={object.title}
                className={styles.itemImg}
                width="200"
              />
              <p className={styles.itemTitle}>{object.title}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>Created by Eric C.</div>
    </div>
  );
}

export default Home;
