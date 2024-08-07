import { useParams } from "react-router-dom";
import styles from "./StoreItem.module.css";
function StoreItem() {
  const { item } = useParams();

  return <h1>{item}</h1>;
}

export default StoreItem;
