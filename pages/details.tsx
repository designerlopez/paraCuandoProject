import ContainerCard from '@/components/containerCards';
import Layout from '@/components/Layout';
import Lupa from '@/components/svg/Lupa';
import { NextPageWithLayout } from './page';

const details: NextPageWithLayout = () => {
  return (
    <div className="w-[1280px] overflow-hidden mx-auto">
      <div className="options flex  h-[104px] justify-between px-40">
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

      <section className="Card-info">
        <div className="Card-details"></div>

        <div className="Card-image">
          <div className="img bg-cover bg-[url('/images/homeartistas.png')] bg-no-repeat bg-center w-full h-60 rounded-t-lg" />
        </div>
      </section>

      <section className="Interest my-8 px-2 py-2 bg-[#F8F7FA]">
        <h3 className="m-2"> Hagamoslo mas personal</h3>
        <p className="m-2">
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <div className="options-buttons flex gap-2 mt-2 mb-10 ">
          <button className="bg-white rounded-full text-sm ">
            Restaurantes
          </button>

          <button className="bg-white rounded-full text-sm">
            Tiendas de ropa
          </button>

          <button className="bg-white rounded-full text-sm">Rock</button>
        </div>
        <a href="" className="m-2">
          Ver todos los intereses
        </a>
      </section>
      <section className="Recently_Seen">
        <div className="Recently_Seen_content">
          <h3 className=" m-2 p-2">Recientes</h3>
          <p className=" m-2 p-2">
            Las personas últimamente estan hablando de esto
          </p>
          <ContainerCard />
        </div>
      </section>
    </div>
  );
};

export default details;

details.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
