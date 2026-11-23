import { faLocationDot, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function DiningItem({ image, title, heading, location, slots = [] }) {
  return (
    <Link
      to={`/details/${slots[Math.ceil(Math.random() * Number(slots.length))]}`}
      className="w-full rounded-md shadow-lg bg-white "
    >
      <div className="w-full h-80 rounded-t-sm overflow-hidden relative">
        <img
          src={image}
          alt="dining table"
          className="w-full h-full object-center rounded-t-sm overflow-hidden contrast-125"
        />
        <div className="absolute bottom-5 left-5 bg-black text-white uppercase  px-4 py-2 text-[.6rem] tracking-[.15rem] ">
          recommended
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-3 p-6">
        <div className="flex w-full items-center justify-between">
          <p className="uppercase tracking-[.2rem] font-semibold text-[.7rem] text-orange-950">
            {title}
          </p>
          <div className="flex items-center gap-2">
            <p className="p font-semibold  text-orange-950 text-[.6rem]">$$$</p>
            <p className="  text-orange-950 flex items-center gap-1  font-bold text-[.9rem]">
              <FontAwesomeIcon
                icon={faStar}
                className="font-bold text-[.7rem]"
              />
              4.8
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="font-bold tracking-tight text-xl text-gray-900 capitalize">
            {heading}
          </h4>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} />
            <p className="font-semibold text-[.8rem] tracking-widest text-gray-700">
              {location}
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 items-start justify-center">
          <p className="uppercase text-[.6rem] tracking-[.2rem] font-semibold text-orange-950">
            quick reservation
          </p>
          <div className="flex gap-2 items-center rounded-sm">
            {slots.map((time, index) => (
              <TimeReservation timer={`${time}:00`} key={index} />
            ))}
            <TimeReservation timer="all slots" bg="bg-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}

function TimeReservation({ timer, bg = 'bg-gray-100' }) {
  return (
    <button
      className={`py-2 px-5 ${bg} cursor-pointer shadow  text-[.6rem] tracking-[.1rem] border border-black/10 font-semibold text-amber-950 uppercase`}
    >
      {timer}
    </button>
  );
}

export default DiningItem;
