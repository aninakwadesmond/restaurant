import {
  faClose,
  faHamburger,
  faNavicon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { setDropdown } from '../../stores/HomeSlice';

function RootNavigation() {
  const location = useLocation();
  console.log('the location path', location);
  const isSearchLocation = location?.pathname === '/search';
  const [isScrolled, setIsScrolled] = useState(false);

  const dispatch = useDispatch();
  const { dropdown, showModal } = useSelector((state) => state.home);

  function handleToggleDropdown() {
    dispatch(setDropdown());
  }

  useEffect(() => {
    function handleScroll() {
      console.log('window scroll', window.scrollY);
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className={`relative  no-scrollbar smooth-scroll w-screen  `}>
      <div
        className={`flex flex-col  top-0 left-0 z-30  fixed ${showModal ? 'blur-xs' : ''} ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'} transition-all duration-300 ease-in-out shadow-sm`}
      >
        <div className="flex items-center justify-between w-full container  py-4 px-6  ">
          <Link className=" max-w-1/2" to={'/'}>
            <img
              src="/logo.svg"
              alt="logo image"
              className={`object-center w-[65%]
              
               
              brightness-0 `}
            />
          </Link>
          <div className="cursor-pointer" onClick={handleToggleDropdown}>
            <FontAwesomeIcon
              icon={dropdown ? faClose : faNavicon}
              className={`text-lg `}
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
