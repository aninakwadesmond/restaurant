import {
  faChevronDown,
  faFilter,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons/faHamburger';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons/faLocationDot';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import DiningItem from '../components/homeComponent/DiningItem';
import Footer from '../components/homeComponent/Footer';
import { useDispatch, useSelector } from 'react-redux';
import Signin from '../components/logins/Signin';
import { setDropdown } from '../stores/HomeSlice';

// className="w-full flex flex-col gap-y-20 bg-amber-800  min-w-0 px-0 "
function Restaurants() {
  const { dropdown } = useSelector((state) => state.home);
  const { showModal } = useSelector((state) => state.home);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setDropdown(false));
  }, []);
  return (
    <>
      <div
        className={`w-full flex flex-col items-start gap-y-32 no-scrollbar smooth-scroll relative ${showModal ? 'blur-xs' : ''}`}
      >
        {!dropdown && (
          <div className=" mt-14  flex flex-col gap-y-4 shadow-md pb-5  px-6  fixed w-full z-10   pt-6 bg-white">
            <SearchBar
              icon={faSearch}
              placeholder="Search cuisine or name..."
            />
            <div className="flex items-center gap-8 w-full">
              <SearchBar icon={faLocationDot} placeholder={'Location...'} />
              <ButtonUpdate name="UPDATE" style="text-amber-50 bg-black" />
            </div>
            <div className="flex items-center justify-end w-full ">
              <ButtonUpdate name="Filters" icon={faFilter} />
            </div>
          </div>
        )}
        <RestaurantHeader />

        <div className="grid grid-cols-1 items-start gap-6  px-6 w-full justify-self-center min-w-0 ">
          <DiningItem
            image="/default_restaurant_Img.jpeg"
            title="italian"
            heading="TUDO Resturant"
            location="Banani"
          />
          <DiningItem
            image="/restaurant_1.png"
            title="french , chinese"
            heading="Maize & Malt"
            location="Bangalore"
          />
          <DiningItem
            image="/restaurant_6.png"
            title="vegetarain"
            heading="FLora Garden"
            location="Manhattan, NY"
          />
          <DiningItem
            image="/restaurant_5.png"
            title="japanese"
            heading="Kuro Omakase"
            location="Manhattan, NY"
          />
          <DiningItem
            image="/restaurant_4.png"
            title="steakhouse"
            heading="Ember Grille"
            location="Manhattan, NY"
          />
          <DiningItem
            image="/restaurant_3.jpg"
            title="french"
            heading="L'Artiste"
            location="Manhattan, NY"
          />
          <DiningItem
            image="/restaurant_2.jpg"
            title="italian"
            heading="Terraza Ciclo"
            location="Manhattan, NY"
          />
          <DiningItem
            image="/restaurant_1.png"
            title="french"
            heading="L'Essence"
            location="Manhattan, NY"
          />
        </div>

        <Footer />
      </div>
      {showModal && <Signin />}
    </>
  );
}

function RestaurantHeader() {
  const sortRef = useRef();
  return (
    <div className="flex items-center justify-between  px-6 gap-8 pt-80">
      <p className="font-semibold tracking-tight capitalize text-black/70 text[.8rem]">
        8 Restaurants Available
      </p>
      <div className="flex items-center gap-4">
        <p className="font-semibold tracking-tight  text-black/70 uppercase text[.8rem]">
          sorted by:
        </p>
        <div className="relative  w-50 cursor-pointer">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="absolute right-2  top-1/2 -translate-y-1/2 text-[.8rem] cursor-pointer"
            onClick={() => sortRef.current?.showPicker()}
          />
          <select
            name=""
            id=""
            className="border-[.05rem] border-black/10 px-4 py-1 rounded-md text-sm font-semibold text-black/70 tracking-wider outline-0 w-full appearance-none cursor-pointer "
            ref={sortRef}
          >
            <option value="newest">Default(Newest)</option>
            <option value="asc">Price:Low to High</option>
            <option value="des">Price:High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}
function ButtonUpdate({ name, style = '', icon = '' }) {
  return (
    <button
      className={`h-10 px-4  border-0 ${style} rounded-sm shadow-md text-[.6rem] w-40 font-semibold tracking-widest flex gap-2 items-center justify-center`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="text-[.8rem]" />}
      {name}
    </button>
  );
}

function SearchBar({ icon, placeholder }) {
  return (
    <div className="w-full h-10 rounded-md overflow-hidden  flex items-center  px-4 gap-x-4 border-[.01rem] border-black/10 bg-amber-100/10">
      <FontAwesomeIcon icon={icon} className="text-black/80" />
      <input
        type="text"
        className="w-full h-full outline-none font-semibold text-[.8rem] text-black/70 tracking-widest"
        placeholder={placeholder}
      />
    </div>
  );
}
export default Restaurants;
