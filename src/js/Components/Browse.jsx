import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import Mock from "../Components/Mock";
import Results from "../Components/Results";
import { MOVIE_DISCOVER_ENDPOINT } from "../config";

export const Browse = () => {
  const {
    query,
    isLoading,
    setIsLoading,
    setTotalPages,
    page,
    setMovies,
    setErrorMessage,
    categories,
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
        const currentCategories = categories.join("|");
        const response = await fetch(
          `${MOVIE_DISCOVER_ENDPOINT}&page=${page}&with_genres=${currentCategories}`,
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
  }, [page, query, location, categories]);

  return <>{isLoading ? <Mock /> : <Results />}</>;
};
