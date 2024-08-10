import styles from "./Bag.module.css";
import { useLocation } from "react-router-dom";
import { useBag } from "../../BagContext"; // Import useBag

function Bag() {
  const { bag, setBag } = useBag(); // Access bag and setBag from context
  return (
    <>
      {bag.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </>
  );
}

export default Bag;
