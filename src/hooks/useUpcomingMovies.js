import { useState } from "react";
import { fetchUpcomingMovies } from "../utils/the-movie-db";

export function useUpcomingMovies() {
    const [UpcomingMovies, setMovie] = useState([]);
    
    const getUpcomingMovies = async (page) => {
      const { data } = await fetchUpcomingMovies(page);
      setMovie(data.results);
    };
    return {
      getUpcomingMovies,
      UpcomingMovies,
    };
  }
  