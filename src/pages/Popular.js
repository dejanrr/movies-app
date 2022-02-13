import React, { useContext } from "react";
import Movie from "../components/movie/Movie";
import "../components/movie/container.css";
import MovieInfo from "../components/movie/MovieInfo";
import { MovieContext } from "../Context/MovieContext";
import Nav from "../components/navbar/Nav";

const Popular = () => {
  const { popularMovies, selectedMovie, onMovieSelect } =
    useContext(MovieContext);

  return (
    <div>
      <Nav />
      {selectedMovie && <MovieInfo />}
      <div className="movie-container">
        {popularMovies?.length
          ? popularMovies.map((movie) => (
              <Movie key={movie.id} {...movie} onMovieSelect={onMovieSelect} />
            ))
          : "No results found"}
      </div>
    </div>
  );
};

export default Popular;
