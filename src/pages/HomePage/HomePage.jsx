import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card/Card";
import { useMovie } from "../../hooks/useMovie";
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import { Button1, Button2, Button3 } from "../../components/Button/Button";

export function HomePage() {
  //controlar el tipo de peliculas para indicar que funcion usar
  let [type, setType] = useState(false);
  let [page, setPage] = useState(1);
  //usar peliculas a estrenar
  const { getUpcomingMovies, UpcomingMovies, isLoadingUpcoming} = useUpcomingMovies()
  //usar peliculas estrenadas
  const { getMovies, movies, isLoading } = useMovie();

  useEffect(() => {
    (!type ? getMovies():getUpcomingMovies());
    
  }, []);

  {
    /* Controlar los botones de pagina anterior y pagina siguiente*/
  }
  const handleNext = () => {
    setPage((page += 1));
    (!type ? getMovies(page):getUpcomingMovies(page))
    
  };

  const handlePrior = () => {
    setPage((page -= 1));
    (!type ? getMovies(page):getUpcomingMovies(page))
  };

  //cambiar de pelis estrenadas a proximas a estrenar
  const handleMovieType = () => {
    setType(!type);
    (type ? getMovies():getUpcomingMovies())
  };

  return (
    <div className="flex flex-col justify-center items-center mb-4">
      
      {isLoadingUpcoming &&  <h1 className="text-3xl font-bold mt-20">Cargando películas...</h1>}

      {isLoading && <h1 className="text-3xl font-bold mt-20">Cargando películas...</h1>}
      
      {!isLoading && !isLoadingUpcoming && 
      <>
      <h1 className="font-bold text-xl md:text-3xl mt-10 mb-5 ">NUESTRA CARTELERA</h1>
      <Button1
        disabled={false}
        onClick={handleMovieType}
      >
        {type ? "Ver estrenadas" : "Ver próximos estrenos"}
      </Button1>
      <div
        id="container"
        className="grid grid-cols-1 mx-2 md:grid-cols-3 md:justify-between md:w-3/4"
      >
        {type && UpcomingMovies.map((movie, idx) => {
          return <Card movie={movie} key={idx} />;
        })}


        {!type && movies.map((movie, idx) => {
          return <Card movie={movie} key={idx} />;
        })}
      </div>

      <div className="flex ">
        {page > 1 && (
          <Button1
            disabled={false}
            onClick={handlePrior}
          >
            Página anterior
          </Button1>
        )}
        
        <Button1
          disabled={false}
          onClick={handleNext}
        >
          Siguiente página
        </Button1>
      </div>
      </>}
    </div>
  );
}
