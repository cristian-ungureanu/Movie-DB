import { RiCameraOffLine } from "react-icons/ri";
import { TbHeartPlus } from "react-icons/tb";
import { IoCalendarOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";

const Movie = ({ movie }) => {
  console.log("Movie:", movie);
  const addToFavorites = () => {
    console.log("Add to favorites:", movie);
  };

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
        <div className="overlay">
          <button className="favorites" onClick={addToFavorites}>
            <TbHeartPlus />
          </button>
        </div>
      </div>
      <div className="content">
        <h3>{movie.title}</h3>
        <div className="release-date">
          <IoCalendarOutline />
          {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
        </div>
        <div className="rating">
          <CiStar />
          {movie.vote_average}
        </div>
      </div>
    </div>
  );
};
export default Movie;