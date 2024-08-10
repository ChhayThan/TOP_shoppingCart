import { Link } from "react-router-dom";
import styles from "./Bag.module.css";
import { useBag } from "../../BagContext"; // Import useBag
import { useLocation } from "react-router-dom";

function Bag() {
  const location = useLocation();
  const { data } = location.state;
  const { bag, setBag } = useBag(); // Access bag and setBag from context
  let totalPrice = 0;
  for (let i = 0; i < bag.length; i++) {
    totalPrice += bag[i].price * bag[i].quantity;
  }
  return (
    <div className={styles.bagContainer}>
      <Link to="../store" state={{ data, searchFilter: "" }}>
        Back to Store
      </Link>
      <h1>Shopping Bag</h1>
      <div className={styles.main}>
        <div className={styles.items}>
          {bag.map((item, index) => {
            return (
              <div className={styles.item} key={item.id}>
                <img
                  className={styles.itemImage}
                  src={item.image}
                  alt={item.title}
                />
                <div className={styles.itemInfo}>
                  <h1 className={styles.itemTitle}>{item.title}</h1>
                  <h2 className={styles.itemCategory}>{item.category}</h2>
                  <h3 className={styles.itemPrice}>{`$ ${(
                    item.price * item.quantity
                  ).toFixed(2)}`}</h3>
                  <div className={styles.itemAmount}>
                    <button
                      className={styles.amountBtn}
                      onClick={() => {
                        if (bag[index].quantity > 1) {
                          bag[index].quantity = bag[index].quantity - 1;
                          setBag([...bag]);
                        }
                      }}
                    >
                      -
                    </button>
                    <p>{item.quantity}</p>
                    <button
                      className={styles.amountBtn}
                      onClick={() => {
                        if (bag[index].quantity < 100) {
                          bag[index].quantity = bag[index].quantity + 1;
                          setBag([...bag]);
                        }
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.checkoutContainer}>
          <h1>Order Summary</h1>
          <h2>{totalPrice.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default Bag;
