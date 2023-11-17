import React, { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { AiFillWarning } from "react-icons/ai";

import Movie from "./Movie";
import Toast from "./Toast";

const Results = () => {
  const { movies, errorMessage } = useContext(GlobalContext);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  if (errorMessage) {
    return (
      <div className="error-message">
        <AiFillWarning />
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="movies-container">
      {movies && movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            showToastMessage={showToastMessage}
          />
        ))
      ) : (
        <div className="no-results">There are no movies to display.</div>
      )}
      <Toast
        message={toastMessage}
        showToast={showToast}
        hideToast={hideToast}
      />
    </div>
  );
};

export default Results;
