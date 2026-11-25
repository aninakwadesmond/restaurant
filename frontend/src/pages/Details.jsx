import { faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendar,
  faChevronDown,
  faDotCircle,
  faLocationDot,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { faCutlery } from '@fortawesome/free-solid-svg-icons/faCutlery';
import { faHatCowboy } from '@fortawesome/free-solid-svg-icons/faHatCowboy';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmptyStar from '../components/homeComponent/EmptyStar';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { useEffect, useRef, useState } from 'react';
import Button from '../components/homeComponent/Button';
import Footer from '../components/homeComponent/Footer';
import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

function Details() {
  const selectRef = useRef(null);
  const dateRef = useRef(null);
  const [user, setUser] = useState({
    guest: '2 ',
    bookingDate: '22/11/2026',
  });

  const navigate = useNavigate();

  function onSetUser(field, value) {
    setUser((user) => ({ ...user, [field]: value }));
  }

  function handleOrder() {
    navigate('/booking/1');
  }
  return (
    <div className="mt-16 flex flex-col gap-6  w-full">
      <div className="h-100 w-screen relative">
        <div className="absolute w-full h-full bg-black/60 top-0 bottom-0 right-0 left-0 z-10"></div>
        <img
          src="/restaurant_8.png"
          alt="image"
          className="w-full h-full contrast-110"
        />
        <div className="absolute bottom-10 left-5 w-full  z-20 ">
          <div className="flex flex-col items-start gap-2">
            <p className="uppercase bg-amber-100 tracking-wide font-semibold px-4 py-1 text-[.7rem] text-amber-600 rounded-md">
              italian
            </p>
            <h2 className="tracking-tight font-bold text-white/90 text-[2rem]">
              TUDO Restaurant
            </h2>
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-white text-[.9rem]">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-orange-400 text-[.6rem]"
                />
                4.8
              </p>
              <p className="font-semibold text-white text-[.9rem]">
                <FontAwesomeIcon icon={faDotCircle} className="text-[.6rem]" />{' '}
                124 Reviews
              </p>
              <p className="font-semibold text-white text-[.9rem] ">
                <FontAwesomeIcon icon={faDotCircle} className="text-[.6rem]" />{' '}
                Price:$$
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-8 flex items-center justify-between">
        <Activity icon={faHatCowboy} title="chef" place="Sumaiya" />
        <Activity icon={faCutlery} title="cusine" place="Italian" />
        <Activity icon={faClock} title="opening" place="5:00 PM - 11:00 PM" />
      </div>
      <div className="w-full px-6">
        <About />
      </div>
      <div className="w-full px-6 gap-y-6 flex flex-col mb-10">
        <h3 className="font-semibold text-black/90  tracking-wide text-[1.3rem]">
          Guesting Experinces
        </h3>
        <Review name="emily watson" date="10/06/2026/" rating={5} />
        <Review name="Marcus vance" date="08/06/2026/" rating={4} />
        <Review name="sophia loren" date="05/06/2026/" rating={5} />
      </div>
      <div className="w-full flex flex-col items-center justify-center  ">
        <div className=" shadow-md shadow-black/40 rounded-md  flex flex-col gap-7 py-6 mx-6 px-6   w-80">
          <h3 className="font-semibold text-black tracking-wide text-[1.3rem] ">
            Book a Table
          </h3>
          <div className="flex flex-col gap-6 w-full  ">
            <SelecUserBoard
              ref={selectRef}
              user={user}
              onSetUser={onSetUser}
              check="select"
              title="party size"
            />
            <SelecUserBoard
              ref={dateRef}
              user={user}
              onSetUser={onSetUser}
              title="date"
            />
            <AvailableTImes />

            <Button
              title="reserve now"
              style="bg-black/95 text-white"
              onHandleOrder={handleOrder}
            />
            <OrderRight />
          </div>
        </div>
      </div>
      <div className="w-full mt-30 ">
        <Footer />
      </div>
    </div>
  );
}

function OrderRight() {
  return (
    <p className="text-[.6rem] text-black/70 tracking-wide text-center font-semibold">
      No reservation fee. Cancel for free up to 24 hours prior
    </p>
  );
}

function AvailableTImes() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-semibold text-black/50 uppercase tracking-tight text-[.7rem]">
        Available times
      </h2>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className=" px-6 rounded-sm border-[.1rem] border-black/20 py-2  w-26 text-[.6rem] font-semibold text-black/80 tracking-wide"
        >
          20:00
        </button>
        <button
          type="button"
          className=" px-6 rounded-sm border-[.1rem] border-black/20 py-2  w-26 text-[.6rem] font-semibold text-black/80 tracking-wide "
        >
          21:00
        </button>
        <button
          type="button"
          className=" px-6 rounded-sm border-[.1rem] border-black/20 py-2  w-26 text-[.6rem] font-semibold text-black/80 tracking-wide"
        >
          21:30
        </button>
      </div>
    </div>
  );
}

function SelecUserBoard({ ref, user, onSetUser, check = '', title }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="font-semibold text-black/50 uppercase tracking-tight text-[.7rem]">
        {title}
      </h2>
      <div
        className="w-full flex items-center justify-between  border-black/20 px-4 py-2  border-[.1rem] rounded cursor-pointer"
        onClick={() => ref.current.showPicker()}
      >
        <div className=" flex items-center gap-6  ">
          <FontAwesomeIcon
            icon={check === 'select' ? faUserGroup : faCalendar}
            className="text-[.8rem] text-black/70"
          />
          <p className="font-semibold  tracking-wide text-[.8rem] text-black/70">
            {check === 'select'
              ? `${user?.guest} Guests`
              : `${user?.bookingDate.split('-').reverse().join('/')}`}
          </p>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="text-[.7rem]" />
      </div>
      {check === 'select' ? (
        <select
          name="select guest"
          id=""
          ref={ref}
          className=" absolute w-[90%] opacity-0 pointer-events-none appearance-none mx-auto"
          onChange={(e) => onSetUser('guest', e.target.value)}
        >
          <option value="1">1 Guest</option>
          <option value="2">2 Guest</option>
          <option value="3">3 Guest </option>
        </select>
      ) : (
        <input
          type="date"
          name=""
          id=""
          ref={ref}
          onChange={(e) => onSetUser('bookingDate', e.target.value)}
          className="absolute opacity-0 appearance-none w-[90%] mx-auto pointer-events-none"
        />
      )}
    </div>
  );
}

function Review({ name, date, rating }) {
  return (
    <div className="flex-col gap-2 w-full flex ">
      <div className="items-center justify-between w-full flex ">
        <div className="flex flex-col items-start gap-1">
          <h4 className="capitalize font-semibold tracking-wide text-black">
            {name}
          </h4>
          <p className="text-[.7rem] text-black/60 font-semibold">
            Visited {date}
          </p>
        </div>
        <div className="flex items-center gap-[0.12rem]">
          {Array.from({ length: rating }, (_, index) => index + 1).map(
            (index) => (
              <FontAwesomeIcon
                icon={faStar}
                className="text-amber-900 text-[.7rem]"
                key={index}
              />
            ),
          )}
          {rating < 5 &&
            Array.from({ length: 5 - rating }, (_, index) => index + 1).map(
              (index) => <EmptyStar index={index} />,
            )}
        </div>
      </div>
      <p className="text-black/60 text-[.7rem] tracking-tight font-semibold">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem odio sunt
        non deleniti, facilis tempora ullam, iure soluta aspernatur eaque velit
        mollitia incidunt consequatur? Totam id sint similique cumque tempora.
      </p>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col gap-2 my-10">
      <h3 className="font-semibold text-black/90  tracking-wide text-[1.3rem]">
        About the Dinning Room
      </h3>
      <p className="text-black/60 font-semibold text-sm tracking-wide">
        newly opened food court
      </p>
      <p className="text-black/60 font-semibold text-sm tracking-wide">
        <FontAwesomeIcon icon={faLocationDot} /> 34//5 north banani
      </p>
    </div>
  );
}

function Activity({ icon, title, place }) {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <FontAwesomeIcon icon={icon} className="text-black/80" />
      <p className="uppercase text-[.6rem] text-black/60 font-semibold tracking-wide">
        {title}
      </p>
      <p className="capitalize text-[.8rem] text-black/80 font-bold tracking-tight">
        {place}
      </p>
    </div>
  );
}

export default Details;
