import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalState";
import Results from "../Components/Results";
import Mock from "./Mock";

export const Favorites = () => {
  const {
    watchlist,
    setMovies,
    isLoading,
    page,
    setTotalPages,
    query,
    categories,
  } = useContext(GlobalContext);

  const location = useLocation();
  const postsPerPage = 20;

  useEffect(() => {
    if (query) {
      return;
    }
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = watchlist.slice(indexOfFirstPost, indexOfLastPost);
    let totalPages = Math.ceil(watchlist.length / postsPerPage);
    if (categories.length > 0) {
      currentPosts = currentPosts.filter((movie) =>
        movie.genre_ids.some((genre) => categories.includes(genre)),
      );
      totalPages = Math.ceil(currentPosts.length / postsPerPage);
    }
    setTotalPages(totalPages > 0 ? totalPages : 1);
    setMovies(currentPosts);
  }, [query, page, watchlist, categories]);

  useEffect(() => {
    if (location.pathname === "/favorites") {
      const totalPages = Math.ceil(watchlist.length / postsPerPage);
      setTotalPages(totalPages > 0 ? totalPages : 1);
    }
  }, [location]);

  return <> {isLoading ? <Mock /> : <Results />}</>;
};
