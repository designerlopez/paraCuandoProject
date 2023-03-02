import ContainerCard from './containerCards';

export default function Container() {
  return (
    <div className="todo mx-2 sm:mx-44 my-0">
      <section className="Popular my-8">
        <div className="Popular_content ">
          <h3 className=" m-2 p-2 ">Populares en Queretaro</h3>
          <p className=" m-2 p-2 ">Lo que las personas piden más</p>
          <ContainerCard />
        </div>
      </section>
      <section className="Recommended">
        <div className="Recommended_content">
          <h3 className="m-2 p-2">Sugerencias para ti</h3>
          <p className=" m-2 p-2">Publicaciones que podrias colaborar</p>
          <ContainerCard />
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
          Ver todos los intereses{' '}
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
}
