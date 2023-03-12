import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { fetchMovies } from "../../utils/the-movie-db";


export function HomePage() {
  const [movies, setMovie] = useState([]);
  let [page, setPage] = useState(1);

  const getMovies = async () => {
    const { data } = await fetchMovies(page);
    setMovie(data.results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  const handleNext = () => {
    setPage(page+=1);
    getMovies()
    console.log(page)
    
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl md:text-3xl mt-10">NUESTRA CARTELERA</h1>
      <div id="container" className="grid grid-cols-1 mx-2 md:grid-cols-3 md:justify-between md:w-3/4">
        {movies.map((movie, idx) => {
          return <Card movie={movie} key={idx} />;
        })}
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="h-10 bg-[#FE6D73] px-5 rounded-md my-5"
      >
        Siguiente página
      </button>
      
    </div>
  );
}
