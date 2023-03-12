import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { fetchMovies } from "../../utils/the-movie-db";

export function HomePage() {
  const [movies, setMovie] = useState([]);
  const [page, setpage] = useState(1);

  const getMovies = async () => {
    
    const { data } = await fetchMovies(page);
    setMovie(data.results);
    
  };
  useEffect(() => {
    getMovies();
  }, []);
  
  const handleNext = () => {
    setpage(page+1)

  }
  return (
    
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 justify-between md:w-3/4">
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })} 
      </div>
      <button onClick={handleNext}>Siguiente</button>
    </div>
  );
}
