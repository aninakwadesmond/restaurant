import { Swiper } from 'swiper/react';
import { FreeMode, Mousewheel, Navigation, Pagination } from 'swiper/modules';

function BookingSwiper({ children }) {
  return (
    <div className="w-full h-150 overflow-hidden shadow-md ">
      <Swiper
        direction="vertical"
        spacebetween={30}
        slidesPerView={2}
        freeMode={{ enabled: true, sticky: false }}
        grabCursor={true}
        simulateTouch={true}
        allowTouchMove={true}
        breakpoints={{
          480: { slidesPerview: 2 },
          768: { slidesPerview: 3 },
          1024: { slidePerview: 4 },
        }}
        modules={[Navigation, Pagination, FreeMode, Mousewheel]}
        mousewheel={{ forceToAxis: true, sensitivity: 1 }}
        // navigation
        pagination={{ clickable: true }}
        className="w-[80%] mx-auto  h-full "
      >
        {children}
      </Swiper>
    </div>
  );
}

export default BookingSwiper;
