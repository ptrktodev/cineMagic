import React from "react";
import { ReactComponent as PrevArrow } from "../../Assets/prevArrow.svg";
import { ReactComponent as NextArrow } from "../../Assets/nextArrow.svg";
import { Link } from "react-router-dom";
import "../HomeMovies/Animacao.css";
import UseAPI from "./useAPiTv";
import FuncCarrosel from "../HomeMovies/FuncCarrosel";

const Comedia = () => {
  const { Comedia } = UseAPI();
  const { next, prev, refCarrosel } = FuncCarrosel();

  const image = "https://image.tmdb.org/t/p/w500/";

  return (
    <section className="container">
      <h1 className="titleHome">Comedy</h1>
      <div className="ContentAction">
        <button onClick={prev} className="buttonCarrosel">
          {" "}
          <PrevArrow />
        </button>

        <div className="carrosel" ref={refCarrosel}>
          <div className="inner">
            {Comedia.map((img) => (
              <div key={img.id} className="item animeLeft">
                <Link to={`/series/poster/${img.id}`}>
                  <img src={`${image}${img.poster_path}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="buttonCarrosel">
          <NextArrow />
        </button>
      </div>
    </section>
  );
};

export default Comedia;
