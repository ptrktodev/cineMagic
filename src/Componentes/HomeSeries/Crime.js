import React from "react";
import nextArrow from "../../Assets/nextArrow.svg";
import { Link } from "react-router-dom";
import prevArrow from "../../Assets/prevArrow.svg";
import "../HomeMovies/Animacao.css";
import UseAPI from "./useAPiTv";

const Crime = () => {
  const refCarrosel = React.useRef(0);

  const { Crime } = UseAPI();

  const image = "https://image.tmdb.org/t/p/w500/";

  function clickCarrosel({ target }) {
    if (target.alt === "Next") {
      function next() {
        refCarrosel.current.scrollLeft =
          refCarrosel.current.scrollLeft + refCarrosel.current.offsetWidth;
      }
      next();
    } else if (target.alt === "Prev") {
      function prev() {
        refCarrosel.current.scrollLeft =
          refCarrosel.current.scrollLeft - refCarrosel.current.offsetWidth;
      }
      prev();
    }
  }

  return (
    <section className="container">
      <h1>Crime</h1>
      <div className="ContentAction">
        <button onClick={clickCarrosel} className="buttonCarrosel">
          {" "}
          <img src={prevArrow} alt="Prev" />
        </button>

        <div className="carrosel" ref={refCarrosel}>
          <div className="inner">
            {Crime.map((img) => (
              <div key={img.id} className="item animeLeft">
                <Link to={`/series/poster/${img.id}`}>
                  <img src={`${image}${img.poster_path}`} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button onClick={clickCarrosel} className="buttonCarrosel">
          <img src={nextArrow} alt="Next" />
        </button>
      </div>
    </section>
  );
};

export default Crime;
