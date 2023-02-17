import React from "react";
import { useParams } from "react-router-dom";

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
        `https://api.themoviedb.org/3/tv/${id}?api_key=${key}`
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
        </div>
        <div className="poster-moreinfos">
          <div className="companies">
            <div className="subtitles">Companies</div>
            <div className="companiesSuperior">
              <div>
                {companies.map((el) => (
                  <li key={el}> {el.name}</li>
                ))}
              </div>
            </div>
          </div>
          <div className="genres">
            <div className="subtitles">Genres</div>
            <div className="Genres">
              <div>
                {genres.map((el) => (
                  <li key={el}> {el.name}</li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="infos-movie-1">
          <h1>More Informations</h1>
          <div>
            <b>Season:</b> <span>{movie.number_of_seasons}</span>
          </div>
          <div>
            <b>Total episodes:</b> <span>{movie.number_of_episodes}</span>
          </div>
          <div>
            <b>Tagline:</b> <span>{movie.tagline}</span>
          </div>
          <div>
            <b>Count Votes:</b> <span>{movie.vote_count}</span>.
          </div>
          <div>
            <b>Status:</b>{" "}
            <span>{movie.status ? "Lançado" : "Sem informações"}.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Poster;
