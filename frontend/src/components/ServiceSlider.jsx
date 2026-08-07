import { services } from "../data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Container from "./Common/Container";

const ServiceSlider = () => {
  return (
    <Container className="py-12 sm:py-16 lg:py-20">
      <h3
  className="text-center text-xs sm:text-sm uppercase tracking-[3px] sm:tracking-[4px] font-semibold text-gray-400">
        Get Started with Exploring Real Estate Options
      </h3>
      <Swiper
        loop={services.length > 1}
        modules={[Navigation]}
        navigation={services.length > 1}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="mt-8 sm:mt-10 px-1"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 sm:h-44 lg:h-48 w-full object-cover transition duration-500 group-hover:scale-110"/>
                {service.badge && (
                  <span className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">
                    {service.badge}
                  </span>
                )}
              </div>
              <h4 className="mt-4 text-base sm:text-lg font-semibold text-gray-800 transition group-hover:text-blue-600">
                {service.title}
              </h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
export default ServiceSlider;