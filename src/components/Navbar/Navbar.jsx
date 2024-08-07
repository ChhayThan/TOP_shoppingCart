import { Link, useParams } from "react-router-dom";
import styles from "./Navbar.modules.css";

function Navbar({ className }) {
  return (
    <div className={`${className} navbar`}>
      <div className="title">
        <Link to="home" className="title">
          Eric's
        </Link>
      </div>
      <Link to="home">Home</Link>
      <Link to="store">Store</Link>
      <Link to="bag">Bag</Link>
    </div>
  );
}

export default Navbar;
