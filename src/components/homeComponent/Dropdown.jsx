import { Link } from 'react-router-dom';
import Button from './Button';

function Dropdown() {
  return (
    <div className="w-full h-80  flex flex-col gap-8   px-6 py-5 shadow-md z-40 bg-white  ">
      <div className="flex flex-col items-start  gap-4">
        <Link className="font-semibold text-black/80 tracking-wide">
          Discover
        </Link>
        <Link className="font-semibold text-black/80 tracking-wide">
          Restaurant
        </Link>
        <Link className="font-semibold text-black/80 tracking-wide">
          Reservation
        </Link>
      </div>
      <div className="flex flex-col w-full">
        <Button style="text-black/80" title="Sign in" />
        <Button style="bg-black text-white" title="Sign up" />
      </div>
    </div>
  );
}

export default Dropdown;
