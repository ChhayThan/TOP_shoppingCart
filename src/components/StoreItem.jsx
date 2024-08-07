import { useParams } from "react-router-dom";

function StoreItem() {
  const { item } = useParams();

  return <h1>{item}</h1>;
}

export default StoreItem;
