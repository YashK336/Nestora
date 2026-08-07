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
    <section>
      {property.verified && (
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 font-medium text-green-700">
          <FaCheckCircle />
          Verified Listing
        </div>
      )}

      <h1 className="text-4xl font-bold text-gray-900">{property.title}</h1>

      <p className="mt-3 text-lg text-gray-600">
        by{" "}
        <span className="font-semibold text-blue-600">{property.builder}</span>
      </p>

      <div className="mt-5 flex items-center gap-3">
        <FaStar className="text-yellow-500" />
        <span className="font-semibold">{property.rating}</span>
        <span className="text-gray-500">({randomNumber(100, 1000)} Reviews)</span>
      </div>

      <h2 className="mt-6 text-5xl font-bold text-blue-700">
        ₹{property.price.toLocaleString()}
      </h2>

      <p className="mt-2 text-gray-500">
        ₹{Math.round(property.price / property.area).toLocaleString()} / sq.ft
      </p>

      <div className="mt-5 flex items-center gap-2 text-lg text-gray-600">
        <FaMapMarkerAlt className="text-red-500" />
        {property.locality}, {property.city}
      </div>

      <div className="mt-5 inline-block rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
        {property.condition}
      </div>

      <div className="mt-8 flex gap-4">
        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-red-50">
          <FaHeart />
          Save
        </button>
        <button className="flex items-center gap-2 rounded-xl border px-5 py-3 transition hover:bg-blue-50">
          <FaShareAlt />
          Share
        </button>
      </div>
    </section>
  );
};

export default PropertyOverview;
