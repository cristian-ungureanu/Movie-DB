import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  query: "",
  isLoading: false,
  watchlist: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const setQuery = (query) => {
    dispatch({ type: "SET_QUERY", payload: query });
  };

  const setIsLoading = (isLoading) => {
    dispatch({ type: "SET_IS_LOADING", payload: isLoading });
  };

  return (
    <GlobalContext.Provider
      value={{
        query: state.query,
        setQuery,
        isLoading: state.isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
