const Results = ({ movies }) => {
  return (
    <div className="movies-container">
      {movies &&
        movies.map((movie) => {
          return (
            <div className="movie-card" key={movie.id}>
              <div className="image">
                <img
                  src={`./api/t/p/w220_and_h330_face${movie.poster_path}`}
                  alt={`${movie.title} poster`}
                />
              </div>
              <div className="content">
                <h2>{movie.title}</h2>
                <span className="tag">{movie.release_date}</span>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Results;
