import { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const FilterSection = ({
  title,
  children,
  defaultOpen = true,
}) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-5 rounded-2xl border border-gray-200 bg-white">

      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-4
          text-left
          font-semibold
        "
      >
        <span>{title}</span>

        {open ? (
          <FaChevronDown />
        ) : (
          <FaChevronRight />
        )}
      </button>

      {open && (
        <div className="border-t p-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default FilterSection;