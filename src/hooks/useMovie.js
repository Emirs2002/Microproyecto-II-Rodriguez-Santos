import { useState } from "react";
import { fetchMovies } from "../utils/the-movie-db";


//Tomar las peliculas de la api
export function useMovie() {
  //manejar las paginas de la api
  const [movies, setMovie] = useState([]);
 

  const getMovies = async (page) => {
    const { data } = await fetchMovies(page);
    setMovie(data.results);
  };
  return {
    getMovies,
    movies,
  };
}
