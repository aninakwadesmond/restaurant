import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function EmptyStar({ index }) {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className="text-amber-900 text-[.7rem]"
      key={index}
    />
  );
}

export default EmptyStar;
