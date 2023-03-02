import Link from 'next/link';
import Lupa from './svg/Lupa';

export default function Home_page() {
  return (
    <div className="flex justify-center bg-[url('/images/home.png')] bg-cover bg-no-repeat bg-center h-96">
      <div className="mx-4 sm:mx-0 grid place-items-center sm:p-0">
        <div className="bg-[url('../public/images/brand.png')] bg-center bg-no-repeat w-72 h-52 m-0"></div>
        <div className="m-0  relative flex items-center">
          <input
            className="input_text text-left w-full sm:w-96 h-8 bg-white py-2 pr-1 pl-2 rounded-full sm:text-sm placeholder-sm:text-xs"
            type="text"
            placeholder="¿Qué quieres ver en tu ciudad?"
          />
          <p className="input_text absolute -inset-y-0 right-1 flex items-center">
            <Lupa />
          </p>
        </div>
        <div className="options-buttons flex gap-2 sm:gap-4">
          <Link href="../categories">
            <button className="bg-white rounded-full p-2 sm:p-3 text-sm sm:text-base">
              Marcas y accesorios
            </button>
          </Link>
          <Link href="../artistas">
            <button className="bg-white rounded-full p-2 sm:p-3 text-sm sm:text-base">
              Artistas y conciertos
            </button>
          </Link>
          <Link href="../torneo">
            <button className="bg-white rounded-full p-2 sm:p-3 text-sm sm:text-base">
              Torneo
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
