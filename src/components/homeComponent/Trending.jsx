import DiningItem from './DiningItem';
import { SectionHeader } from './SectionHeader';

function Trending() {
  return (
    <div className="px-6 w-full ">
      <SectionHeader
        title={'currently trending'}
        heading="Trending Fine Dining"
        action="view all"
      />
      <div className="flex flex-col items-start gap-8">
        <DiningItem
          image="/default_restaurant_Img.jpeg"
          title="italian"
          heading="Terraza Cilco"
          location="Manhattan,NY"
          slots={[17, 18]}
        />
        <DiningItem
          image="/restaurant_1.png"
          title="french"
          heading="L'Essence"
          location="Manhattan,NY"
          slots={[18, 19]}
        />
        <DiningItem
          image="/restaurant_2.jpg"
          title="french"
          heading="L'Essence"
          location="Manhattan,NY"
          slots={[18, 20]}
        />
      </div>
    </div>
  );
}

export default Trending;
