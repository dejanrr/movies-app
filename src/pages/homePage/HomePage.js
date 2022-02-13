import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePage.css";
import FadeIn from "react-fade-in";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-left">
          <div className="header">
            <FadeIn delay={100} transitionDuration={5000}>
              <div className="homepage-logo">Movie Discovery</div>
            </FadeIn>
          </div>

          <div className="titles">
            <div className="hero-title">
              <span className="hero-movie">Discover</span> your new
            </div>
            <div className="hero-title">
              favorite <span className="hero-movie">movie</span>
            </div>
          </div>

          <div className="subheading">
            <p>Movie Discovery is a free web app for movie recommendations.</p>
            <p>Take a look at the current list of the top rated or the most</p>
            <p>popular movies and choose the right one for you!</p>
          </div>
          <button className="start-button" onClick={() => navigate("/popular")}>
            Start browsing
          </button>
        </div>

        <div className="hero-right">
          <div className="social-media-wrapper">
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
                <a href="https://github.com/dejanrr">
                  <GitHubIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
