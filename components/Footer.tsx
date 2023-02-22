const Footer = () => {
  return (
    <div className="footer flex justify-center bg-[url('../public/images/footer.png')] bg-cover bg-no-repeat bg-center h-screen max-h-80 bottom-0">
      <div className="input_btn w-full sm:w-96 relative mt-36">
        <input
          className="input_text text-left w-full sm:w-96 h-8 bg-white py-2 pr-1 pl-2 rounded-full sm:text-sm"
          type="text"
          placeholder="¿Qué quieres ver en tu ciudad?"
        />
        <button className="input_text absolute -inset-y-0 right-1 flex items-center">
          🔍
        </button>
      </div>
    </div>
  );
};

export default Footer;
