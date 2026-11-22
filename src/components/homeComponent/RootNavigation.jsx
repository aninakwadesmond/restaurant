import {
  faClose,
  faHamburger,
  faNavicon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setDropdown } from '../../stores/HomeSlice';

function RootNavigation() {
  const location = useLocation();
  console.log('the location path', location);
  const isSearchLocation = location?.pathname === '/search';

  const dispatch = useDispatch();
  const { dropdown } = useSelector((state) => state.home);

  function handleToggleDropdown() {
    dispatch(setDropdown());
  }

  return (
    <div className="relative  no-scrollbar smooth-scroll w-screen   ">
      <div className="flex flex-col  top-0 left-0 z-10 bg-white fixed">
        <div className="flex items-center justify-between w-full container  py-4 px-6 ">
          <Link className=" max-w-1/2" to={'/'}>
            <img
              src="/logo.svg"
              alt="logo image"
              className={`object-center w-[65%] ${!isSearchLocation ? 'invert-90' : ''} brightness-0 `}
            />
          </Link>
          <div className="cursor-pointer" onClick={handleToggleDropdown}>
            <FontAwesomeIcon
              icon={dropdown ? faClose : faNavicon}
              className={`text-lg ${!isSearchLocation ? 'text-white' : ''}`}
            />
          </div>
        </div>
        {dropdown && <Dropdown />}
      </div>

      <Outlet />
    </div>
  );
}

export default RootNavigation;
