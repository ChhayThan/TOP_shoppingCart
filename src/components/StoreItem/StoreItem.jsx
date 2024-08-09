import { useParams, useLocation } from "react-router-dom";
import styles from "./StoreItem.module.css";

function StoreItem() {
  const { itemTitle } = useParams();
  let location = useLocation();
  const { item } = location.state;
  console.log(item);

  return <h1>{itemTitle}</h1>;
}

export default StoreItem;
