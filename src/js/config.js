// config.js
const API_KEY = process.env.VITE_REACT_APP_TMDB_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const MOVIE_SEARCH_ENDPOINT = `${BASE_URL}/search/movie?api_key=${API_KEY}&include_adult=false`;
export const MOVIE_DISCOVER_ENDPOINT = `${BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc`;
