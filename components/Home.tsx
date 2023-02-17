export default function Home_page() {
  return (
    <div className="flex justify-center bg-[url('../public/images/home.png')] bg-cover bg-no-repeat bg-center h-96 w-full">
      <div className="flex justify-center items-center bg-[url('../public/images/brand.png')] bg-contain h-20 w-20 bg-no-repeat bg-center bg-red-600"></div>
      <div className="input_btn w-96 relative mt-36  ">
        <input
          className="input_text text-left w-96 h-8 bg-white py-2 pr-1 pl-2 rounded-full"
          type="text"
          placeholder="¿que quieres ver en tu ciudad?"
        />
        <button className="input_text relative -inset-y-7  inset-x-80 flex items-center">
          🔍
        </button>
      </div>
    </div>
  );
}
