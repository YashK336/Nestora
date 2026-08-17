import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";
import { tabs } from "../data/tabs";
import { locations, propertyTypes, budgets } from "../data/searchData";
import { forwardRef } from "react";
import { motion } from "framer-motion"; 
import { useNavigate } from "react-router-dom";

const SearchPanel = forwardRef(({isSticky}, ref) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Rent");
  const [location, setLocation] = useState(locations[0]);
  const [property, setProperty] = useState(propertyTypes[0]);
  const [budget, setBudget] = useState(budgets[0]);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    const params = new URLSearchParams();
  
    // Buy / Rent / New Projects
    params.set("listing", activeTab.toLowerCase());
  
    // City
    if (location) {
      params.set("city", location);
    }
  
    // Property Type
    if (property) {
      params.set("type", property);
    }
  
    // Search Query
    if (query.trim()) {
      params.set("query", query.trim());
    }
  
    // Budget (skip "Any Budget")
    if (budget !== "Any Budget") {
      params.set("budget", budget);
    }
  
    navigate(`/properties?${params.toString()}`);
  };
  return (
    <motion.div ref={ref}  initial={false}
    animate={{
        opacity: isSticky ? 0 : 1,
        scale: isSticky ? .96 : 1,
        y: isSticky ? -30 : 0,
    }}
    transition={{
        duration: .35,
    }}
    style={{
      pointerEvents: isSticky
          ? "none"
          : "auto",
    }}
    className="relative -mt-20 z-30 flex justify-center px-6">
      <div className="w-full max-w-[1100px] rounded-3xl bg-white/95 backdrop-blur-lg shadow-[0_10px_25px_rgba(0,0,0,0.38)]
       p-4 sm:p-5 lg:p-6 dark:bg-slate-800 dark:shadow-[0_10px_25px_rgba(0,0,0,0.38)]">
        {/* Tabs */}
        <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200 scrollbar-hide">
          {tabs.map((tab) => (
          <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`group relative px-7 py-5 font-semibold transition-colors duration-300 ${
                activeTab === tab
                ? "text-gray-900 dark:text-white"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              }`}
            >
            {tab}
            <span
              className={`absolute left-1/2 bottom-0 h-[3px] -translate-x-1/2 rounded-full bg-blue-600 dark:bg-blue-400 
                transition-all duration-300 ${
              activeTab === tab
                ? "w-full"
                : "w-[30%] opacity-0 group-hover:opacity-100"
                }`}
            />
          </button>
          ))}
        </div>
        {/* Search Row */}
        <div
            className=" mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <div className=" col-span-1 lg:col-span-2 flex items-center gap-3 rounded-xl border border-gray-300 px-4 py-3">
            <FaMapMarkerAlt className="text-blue-600 dark:text-blue-400" />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent outline-none"
            >
              {locations.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <input
            type="text"
            value={query}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search locality, project or builder"
            className="col-span-1 sm:col-span-2 lg:col-span-4 w-full rounded-xl border border-gray-300 px-4 py-3 
            outline-none focus:border-blue-600 dark:border-gray-700 dark:bg-slate-800 dark:text-white dark:focus:border-blue-400"
          />
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="col-span-1 lg:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
            >
              {budgets.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              className="col-span-1 lg:col-span-2 w-full rounded-xl border border-gray-300 px-4 py-3 dark:border-gray-700 dark:bg-slate-800 dark:text-white"
            >
              {propertyTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <button
              onClick={handleSearch}
              className="col-span-1 sm:col-span-2 lg:col-span-2 flex items-center justify-center gap-2 w-full 
              rounded-xl bg-blue-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-700
              hover:scale-[1.02]">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
})
export default SearchPanel;