import React from "react";
import { Link } from "react-router-dom";
import { REGISTER_PAGE, LOGIN_PAGE } from "../../constants/url";
import { useUser } from "../../contexts/UserContext";
import { Button2, Button3 } from "../Button/Button";
import { logout } from "../../firebase/auth-service";

export function Navbar() {
  const { user } = useUser()

  const handleLogout = async () => {
    await logout(() => navigate(REGISTER_PAGE));
  };


  //Cambiar el icono del menu y activar el menu responsive
  const menu = (event) => {
    let list = document.querySelector("ul");
    event.currentTarget.className === "menu h-7"
      ? ((event.currentTarget.src = "src/assets/images/close.png"),
        (event.currentTarget.className = "close h-7"),
        list.classList.add("top-[70px]"),
        list.classList.add("opacity-100"))
      : ((event.currentTarget.src = "src/assets/images/menu.png"),
        (event.currentTarget.className = "menu h-7"),
        list.classList.remove("top-[70px]"),
        list.classList.remove("opacity-100"));
  };

  //HACER QUE LA WINDOW DESAPAREZCA CUANDO HAYA CAMBIO DE PAGINA
  const handlewindow = () => {
    let list = document.querySelector("ul");
    let imagen = document.getElementById("close-img");
    imagen.currentTarget.className = "close h-7";
    imagen.currentTarget.src = "src/assets/images/menu.png";
    list.classList.remove("top-[70px]");
    list.classList.remove("opacity-100");
  };

  return (
    <nav className="p-5 bg-[#108c80] md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <span className="cursor-pointer">
          <Link
            className="flex pl-2"
            onClick={handlewindow}
          >
            <img className="h-12 inline mr-2" src="src\assets\images\Logo.png" />
            <p className="text-2xl font-heading font-bold text-[#FEF9EF] pt-1">Cartelera Caracas</p>
          </Link>
        </span>
        <span className="cursor-pointer md:hidden block">
          <img
            src="src\assets\images\menu.png"
            id="menu-img"
            className="menu h-7"
            onClick={menu}
          />
        </span>
      </div>

      <ul
        className="text-[#FEF9EF] md:flex md:items-center md:z-auto md:static absolute
       bg-[#108c80] w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl7
       md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-400"
      >
        <li className=" font-semibold hover:text-[#ffcb77] mx-4  my-6 md:my-0 ">
          <Link className="text-xl">Buscador</Link>
        </li>

        {!!user && (<><span className="hover:text-[#ffcb77] font-semibold mx-4 text-xl flex items-center cursor-pointer">
          <Link className="pr-2" onClick={handlewindow}>
            {user.username}
          </Link>
          <img className="h-10 inline" src="src\assets\images\User.png" />
        </span>
          <span>
            <Button3 disabled={false} onClick={handleLogout} >
              Salir
            </Button3>
          </span>
        </>)}

        {!user && (<Button3 disabled={false} >
          <Link to={LOGIN_PAGE} className="pr-2" onClick={handlewindow}>
            Iniciar Sesión
          </Link>
        </Button3>)}
      </ul>
    </nav>
  );
}