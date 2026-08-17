import {
  FaMapMarkerAlt,
  FaCheckCircle,
  FaStar,
  FaHeart,
  FaShareAlt,
} from "react-icons/fa";
import { randomNumber } from "../../data/propertyUtils";

const PropertyOverview = ({ property }) => {
  return (
    <section className="
  rounded-3xl
  border
  border-slate-200
  bg-white
  p-6
  shadow-sm
  transition-colors
  duration-300
  dark:border-slate-700
  dark:bg-slate-900
  sm:p-8
">
      {property.verified && (
        <div className="mb-2
  inline-flex
  items-center
  gap-2
  rounded-full
  bg-green-100
  px-4
  py-2
  font-medium
  text-green-700
  dark:bg-green-900/40
  dark:text-green-400
">
          <FaCheckCircle />
          Verified Listing
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">{property.title}</h1>

      <p className="mt-3 text-lg text-gray-600 dark:text-white">
        by{" "}
        <span className="font-semibold text-blue-600 dark:text-blue-400">{property.builder}</span>
      </p>

      <div className="mt-5 flex items-center gap-3">
        <FaStar className="text-yellow-500 dark:text-yellow-400" />
        <span className="font-semibold text-gray-900 dark:text-white">{property.rating}</span>
        <span className="text-gray-500 dark:text-gray-400">({randomNumber(100, 1000)} Reviews)</span>
      </div>

      <h2 className="mt-6 text-5xl font-bold text-blue-700 dark:text-blue-400">
        ₹{property.price.toLocaleString()}
      </h2>

      <p className="mt-2 text-gray-500 dark:text-gray-400">
        ₹{Math.round(property.price / property.area).toLocaleString()} / sq.ft
      </p>

      <div className="mt-5 flex items-center gap-2 text-lg text-gray-600 dark:text-gray-400">
        <FaMapMarkerAlt className="text-red-500 dark:text-red-400" />
        {property.locality}, {property.city}
      </div>

      <div className="mt-5 inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-400">
        {property.condition}
      </div>

      <div className="mt-8 flex gap-4">
        <button className="flex items-center
    items-center
    gap-2
    rounded-xl
    border
    border-slate-200
    px-5
    py-3
    text-slate-700
    transition
    hover:bg-red-50
    dark:border-red-900/40
    dark:text-slate-200
    dark:hover:bg-red-900/40">
          <FaHeart className="text-red-500 dark:text-red-400" />
          Save
        </button>
        <button className="flex
    items-center
    gap-2
    rounded-xl
    border
    border-slate-200
    px-5
    py-3
    text-slate-700
    transition
    hover:bg-blue-50
    dark:border-blue-900/40
    dark:text-slate-200
    dark:hover:bg-blue-900/40">
          <FaShareAlt className="text-blue-500 dark:text-blue-400" />
          Share
        </button>
      </div>
    </section>
  );
};

export default PropertyOverview;
