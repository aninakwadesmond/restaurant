import { faHamburger, faNavicon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  return (
    <div className="flex items-center justify-between w-full container absolute top-0 left-0 py-4 px-6">
      <div className=" max-w-1/2">
        <img
          src="/logo.svg"
          alt="logo image"
          className="object-center w-[65%] invert-90 brightness-0 "
        />
      </div>
      <div className="cursor-pointer">
        <FontAwesomeIcon icon={faNavicon} className="text-lg text-white" />
      </div>
    </div>
  );
}

export default Navigation;
