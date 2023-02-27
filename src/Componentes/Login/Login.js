import React from "react";
import "../Login/Login.css";
import Me from "../../Assets/me.jpg";
import Tmdb from "../../Assets/tmdb.png";
import ReactJS from "../../Assets/reactjs.png";
import { ReactComponent as Us } from "../../Assets/us.svg";
import { ReactComponent as Brazil } from "../../Assets/brazil.svg";
import Br from "./Br";
import Usa from "./Us";
import Head from "../../TitleHead";

const Login = () => {
  const [ativo, setAtivo] = React.useState(false);

  function langClickBr() {
    setAtivo(true);
  }
  function langClickUs() {
    setAtivo(false);
  }

  return (
    <section className="container padding">
      <Head title="About" />
      <div className="boxLogin">
        <div>
          <img src={Me} className="country" />
        </div>
        <li className="Country">
          <li onClick={langClickUs}>
            <Us />
            <span>Lang: US</span>
          </li>
          <li onClick={langClickBr}>
            <Brazil />
            <span>Lang: BR</span>
          </li>
        </li>
        <div className="componCountry">{ativo ? <Br /> : <Usa />}</div>
        <div>
          <h3>Tools work</h3>
          <li className="toolsWork">
            <img src={ReactJS} />
            <img src={Tmdb} />
          </li>
        </div>
      </div>
    </section>
  );
};

export default Login;
