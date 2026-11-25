import { faMarkdown } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationDot,
  faMarker,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/homeComponent/Button';
import Footer from '../components/homeComponent/Footer';
import { useNavigate } from 'react-router-dom';
import Reference from '../components/Books/Reference';

function Booked() {
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-30 flex flex-col items-center justify-center px-8">
        <div className="flex flex-col items-center justify-center py-8 px-8 gap-6 bg-white shadow-md rounded-md">
          <div className="w-15 h-15 bg-amber-900/10 rounded-full items-center justify-center shadow flex flex-col">
            <FontAwesomeIcon
              icon={faMarker}
              className="font-semibold text-[1.2rem] text-amber-950/70"
            />
          </div>
          <p className="font-semibold capitalize text-[2rem] text-center">
            reservation confirmed
          </p>
          <p className="text-gray-800/80 text-center font-semibold text-[.7rem]">
            A curated dining experience has been successfully reserved for you
            at L'Essence
          </p>
          <div className="rounded-md py-6 px-4 flex flex-col gap-6 items-center justify-center bg-gray-400/20">
            <h3 className="uppercase tracking-wide text-[.6rem] font-semibold text-gray-700/90">
              reference code
              <span className="text-amber-900 tracking-wide pl-4">
                gr-0521doc7
              </span>
            </h3>
            <div className="flex flex-col gap-2 items-start">
              <Reference
                icon={faCalendar}
                value="Tuesday, November 24 , 2026"
              />
              <Reference icon={faClock} value="22:00 PM" />
              <Reference icon={faUsers} value="2 Guests" />
              <Reference
                icon={faLocationDot}
                value="115 Grenwish St, New York, NY 100006"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-3 w-[80%] justify-center">
            <Button
              title={'my bookings'}
              style="bg-black text-white"
              onHandleOrder={() => {
                navigate('/dashboard');
              }}
            />
            <Button
              title={'discover more '}
              style="text-black bg-white"
              onHandleOrder={() => {
                navigate('/');
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-100 mt-15 py-30">
        <Footer />
      </div>
    </>
  );
}

export default Booked;
