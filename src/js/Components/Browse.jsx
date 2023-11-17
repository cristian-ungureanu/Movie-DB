import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import Mock from "../Components/Mock";
import Results from "../Components/Results";

export const Browse = () => {
  const {
    query,
    isLoading,
    setIsLoading,
    setTotalPages,
    page,
    setMovies,
    setErrorMessage,
  } = useContext(GlobalContext);
  const location = useLocation();
  useEffect(() => {
    if (query) {
      return;
    }

    async function requestMovies() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VITE_REACT_APP_TMDB_KEY}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
        );
        const json = await response.json();

        if (!response.ok) {
          throw new Error(json.status_message);
        }

        setTotalPages(json.total_pages > 500 ? 500 : json.total_pages);
        setMovies(json.results);
      } catch (error) {
        setMovies([]);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    requestMovies();
  }, [page, query, location]);

  return <>{isLoading ? <Mock /> : <Results />}</>;
};
