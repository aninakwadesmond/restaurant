import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';
import {
  faCalendar,
  faLocationDot,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../components/homeComponent/Button';
import DiningItem from '../components/homeComponent/DiningItem';
import Trending from '../components/homeComponent/Trending';
import Footer from '../components/homeComponent/Footer';
import { Link } from 'react-router-dom';
import Reference from '../components/Books/Reference';
import BookingSwiper from '../components/swiper/BookingSwiper';
import { SwiperSlide } from 'swiper/react';

function Reservation() {
  // const bookingArray = []
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
      <div className="flex flex-col gap-6 w-full">
        <h4 className="font-semibold text-[1.3rem] text-black/70">
          Upcoming Bookings
        </h4>
        {/* no items order */}
        {/* <div className="h-60 w-full shadow-lg rounded-md flex flex-col items-center justify-center gap-2 bg-white">
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
        </div> */}
        {/* <div className="flex flex-col items-center justify-center gap-6 max-h-100 w-full overflow-y-auto bg-amber-500 no-scrollbar smooth-scroll"> */}
        <BookingSwiper>
          {Array.from({ length: 50 }, (_, i) => i + 1).map((book) => (
            <SwiperSlide key={book}>
              <Booking />
            </SwiperSlide>
          ))}
        </BookingSwiper>

        {/* </div> */}
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

function Booking() {
  return (
    <div className="flex flex-col items-start gap-3 p-4 rounded-md bg-white shadow">
      <div className="flex items-start gap-4">
        <div className="w-18 h-18 rounded-md overflow-hidden">
          <img
            src="/restaurant_1.png"
            alt="image"
            className="w-full h-full overflow-hidden object-cover"
          />
        </div>
        <div className="flex flex-col items-start gap-1">
          <h3 className="font-semibold text-black">L'Essence</h3>
          <div className="flex items-center gap-1 text-[.6rem">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-[.8rem] text-gray-700"
            />
            <span className="text-[.7rem] font-semibold text-gray-800/80">
              Manhattan, NY
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full bg-gray-400/10 px-6 py-4 flex-wrap gap-x-8 gap-y-6 rounded-md">
        <Reference icon={faCalendar} value="24/11/2026" />
        <Reference icon={faClock} value="22:00 PM" />
        <Reference icon={faUserGroup} value="2 Guests" />
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="w-25 ">
          <Button
            title={'cancel'}
            style="bg-white text-red-600 h-10 "
            textSize="text-[.6rem]"
          />
        </div>
      </div>
    </div>
  );
}

export default Reservation;
