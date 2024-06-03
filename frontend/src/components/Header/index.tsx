import styles from "./styles.module.scss";
import React from "react";
import LogoIcon from "./../../assets/icons/logo";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={"contentWrapper " + styles.headerContent}>
        <div className={styles.logoWrapper}>
          <Link to="/">
            <LogoIcon />
          </Link>
        </div>
        <nav>
          <ul>
            <Link to="/recipe">
              <li>Your recipes</li>
            </Link>
            <Link to="/grocery">
              <li>Grocery list</li>
            </Link>
          </ul>
        </nav>
        <button className={styles.loginBtn}>Login</button>
      </div>
    </div>
  );
};

export default Header;
