import { faCalendar } from '@fortawesome/free-regular-svg-icons/faCalendar';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';
import {
  faChevronDown,
  faChevronRight,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/homeComponent/Button';
import Footer from '../components/homeComponent/Footer';

function Bookings() {
  return (
    <>
      <div className="pt-25 px-6 bg-white ">
        <div className="flex items-center gap-2">
          <LinkPrevious path=" Maise & Malt" />
          <LinkPrevious path=" Details & Confirmation" isLast={true} />
        </div>
        <div className="my-10 shadow-md py-8 px-6 flex flex-col gap-4 bg-white gap-y-10 ">
          <h4 className="capitalize tracking-tight text-gray-800 font-semibold text-[1.2rem]">
            Reservation summary
          </h4>
          <div className="flex item-start gap-4">
            <div className="w-23 h-25 rounded-md overflow-hidden">
              <img
                src="/restaurant_2.jpg"
                alt="table of men"
                className="w-full h-full object-cover rounded-md overflow-hidden"
              />
            </div>
            <div className="flex flex-col items-start gap-1 pt-2">
              <p className="uppercase tracking-widest text-amber-800 font-semibold text-[.6rem] ">
                french, chinese
              </p>
              <p className="capitalize font-semibold tracking-wide text-gray-900/80 text-[1.1rem]">
                Maize & Malt
              </p>
              <p className="text-amber-800 flex gap-1 items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[.8rem]"
                />
                <span className="text-gray-800/80 text-[.7rem] font-semibold ">
                  Bangalore
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <DateTimerBooking
              icon={faCalendar}
              title="Date"
              value="Nov 23, 2026"
            />
            <DateTimerBooking icon={faClock} title="Time" value="21:30 PM" />
            <DateTimerBooking
              icon={faUserGroup}
              title="Party Size"
              value="2 Guests"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="uppercase tracking-widest text-[.7rem] font-semibold text-gray-900">
              cancellation policy
            </p>
            <p className="text-gray-800/80 text-[.7rem] font-semibold tracking-wide">
              We hold reservation for a maximum if 15 minute. Cancellations or
              changes can be made free of charge up to 24 hours in advance.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-8 py-8 px-6 shadow-lg bg-white w-full">
          <h3 className="font-semibold text-black tracking-wide capitalize text-[1.4rem]">
            Guest details
          </h3>
          <div className="w-full flex flex-col gap-4">
            <GuestInput
              type="text"
              defaultValue={'DESMOND ANINAKWA'}
              title="full name"
            />
            <GuestInput
              type="text"
              defaultValue={'aninakwahdesmond3@gmial.com'}
              title="email address"
            />
            <GuestInput
              type="tel"
              defaultValue={'0248490032'}
              title="phone number"
            />
            <SelectOccassion title="occasion" />
            <SpecialRequest title="special requests (optional)" />
            <CheckBox />
            <Button title={'book table'} style="bg-black text-white" />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-30 bg-amber-50/50 pt-20">
        <Footer />
      </div>
    </>
  );
}

function CheckBox() {
  return (
    <div className="flex flex-row items-start gap-2 my-6">
      <input
        type="checkbox"
        name="select"
        id="select"
        className="w-4 h-4 accent-blue-800 cursor-pointer"
      />
      <label
        htmlFor="select"
        className="text-black/60 tracking-tight text-[.7rem] font-semibold cursor-pointer select-none"
      >
        Send me seasional tasting menu informations and private chef event
        notifications from QuickDine
      </label>
    </div>
  );
}

function SpecialRequest({ title }) {
  return (
    <div className="flex flex-col w-full gap-4  ">
      <Label title={title} />
      <textarea
        name={title}
        id={title}
        className="border border-gray-300 rounded-md shadow-md outline-0 px-4 py-2 font-semibold text-gray-950/70 text-[.7rem] tracking-wide    w-full  placeholder:text-black/60 h-30 bg-amber-100/10"
        placeholder="Allergries, dietary restriction, table preference..."
      ></textarea>
    </div>
  );
}

function Label({ title }) {
  return (
    <label
      className="uppercase font-semibold tracking-wide text-gray-800/80 text-[.6rem] cursor-pointer"
      htmlFor={title}
    >
      {title}
    </label>
  );
}

function SelectOccassion({ title }) {
  const selectRef = useRef(null);
  const [occasion, setOccasion] = useState('None');

  function handleOccasion(event) {
    setOccasion(event.target.value);
  }
  return (
    <div className="flex flex-col items-start ">
      <label
        className="uppercase font-semibold tracking-wide text-gray-800/80 text-[.6rem] cursor-pointer"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="flex items-center relative w-full py-4 border-b border-b-gray-300 h-10">
        <span
          className="absolute top-1/2 right-2 -translate-y-1/2"
          onClick={() => selectRef.current?.showPicker()}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-gray-900/80 text-[.8rem]"
          />
        </span>
        <span className="py-2 font-semibold capitalize text-[.8rem] text-gray-900/90 ">
          {occasion}
        </span>
      </div>

      <select
        name={title}
        id={title}
        className="w-full outline-none appearance-none absolute pointer-none opacity-0"
        ref={selectRef}
        value={occasion}
        onChange={handleOccasion}
      >
        <option value="none">None</option>
        <option value="birthday" className=" text-[.9rem] text-gray-900/90">
          Birthday
        </option>
        <option value="anniversary">Anniversary</option>
        <option value="date-night" className="capitalize">
          Date Night
        </option>
        <option value="business-dining" className="capitalize">
          Business Dining
        </option>
      </select>
    </div>
  );
}

function GuestInput({ title, ...props }) {
  return (
    <div className="flex flex-col items-start ">
      <label
        className="uppercase font-semibold tracking-wide text-gray-800/80 text-[.6rem] cursor-pointer"
        htmlFor={title}
      >
        {title}
      </label>
      <input
        {...props}
        id={title}
        className="w-full outline-none border-b border-b-gray-300 py-2 font-semibold text-gray-900/90 text-[.8rem]"
        // defaultValue={'DESMOND ANINAKWA'}
      />
    </div>
  );
}
function DateTimerBooking({ icon, title, value }) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex items-center gap-2 text-gray-500 text-[.9rem] font-semibold">
        <FontAwesomeIcon icon={icon} />
        <p className="text gray-500">{title}</p>
      </div>
      <p className="text-gray-900/85 text-[.8rem] font-semibold italic">
        {value}
      </p>
    </div>
  );
}

function LinkPrevious({ isLast = false, path = '' }) {
  return (
    <>
      <Link
        to="/details/1"
        className={`text-[.8rem] ${isLast ? 'text-gray-900/80' : 'text-gray-900/50 '} font-semibold tracking-wide`}
      >
        {path}
      </Link>
      {!isLast && (
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-[.5rem] text-gray-900/90 font-semibold tracking-wide"
        />
      )}
    </>
  );
}

export default Bookings;
