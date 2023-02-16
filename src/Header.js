import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as Pop } from "./Assets/popcorn.svg";
import Button from "./Componentes/Fixed/ButtonHeader";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Pop />
        </Link>
        <ul className={styles.ul}>
          <Link to="/movies" className={styles.login}>
            <Button>Movies</Button>
          </Link>
          <Link to="/series" className={styles.login}>
            <Button>Series</Button>
          </Link>
          <Link to="/login" className={styles.login}>
            <Button>Login</Button>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
