import React from "react";
import nextArrow from "../../Assets/nextArrow.svg";
import prevArrow from "../../Assets/prevArrow.svg";
import "./Animacao.css";
import UseAPI from "./useAPI";

const Terror = () => {
  //const [action, setAction] = React.useState([]);
  const refCarrosel = React.useRef(0);

  const { Terror } = UseAPI();

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
      <h1>Terror</h1>
      <div className="ContentAction">
        <button onClick={clickCarrosel} className="buttonCarrosel">
          {" "}
          <img src={prevArrow} alt="Prev" />
        </button>

        <div className="carrosel" ref={refCarrosel}>
          <div className="inner">
            {Terror.map((img) => (
              <div key={img.id} className="item animeLeft">
                <img src={`${image}${img.poster_path}`} className="imagem" />
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

export default Terror;
