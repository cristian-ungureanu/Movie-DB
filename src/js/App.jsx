import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Results from "./Components/Results";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    requestMovies();
  }, [page]);

  async function requestMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2E0NzA1YzIzNDg2ZGI3ODk1NDdiODQwNWE3Yzc4MyIsInN1YiI6IjY1NTUxYTA3NTM4NjZlMDBlMjkyYWU3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7aAXV_WG563A0YirzPH_JH63fMlh7rDivJtvge0C5Qw",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options,
    );

    const json = await response.json();

    setMovies(json.results);
  }

  return (
    <div className="container">
      <Results movies={movies} />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
