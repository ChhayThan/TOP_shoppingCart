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

  if (bag.length === 0) {
    return (
      <div className={styles.emptyCart}>
        Your cart is empty...
        <Link to="../store" state={{ data, searchFilter: "" }}>
          Head to the store here!
        </Link>
      </div>
    );
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
                  <h3 className={styles.itemStock}>In stock</h3>
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
                  <button
                    className={styles.removeBtn}
                    onClick={() => {
                      bag.splice(index, 1);
                      setBag([...bag]);
                    }}
                  >
                    Remove Item
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.checkoutContainer}>
          <h1>Order Summary</h1>
          <h2>{`$${totalPrice.toFixed(2)}`}</h2>
          <div className={styles.subtotal}>
            <h2>{`Subtotal (${bag.length} items)`}</h2>
            <h2>{`$${totalPrice.toFixed(2)}`}</h2>
          </div>
          <div className={styles.tax}>
            <h2>{`HST (15%)`}</h2>
            <h2>{`$${(totalPrice * 0.15).toFixed(2)}`}</h2>
          </div>
          <hr></hr>
          <div className={styles.total}>
            <h2>Total</h2>
            <h2>{`$${(totalPrice + totalPrice * 0.15).toFixed(2)}`}</h2>
          </div>
          <button
            className={styles.checkOutBtn}
            onClick={() => {
              alert("🎉Congrats on making a purchase🎉");
              console.log(bag);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Bag;
