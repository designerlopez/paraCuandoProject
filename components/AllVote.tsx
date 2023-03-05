import { useState } from 'react';
import LoginCard from './LoginCard';
import Aspa from './svg/Aspa';
import CircleAspa from './svg/CircleAspa';

export default function AllVote() {
  const [showLoginCard, setShowLoginCard] = useState(false);

  const handleFormLoginClick = () => {
    setShowLoginCard(true);
  };

  const handleFormClose = () => {
    setShowLoginCard(false);
  };

  return (
    <div className="fixed top-[100px] right-9 bg-app-gray-form h-[529px] w-[378px] m-0 p-0 rounded-[20px] opacity-90 z-40">
      <div
        className="Close-form absolute top-4 right-4 cursor-pointer"
        onClick={handleFormClose}
      >
        <CircleAspa />
        <Aspa className="absolute top-2 right-2" />
      </div>
      <div className="absolute top-[171px] right-10 flex flex-col gap-4">
        <h2 className="font-roboto text-[32px] not-italic leading-10 font-bold">
          {'Todos votamos :)'}
        </h2>
        <p className="font-roboto text-sm not-italic">
          Todos los votos son importantes aquí. Para
          <br />
          validar el tuyo debes tener una cuenta
        </p>
        <div className="grid gap-3 place-items-center">
          <button className="flex justify-center items-center text-black text-sm font-bold rounded w-[300px] h-[45px] bg-app-yellow">
            Crear Cuenta
          </button>
          <p
            className="Form-Login font-roboto text-sm decoration-solid text-app-yellow cursor-pointer"
            onClick={handleFormLoginClick}
          >
            O iniciar sesión
          </p>
        </div>
      </div>

      {showLoginCard && <LoginCard />}
    </div>
  );
}
