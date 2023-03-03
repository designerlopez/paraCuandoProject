import Container from '@/components/Container';
import { getLayout } from '@/components/Layout';
import Lupa from '@/components/svg/Lupa';

export default function Categories() {
  return (
    <>
      <div className="home_marcas-container ">
        <div className="fondo flex flex-col justify-start bg-[url('/images/hometorneo.png')] bg-cover bg-no-repeat bg-center h-[204px] p-4  sm:px-[23px] lg:px-[170px] ">
          <p className="text-app-grayLighter">Home/Torneo</p>
          <h2 className="text-app-yellow text-5xl font-extrabold">
            Marcas y tiendas
          </h2>
          <p className="text-app-grayLighter">
            Descubre los torneos y eventos que la gente quiere cerca
          </p>
        </div>
        <div className="options flex bg-yellow-200 h-[104px] justify-between px-40">
          <div className="options-buttons flex gap-2 sm:gap-4 mt-[38px] mb-[30px]">
            <button>Marcas y accesorios</button>
            <button>Artistas y conciertos</button>
            <button>Torneo</button>
          </div>
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
        </div>
      </div>

      <Container />
    </>
  );
}

// Asigna la función getLayout a la página de inicio
Categories.getLayout = getLayout;
