import React from "react";
import { useParams } from "react-router-dom";
import "./infos_series.css";

const Poster = () => {
  const { id } = useParams();
  const imageURL = "https://image.tmdb.org/t/p/w500/";
  const [movie, setMovie] = React.useState([]);
  const [video, setVideo] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [companies, setCompanies] = React.useState([]);
  const [season, setSeason] = React.useState([]);
  const [network, setNetwork] = React.useState([]);

  React.useEffect(() => {
    async function apiID(id) {
      const key = "04105f3a63399900b37fa84e3ec7168e";
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
      );
      const json = await response.json();
      setMovie(json);
      setGenres(json.genres);
      setCompanies(json.production_companies);
      setSeason(json.seasons);
      setNetwork(json.networks);
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
        <div className="imagemCentral box">
          <img src={`${imageURL}${movie.poster_path}`} />
        </div>
        <div className="Infos box">
          <div className="boxInfos box">
            <h1>{movie.name}</h1>
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
              <b>Release date</b> <span>{movie.first_air_date}</span>.
            </div>
            <div>
              <b>Status:</b>{" "}
              <span>{movie.status ? "Lançado" : "Sem informações"}.</span>
            </div>
          </div>
        </div>
        <section className="section box">
          <div className="companies">
            <h1>Companies</h1>
            <div className="listCompanies">
              {companies.map((el) => (
                <li key={el}> {el.name}</li>
              ))}
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
        </section>

        <section className="moreInfos box">
          <h1>More Informations</h1>
          <div className="infosMovies">
            <p>
              <b>Seasons:</b> <span>{movie.number_of_seasons}</span>
            </p>
            <p>
              <b>Total episodes:</b> <span>{movie.number_of_episodes}</span>
            </p>
            <p>
              <b>Run time:</b> <span>{movie.episode_run_time}min</span>
            </p>
            <p>
              <b>Tagline:</b> <span>{movie.tagline}</span>
            </p>
            <p>
              <b>Count Votes:</b> <span>{movie.vote_count}</span>.
            </p>
            <p>
              <b>Status:</b>{" "}
              <span>{movie.status ? "Lançado" : "Sem informações"}.</span>
            </p>
          </div>
          <div className="Network box">
            {network.map((el) => (
              <div key={el.id} className="networkImagem">
                <img src={`${imageURL}${el.logo_path}`} />
              </div>
            ))}
          </div>
        </section>
        <div className="Seasons box">
          <h1>Seasons</h1>
          <div className="Seasons">
            {season.map((el) => (
              <div className="quadro">
                <div className="posterImagem">
                  {el.poster_path && (
                    <img src={`${imageURL}${el.poster_path}`} />
                  )}
                </div>
                {el.poster_path && (
                  <div className="posterInfos">
                    <p>{el.name}</p>
                    <p>{el.episode_count} episodes</p>
                    {el.air_date && <p>{el.air_date}</p>}
                  </div>
                )}
              </div>
            ))}
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
