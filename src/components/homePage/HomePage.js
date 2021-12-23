import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <h1 className="homepage-logo">Movie Discovery</h1>
        <h3 className="menu">
          <MenuIcon />
        </h3>
      </div>
      <div className="banner">
        <div className="banner-content">
          <h2>
            Discover your <span>movie</span> today
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="start-button" onClick={() => navigate("/popular")}>
            Start browsing
          </button>
        </div>
        <ul className="social-media">
          <li>
            <FacebookIcon />
          </li>
          <li>
            <InstagramIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
          <li>
            <GitHubIcon />
          </li>
        </ul>
      </div>
    </>
  );
};

export default HomePage;
