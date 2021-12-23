import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import '../movie/container.css';
import SearchIcon from "@mui/icons-material/Search";
import { MovieContext } from "../../Context/MovieContext";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key=22255a1d03be2922b50e977230a4adaa&query=";

const Nav = () => {
  let navigate = useNavigate();

  const {
    setMovies,
    searchQuery,
    setSearchQuery,
    searchVisible,
    setSearchVisible,
  } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchQuery) {
      fetch(SEARCH_API + searchQuery)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });

      setSearchQuery("");
    }

    const navigateToSearch = () => navigate("/find");
    navigateToSearch();
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="navbar">
        <span className="logo">Movie Discovery</span>
        <nav className="navbar-wrapper">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/popular">Popular</Link>
            </li>
            <li>
              <Link to="/toprated">Top Rated</Link>
            </li>
            <li>
              <span
                onClick={() => setSearchVisible(!searchVisible)}
                style={!searchVisible ? { display: "none" } : { searchVisible }}
              >
                <SearchIcon sx={{ fontSize: 16, textAlign: "center" }} /> Search
              </span>
            </li>
          </ul>
        </nav>

        <div className="search-box">
          <form onSubmit={handleSubmit}>
            <span className="search-icon"></span>

            <input
              value={searchQuery}
              className="search"
              type="search"
              placeholder="Search..."
              onChange={handleChange}
              style={searchVisible ? { display: "none" } : { searchVisible }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
