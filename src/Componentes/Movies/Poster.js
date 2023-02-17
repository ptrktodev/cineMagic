import React from "react";
import { useParams } from "react-router-dom";
import "./Poster.css";

const Poster = () => {
  const { id } = useParams();
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);

  React.useEffect(() => {
    async function apiID(id) {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}`
      );
      const json = await response.json();
      setMovie(json);
      setGenres(json.genres);
      setCompanies(json.production_companies);
    }
    apiID(id);
  }, [id]);

  React.useEffect(() => {
    async function apiIDvideo(id) {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
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
        <div className="imagemCentral box">
          <img src={`${imageURL}${movie.poster_path}`} />
        </div>
        <div className="Infos box">
          <div className="boxInfos box">
            <h1>{movie.original_title}</h1>
            <p>⭐ {movie.vote_average}</p>
            <p>
              <b>Homepage:</b>{" "}
              <a href={movie.homepage} target="_parent">
                <span>Visit.</span>
              </a>
            </p>
            <div>
              <b>Description:</b> <span>{movie.overview}</span>
            </div>
            <div>
              <b>Language:</b> <span>{movie.original_language}</span>
            </div>
            <div>
              <b>Release date</b> <span>{movie.release_date}</span>.
            </div>
            <div>
              <b>Status:</b>{" "}
              <span>{movie.status ? "Lançado" : "Sem informações"}.</span>
            </div>
          </div>
        </div>
        <div className="section box">
          <div className="companies">
            <h1>Companies</h1>
            <div className="listCompanies">
              <div>
                {companies.map((el) => (
                  <li key={el}> {el.name}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="genres">
            <h1>Genres</h1>
            <div className="listGenres">
              <div>
                {genres.map((el) => (
                  <li key={el}> {el.name}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="VideoYoutube box">
          <iframe
            className="Video"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Poster;
