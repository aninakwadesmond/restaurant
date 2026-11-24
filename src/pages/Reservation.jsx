import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/homeComponent/Button';
import DiningItem from '../components/homeComponent/DiningItem';
import Trending from '../components/homeComponent/Trending';
import Footer from '../components/homeComponent/Footer';
import { Link } from 'react-router-dom';

function Reservation() {
  return (
    <div className="flex flex-col items-start mt-25 gap-8 w-full px-6  no-scrollbar scroll-smooth">
      <div className="flex flex-col gap-[.1rem]">
        <h1 className="font-semibold trackijng-wide text-black/80 text-[1.8rem]">
          Welcome back, DESMOND
        </h1>
        <p className="text-black/50 text-[.7rem] font-semibold tracking-wide">
          Manage your opening dining experience
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h4 className="font-semibold text-[1.3rem] text-black/70">
          Upcoming Bookings
        </h4>
        <div className="h-60 w-full shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-white">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            className="text-[3rem] text-black/20"
          />
          <p className="text-black/60 font-semibold italic text-[.8rem]">
            No upcoming reservations scheduled
          </p>
          <div className="w-full cursor-pointer mx-auto flex  flex-col items-center justify-center">
            <Link
              to={'/search'}
              className="bg-black h-8 px-6 rounded-sm  text-white uppercase text-[.8rem] shadow-lg flex flex-col items-center justify-center  font-semibold"
            >
              book a table
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full mt-10 ">
        <h4 className="w-full font-semibold text-black/80 text-[1.4rem] tracking-tight ">
          Recommended for You
        </h4>
        <div className="w-full">
          <Trending noHeader={true} />
        </div>
        <div className="w-full mt-20">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
