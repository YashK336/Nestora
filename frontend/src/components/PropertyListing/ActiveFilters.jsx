const ActiveFilters = ({
    filters,
    setFilters,
  }) => {
    const chips = [];
    // Property Types
    filters.propertyTypes.forEach((type) => {
      chips.push({
        label: type,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            propertyTypes:
              prev.propertyTypes.filter(
                (item) => item !== type
              ),
          })),
      });
    });
    // City
    if (filters.city) {
      chips.push({
        label: filters.city,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            city: "",
          })),
      });
    }
    // Bedrooms
    filters.bedrooms.forEach((bedroom) => {
      chips.push({
        label: `${bedroom} BHK`,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            bedrooms:
              prev.bedrooms.filter(
                (item) => item !== bedroom
              ),
          })),
      });
    });
    // Amenities
    filters.amenities.forEach((amenity) => {
      chips.push({
        label:
          amenity.charAt(0).toUpperCase() +
          amenity.slice(1),
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            amenities:
              prev.amenities.filter(
                (item) => item !== amenity
              ),
          })),
      });
    });
    // Furnishing
    if (filters.furnishing) {
      chips.push({
        label: filters.furnishing,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            furnishing: "",
          })),
      });
    }
    // Property Status
    if (filters.condition) {
      chips.push({
        label: filters.condition,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            condition: "",
          })),
      });
    }
    // Builder
    if (filters.builder) {
      chips.push({
        label: filters.builder,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            builder: "",
          })),
      });
    }
    // Budget
    if (
      filters.minPrice > 0 ||
      filters.maxPrice < 60000000
    ) {
      chips.push({
        label: `₹${(
          filters.minPrice / 100000
        ).toFixed(0)}L - ₹${(
          filters.maxPrice / 10000000
        ).toFixed(2)}Cr`,
        remove: () =>
          setFilters((prev) => ({
            ...prev,
            minPrice: 0,
            maxPrice: 60000000,
          })),
      });
    }
    if (chips.length === 0) return null;
    return (
      <div
        className="
          mb-8
          flex
          flex-wrap
          items-center
          gap-3
        "
      >
        {chips.map((chip, index) => (
          <button
            key={index}
            onClick={chip.remove}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-blue-100
              px-4
              py-2
              text-sm
              font-medium
              text-blue-700
              transition
              hover:bg-blue-200
            "
          >
            {chip.label}
            ✕
          </button>
        ))}
        <button
          onClick={() =>
            setFilters({
              propertyTypes: [],
              bedrooms: [],
              amenities: [],
              minPrice: 0,
              maxPrice: 60000000,
              furnishing: "",
              condition: "",
              city: "",
              builder: "",
            })
          }
          className="
            ml-auto
            text-sm
            font-semibold
            text-red-500
            hover:underline
          "
        >
          Reset All
        </button>
      </div>
    );
  };
  export default ActiveFilters;