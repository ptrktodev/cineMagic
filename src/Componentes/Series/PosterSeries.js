import React from "react";
import { useParams } from "react-router-dom";

const Poster = () => {
  const { id } = useParams();
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    async function apiID(id) {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
      );
      const json = await response.json();
      setMovie(json);
    }
    apiID(id);
  }, [id]);

  React.useEffect(() => {
    async function apiIDvideo(id) {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${key}&language=en-US`
      );
      const { results } = await response.json();
      const keyVideo =
        (await "https://www.youtube.com/embed/") + results[0].key;
      setVideo(keyVideo);
    }
    apiIDvideo(id);
  }, [id]);

  return (
    <section className="container">
      <div className="poster animeLeft">
        <div className="poster-imagem">
          <img src={`${imageURL}${movie.poster_path}`} />
        </div>
        <div className="poster-child">
          <div className="infos-movie">
            <h1>{movie.name}</h1>
            <p>⭐: {movie.vote_average}</p>
            <p>
              <b>Homepage:</b>{" "}
              <a href={movie.homepage} target="_parent">
                Visit
              </a>
            </p>
            <p>
              <b>Descrição:</b> <p>{movie.overview}</p>
            </p>
            <p>
              <b>Linguagem original:</b> {movie.original_language}
            </p>
            <p>
              <b>Data de lançamento:</b> {movie.release_date}
            </p>
            <p>
              <b>Status:</b> {movie.status ? "Lançado" : "Sem informações"}
            </p>
          </div>
          <div className="poster-video">
            <iframe
              className="iFrame-video"
              src={video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Poster;
