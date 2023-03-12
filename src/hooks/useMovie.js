import { useState } from "react";
import { fetchMovies } from "../utils/the-movie-db";

//Tomar las peliculas de la api
export function useMovie() {
  const [movies, setMovie] = useState([]);
  let [page, setPage] = useState(1); //manejar las paginas de la api

  const getMovies = async (page) => {
    const { data } = await fetchMovies(page);
    setMovie(data.results);
  };
  return {
    getMovies,
    page,
    setPage,
    movies,
  };
}
