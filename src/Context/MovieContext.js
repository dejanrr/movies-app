import { useState, useEffect, createContext } from "react";

export const MovieContext = createContext();

//APIs

const API_KEY = "22255a1d03be2922b50e977230a4adaa";

const TOP_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=22255a1d03be2922b50e977230a4adaa&page=1";

const POPULAR =
  "https://api.themoviedb.org/3/discover/movie?api_key=22255a1d03be2922b50e977230a4adaa&sort_by=popularity.desc&page=233";

export const MovieState = ({ children }) => {
  const [movies, setMovies] = useState('');
  const [popularMovies, setPopularMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);

  //movie section API

  const MOVIE_INFO = `https://api.themoviedb.org/3/movie/${selectedMovie}?api_key=22255a1d03be2922b50e977230a4adaa`;

  //popular movies page

  const getPopular = async () => {
    const response = await fetch(POPULAR);
    const data = await response.json();
    setPopularMovies(data.results);
  };

  useEffect(() => {
    getPopular();
  }, []);

  //top rated movies page

  const getTopRatedMovies = async () => {
    const topRatedMoviesResponse = await fetch(TOP_RATED);
    const topRatedMoviesData = await topRatedMoviesResponse.json();
    setTopRatedMovies(topRatedMoviesData.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  //movie info section

  const getInfo = async () => {
    const infoResponse = await fetch(MOVIE_INFO);
    const infoData = await infoResponse.json();
    setMovieInfo(infoData);
  };

  useEffect(() => {
    getInfo();
  }, [selectedMovie]);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        selectedMovie,
        onMovieSelect,
        movieInfo,
        movies,
        setMovies,
        searchQuery,
        setSearchQuery,
        searchVisible,
        setSearchVisible,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
