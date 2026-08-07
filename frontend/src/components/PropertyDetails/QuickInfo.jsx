
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
          bg: "bg-blue-100",
          text: "text-blue-600",
        },
        {
          icon: FaBath,
          label: "Bathrooms",
          value: property.bathrooms,
          bg: "bg-cyan-100",
          text: "text-cyan-600",
        },
        {
          icon: FaRulerCombined,
          label: "Area",
          value: `${property.area} sq.ft`,
          bg: "bg-violet-100",
          text: "text-violet-600",
        },
        {
          icon: FaBuilding,
          label: "Floor",
          value: `${property.floor} / ${property.totalFloors}`,
          bg: "bg-indigo-100",
          text: "text-indigo-600",
        },
        {
          icon: FaCar,
          label: "Parking",
          value: property.parking ? "Available" : "Not Available",
          bg: "bg-emerald-100",
          text: "text-emerald-600",
        },
        {
          icon: FaCouch,
          label: "Furnishing",
          value: property.furnishing,
          bg: "bg-amber-100",
          text: "text-amber-600",
        },
        {
          icon: FaHome,
          label: "Status",
          value: property.condition,
          bg: "bg-rose-100",
          text: "text-rose-600",
        },
        {
          icon: FaCalendarAlt,
          label: "Posted",
          value: property.posted,
          bg: "bg-orange-100",
          text: "text-orange-600",
        },
      ];
    return (
      <section className="rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="mb-6 text-2xl font-bold">
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
                    border-gray-200
                    bg-white
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-blue-300
                    hover:shadow-lg
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
                  <p className="text-sm text-gray-500">
                    {item.label}
                  </p>
                  <h3 className="mt-1 font-semibold">
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