import { useParams, useLocation, Link } from "react-router-dom";
import styles from "./StoreItem.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Icon from "@mdi/react";
import { mdiShoppingOutline } from "@mdi/js";

import { useBag } from "../../BagContext"; // Import useBag

function checkItemInBag(bag, itemID) {
  for (let i = 0; i < bag.length; i++) {
    if (bag[i].id === itemID) {
      return true;
    }
  }
  return false;
}

function StoreItem() {
  let location = useLocation();
  const { data, item } = location.state;
  const [itemAmount, setItemAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const { bag, setBag } = useBag(); // Access bag and setBag from context

  const navigate = useNavigate();

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
            <button
              className={styles.buyBtn}
              onClick={() => {
                for (let i = 0; i < bag.length; i++) {
                  if (bag[i].id === item.id) {
                    bag[i].quantity += itemAmount;
                    setBag([...bag]);
                    navigate(`../bag`, { state: { data } });
                    return;
                  }
                }
                let currentItem = {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  category: item.category,
                  quantity: itemAmount,
                  price: item.price,
                };
                bag.push(currentItem);
                setBag([...bag]);
                console.log(bag);
                navigate(`../bag`, { state: { data } });
              }}
            >
              Buy Now
            </button>
            <button
              className={`${
                checkItemInBag(bag, item.id)
                  ? styles.disabledCartBtn
                  : styles.cartBtn
              }`}
              disabled={checkItemInBag(bag, item.id)}
              onClick={() => {
                let currentItem = {
                  id: item.id,
                  title: item.title,
                  image: item.image,
                  category: item.category,
                  quantity: itemAmount,
                  price: item.price,
                };
                bag.push(currentItem);
                setBag([...bag]);
              }}
            >
              <Icon
                path={mdiShoppingOutline}
                size={0.8}
                className={styles.Icon}
              />
              {checkItemInBag(bag, item.id)
                ? "Item is in cart."
                : "Add to cart."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItem;
