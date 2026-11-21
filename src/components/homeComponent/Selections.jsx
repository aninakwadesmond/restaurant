import {
  faArrowRight,
  faFish,
  faIndustry,
  faLeaf,
  faPizzaSlice,
  faUtensilSpoon,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Category from './Category';
import { faShrimp } from '@fortawesome/free-solid-svg-icons/faShrimp';
import { faFileAudio } from '@fortawesome/free-regular-svg-icons/faFileAudio';
import { SectionHeader } from './SectionHeader';

function Selections() {
  return (
    <div className="px-6 w-full">
      <SectionHeader
        title="curated selection"
        heading="Browse by cusine"
        action="explore all"
      />
      <div className="grid w-full grid-cols-2 items-center  gap-y-8 justify-items-center-safe md:grid-cols-3 gap-x-6">
        <Category icon={faUtensilSpoon} title="italian" />
        <Category icon={faFish} title="sushi" />
        <Category icon={faShrimp} title="french " />
        <Category icon={faIndustry} title="rooftop " />
        <Category icon={faPizzaSlice} title="steakhouse " />
        <Category icon={faLeaf} title="vegetarian " />
      </div>
    </div>
  );
}

// function Header() {
//   return (
//     <div className="flex items-start justify-center flex-col gap-2 w-full pb-20">
//       <p className="font-bold tracking-[.2rem]  uppercase text-[.6rem] text-amber-900">
//         Curated selection
//       </p>

//       <div className="flex items-baseline justify-between w-full">
//         <h2 className="tracking-wide text-2xl font-bold text-black/90">
//           Browse by Cusine
//         </h2>
//         <div className="flex items-center gap-2">
//           <p className=" font-bold tracking-[.2rem]  uppercase text-[.6rem] text-amber-900 cursor-pointer">
//             explore all
//           </p>
//           <FontAwesomeIcon
//             icon={faArrowRight}
//             className="text-[.6rem] text-amber-900"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

export default Selections;
