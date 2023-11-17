import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Movie from "./Movie";

const Results = () => {
  const { movies } = useContext(GlobalContext);
  return (
    <div className="movies-container">
      {movies && movies.length > 0 ? (
        movies.map((movie) => <Movie movie={movie} key={movie.id} />)
      ) : (
        <div className="no-results">
          There are no movies to display. Try searching for something else.
        </div>
      )}
    </div>
  );
};

export default Results;
