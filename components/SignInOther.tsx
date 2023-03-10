import Link from 'next/link';
// import { useState } from 'react';
import Alerta from './svg/Alerta';
import Aspa from './svg/Aspa';
import Check from './svg/Check';
import CircleAspa from './svg/CircleAspa';

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
    <div className="fixed top-20 right-9 bg-app-blackLight h-[549px] w-[476px] m-0 p-0 rounded-lg opacity-90 z-40 grid place-items-center">
      <div className="absolute top-4 right-4">
        <CircleAspa />
        <Aspa className="absolute top-2 right-2" />
      </div>
      <div className="grid gap-3 m-4 mx-8 w-[80%]">
        <div>
          <h2 className="font-roboto text-2xl not-italic leading-10 font-bold">
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
            <span className="absolute top-[32.8%] right-16">
              {/*Cuando hay un error en la contraseña tiene que cambiar a top-[28.8%]*/}
              <Check />
            </span>
          </div>
          <div className="flex gap-2">
            <div className="grid gap-1">
              <p className="text-sm font-bold">Nombre</p>
              <input
                type="text"
                className="w-[100%] h-11 rounded bg-transparent border-2"
              />
            </div>
            <div className="grid gap-1">
              <p className="text-sm font-bold">Apellido</p>
              <input
                type="text"
                className="w-[100%] h-11 rounded bg-transparent border-2"
              />
            </div>
          </div>
          <div className="grid gap-1">
            <p className="text-sm font-bold">Contraseña</p>
            <input
              type="password"
              className="w-[100%] h-11 rounded bg-transparent border-2"
            />
            <span className="absolute top-[56.5%] right-16">
              <Alerta />
            </span>
            <li className="text-sm">
              La contraseña debe tener mayúsculas, minúsculas, y números
            </li>
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
  );
}
