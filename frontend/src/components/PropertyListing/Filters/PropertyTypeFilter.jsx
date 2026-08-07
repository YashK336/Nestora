const PropertyTypeFilter = ({ filters, setFilters, propertyTypes }) => {
  const togglePropertyType = (type) => {
    const exists = filters.propertyTypes.includes(type);

    setFilters((prev) => ({
      ...prev,
      propertyTypes: exists
        ? prev.propertyTypes.filter((item) => item !== type)
        : [...prev.propertyTypes, type],
    }));
  };

  return (
    <div className="mb-8">
      <h3 className="mb-4 text-lg font-semibold text-gray-900">
        Property Type
      </h3>

      <div className="space-y-3">
        {propertyTypes.map((type) => {
          const selected = filters.propertyTypes.includes(type.name);

          return (
            <label
              key={type.name}
              className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 ${
                selected
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/40"
              }`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => togglePropertyType(type.name)}
                  className="h-4 w-4 cursor-pointer accent-blue-600"
                />

                <span
                  className={`font-medium ${
                    selected ? "text-blue-700" : "text-gray-700"
                  }`}
                >
                  {type.name}
                </span>
              </div>

              <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-500">
                {type.count}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
