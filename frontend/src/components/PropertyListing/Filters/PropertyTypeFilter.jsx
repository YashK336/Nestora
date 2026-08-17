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

      <div className="space-y-3">
        {propertyTypes.map((type) => {
          const selected = filters.propertyTypes.includes(type.name);

          return (
            <label
              key={type.name}
              className={`flex cursor-pointer items-center justify-between rounded-xl border px-4 py-3 transition-all duration-300 ${
                selected
                  ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                  : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-700 dark:hover:bg-blue-900/40"
              } dark:text-white`}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => togglePropertyType(type.name)}
                  className="h-4 w-4 cursor-pointer accent-blue-600 dark:accent-blue-400"
                />

                <span
                  className={`font-medium ${
                    selected ? "text-blue-700 dark:text-white" : "text-gray-700 dark:text-white"
                  }`}
                >
                  {type.name}
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PropertyTypeFilter;
