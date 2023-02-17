import React from "react";
import { Link } from "react-router-dom";
import TitleHead from "../../TitleHead";
import styles from "../Movies/Movie.module.css";

const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [ativo, setAtivo] = React.useState(true);
  const [count, setCount] = React.useState(1);

  const image = "https://image.tmdb.org/t/p/w500/";

  function nextPage() {
    setCount(count + 1);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function prevPage() {
    if (count === 1) {
      setCount(count - 0);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else {
      setCount(count - 1);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  React.useEffect(() => {
    async function api() {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const url = "https://api.themoviedb.org/3/tv/popular?api_key=";
      const response = await fetch(`${url}${key}&langauge=en-US&page=${count}`);
      const { results } = await response.json();
      setMovies(results);
      setTimeout(() => {
        setAtivo(false);
      }, 600);
    }
    api();
  }, [count]);

  return (
    <section className="container animeLeft">
      <TitleHead title="Series" />
      <div className={styles.paddingBottom}>
        <div className={styles.div}>
          {movies.map((movie) => (
            <div key={movie.id} className={styles.divMovies}>
              <Link to={`serie/${movie.id}`}>
                <img
                  src={`${image}${movie.poster_path}`}
                  alt=""
                  className={styles.divMoviesImg}
                />
              </Link>
              <h2>{movie.name}</h2>
            </div>
          ))}
        </div>
        <div className={styles.div_buttons}>
          <button className="buttonsCount" onClick={prevPage}>
            Prev
          </button>
          <p>{count}</p>
          <button className="buttonsCount" onClick={nextPage}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
