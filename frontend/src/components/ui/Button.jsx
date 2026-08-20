const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",

    success:
      "bg-green-600 hover:bg-green-700 text-white",

    secondary:
      `
        bg-gray-200
        hover:bg-gray-300
        text-gray-900
        dark:bg-slate-700
        dark:hover:bg-slate-600
        dark:text-white
      `,
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-3",
    lg: "px-7 py-4 text-lg",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        rounded-xl
        font-semibold
        transition-all
        duration-200
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? "cursor-not-allowed opacity-50" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;