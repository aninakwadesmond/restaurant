import { Link } from 'react-router-dom';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { setDropdown, setShowModal } from '../../stores/HomeSlice';

function Dropdown() {
  const dispatch = useDispatch();

  function handleShowModal() {
    dispatch(setShowModal());
    handleDropModal();
  }

  function handleDropModal() {
    dispatch(setDropdown('false'));
  }
  return (
    <div className="w-full h-80  flex flex-col gap-8   px-6 py-5 shadow-md z-40 bg-white  ">
      <div className="flex flex-col items-start  gap-4">
        <Link
          className="font-semibold text-black/80 tracking-wide"
          to={'/'}
          onClick={handleDropModal}
        >
          Discover
        </Link>
        <Link
          className="font-semibold text-black/80 tracking-wide"
          to={'/search'}
          onClick={handleDropModal}
        >
          Restaurant
        </Link>
        <div
          className="font-semibold text-black/80 tracking-wide cursor-pointer"
          onClick={handleShowModal}
        >
          Reservation
        </div>
      </div>
      {/* <div className="flex flex-col w-full">
        <Button style="text-black/80" title="Sign in" />
        <Button style="bg-black text-white" title="Sign up" />
      </div> */}
      <div className="flex flex-col w-fulll gap-2">
        <div className="flex items-center justify-start  gap-4">
          <div className="w-14 h-14 rounded-full bg-amber-100/90 flex flex-col items-center justify-center shadow">
            <p className="uppercase font-semibold text-black/90 text-[1.2rem]">
              d
            </p>
          </div>
          <div className="flex flex-col ">
            <p className="font-semibold uppercase tracking-tight text-black/80">
              desmond Aninakwa
            </p>
            <p className="text-black/60 text-[.7rem] tracking-wide font-semibold">
              aninakwahdesmond3@gmail.com
            </p>
          </div>
        </div>
        <div className="my-2 flex flex-col gap-1 w-full">
          <h3 className="font-semibold  text-black/70 text-[.9rem] tracking-wide">
            My Bookings
          </h3>
          <div className="w-40 ">
            <Button style=" h-10 text-red-900" title={'Sign out'} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
