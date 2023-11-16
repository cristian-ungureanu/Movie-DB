import React from "react";
import Search from "./Search";

function Hero({ setMovies }) {
  return (
    <div className="hero">
      <div className="overlay">
        <div className="container">
          <Search setMovies={setMovies} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
