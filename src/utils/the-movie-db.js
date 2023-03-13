import axios from "axios";

export async function fetchMovies(page) {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=9f1212063dfef6c418d0a5e248e05c78&page=${page}`
  );
}

export async function fetchUpcomingMovies(page) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=9f1212063dfef6c418d0a5e248e05c78&page=${page}`
  );

}

export async function fetchMovieDetails(movie_id){
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=9f1212063dfef6c418d0a5e248e05c78`
  )
}