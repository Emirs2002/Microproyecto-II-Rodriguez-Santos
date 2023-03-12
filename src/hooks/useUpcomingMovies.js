import { useState } from "react";
import { fetchUpcomingMovies } from "../utils/the-movie-db";

export function useUpcomingMovies() {
    const [UpcomingMovies, setMovie] = useState([]);
    const [isLoadingUpcoming, setLoading] = useState(false)
    
    const getUpcomingMovies = async (page) => {
      setLoading(true)
      const { data } = await fetchUpcomingMovies(page);
      setMovie(data.results);
      setLoading(false)
    };
    return {
      getUpcomingMovies,
      UpcomingMovies,
      isLoadingUpcoming
    };
  }
  