import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaCheckCircle, FaCamera } from "react-icons/fa";
import FavoriteButton from "./FavoriteButton";
import { formatPrice } from "../../../utils/formatPrice";

const PropertyImage = ({ property, onClick }) => {
  const images =
    property.images?.length > 0
      ? property.images
      : ["https://placehold.co/800x600/0f172a/94a3b8?text=No+Image"];

  return (
    <div className="relative overflow-hidden rounded-t-3xl" onClick={onClick}>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        navigation={images.length > 1}
        keyboard
        loop={images.length > 1}
        pagination={images.length > 1 ? { clickable: true } : false}
        className="property-swiper h-64"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={property.title}
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {property.featured && (
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
          <FaCheckCircle />
          Featured
        </div>
      )}

      <div className="absolute right-4 top-4 z-20">
        <FavoriteButton />
      </div>

      <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm text-white">
        <FaCamera />
        {images.length}
      </div>

      <div className="absolute bottom-4 left-4 z-20">
        <p className="text-3xl font-bold text-white drop-shadow-lg">
          {formatPrice(property.price)}
        </p>
        <p className="text-sm text-white/80">Starting Price</p>
      </div>
    </div>
  );
};

export default PropertyImage;
