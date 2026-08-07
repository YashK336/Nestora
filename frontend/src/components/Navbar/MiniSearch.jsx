import { useState } from "react";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaChevronDown,
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
    navigate("/properties", {
      state: {
        location,
        property,
        search,
      },
    });
  };
  return (
    <div
      className="
        flex min-w-0 items-center
        rounded-full
        border
        border-gray-200
        bg-white
        px-2
        py-2
        shadow-md
        transition-all
        duration-300
        hover:border-blue-400
        hover:shadow-xl
      "
    >
        <div className="flex items-center gap-2 px-4">

            <FaMapMarkerAlt className="text-blue-600" />

            <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="
                    cursor-pointer
                    bg-transparent
                    text-xs
                    sm:text-sm
                    font-medium
                    outline-none
                    "
            >

                {locations.map((city) => (

                <option
                    key={city}
                >
                    {city}
                </option>

                ))}

            </select>

        </div>
        <div className="h-7 w-px bg-gray-300"></div>
            <div className="px-2 sm:px-3 lg:px-4">

                <select
                    value={property}
                    onChange={(e) => setProperty(e.target.value)}
                    className="
                    cursor-pointer
                    bg-transparent
                    text-sm
                    font-medium
                    outline-none
                    "
                >

                    {propertyTypes.map((item) => (

                    <option
                        key={item}
                    >
                        {item}
                    </option>

                    ))}

                </select>

            </div>
            <input
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
                placeholder="Search locality..."
                className="w-24 sm:w-32 md:w-40 lg:w-52 xl:w-64"/>
                <button
                    className="
                        rounded-full
                        bg-blue-600
                        p-3
                        text-white
                        transition
                        hover:bg-blue-700
                    "
                    onClick={handleSearch}
                    >
                    <FaSearch />
                </button>
                </div>
  );
};

export default MiniSearch;