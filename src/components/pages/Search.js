import React, { useContext } from "react";
import Movie from "../movie/Movie";
import '../movie/container.css';
import MovieInfo from "../movie/MovieInfo";
import { MovieContext } from "../../Context/MovieContext";
import Nav from "../navbar/Nav";

const Search = () => {
  const { selectedMovie, onMovieSelect, movies } = useContext(MovieContext);

  return (
    <div>
      <Nav />
      {selectedMovie && <MovieInfo />}
      <div className="movie-container">
        {movies?.length
          ? movies.map((movie) => (
              <Movie key={movie.id} {...movie} onMovieSelect={onMovieSelect} />
            ))
          : "No results found"}
      </div>
    </div>
  );
};

export default Search;
