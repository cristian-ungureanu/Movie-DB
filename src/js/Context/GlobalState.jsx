import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

export const getPageFromURL = () => {
  const page = new URLSearchParams(window.location.search).get("page");
  return page ? parseInt(page, 10) : 1;
};

// initial state
const initialState = {
  query: "",
  isLoading: false,
  page: getPageFromURL(),
  totalPages: 0,
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  movies: [],
  errorMessage: "",
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  const setIsLoading = (isLoading) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  };

  const setPage = (page) => {
    dispatch({ type: "SET_PAGE", payload: page });
  };

  const setTotalPages = (totalPages) => {
    dispatch({ type: "SET_TOTAL_PAGES", payload: totalPages });
  };

  const addToWatchlist = (movie) => {
    dispatch({ type: "ADD_TO_WATCHLIST", payload: movie });
  };

  const removeFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  const setMovies = (movies) => {
    dispatch({ type: "SET_MOVIES", payload: movies });
  };

  const setErrorMessage = (errorMessage) => {
    dispatch({ type: "SET_ERROR_MESSAGE", payload: errorMessage });
  };

  return (
    <GlobalContext.Provider
      value={{
        query: state.query,
        setQuery,
        isLoading: state.isLoading,
        setIsLoading,
        page: state.page,
        setPage,
        totalPages: state.totalPages,
        setTotalPages,
        watchlist: state.watchlist,
        addToWatchlist,
        removeFromWatchlist,
        movies: state.movies,
        setMovies,
        errorMessage: state.errorMessage,
        setErrorMessage,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
