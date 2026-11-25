import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Category({ icon, title }) {
  return (
    <div className="shadow-lg flex flex-col items-center justify-center rounded-md gap-y-4 bg-white h-40 w-40 cursor-pointer">
      <FontAwesomeIcon icon={icon} className="text-3xl" />
      <p className="uppercase tracking-[.2rem] text-[.6rem]  font-semibold">
        {title}
      </p>
    </div>
  );
}

export default Category;
