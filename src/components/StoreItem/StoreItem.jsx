import { useParams, useLocation, Link } from "react-router-dom";
import styles from "./StoreItem.module.css";
import { useState } from "react";

import Icon from "@mdi/react";
import { mdiShoppingOutline } from "@mdi/js";

function StoreItem() {
  let location = useLocation();
  const { data, item } = location.state;
  const [itemAmount, setItemAmount] = useState(1);
  const [price, setPrice] = useState(data.price);

  return (
    <div className={styles.storeItemContainer}>
      <div className={styles.backLink}>
        <Link to="../store" state={{ data, searchFilter: "" }}>
          Back
        </Link>
      </div>
      <div className={styles.item}>
        <img className={styles.itemImage} src={item.image} alt={item.title} />
        <div className={styles.itemInfo}>
          <h1 className={styles.itemTitle}>{item.title}</h1>
          <h2 className={styles.itemCategory}>{item.category}</h2>
          <h3 className={styles.itemPrice}>{`$ ${
            price ? price : item.price
          }`}</h3>
          <div className={styles.itemAmount}>
            <button
              className={styles.amountBtn}
              onClick={() => {
                if (itemAmount > 1) {
                  setItemAmount((itemAmount) => {
                    let newAmount = itemAmount - 1;
                    setPrice((item.price * newAmount).toFixed(2));
                    return newAmount;
                  });
                }
              }}
            >
              -
            </button>
            <p>{itemAmount}</p>
            <button
              className={styles.amountBtn}
              onClick={() => {
                if (itemAmount < 100) {
                  setItemAmount((itemAmount) => {
                    let newAmount = itemAmount + 1;
                    setPrice((item.price * newAmount).toFixed(2));
                    return newAmount;
                  });
                }
              }}
            >
              +
            </button>
          </div>
          <p className={styles.itemDescription}>{item.description}</p>
          <div className={styles.actionBtns}>
            <button className={styles.buyBtn}>Buy Now</button>
            <button className={styles.cartBtn}>
              <Icon
                path={mdiShoppingOutline}
                size={0.8}
                className={styles.Icon}
              />
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
