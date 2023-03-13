import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleMovie } from "../../hooks/useSingleMovie";

export function MovieDetailPage() {
  const { movie_id } = useParams(); //toma el id de la pelicula de la url
  const { movie, isLoading, getMovie } = useSingleMovie();

  const {
    genres,
    original_language,
    original_title,
    production_companies,
    overview,
    backdrop_path,
    budget,
    status,
    release_date,
    vote_count
  } = movie || {};

  useEffect(() => {
    if (!isLoading && movie_id) {
      getMovie(movie_id);
    }
    
  }, []);

  return (
    <div className="grid grid-cols-1 justify-items-center">
      {isLoading && (
        <h1 className="text-3xl font-bold mt-20">Cargando detalles...</h1>
      )}

      {!isLoading && (
        <>
          <div className="grid md:grid-cols-3 grid-cols-2 justify-items-center w-full mt-20 mb-10 ">
            <div className="bg-[#FEF9EF] p-4 border-2 border-black border-solid rounded-md">
              <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt={original_title}
                className="md:h-64 h-10 mb-10"
              />
              <h1 className="text-xl font-semibold mb-5">
                FECHA DE ESTRENO:{release_date}
              </h1>
              <h1 className="text-xl font-semibold">ESTADO: {status}</h1>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold mb-10">{original_title}</h1>
              <h2 className="text-xl font-semibold">Géneros:</h2>
              <br />
              <div>
                 {genres.map((genre) => {
                  return <h1>{genre.name}</h1>;
                })}  
                
              </div>
            </div>
            <div className=" grid grid-cols-1">
              <h1 className="text-xl font-semibold">
                LENGUAJE ORIGINAL: {original_language}
              </h1>
              <h1 className="text-xl font-semibold">PRESUPUESTO: ${budget}</h1>
              <h1 className="text-xl font-semibold">RATING: {vote_count}</h1>
            </div>
          </div>
          <div>
            <div className="md:mx-56">
              <h1 className="text-xl font-semibold mb-5">Descripción</h1>
              <p className="border-2 border-black border-solid rounded-md  p-2 bg-white">
                {overview}
              </p>
            </div>
            <div className="ml-20 my-10">
              <h1 className="text-xl font-semibold mb-5">COMPAÑIAS:</h1>
              <div>
                {production_companies.map((company) => {
                  return <h1>{company.name}</h1>;
                })}  
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
