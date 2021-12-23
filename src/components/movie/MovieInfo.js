import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import "./movieinfo.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieInfo = () => {
  const { onMovieSelect, movieInfo } = useContext(MovieContext);

  const closeSection = () => {
    onMovieSelect("");
  };

  return (
    <div className="movie-info-container">
      {movieInfo ? (
        <>
          <img src={IMG_API + movieInfo?.poster_path} className="movie-cover" />
          <div className="info-column">
            <span className="movie-name">
              title: <span>{movieInfo?.title}</span>
            </span>
            <span className="info-info">
              rating: <span>{movieInfo?.vote_average}</span>
            </span>
            <span className="info-info">
              synopsis: <span>{movieInfo?.overview}</span>
            </span>
            <span className="info-info">
              release date: <span>{movieInfo?.release_date}</span>
            </span>
            <span className="info-info">
              popularity: <span>{movieInfo?.popularity}</span>
            </span>
            <span className="info-info">
              language: <span>{movieInfo?.original_language}</span>
            </span>
          </div>
          <span className="close" onClick={closeSection}>
            X
          </span>
        </>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default MovieInfo;
