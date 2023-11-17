import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import { FaSearch, FaTimes } from "react-icons/fa";

const Search = () => {
  const {
    query,
    setQuery,
    setIsLoading,
    page,
    setPage,
    setTotalPages,
    setMovies,
    watchlist,
    setErrorMessage,
  } = useContext(GlobalContext);
  const location = useLocation();

  let debounceTimer = null;

  useEffect(() => {
    document.getElementById("search").focus();
    return () => clearTimeout(debounceTimer);
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }

    async function requestMovies() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VITE_REACT_APP_TMDB_KEY}&query=${query}&include_adult=false&page=${page}`,
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

    const searchInWatchlist = () => {
      if (!watchlist.length) {
        setMovies([]);
        return;
      }
      const results = watchlist.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase()),
      );
      setPage(1);
      setTotalPages(Math.ceil(results.length / 20));
      setMovies(results);
    };

    // Clear the previous timeout to avoid unnecessary API calls
    clearTimeout(debounceTimer);

    // Set a new timeout to call requestMovies after a delay
    debounceTimer = setTimeout(() => {
      if (location.pathname === "/favorites") {
        searchInWatchlist();
        return;
      }
      requestMovies();
    }, 300);

    // Cleanup function to clear the timeout on searchValue change
    return () => clearTimeout(debounceTimer);
  }, [query, page]);

  const onChange = (e) => {
    e.preventDefault();
    setPage(1);
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
        aria-label="Search for a movie"
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
