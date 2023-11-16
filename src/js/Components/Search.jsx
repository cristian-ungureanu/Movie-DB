import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = ({ setMovies }) => {
  const { query, setQuery, setIsLoading } = useContext(GlobalContext);

  let debounceTimer = null;

  useEffect(() => {
    // Cleanup function to clear the timeout on component unmount
    return () => clearTimeout(debounceTimer);
  }, []);

  useEffect(() => {
    if (!query) {
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
          `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false`,
          options,
        );

        const json = await response.json();

        if (!json.errors) {
          setMovies(json.results);
        } else {
          // TODO: Handle errors
          setMovies([]);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    // Clear the previous timeout to avoid unnecessary API calls
    clearTimeout(debounceTimer);

    // Set a new timeout to call requestMovies after a delay
    debounceTimer = setTimeout(() => {
      requestMovies();
    }, 300);

    // Cleanup function to clear the timeout on searchValue change
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="search">
      <div className="search-icon">
        <FaSearch />
      </div>
      <input
        id="search"
        value={query}
        onChange={onChange}
        placeholder="Search for a movie"
      />
      {query && (
        <button className="clear-icon" onClick={() => setQuery("")}>
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Search;
