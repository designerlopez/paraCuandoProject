import LoginCardTall from '@/components/LoginCardTall';

export default function Login() {
  return (
    <div className="w-full relative  bg-[url('/images/fondoSignIn.png')] bg-center bg-no-repeat bg-cover">
      <div className="w-full  min-h-screen flex  flex-col md:flex-row justify-between items-center mx-auto">
        <div className="logo bg-[url('../public/images/LogoYellow.png')]  bg-center bg-no-repeat w-[253px] h-[250px] z-10"></div>
        <div>
          <LoginCardTall />
        </div>
      </div>

      <div className="hidden md:block absolute w-full inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
    </div>
  );
}
