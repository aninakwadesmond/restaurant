import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Reference({ icon, value }) {
  return (
    <div className="flex flex-row items-center  gap-4">
      <FontAwesomeIcon icon={icon} className="text-[.8rem]" />
      <p className=" font-semibold text-gray-950/80 text-[.7rem]">{value}</p>
    </div>
  );
}

export default Reference;
