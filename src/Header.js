import React from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Pop } from "./Assets/popcorn.svg";
import Button from "./Componentes/Fixed/ButtonHeader";
import Search from "./Componentes/Fixed/Search";

const Header = () => {
  const { pathname } = useLocation();
  const [ativo, setAtivo] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  //const { x } = React.useContext(UserContext);

  React.useEffect(() => {
    if (pathname === "/movies") {
      setAtivo(true);
      setMsg("movie");
    } else if (pathname === "/series") {
      setAtivo(true);
      setMsg("tv");
    } else {
      setAtivo(false);
    }
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogs - Home">
          <Pop />
        </Link>
        <ul className={styles.ul}>
          <div className={styles.barraSearch}>
            {ativo && <Search title={msg} />}
          </div>
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
