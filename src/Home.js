import React from "react";
import Aventura from "./Componentes/HomeMovies/Aventura";
import Animacao from "./Componentes/HomeMovies/Animacao";
import Terror from "./Componentes/HomeMovies/Terror";
import TitleHead from "./TitleHead";
import Comedia from "./Componentes/HomeSeries/Comedia";
import Crime from "./Componentes/HomeSeries/Crime";
import Drama from "./Componentes/HomeSeries/Drama";
import "./Home.css";

// https://api.themoviedb.org/3/genre/movie/list?api_key=SUA_CHAVE_DE_API&language=pt-BR

const Home = () => {
  return (
    <section className="container">
      <TitleHead title="Home" />
      <div className="boxHome">
        <h1 className="titleFullHome">FILMES</h1>
        <div>
          <Animacao />
          <Aventura />
          <Terror />
        </div>
        <h1 className="titleFullHome">SÉRIES</h1>
        <div>
          <Comedia />
          <Crime />
          <Drama />
        </div>
      </div>
    </section>
  );
};

export default Home;
