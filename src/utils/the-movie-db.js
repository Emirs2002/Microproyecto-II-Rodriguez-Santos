import axios from "axios";

export async function fetchMovies(page) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=9f1212063dfef6c418d0a5e248e05c78&page=${page}`
  );
}
