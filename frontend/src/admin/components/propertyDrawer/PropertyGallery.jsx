import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const PropertyGallery = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return (
      <div
        className="
          flex
          h-[340px]
          items-center
          justify-center
          bg-gradient-to-br
          from-slate-100
          to-slate-200
          text-slate-500

          dark:from-slate-800
          dark:to-slate-900
          dark:text-slate-400
        "
      >
        No Images Available
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-b-3xl">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.activeIndex)
        }
        thumbs={{
          swiper:
            thumbsSwiper && !thumbsSwiper.destroyed
              ? thumbsSwiper
              : null,
        }}
        className="gallery-swiper"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                loading="lazy"
                src={img}
                alt={`Property ${index + 1}`}
                className="h-[360px] w-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              {/* Counter */}
              <div
                className="
                  absolute
                  right-5
                  top-5
                  rounded-full
                  bg-black/60
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  backdrop-blur-md
                "
              >
                {activeIndex + 1} / {images.length}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div
        className="
          border-t
          border-slate-100
          bg-white
          px-5
          py-4

          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView={4}
          spaceBetween={12}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                loading="lazy"
                src={img}
                alt=""
                className="
                  h-20
                  w-full
                  cursor-pointer
                  rounded-2xl
                  border-2
                  border-transparent
                  object-cover
                  transition
                  duration-300
                  hover:border-blue-500
                  hover:shadow-lg
                "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PropertyGallery;