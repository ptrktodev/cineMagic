import React from "react";
import TitleHead from "../../TitleHead";
import styles from "./Search.module.css";
import { Link } from "react-router-dom";

const SearchPage = ({ results, category }) => {
  const image = "https://image.tmdb.org/t/p/w500/";
  if (category === "movie") {
    return (
      <section className="scroll animeLeft">
        <TitleHead title="Resultado" />
        <div className={styles.paddingBottom}>
          <div className={styles.div}>
            {results.map((movie) => (
              <div key={movie.id} className={styles.divMovies}>
                <Link
                  to={`/movies/poster/${movie.id}`}
                  className={styles.divMoviesImg}
                >
                  <img src={`${image}${movie.poster_path}`} />
                </Link>
                <div className={styles.detalhes}>
                  <h3>{movie.title}</h3>
                  <span>⭐ {movie.vote_average}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } else if (category === "tv") {
    return (
      <section className="scroll animeLeft">
        <TitleHead title="Resultado" />
        <div className={styles.paddingBottom}>
          <div className={styles.div}>
            {results.map((movie) => (
              <div key={movie.id} className={styles.divMovies}>
                <Link
                  to={`/series/poster/${movie.id}`}
                  className={styles.divMoviesImg}
                >
                  <img src={`${image}${movie.poster_path}`} />
                </Link>
                <div className={styles.detalhes}>
                  <h3>{movie.original_name}</h3>
                  <span>⭐ {movie.vote_average}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
};

export default SearchPage;
