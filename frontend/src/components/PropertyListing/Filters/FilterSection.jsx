import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FilterSection = ({
  title,
  children,
  defaultOpen = true,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className="
        mb-5
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      {/* HEADER */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-4
          text-left
          font-semibold
          text-gray-900
          transition-colors
          duration-200
          hover:bg-slate-50
          dark:text-slate-100
          dark:hover:bg-slate-700
        "
      >
        <span>{title}</span>

        <span className="text-slate-500 dark:text-slate-300">
          {open ? (
            <FaChevronDown size={15} />
          ) : (
            <FaChevronRight size={15} />
          )}
        </span>
      </button>

      {/* CONTENT */}
      {open && (
        <div
          className="
            border-t
            border-gray-200
            bg-white
            p-4
            dark:border-slate-700
            dark:bg-slate-900
          "
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterSection;