import { useLocation } from "react-router-dom";
import styles from "./Store.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Store() {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const [filter, setFilter] = useState([]);
  const location = useLocation();
  const { data, searchFilter } = location.state;
  const navigate = useNavigate();
  function handleItemClick(item, itemTitle) {
    navigate(`../store/${itemTitle}`, { state: { data, item } });
  }

  return (
    <div className={styles.storeContainer}>
      <div className={styles.sideBar}>
        <div className={styles.categoryContainer}>
          <h1>Categories</h1>
          <div className={styles.categories}>
            {categories.map((category, index) => {
              return (
                <div
                  className={`${category} ${styles.category} ${
                    filter.includes(category) ? styles.active : null
                  }`}
                  key={index}
                >
                  <div
                    className={styles.checkBox}
                    onClick={() => {
                      let newFilter;
                      if (filter.includes(category)) {
                        newFilter = filter.filter(
                          (currentCat) => currentCat !== category
                        );
                      } else {
                        newFilter = [...filter, category];
                      }
                      setFilter(newFilter);
                    }}
                  ></div>
                  <span className={styles.categoryName}>{category}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.storeItems}>
        <div className={styles.itemCount}>{`Items:`}</div>
        <div className={styles.itemContainer}>
          {data.map((object) => {
            if (filter.length === 0 || filter.includes(object.category)) {
              if (
                searchFilter != "" &&
                object.title.toLowerCase().includes(searchFilter.toLowerCase())
              ) {
                return (
                  <div
                    className={`${styles.item}`}
                    key={object.id}
                    onClick={() => handleItemClick(object, object.title)}
                  >
                    <img
                      src={object.image}
                      alt={object.title}
                      className={styles.itemImg}
                    />
                    <div className={styles.itemDescription}>
                      <p className={styles.itemCategory}>{object.category}</p>
                      <p className={styles.itemTitle}>{object.title}</p>
                      <p className={styles.itemPrice}>{`$ ${object.price}`}</p>
                    </div>
                  </div>
                );
              } else if (searchFilter === "") {
                return (
                  <div
                    className={`${styles.item}`}
                    key={object.id}
                    onClick={() => handleItemClick(object, object.title)}
                  >
                    <img
                      src={object.image}
                      alt={object.title}
                      className={styles.itemImg}
                    />
                    <div className={styles.itemDescription}>
                      <p className={styles.itemCategory}>{object.category}</p>
                      <p className={styles.itemTitle}>{object.title}</p>
                      <p className={styles.itemPrice}>{`$ ${object.price}`}</p>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;
