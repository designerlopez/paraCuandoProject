export default function Home_page() {
  return (
    <div className="flex justify-center bg-[url('../public/images/home.png')] bg-cover bg-no-repeat bg-center h-96 ">
      <div className="grid place-items-center bg-blue-400 ">
        <div className="  bg-[url('../public/images/brand.png')] bg-contain bg-no-repeat  w-72 h-52 m-0 bg-red-600"></div>
        <div className="m-0 bg-green-500">
          <input
            className="input_text text-left w-96 h-8 bg-white py-2 pr-1 pl-2 rounded-full"
            type="text"
            placeholder="¿que quieres ver en tu ciudad?"
          />
          <button className="input_text relative -inset-y-7  inset-x-80 flex items-center">
            🔍
          </button>
        </div>
        <div className="options-buttons flex gap-2">
          <button className="bg-white rounded-full p-2">
            Marcas y accesorios
          </button>
          <button className="bg-white rounded-full p-2">
            Artistas y conciertos
          </button>
          <button className="bg-white rounded-full p-2">Torneo</button>
        </div>
      </div>
    </div>
  );
}
