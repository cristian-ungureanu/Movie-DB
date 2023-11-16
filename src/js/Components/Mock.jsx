const Mock = () => {
  const movieCards = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className="movie-card mock">
      <div className="image">
        <div className="placeholder"></div>
      </div>
      <div className="content">
        <div className="placeholder" style={{ width: "200px" }}></div>
        <div className="placeholder" style={{ width: "150px" }}></div>
      </div>
    </div>
  ));

  return <div className="movies-container">{movieCards}</div>;
};

export default Mock;
