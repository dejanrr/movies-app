import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./nav.css";
import "../movie/container.css";
import SearchIcon from "@mui/icons-material/Search";
import { MovieContext } from "../../Context/MovieContext";

const Nav = () => {
  const {
    searchQuery,
    setSearchQuery,
    searchVisible,
    setSearchVisible,
    handleSubmit,
  } = useContext(MovieContext);

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
