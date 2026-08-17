import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
} from "react-icons/fa";

import {
  locations,
  propertyTypes,
} from "../../data/searchData";

import { useNavigate } from "react-router-dom";

const MiniSearch = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState(locations[0]);
  const [property, setProperty] = useState(propertyTypes[0]);
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    navigate(
      `/properties?city=${encodeURIComponent(
        location
      )}&type=${encodeURIComponent(property)}&search=${encodeURIComponent(
        search
      )}`
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      className="
        flex
  w-full
  min-w-0
  items-center
  rounded-2xl
  bg-white
  p-1.5
  shadow-md
  ring-1
  ring-black/5
  transition-colors
  duration-300
  dark:bg-slate-800
  dark:ring-white/10
  sm:p-2
  md:rounded-full
      "
    >
      {/* Location */}
      <div
        className="
          flex
          min-w-0
          flex-shrink-0
          items-center
          gap-2
          px-2
          sm:px-3
        "
      >
        <FaMapMarkerAlt className="flex-shrink-0 text-blue-600" />

        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
          className="
            w-[82px]
            min-w-0
            cursor-pointer
            truncate
            bg-transparent
            text-xs
            font-medium
            outline-none
            sm:w-[105px]
            sm:text-sm
            md:w-[120px]
            text-gray-800
            dark:text-slate-100
            dark:[color-scheme:dark]
          "
        >
          {locations.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="hidden h-7 w-px flex-shrink-0 bg-gray-200 sm:block" />

      {/* Property type */}
      <div className="hidden flex-shrink-0 px-3 sm:block">
        <select
          value={property}
          onChange={(e) => setProperty(e.target.value)}
          aria-label="Property type"
          className="
            w-[100px]
            cursor-pointer
            bg-transparent
            text-sm
            font-medium
            outline-none
            md:w-[120px]
            text-gray-800
            dark:text-slate-100
            dark:[color-scheme:dark]

          "
        >
          {propertyTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      {/* Divider */}
      <div className="hidden h-7 w-px flex-shrink-0 bg-gray-200 dark:bg-slate-600 md:block" />

      {/* Search input */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        aria-label="Search properties"
        className="
          min-w-0
          flex-1
          bg-transparent
          px-2
          text-sm
          text-gray-900
          outline-none
          placeholder:text-gray-400

          dark:text-slate-100
          dark:placeholder:text-slate-500

          sm:px-3
          md:px-4
        "
      />

      {/* Search button */}
      <button
        type="button"
        onClick={handleSearch}
        aria-label="Search"
        className="
          flex
          h-10
          w-10
          flex-shrink-0
          items-center
          justify-center
          rounded-full
          bg-blue-600
          text-white
          shadow-sm
          transition
          hover:bg-blue-700
          active:scale-95
          sm:h-11
          sm:w-11
        "
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default MiniSearch;