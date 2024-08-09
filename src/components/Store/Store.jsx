import { useLocation } from "react-router-dom";
import styles from "./Store.module.css";
import { useNavigate } from "react-router-dom";

function Store() {
  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();
  function handleItemClick(item, itemTitle) {
    navigate(`../store/${itemTitle}`, { state: { item } });
  }
  return (
    <>
      <h1>Store</h1>
      <div className={styles.itemContainer}>
        {data.map((object) => {
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
                width="200"
              />
              <p className={styles.itemTitle}>{object.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Store;
