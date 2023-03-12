import React from 'react'
import { Link } from 'react-router-dom';
import { LOGIN_PAGE } from '../../constants/url';
import { Button1 } from '../../components/Button/Button';
import { Button2 } from '../../components/Button/Button';
import { signInWithGoogle } from "../../firebase/auth-service"

export function RegisterPage() {
  const handleSigninWithGoogle = async () => {
    await signInWithGoogle()
  }
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
            <h3 className="text-4xl font-bold text-[#FE6D73]">
              ¡Regístrate!
            </h3>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Nombre
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block pl-2 w-full mt-1 rounded-md shadow-sm text-s border-2 border-solid border-gray-300 "
                  placeholder='Escriba su nombre...'
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 rounded-md shadow-sm border-2 border-solid border-gray-300 pl-2"
                  placeholder='Escriba su correo...'
                  />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Clave
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 rounded-md shadow-sm border-2 border-solid border-gray-300  pl-2"
                  placeholder='Escriba su clave...'
                />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Button1 disabled={false}>¡Listo!</Button1>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            ¿Ya tiene una cuenta?{" "}
            <span>
              <Link to={LOGIN_PAGE} className="text-[#FE6D73] hover:text-[#17C3B2]" >
                Inicia sesión
              </Link>
            </span>
          </div>
          <div className="flex items-center w-full my-4">
            <hr className="w-full" /> {/*Esta es la barrita*/}
          </div>
          <div className="my-6 space-y-2">
            <Button2 disabled={false}>Inicia sesión con Google</Button2>
          </div>
        </div>
      </div>
    </div>
  );
}

