import Link from 'next/link';
import Lupa from './svg/Lupa';

export default function Home_page() {
  return (
    <div className="flex justify-center bg-[url('/images/home.png')] bg-cover bg-no-repeat bg-center h-96">
      <div className="mx-4 sm:mx-0 grid place-items-center sm:p-0">
        <div className="bg-[url('../public/images/brand.png')] bg-center bg-no-repeat w-72 h-52 m-0"></div>
        <div className="m-0  relative flex items-center w-[350px] sm:w-[435px]">
          <input
            className="input_text text-left w-full  h-[46px] bg-white py-2 pl-5  rounded-full text-sm placeholder-sm:text-xs"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <p className="input_text absolute -inset-y-0 right-1 flex items-center">
            <Lupa />
          </p>
        </div>
        <div className="options-buttons flex gap-2 sm:gap-4">
          <Link href="../categories">
            <button className="bg-white rounded-full text-sm ">
              Marcas y tiendas
            </button>
          </Link>
          <Link href="../artistas">
            <button className="bg-white rounded-full text-sm">
              Artistas y conciertos
            </button>
          </Link>
          <Link href="../torneo">
            <button className="bg-white rounded-full text-sm">Torneo</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
