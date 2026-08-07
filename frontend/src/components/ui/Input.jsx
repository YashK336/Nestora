const Input = ({
    label,
    error,
    className = "",
    ...props
  }) => {
    return (
      <div>
        {label && (
          <label className="mb-2 block font-medium">
            {label}
          </label>
        )}
  
        <input
          className={`
            w-full
            rounded-xl
            border
            border-gray-300
            bg-white
            p-3
            transition
            focus:border-blue-500
            focus:outline-none
            focus:ring-2
            focus:ring-blue-200
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
  
        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  };
  
  export default Input;