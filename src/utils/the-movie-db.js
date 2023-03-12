import axios from "axios";

export async function fetchMovies() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/550?api_key=9f1212063dfef6c418d0a5e248e05c78"
  );
}
