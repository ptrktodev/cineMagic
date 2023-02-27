import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PrevArrow } from "../../Assets/prevArrow.svg";
import { ReactComponent as NextArrow } from "../../Assets/nextArrow.svg";
import "./Animacao.css";
import UseAPI from "./useAPI";
import FuncCarrosel from "./FuncCarrosel";

const Animacao = () => {
  const { next, prev, refCarrosel } = FuncCarrosel();
  const { Animation } = UseAPI();

  const image = "https://image.tmdb.org/t/p/w500/";

  return (
    <section className="container">
      <h1 className="titleHome">Animation</h1>
      <div className="ContentAction">
        <button onClick={prev} className="buttonCarrosel">
          {" "}
          <PrevArrow />
        </button>

        <div className="carrosel" ref={refCarrosel}>
          <div className="inner">
            {Animation.map((img) => (
              <div key={img.id} className="item animeLeft">
                <Link to={`/movies/poster/${img.id}`}>
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

export default Animacao;
