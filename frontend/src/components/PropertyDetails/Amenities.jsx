import {
  FaSwimmingPool,
  FaDumbbell,
  FaCar,
  FaBuilding,
  FaArrowUp,
} from "react-icons/fa";

const Amenities = ({ property }) => {
  const groupedAmenities = [
    {
      title: "Lifestyle",
      items: [
        {
          show: property.pool,
          icon: FaSwimmingPool,
          label: "Swimming Pool",
          bg: "bg-cyan-100",
          text: "text-cyan-600",
        },
        {
          show: property.gym,
          icon: FaDumbbell,
          label: "Modern Gym",
          bg: "bg-orange-100",
          text: "text-orange-600",
        },
        {
          show: property.clubhouse,
          icon: FaBuilding,
          label: "Clubhouse",
          bg: "bg-violet-100",
          text: "text-violet-600",
        },
      ].filter((item) => item.show),
    },
    {
      title: "Convenience",
      items: [
        {
          show: property.parking,
          icon: FaCar,
          label: "Covered Parking",
          bg: "bg-emerald-100",
          text: "text-emerald-600",
        },
        {
          show: property.lift,
          icon: FaArrowUp,
          label: "High-Speed Lift",
          bg: "bg-indigo-100",
          text: "text-indigo-600",
        },
      ].filter((item) => item.show),
    },
  ].filter((group) => group.items.length > 0);

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-8 text-2xl font-bold">Amenities</h2>

      {groupedAmenities.length === 0 ? (
        <p className="text-gray-500">No amenities listed for this property.</p>
      ) : (
        <div className="space-y-8">
          {groupedAmenities.map((group) => (
            <div key={group.title}>
              <h3 className="mb-5 text-lg font-semibold text-gray-800">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-5">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="group flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-300 group-hover:scale-110 ${item.bg} ${item.text}`}
                      >
                        <Icon />
                      </div>

                      <div>
                        <h4 className="font-semibold">{item.label}</h4>
                        <p className="mt-1 text-sm text-gray-500">Available</p>
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
