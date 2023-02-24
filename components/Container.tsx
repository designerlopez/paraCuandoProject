import ContainerCard from './containerCards';

export default function Container() {
  return (
    <div className="todo mx-44 my-0">
      <section className="Popular bg-green-300 my-8">
        <div className="Popular_content ">
          <h3 className="bg-blue-300 m-2 p-2">Populares en Queretaro</h3>
          <p className="bg-red-600 m-2 p-2">Lo que las personas piden más</p>
          <ContainerCard />
        </div>
      </section>
      <section className="Recommended">
        <div className="Recommended_content">
          <h3 className="bg-blue-300 m-2 p-2">Sugerencias para ti</h3>
          <p className="bg-red-600 m-2 p-2">
            Publicaciones que podrias colaborar
          </p>
          <ContainerCard />
        </div>
      </section>
      <section className="Interest my-8 px-16 py-2 bg-slate-400">
        <h2> Hagamoslo mas personal</h2>
        <p>
          Selecciona tus intereses para brindarte sugerencia de acuerdo a tus
          gustos
        </p>
        <div className="flex flex-wrap gap-4">
    <button className="flex items-center justify-center rounded-full bg-white w-full md:w-[115px] h-[45px] py-[15px] px-[15px]">
      Restaurantes
    </button>
    <button className="flex items-center justify-center rounded-full bg-white w-full md:w-[115px] h-[45px] py-[15px] px-[15px]">
      Tiendas de ropa
    </button>
    <button className="flex items-center justify-center rounded-full bg-white w-full md:w-[115px] h-[45px] py-[15px] px-[15px]">
      Rock
    </button>
  </div>
        <a href="">Ver todos los intereses </a>
      </section>
      <section className="Recently_Seen">
        <div className="Recently_Seen_content">
          <h3 className="bg-blue-300 m-2 p-2">Recientes</h3>
          <p className="bg-red-600 m-2 p-2">
            Las personas últimamente estan hablando de esto
          </p>
          <ContainerCard />
        </div>
      </section>
    </div>
  );
}
