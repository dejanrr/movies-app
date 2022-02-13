import { useState, useEffect, createContext } from "react";
import Api from "../services/movieService.js";
import { Link, useNavigate } from "react-router-dom";

export const MovieContext = createContext();

export const MovieState = ({ children }) => {
  const [movies, setMovies] = useState("");
  const [popularMovies, setPopularMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [movieInfo, setMovieInfo] = useState();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchVisible, setSearchVisible] = useState(true);

  let navigate = useNavigate();

  //search query

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      Api.getSearchData(searchQuery).then((data) => {
        setMovies(data.results);
      });
      setSearchQuery("");
    }

    const navigateToSearch = () => navigate("/find");
    navigateToSearch();
  };

  //popular movies page

  useEffect(() => {
    Api.getPopularMovies().then((data) => {
      setPopularMovies(data.results);
    });
  }, []);

  //top rated movies page

  useEffect(() => {
    Api.getTopRatedMovies().then((data) => {
      setTopRatedMovies(data.results);
      console.log(data);
    });
  }, []);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        selectedMovie,
        onMovieSelect,
        setMovieInfo,
        movieInfo,
        movies,
        setMovies,
        searchQuery,
        setSearchQuery,
        searchVisible,
        setSearchVisible,
        handleSubmit,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
