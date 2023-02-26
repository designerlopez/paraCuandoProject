import Link from 'next/link';
import IconLogo from '../public/IconLogo';

export default function Header() {
  return (
    <div className="header flex bg-black justify-between px-4 py-4 text-white">
      <p>
        <IconLogo />
      </p>
      <div className="options flex justify-evenly items-center gap-4 text-xs">
        <Link href="../createEvent">
          <div className="options_1 flex gap-2">
            <p className="text-blue-500">+</p>
            <p className="text-blue-500">crear publicacion</p>
          </div>
        </Link>
        <Link href="../login">
          <p className="options_2">Log In</p>
        </Link>
        <Link href="../profile">
          <p className="options_2">Sign Up</p>
        </Link>
      </div>
    </div>
  );
}
