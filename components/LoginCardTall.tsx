import Link from 'next/link';
import Alerta from './svg/Alerta';
// import { useState } from 'react';

import CircleAspa from './svg/CircleAspa';
import EyesSlash from './svg/EyesSlash';

// const [visible, setVisible] = useState(true);

// let passwordVisible = visible ? <EyesSlash /> : <Eyes />;
// onClick={() => setVisible(!visible)}

// function changeVisible() {
//   if ((passwordVisible = <EyesSlash />)) {
//     passwordVisible = <Eyes />;
//   } else if ((passwordVisible = <Eyes />)) {
//     passwordVisible = <EyesSlash />;
//   }
// }

export default function LoginCard() {
  return (
    <div>
      <div className="btn-close  flex justify-end">
        <CircleAspa />
      </div>

      <div className=" bg-app-gray-form h-[529px] w-[557px] m-0 p-0 rounded-[20px] opacity-90 relative">
        <div className="grid gap-3 m-4 mx-8 w-[80%]">
          <div>
            <h2 className="font-roboto text-white text-2xl not-italic leading-10 font-bold">
              Login
            </h2>
            <p className="font-roboto text-sm not-italic">
              inicie su sesión con los datos que ingresó durante su registro
            </p>
          </div>
          <div className="grid gap-2 my-3">
            <div className="grid gap-1">
              <p className="text-sm font-bold">Email</p>
              <input
                type="text"
                className="w-[100%] h-11 rounded bg-transparent border-2"
              />
              <span className="absolute top-[33.5%] right-16">
                <Alerta />
              </span>
              <li className="text-sm">Este usuario no esta registrado</li>
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-bold">Contraseña</p>
              <input
                type="password"
                className="w-[100%] h-11 rounded bg-transparent border-2"
              />
              <span className="absolute top-[54.5%] right-16">
                <EyesSlash />
              </span>
              <li className="text-sm">Las credenciales son incorrectas</li>
            </div>
            <div className="flex gap-1 text-sm">
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
    </div>
  );
}
