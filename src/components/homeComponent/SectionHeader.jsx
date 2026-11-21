import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function SectionHeader({ title, heading, action }) {
  return (
    <div className="flex items-start justify-center flex-col gap-2 w-full pb-20">
      <p className="font-bold tracking-[.2rem]  uppercase text-[.6rem] text-amber-900">
        {title}
      </p>

      <div className="flex items-baseline justify-between w-full">
        <h2 className="tracking-wide text-2xl font-bold text-black/90">
          {heading}
        </h2>
        <div className="flex items-center gap-2">
          <p className=" font-bold tracking-[.2rem]  uppercase text-[.6rem] text-amber-900 cursor-pointer">
            {action}
          </p>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[.6rem] text-amber-900"
          />
        </div>
      </div>
    </div>
  );
}
