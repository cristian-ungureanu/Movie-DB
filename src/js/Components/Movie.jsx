import React, { useContext, useMemo } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { RiCameraOffLine } from "react-icons/ri";
import { TbHeartPlus, TbHeartMinus } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Movie = ({ movie, showToastMessage }) => {
  const { addToWatchlist, watchlist, removeFromWatchlist } =
    useContext(GlobalContext);

  const storedMovie = useMemo(
    () => watchlist.find((o) => o.id === movie.id),
    [watchlist, movie.id],
  );

  return (
    <div className="movie-card" key={movie.id}>
      <div className="image">
        {movie.poster_path ? (
          <img
            src={`./api/t/p/w220_and_h330_face${movie.poster_path}`}
            srcSet={`./api/t/p/w220_and_h330_face${movie.poster_path} 1x, ./api/t/p/w440_and_h660_face${movie.poster_path} 2x`}
            alt={`${movie.title} poster`}
          />
        ) : (
          <div className="placeholder">
            <RiCameraOffLine />
          </div>
        )}
        <>
          {!storedMovie ? (
            <button
              className="favorites"
              onClick={() => {
                addToWatchlist(movie);
                showToastMessage("The movie was added to your favorites list.");
              }}
            >
              <TbHeartPlus />
            </button>
          ) : (
            <button
              className="favorites"
              onClick={() => {
                removeFromWatchlist(movie.id);
                showToastMessage(
                  "The movie was removed from your favorites list.",
                );
              }}
            >
              <TbHeartMinus />
            </button>
          )}
        </>
      </div>
      <div className="content">
        <h3>{movie.title}</h3>
        <div className="release-date">
          <IoCalendarOutline />
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </div>
        <div className="rating">
          <CiStar />
          {Math.round(movie.vote_average * 10) / 10}
        </div>
      </div>
    </div>
  );
};

export default Movie;
