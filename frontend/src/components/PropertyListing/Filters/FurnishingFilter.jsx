import RadioFilter from "./RadioFilter";
const options = [
    "",
    "Unfurnished",
    "Semi Furnished",
    "Fully Furnished",
  ];
  
  const FurnishingFilter = ({ filters, setFilters }) => {
    return (
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Furnishing
        </h3>
  
        <div className="space-y-3">
  
          {options.map((option) => {
  
            const label = option || "Any";
  
            return (
  
              <label
                key={label}
                className="flex cursor-pointer items-center gap-3"
              >
  
                <input
                  type="radio"
                  name="furnishing"
                  checked={filters.furnishing === option}
                  onChange={() =>
                    setFilters((prev) => ({
                      ...prev,
                      furnishing: option,
                    }))
                  }
                  className="h-4 w-4 accent-blue-600"
                />
  
                <span className="font-medium text-gray-700">
                  {label}
                </span>
  
              </label>
  
            );
  
          })}
  
        </div>
  
      </div>
    );
  };
  
  export default FurnishingFilter;