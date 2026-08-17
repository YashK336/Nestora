const bedrooms = [1, 2, 3, 4, 5];

const BedroomFilter = ({ filters, setFilters }) => {
  const toggleBedroom = (bedroom) => {
    const exists = filters.bedrooms.includes(bedroom);
    setFilters((prev) => ({
      ...prev,
      bedrooms: exists
        ? prev.bedrooms.filter((item) => item !== bedroom)
        : [...prev.bedrooms, bedroom],
    }));
  };
  return (
    <div className="mb-8">
      <div className="space-y-3">
        {bedrooms.map((bedroom) => {
          const selected = filters.bedrooms.includes(bedroom);
          return (
            <label
              key={bedroom}
              className={`
                flex
                cursor-pointer
                items-center
                justify-between
                rounded-xl
                border
                px-4
                py-3
                transition-all
                duration-300
                ${
                  selected
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-900"
                    : "border-gray-200 hover:border-blue-300 hover:bg-blue-50/40 dark:border-slate-700 dark:hover:bg-blue-900/40"
                }
              `}
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleBedroom(bedroom)}
                  className="h-4 w-4 accent-blue-600 dark:accent-blue-400"
                />
                <span className="font-medium text-gray-700 dark:text-white">
                  {bedroom} BHK
                </span>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};
export default BedroomFilter;