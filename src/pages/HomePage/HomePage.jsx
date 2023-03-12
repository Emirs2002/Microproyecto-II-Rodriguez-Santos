import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { useMovie } from "../../hooks/useMovie";


export function HomePage() {
  
  const { getMovies, movies } = useMovie()
  let { page, setPage } = useMovie()

  useEffect(() => {
    getMovies();
  }, []);

  {/* Controlar los botones de pagina anterior y pagina siguiente*/}
  const handleNext = () => {
    setPage(page+=1);
    getMovies(page)
    
  };

  const handlePrior = () => {
    setPage(page-=1);
    getMovies(page)
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl md:text-3xl mt-10">NUESTRA CARTELERA</h1>
      <div id="container" className="grid grid-cols-1 mx-2 md:grid-cols-3 md:justify-between md:w-3/4">
        {movies.map((movie, idx) => {
          return <Card movie={movie} key={idx} />;
        })}
      </div>
      
      <div className="flex ">
      {page > 1 && <button
          type="button"
          onClick={handlePrior}
          className="h-10 bg-[#FE6D73] px-5 rounded-md my-5"
        >
          Página anterior
        </button>}

        <button
          type="button"
          onClick={handleNext}
          className="h-10 bg-[#FE6D73] px-5 rounded-md my-5 ml-5"
        >
          Siguiente página
        </button>

        
      </div>
    </div>
  );
}
