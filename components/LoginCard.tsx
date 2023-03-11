import Link from 'next/link';
import { useState } from 'react';
import CircleAspa from './svg/CircleAspa';

export default function LoginCard() {
  const [closeLogin, setCloseLogin] = useState(false);

  const handleFormClose = () => {
    setCloseLogin(true);
  };

  if (closeLogin) {
    return null;
  }

  return (
    <div className="fixed top-20 right-9 bg-app-blackLight h-[449px] w-[386px] m-0 p-0 rounded-lg opacity-90 z-40 grid place-items-center">
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={handleFormClose}
      >
        <CircleAspa />
      </div>
      <div className="grid gap-3 m-4 mx-8">
        <div>
          <h2 className="font-roboto text-2xl not-italic leading-10 font-bold">
            ¡Hola!
          </h2>
          <p className="font-roboto text-sm not-italic">
            inicie su sesión con los datos que ingresó durante
            <br /> su registro
          </p>
        </div>
        <div className="grid gap-2 my-3">
          <div className="grid gap-1">
            <p className="text-sm font-bold">Email</p>
            <input
              type="text"
              className="w-[100%] h-11 rounded bg-transparent border-2"
            />
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-bold">Contraseña</p>
            <input
              type="password"
              className="w-[100%] h-11 rounded bg-transparent border-2"
            />
          </div>
          <div className="flex gap-1">
            <p>¿Olvidaste tu contraseña?</p>
            <a href="" className="text-app-yellow">
              Recupérala aquí
            </a>
          </div>
        </div>
        <div className="grid gap-2">
          <Link href="">
            <button className="text-black font-bold h-10 w-[100%] rounded bg-app-yellow flex justify-center items-center">
              Iniciar Sesión
            </button>
          </Link>
          <Link
            href=""
            className="flex justify-center items-center text-app-yellow decoration-solid text-sm"
          >
            O crea una cuenta aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
