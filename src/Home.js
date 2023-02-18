import React from "react";
import Aventura from "./Componentes/Home/Aventura";
import Animacao from "./Componentes/Home/Animacao";
import Terror from "./Componentes/Home/Terror";
import TitleHead from "./TitleHead";

// https://api.themoviedb.org/3/genre/movie/list?api_key=SUA_CHAVE_DE_API&language=pt-BR

const Home = () => {
  return (
    <section className="container">
      <TitleHead title="Home" />
      <div className="padding">
        <Animacao />
        <Aventura />
        <Terror />
      </div>
    </section>
  );
};

export default Home;
