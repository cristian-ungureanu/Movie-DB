import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import Results from "../Components/Results";
import Mock from "./Mock";

export const Favorites = () => {
  const { watchlist, setMovies, isLoading, page, setTotalPages, query } =
    useContext(GlobalContext);

  const location = useLocation();
  const postsPerPage = 20;

  useEffect(() => {
    if (query) {
      return;
    }
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = watchlist.slice(indexOfFirstPost, indexOfLastPost);
    setTotalPages(Math.ceil(watchlist.length / postsPerPage));
    setMovies(currentPosts);
  }, [query, page, watchlist]);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      setTotalPages(Math.ceil(watchlist.length / postsPerPage));
    }
  }, [location]);

  return <> {isLoading ? <Mock /> : <Results />}</>;
};
