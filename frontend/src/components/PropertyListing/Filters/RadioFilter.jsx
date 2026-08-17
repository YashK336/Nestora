const RadioFilter = ({
    name,
    options,
    value,
    onChange,
  }) => {
    return (
      <div>
  
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
                  border-gray-200 dark:border-slate-700
                  px-4
                  py-3
                  transition-all
                  duration-300
                  hover:border-blue-300 dark:hover:border-blue-300 dark:hover:bg-blue-900/40
                  hover:bg-blue-50/40 dark:hover:bg-blue-900/40
                "
              >
  
                <input
                  type="radio"
                  name={name}
                  checked={value === option}
                  onChange={() => onChange(option)}
                  className="h-4 w-4 accent-blue-600 dark:accent-blue-400"
                />
  
                <span
                  className="
                    font-medium
                    text-gray-700 dark:text-white
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