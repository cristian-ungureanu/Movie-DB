import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import Mock from "../Components/Mock";
import Results from "../Components/Results";

export const Browse = () => {
  const { query, isLoading, setIsLoading, setTotalPages, page, setMovies } =
    useContext(GlobalContext);
  const location = useLocation();
  useEffect(() => {
    if (query) {
      return;
    }

    async function requestMovies() {
      setIsLoading(true);

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2E0NzA1YzIzNDg2ZGI3ODk1NDdiODQwNWE3Yzc4MyIsInN1YiI6IjY1NTUxYTA3NTM4NjZlMDBlMjkyYWU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7aAXV_WG563A0YirzPH_JH63fMlh7rDivJtvge0C5Qw",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
          options,
        );

        const json = await response.json();

        if (!json.errors) {
          setTotalPages(json.total_pages > 500 ? 500 : json.total_pages);
          setMovies(json.results);
        } else {
          // TODO handle errors
          setMovies([]);
        }
      } catch (error) {
        // TODO handle errors
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    requestMovies();
  }, [page, query, location]);

  return <>{isLoading ? <Mock /> : <Results />}</>;
};
