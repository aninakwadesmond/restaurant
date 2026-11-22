import {
  faCalendar,
  faChevronDown,
  faSearch,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';

function Hero() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full flex flex-col  items-center justify-center gap-y-6 ">
        <p className="font-semibold text-yellow-600 tracking-widest text-xl uppercase">
          exquisite dining experience
        </p>
        <div className="w-6/7">
          <p className="text-center font-semibold text-4xl  tracking-wide text-white">
            Curation for the Discerning Palette
          </p>
        </div>
      </div>
      <div className="full shadow-sm rounded-md shadow-gray-400  divide-y divide-gray-400/30 p-4 bg-amber-50">
        <SearchLocation
          icon={faSearch}
          placeholder="Search cuisines, restauranats..."
        />
        <SearchLocation
          icon={faLocationDot}
          placeholder="Location (e.g. Manhattan)"
        />
        <SetDate />
        <SelectNumberofGuest />
        <ButtonFindTable />
      </div>
    </div>
  );
}

function ButtonFindTable() {
  return (
    <div className="w-full px-4 py-4 shadow-lg bg-black text-white mt-2 flex flex-col items-center justify-center">
      <button className="uppercase text-[.8rem] font-semibold tracking-widest">
        find a table
      </button>
    </div>
  );
}

function SelectNumberofGuest() {
  const guestRef = useRef(null);
  const [guest, setGuest] = useState(2);
  return (
    <div className="py-1">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-x-4 pt-2">
          <FontAwesomeIcon icon={faUserGroup} className="text-gray-400" />
          <p className="font-semibold text-gray-800">{guest} Guest </p>
        </div>

        <p
          className="cursor-pointer"
          onClick={() => guestRef.current?.showPicker()}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[.8rem] text-gray-500 "
          />
        </p>
      </div>
      <select
        name=""
        id=""
        value={''}
        ref={guestRef}
        className="opacity-0 absolute pointer-events-none appearance-none w-[70%] rounded-full bg-gray-800 text-white font-semibold  py-2 px-3"
        onChange={(e) => {
          console.log(e.target.value);
          setGuest(e.target.value);
        }}
      >
        <option value="" disabled>
          select number of guest
        </option>
        <option value="1">1 Guest</option>
        <option value="2">2 Guest</option>
        <option value="4">4 Guest</option>
        <option value="8">8 Guest</option>
      </select>
    </div>
  );
}

function SetDate() {
  const dateRef = useRef(null);
  const [date, setDate] = useState('');
  console.log('date', date);
  return (
    <div className="py-2 relative flex items-center gap-x-4">
      <label
        htmlFor="date"
        className="cursor-pointer"
        onClick={() => {
          dateRef.current?.showPicker();
        }}
      >
        <FontAwesomeIcon icon={faCalendar} className="text-gray-400" />
      </label>
      <input
        type="date"
        name=""
        id="date"
        ref={dateRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <p className="text-[1rem] text-gray-400 tracking-tight outline-none w-full">
        {date.split('-').join('/') || '10 / 10 / 2006'}
      </p>
    </div>
  );
}

function SearchLocation({ icon, placeholder }) {
  return (
    <div className="flex items-center justify-start gap-x-4 py-2">
      <FontAwesomeIcon icon={icon} className="text-gray-400" />
      <input
        type="text"
        placeholder={placeholder}
        className="text-[1rem] text-gray-800 tracking-tight outline-none w-full"
      />
    </div>
  );
}

export default Hero;
