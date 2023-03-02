import Lupa from './svg/Lupa';

const Footer = () => {
  return (
    <div className="footer flex justify-center bg-[url('../public/images/footer.png')] bg-cover bg-no-repeat bg-center h-screen max-h-80 bottom-0">
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
    </div>
  );
};

export default Footer;
