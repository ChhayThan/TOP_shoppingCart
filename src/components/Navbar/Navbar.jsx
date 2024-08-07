import { Link, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className="title">
        <Link to="home" className={styles.Title}>
          Eric's
        </Link>
      </div>
      <Link to="home">Home</Link>
      <Link to="store">Store</Link>

      <input
        type="text"
        className="searchBar"
        id="searchBar"
        placeholder="Search"
      />
      <Link to="bag">Bag</Link>
    </div>
  );
}

export default Navbar;
