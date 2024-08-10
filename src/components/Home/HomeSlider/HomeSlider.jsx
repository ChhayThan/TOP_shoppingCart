import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./HomeSlider.module.css";

function HomeSlider({ data, handleItemClick }) {
  const itemData = [...data];
  const [itemArray, setItemArray] = useState(itemData);
  useEffect(() => {
    const key = setInterval(() => {
      const firstItem = itemArray.shift();
      itemArray.push(firstItem);
      let newItemArray = [...itemArray];
      setItemArray(newItemArray);
    }, 2500);

    return () => {
      clearInterval(key);
    };
  }, [itemArray]);
  return (
    <div className={styles.itemContainer}>
      {itemArray.map((object, index) => {
        if (index > 3) {
          return;
        }
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
  );
}

HomeSlider.propTypes = {
  data: PropTypes.array.isRequired,
  handleItemClick: PropTypes.func.isRequired,
};
export default HomeSlider;
