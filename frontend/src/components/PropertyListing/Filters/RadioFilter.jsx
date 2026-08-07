const RadioFilter = ({
    title,
    name,
    options,
    value,
    onChange,
  }) => {
    return (
      <div>
  
        <h3 className="mb-4 text-lg font-semibold">
          {title}
        </h3>
  
        <div className="space-y-3">
  
          {options.map((option) => {
  
            const label = option || "Any";
  
            return (
  
              <label
                key={label}
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-3
  
                  rounded-xl
  
                  border
  
                  border-gray-200
  
                  px-4
                  py-3
  
                  transition-all
                  duration-300
  
                  hover:border-blue-300
                  hover:bg-blue-50/40
                "
              >
  
                <input
                  type="radio"
                  name={name}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  className="h-4 w-4 accent-blue-600"
                />
  
                <span
                  className="
                    font-medium
                    text-gray-700
                  "
                >
                  {label}
                </span>
  
              </label>
  
            );
  
          })}
  
        </div>
  
      </div>
    );
  };
  
  export default RadioFilter;