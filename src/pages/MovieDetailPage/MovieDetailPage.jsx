import React from "react";

export function MovieDetailPage() {
  return (
    <div className="grid grid-cols-1 justify-items-center">
      <div className="grid md:grid-cols-3 grid-cols-2 justify-items-center w-full mt-20 mb-10 ">
        <div className="bg-[#FEF9EF] p-4 border-2 border-black border-solid rounded-md">
          <img
            src="src\assets\images\no_poster_img.png"
            alt="Nombrepeli"
            className="md:h-64 h-10 mb-10"
          />
          <h1 className="text-xl font-semibold mb-5">FECHA DE ESTRENO:</h1>
          <h1 className="text-xl font-semibold">ESTADO:</h1>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold mb-10">TITULO PELICULA</h1>
          <h2 className="text-xl font-semibold">Géneros:</h2>
          <br />
          <ul className="list-disc">
            <li className=""> HOLA ALEJANDRA ANDREINA SANTOS CABRERA</li>
            <li className=""> COMO ESTAS</li>
            <li className=""> 04 QUE</li>
          </ul>
        </div>
        <div className=" grid grid-cols-1">
          <h1 className="text-xl font-semibold">LENGUAJE ORIGINAL:</h1>
          <h1 className="text-xl font-semibold">PRESUPUESTO:</h1>
          <h1 className="text-xl font-semibold">RATING:</h1>
        </div>
      </div>
      <div>
        <div className="md:mx-56">
          <h1 className="text-xl font-semibold mb-5">Descripción</h1>
          <p className="border-2 border-black border-solid rounded-md  p-2 bg-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            dolore maxime eius a labore! Vero rem temporibus saepe odit! Omnis,
            ex sequi. Quo, modi? Minima, voluptatum. Qui dolorum blanditiis
            expedita.lorem
          </p>
        </div>
        <div className="ml-20 my-10">
          <h1 className="text-xl font-semibold mb-5">COMPAÑIAS:</h1>
          <ul className="list-disc">
            <li className=""> HOLA ALEJANDRA ANDREINA SANTOS CABRERA</li>
            <li className=""> COMO ESTAS</li>
            <li className=""> 04 QUE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
