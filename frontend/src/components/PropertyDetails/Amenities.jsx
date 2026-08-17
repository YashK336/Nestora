import {
  FaSwimmingPool,
  FaDumbbell,
  FaCar,
  FaBuilding,
  FaArrowUp,
} from "react-icons/fa";

const Amenities = ({ property }) => {
  const amenities = property?.amenities || [];

  const groupedAmenities = [
    {
      title: "Lifestyle",
      items: [
        {
          show: amenities.includes("Pool"),
          icon: FaSwimmingPool,
          label: "Swimming Pool",
          bg: "bg-cyan-100 dark:bg-cyan-500/15",
          text: "text-cyan-600 dark:text-cyan-400",
        },
        {
          show: amenities.includes("Gym"),
          icon: FaDumbbell,
          label: "Modern Gym",
          bg: "bg-orange-100 dark:bg-orange-500/15",
          text: "text-orange-600 dark:text-orange-400",
        },
        {
          show: amenities.includes("Clubhouse"),
          icon: FaBuilding,
          label: "Clubhouse",
          bg: "bg-violet-100 dark:bg-violet-500/15",
          text: "text-violet-600 dark:text-violet-400",
        },
      ].filter((item) => item.show),
    },

    {
      title: "Convenience",
      items: [
        {
          show: amenities.includes("Parking"),
          icon: FaCar,
          label: "Covered Parking",
          bg: "bg-emerald-100 dark:bg-emerald-500/15",
          text: "text-emerald-600 dark:text-emerald-400",
        },
        {
          show: amenities.includes("Lift"),
          icon: FaArrowUp,
          label: "High-Speed Lift",
          bg: "bg-indigo-100 dark:bg-indigo-500/15",
          text: "text-indigo-600 dark:text-indigo-400",
        },
      ].filter((item) => item.show),
    },
  ].filter((group) => group.items.length > 0);

  return (
    <section
      className="
        rounded-3xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-colors
        duration-300
        dark:border-slate-700
        dark:bg-slate-900
        sm:p-8
      "
    >
      <h2 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
        Amenities
      </h2>
      

      {groupedAmenities.length === 0 ? (
        <p className="text-slate-500 dark:text-slate-400">
          No amenities listed for this property.
        </p>
      ) : (
        <div className="space-y-8">
          {groupedAmenities.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-lg font-semibold text-slate-800 dark:text-slate-200">
                {group.title}
              </h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.items.map((item) => {
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
                      "
                    >
                      <div
                        className={`
                          flex
                          h-14
                          w-14
                          shrink-0
                          items-center
                          justify-center
                          rounded-2xl
                          text-2xl
                          transition-transform
                          duration-300
                          group-hover:scale-110
                          ${item.bg}
                          ${item.text}
                        `}
                      >
                        <Icon />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                          Available
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Amenities;