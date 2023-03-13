import { fetchMovieDetails } from "../utils/the-movie-db";
import React, { useState } from "react";

export function useSingleMovie() {
  const [movie, setSingleMovie] = useState(null);
  const [isLoading, setLoading] = useState(false);

  //obtener pelicula sola
  const getMovie = async (movie_id) => {
    setLoading(true);
    const { data } = await fetchMovieDetails(movie_id);
    
    setSingleMovie(data);
    setLoading(false);
  };
  return { movie, isLoading, getMovie };
}
