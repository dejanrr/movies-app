import React, { useContext } from "react";
import { MovieContext } from "../../Context/MovieContext";
import "./movieinfo.css";

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  id,
}) => {
  const { onMovieSelect } = useContext(MovieContext);

  const handleClick = () => {
    onMovieSelect(id);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleClick} className="movie">
      <img src={IMG_API + poster_path} alt={title} />
      <div className="movie-card">
        <span className="movie-card-title">{title}</span>
        <span className="movie-rating">{vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
