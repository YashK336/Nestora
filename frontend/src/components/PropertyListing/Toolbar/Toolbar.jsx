import {
  LayoutGrid,
  Rows3,
  ArrowDownWideNarrow,
  ChevronDown,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const sortOptions = [
  {
    value: "-createdAt",
    label: "Newest",
  },
  {
    value: "price",
    label: "Price Low → High",
  },
  {
    value: "-price",
    label: "Price High → Low",
  },
  {
    value: "-area",
    label: "Largest Area",
  },
];

const Toolbar = ({
  totalProperties,
  view,
  setView,
  sortBy,
  setSortBy,
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const selectedOption =
    sortOptions.find((option) => option.value === sortBy) ||
    sortOptions[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleSortChange = (value) => {
    setSortBy(value);
    setOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        mb-7
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-800
      "
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Properties
            </h2>

            <span
              className="
                rounded-full
                bg-blue-100
                px-3
                py-1
                text-sm
                font-semibold
                text-blue-700
                dark:bg-blue-900/40
                dark:text-blue-300
              "
            >
              {totalProperties}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Browse, manage and organize your property listings.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex flex-wrap items-center gap-3">
          {/* VIEW TOGGLE */}
          <div
            className="
              flex
              rounded-2xl
              bg-slate-100
              p-1
              dark:bg-slate-700
            "
          >
            <button
              type="button"
              onClick={() => setView("grid")}
              className={`
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2
                transition-all
                duration-200
                ${
                  view === "grid"
                    ? `
                      bg-white
                      text-blue-600
                      shadow-sm
                      dark:bg-slate-800
                      dark:text-blue-400
                    `
                    : `
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    `
                }
              `}
            >
              <LayoutGrid size={18} />

              <span className="hidden sm:inline">
                Grid
              </span>
            </button>

            <button
              type="button"
              onClick={() => setView("list")}
              className={`
                flex
                items-center
                gap-2
                rounded-xl
                px-4
                py-2
                transition-all
                duration-200
                ${
                  view === "list"
                    ? `
                      bg-white
                      text-blue-600
                      shadow-sm
                      dark:bg-slate-800
                      dark:text-blue-400
                    `
                    : `
                      text-gray-500
                      hover:text-gray-700
                      dark:text-gray-400
                      dark:hover:text-gray-200
                    `
                }
              `}
            >
              <Rows3 size={18} />

              <span className="hidden sm:inline">
                List
              </span>
            </button>
          </div>

          {/* CUSTOM SORT DROPDOWN */}
          <div
            ref={dropdownRef}
            className="relative w-full sm:w-auto"
          >
            {/* Trigger */}
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="
                flex
                w-full
                min-w-[220px]
                items-center
                justify-between
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-4
                py-2.5
                text-sm
                font-medium
                text-slate-700
                shadow-sm
                transition-all
                duration-200
                hover:border-blue-400
                hover:shadow-md
                focus:outline-none
                dark:border-slate-600
                dark:bg-slate-800
                dark:text-slate-100
                dark:hover:border-blue-500
              "
            >
              <div className="flex items-center gap-3">
                <ArrowDownWideNarrow
                  size={17}
                  className="text-slate-400 dark:text-slate-300"
                />

                <span>
                  {selectedOption.label}
                </span>
              </div>

              <ChevronDown
                size={17}
                className={`
                  text-slate-400
                  transition-transform
                  duration-200
                  dark:text-slate-300
                  ${open ? "rotate-180" : ""}
                `}
              />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -6,
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.15,
                  }}
                  className="
                    absolute
                    right-0
                    z-50
                    mt-2
                    w-full
                    min-w-[220px]
                    overflow-hidden
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-1.5
                    shadow-xl
                    dark:border-slate-700
                    dark:bg-slate-800
                  "
                >
                  {sortOptions.map((option) => {
                    const selected =
                      sortBy === option.value;

                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() =>
                          handleSortChange(option.value)
                        }
                        className={`
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-xl
                          px-4
                          py-2.5
                          text-left
                          text-sm
                          transition-colors
                          duration-150
                          ${
                            selected
                              ? `
                                bg-blue-50
                                font-semibold
                                text-blue-700
                                dark:bg-blue-900/30
                                dark:text-blue-300
                              `
                              : `
                                text-slate-700
                                hover:bg-slate-100
                                dark:text-slate-200
                                dark:hover:bg-slate-700
                              `
                          }
                        `}
                      >
                        <span>{option.label}</span>

                        {selected && (
                          <Check
                            size={16}
                            className="text-blue-600 dark:text-blue-400"
                          />
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Toolbar;