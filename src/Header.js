import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./Componentes/Fixed/ButtonHeader";
import Search from "./Componentes/Fixed/Search";
import { ReactComponent as Pop } from "./Assets/popcorn.svg";
import { ReactComponent as Main } from "./Assets/main.svg";
import { ReactComponent as Closed } from "./Assets/Closed.svg";
import { ReactComponent as Home } from "./Assets/Home.svg";
import "./Header.css";

const Header = () => {
  const { pathname } = useLocation();
  const [ativo, setAtivo] = React.useState(false);
  const [msg, setMsg] = React.useState("");
  const [classe, setClasse] = React.useState(null);
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

  function toggleMain() {
    setClasse(true);
  }
  function OfftoggleMain() {
    setClasse(false);
  }

  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/" className="logo" aria-label="Dogs - Home">
          <Pop />
        </Link>
        <div className="menu">
          <div className="barraSearch">{ativo && <Search title={msg} />}</div>
          <div>
            <div className={classe ? "ativoMain" : "mainMobile"}>
              <button className="mainMobileButton">
                {classe ? (
                  <Closed onClick={OfftoggleMain} />
                ) : (
                  <Main onClick={toggleMain} />
                )}
              </button>
              <ul className="ul">
                <Link onClick={OfftoggleMain} to="/">
                  {classe && <Home />}
                </Link>
                <Link to="/movies" className="login" onClick={OfftoggleMain}>
                  <Button>Movies</Button>
                </Link>
                <Link to="/series" className="login" onClick={OfftoggleMain}>
                  <Button>Series</Button>
                </Link>
                <Link to="/sobre" className="login" onClick={OfftoggleMain}>
                  <Button>Sobre</Button>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
