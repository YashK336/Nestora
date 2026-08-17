
import {
    FaBed,
    FaBath,
    FaRulerCombined,    
    FaBuilding,
    FaCar,
    FaCouch,
    FaHome,
    FaCalendarAlt,
  } from "react-icons/fa";
  
  const QuickInfo = ({ property }) => {
    const quickInfo = [
        {
          icon: FaBed,
          label: "Bedrooms",
          value: `${property.bedrooms} BHK`,
          bg: "bg-blue-100 dark:bg-blue-900/40",
          text: "text-blue-600 dark:text-blue-400",
        },
        {
          icon: FaBath,
          label: "Bathrooms",
          value: property.bathrooms,
          bg: "bg-cyan-100 dark:bg-cyan-900/40",
          text: "text-cyan-600 dark:text-cyan-400",
        },
        {
          icon: FaRulerCombined,
          label: "Area",
          value: `${property.area} sq.ft`,
          bg: "bg-violet-100 dark:bg-violet-900/40",
          text: "text-violet-600 dark:text-violet-400",
        },
        {
          icon: FaBuilding,
          label: "Floor",
          value: `${property.floor} / ${property.totalFloors}`,
          bg: "bg-indigo-100 dark:bg-indigo-900/40",
          text: "text-indigo-600 dark:text-indigo-400",
        },
        {
          icon: FaCar,
          label: "Parking",
          value: property.parking ? "Available" : "Not Available",
          bg: "bg-emerald-100 dark:bg-emerald-900/40",
          text: "text-emerald-600 dark:text-emerald-400",
        },
        {
          icon: FaCouch,
          label: "Furnishing",
          value: `${property.furnishing}`,
          bg: "bg-amber-100 dark:bg-amber-900/40",
          text: "text-amber-600 dark:text-amber-400",
        },
        {
          icon: FaHome,
          label: "Status",
          value: `${property.condition}`,
          bg: "bg-rose-100 dark:bg-rose-900/40",
          text: "text-rose-600 dark:text-rose-400",
        },
        {
          icon: FaCalendarAlt,
          label: "Posted",
          value: new Date(property.createdAt).toLocaleDateString("en-IN"),
          bg: "bg-orange-100 dark:bg-orange-900/40",
          text: "text-orange-600 dark:text-orange-400",
        },
      ];
    return (
      <section className="rounded-3xl
  border
  border-slate-200
  bg-white
  p-5
  shadow-sm
  transition-colors
  duration-300
  dark:border-slate-700
  dark:bg-slate-900
  sm:p-8
">
        <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
          Quick Overview
        </h2>
        <div className="grid grid-cols-2 gap-5">
          {quickInfo.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="
                    group
  flex
  items-center
  gap-4
  rounded-2xl
  border
  border-slate-200
  bg-slate-50
  p-4
  transition-all
  duration-300
  hover:-translate-y-1
  hover:border-blue-300
  hover:bg-white
  hover:shadow-lg
  dark:border-slate-700
  dark:bg-slate-800
  dark:hover:border-blue-500
  dark:hover:bg-slate-700
">
                <div
                    className={`
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        text-2xl
                        ${item.bg}
                        ${item.text}
                    `}
                    >
                  <Icon />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-slate-400">
                    {item.label}
                  </p>
                  <h3 className="mt-1 font-semibold dark:text-white">
                    {item.value}
                  </h3>
                </div>
              </div>  
            );
          })}
        </div>  
      </section>
 );
};
export default QuickInfo;