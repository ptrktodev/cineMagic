import React from "react";
import { ReactComponent as PrevArrow } from "../../Assets/prevArrow.svg";
import { ReactComponent as NextArrow } from "../../Assets/nextArrow.svg";
import "./Animacao.css";
import UseAPI from "./useAPI";
import { Link } from "react-router-dom";
import FuncCarrosel from "./FuncCarrosel";

const Terror = () => {
  const { Terror } = UseAPI();
  const { next, prev, refCarrosel } = FuncCarrosel();

  const image = "https://image.tmdb.org/t/p/w500/";

  function autoNext() {
    setTimeout(() => {
      function next() {
        refCarrosel.current.scrollLeft =
          refCarrosel.current.scrollLeft + refCarrosel.current.offsetWidth;
      }
      next();
    }, 3000);
  }
  autoNext();

  return (
    <section className="container">
      <h1 className="titleHome">Horror</h1>
      <div className="ContentAction">
        <button onClick={prev} className="buttonCarrosel">
          {" "}
          <PrevArrow />
        </button>

        <div className="carrosel" ref={refCarrosel}>
          <div className="inner">
            {Terror.map((img) => (
              <div key={img.id} className="item animeLeft">
                <Link to={`/movies/poster/${img.id}`}>
                  <img src={`${image}${img.poster_path}`} className="imagem" />
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

export default Terror;
