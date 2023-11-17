import React from "react";
import Search from "./Search";

function Hero({ setMovies }) {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>Cinematic Adventures Await</h1>
              <p> Explore, Watch, and Curate Your Movie Watchlist!</p>
            </div>
            <Search setMovies={setMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
