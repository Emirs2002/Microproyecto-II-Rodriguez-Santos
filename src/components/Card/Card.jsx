import React from "react";

export function Card() {
  return (
    <div class="grid grid-cols-2 md:grid-cols-1 md:justify-center md:items-center md:h-80 h-40 p-2 mt-10 md:w-64 w-full container mx-auto bg-[#226c87] rounded-xl shadow-md mb-5">
      <div className=" md:flex md:justify-center">
        <img
          className="md:w-44 w-36"
          src="src/assets/images/user.png"
          alt="Poster"
        />
      </div>
      <div className="md:flex md:flex-col md:items-center ">
        <div className="pt-1 text-white text-xl font-bold">Nombre Peli</div>
        <div className="text-white flex justify-start m-2">Porpularidad:</div>
        <div className=" w-36 grid justify-items-center rounded-xl text-white bg-[#17c3d2] mt-4">
          Idioma
        </div>
      </div>
    </div>
  );
}
