import SignInOther from '@/components/SignInOther';

export default function () {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat bg-center "
      style={{
        backgroundImage: "url('/images/fondoSignIn.png')",
      }}
    >
      <div
        className="h-full w-full absolute top-0 left-0 bg-gradient-to-r from-black via-transparent to-transparent"
        style={{ mixBlendMode: 'multiply' }}
      ></div>
      <div className="logo bg-[url('../public/images/brand.png')]  bg-center bg-no-repeat w-72 h-52 m-0"></div>
      <div className="formulario">
        <SignInOther />
      </div>
    </div>
  );
}
