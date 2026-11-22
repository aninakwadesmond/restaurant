import { faHamburger, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Outlet, useLocation, Link } from 'react-router-dom';

function RootNavigation() {
  const location = useLocation();
  console.log('the location path', location);
  const isSearchLocation = location?.pathname === '/search';

  return (
    <div className="relative  no-scrollbar smooth-scroll w-screen">
      <div className="flex items-center justify-between w-full container absolute top-0 left-0 py-4 px-6">
        <Link className=" max-w-1/2" to={'/'}>
          <img
            src="/logo.svg"
            alt="logo image"
            className={`object-center w-[65%] ${!isSearchLocation ? 'invert-90' : ''} brightness-0 `}
          />
        </Link>
        <Link className="cursor-pointer" to={'/search'}>
          <FontAwesomeIcon
            icon={faNavicon}
            className={`text-lg ${!isSearchLocation ? 'text-white' : ''}`}
          />
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default RootNavigation;
