import { faChair, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
  return (
    <div className="w-full bg-white  px-6  flex flex-col gap-10 mb-10">
      <div className=" h-130 w-full shadow-md bg-green-500 mt-20">
        <img
          src="/membership_section_img.png"
          alt="image-flower"
          className="w-full h-full  object-cover brightness-50"
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h5 className="uppercase tracking-widest text-sm font-semibold text-amber-950">
          premuim club memebership
        </h5>
        <h2 className=" font-bold text-3xl text-gray-800">
          Access the Exquisite Chef's Table
        </h2>
        <p className=" text-black/60 font-semibold tracking-tight text-[.9rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          voluptate accusantium aperiam aliquam deserunt, quibusdam autem
          aliquid omnis qui possimus blanditiis distinctio! Laboriosam sint
          aliquid omnis qui possimus blanditiis distinctio! Laboriosam sint
        </p>
      </div>
      <Activities
        icon={faCircleCheck}
        title="last-minute reservation"
        description="orem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus dolor ab tempora quod"
      />
      <Activities
        icon={faChair}
        title="Curated tasting invites "
        description="orem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          doloribus dolor ab tempora quod"
      />
    </div>
  );
}

function Activities({ icon, title, description }) {
  return (
    <div className="flex w-full items-start justify-start gap-4">
      <FontAwesomeIcon icon={icon} className="text-2xl" />
      <div className="flex flex-col items-start gap-1">
        <h4 className="capitalize tracking-wide text-gray-800">{title}</h4>
        <p className="text-[.77rem] tracking-tght text-black/60 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
}
export default About;
