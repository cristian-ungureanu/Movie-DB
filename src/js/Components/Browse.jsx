import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Movie from "../Components/Movie";
import Mock from "../Components/Mock";
import Search from "./Search";
import Hero from "./Hero";

export const Browse = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const { query, isLoading, setIsLoading } = useContext(GlobalContext);

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
  }, [page, query]);

  return (
    <>
      <Hero setMovies={setMovies} />
      <div className="container">
        <div className="inner-content">
          {isLoading ? (
            <Mock />
          ) : (
            <div className="movies-container">
              {movies && movies.length > 0 ? (
                movies.map((movie) => <Movie movie={movie} key={movie.id} />)
              ) : (
                <div className="no-results">
                  There are no movies to display. Try searching for something
                  else.
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
