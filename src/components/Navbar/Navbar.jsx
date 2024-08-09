import { Link, useParams } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon from "@mdi/react";
import { mdiShoppingOutline, mdiMagnify } from "@mdi/js";
import PropTypes from "prop-types";

function Navbar({ data }) {
  return (
    <div className={styles.Navbar}>
      <div className={styles.navbarLeft}>
        <div className={styles.Title}>
          <Link to="home">eric's</Link>
        </div>
        <div className={styles.navLink}>
          <Link to="home">Home</Link>
        </div>
        <div className={styles.navLink}>
          <Link to="store" state={{ data }}>
            Store
          </Link>
        </div>
      </div>
      <div className={styles.navbarRight}>
        <div className="searchBar">
          <Icon path={mdiMagnify} size={1} className={styles.Icon} />
          <input
            type="text"
            className={styles.searchBar}
            id="searchBar"
            placeholder="Search"
          />
        </div>

        <div className={styles.Bag}>
          <Link to="bag">
            <Icon path={mdiShoppingOutline} size={1} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

Navbar.propTypes = {
  data: PropTypes.array.isRequired,
};
