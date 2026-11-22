import About from '../components/homeComponent/About';
import Footer from '../components/homeComponent/Footer';
import Hero from '../components/homeComponent/Hero';

import Selections from '../components/homeComponent/Selections';
import Subscirbe from '../components/homeComponent/Subscirbe';
import Trending from '../components/homeComponent/Trending';

function Home() {
  return (
    <div className="w-full flex flex-col items-start gap-y-32 no-scrollbar smooth-scroll">
      <div className="w-screen h-screen py-4 px-6 relative flex flex-col items-center justify-center ">
        <HeroImage />

        <Hero />
      </div>
      <Selections />
      <Trending />
      <About />
      <Subscirbe />
      <Footer />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="flex w-screen min-h-screen -z-10 absolute top-0 bottom-0 left-0 right-0">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60"></div>
      <img
        src="hero_bg_img.png"
        alt="bgImage"
        className="w-screen min-h-screen object-cover"
      />
    </div>
  );
}
export default Home;
