import { amenities } from "../../../data/amenities";

const AmenitiesFilter = ({ filters, setFilters }) => {
  const toggleAmenity = (amenityKey) => {
    setFilters((prev) => {
      const next = prev.amenities.includes(amenityKey)
        ? prev.amenities.filter((item) => item !== amenityKey)
        : [...prev.amenities, amenityKey];

      return { ...prev, amenities: next };
    });
  };

  return (
    <div className="mb-2">
      <h3 className="mb-4 text-lg font-semibold">Amenities</h3>

      <div className="space-y-3">
        {amenities.map((amenity) => {
          const Icon = amenity.icon;
          const selected = filters.amenities.includes(amenity.key);

          return (
            <label
              key={amenity.key}
              className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 transition hover:border-blue-300"
            >
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleAmenity(amenity.key)}
                className="h-4 w-4 accent-blue-600"
              />
              <Icon className="text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                {amenity.label}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default AmenitiesFilter;
