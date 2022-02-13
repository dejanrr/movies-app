import React, { useContext, useEffect } from "react";
import { MovieContext } from "../../Context/MovieContext";
import "./movieinfo.css";

//movie poster API

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const MovieInfo = () => {
  const { onMovieSelect, movieInfo, selectedMovie, setMovieInfo } = useContext(MovieContext);

  // movie info API
  
  const MOVIE_INFO = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=${process.env.REACT_APP_API_KEY}`;

  //get movie info

  const getInfo = async () => {
    const infoResponse = await fetch(MOVIE_INFO);
    const infoData = await infoResponse.json();
    setMovieInfo(infoData);
  };

  useEffect(() => {
    getInfo();
  }, [selectedMovie]);

  //handling movie info section closing button

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
