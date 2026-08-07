import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaCompass,
    FaCar,
    FaSwimmingPool,
    FaDumbbell,
  } from "react-icons/fa";
  const PropertyFeatures = ({ property }) => {
    const features = [
        {
          icon: <FaBed />,
          label: `${property.bedrooms} BHK`,
        },
        {
          icon: <FaBath />,
          label: `${property.bathrooms} Bath`,
        },
        {
          icon: <FaRulerCombined />,
          label: `${property.area} sq.ft`,
        },
        property.amenities?.includes("Facing") && {
          icon: <FaCompass />,
          label: "Facing",
        },
        property.amenities?.includes("Parking") && {
          icon: <FaCar />,
          label: "Parking",
        },

        property.amenities?.includes("Gym") && {
          icon: <FaDumbbell />,
          label: "Gym",
        },
        property.amenities?.includes("Pool") && {
          icon: <FaSwimmingPool />,
          label: "Pool",
        },
      ].filter(Boolean);
      return (
        <div className="mt-5">
            <div
              className="grid grid-cols-2 gap-3 sm:gap-4">
            {features.map((feature, index) => (
                <div
                key={index}
                className=" flex items-center gap-3 rounded-xl bg-gray-50 px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 hover:bg-blue-50">
                <div
                    className="
                        text-blue-600
                        text-base sm:text-lg">
                    {feature.icon}

                </div>
                <p
                className="
                text-xs sm:text-sm
                font-medium
                text-gray-700
                ">
                {feature.label}
                </p>
                </div>
            ))}
            </div>
            </div>
            );
            };
            export default PropertyFeatures;
