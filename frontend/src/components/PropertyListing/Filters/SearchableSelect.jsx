import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronDown,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
const SearchableSelect = ({
  placeholder = "Select",
  options = [],
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase())
  );
  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);
  // Focus search input when opened
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
      setHighlightedIndex(0);
    }
  }, [open]);
  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
    setSearch("");
  };
  const clearSelection = (e) => {
    e.stopPropagation();
    onChange("");
    setSearch("");
  };
  const handleKeyDown = (e) => {
    if (!open) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1)
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          Math.max(prev - 1, 0)
        );
        break;
      case "Enter":
        e.preventDefault();
        if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        setOpen(false);
        break;
      default:
        break;
    }
  };
  return (
    <div
      ref={containerRef}
      className="relative"
    >
      {/* Selected Value */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          w-full
          items-center
          justify-between
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          py-3
          transition-all
          hover:border-blue-500
        "
      >
        <span
          className={
            value
              ? "text-gray-900"
              : "text-gray-400"
          }
        >
          {value || placeholder}
        </span>
        <div className="flex items-center gap-3">
          {value && (
            <FaTimes
              onClick={clearSelection}
              className="
                cursor-pointer
                text-sm
                text-gray-400
                hover:text-red-500
              "
            />
          )}

          <FaChevronDown
            className={`transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>
      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              z-50
              mt-2
              w-full
              rounded-2xl
              border
              border-gray-200
              bg-white
              shadow-xl
            "
          >
            {/* Search */}
            <div className="border-b p-3">
              <div className="flex items-center gap-2 rounded-lg border px-3 py-2">
                <FaSearch className="text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  className="
                    w-full
                    outline-none
                  "
                />
              </div>
            </div>
            {/* Options */}
            <div
              className="
                max-h-64
                overflow-y-auto
              "
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map(
                  (option, index) => (
                    <button
                      key={option}
                      onClick={() =>
                        handleSelect(option)
                      }
                      className={`
                        w-full
                        px-4
                        py-3
                        text-left
                        transition
                        ${
                          highlightedIndex ===
                          index
                            ? "bg-blue-100"
                            : ""
                        }
                        ${
                          value === option
                            ? "font-semibold text-blue-600"
                            : "hover:bg-blue-50"
                        }
                      `}
                    >
                      {option}
                    </button>
                  )
                )
              ) : (
                <div
                  className="
                    p-5
                    text-center
                    text-gray-400
                  "
                >
                  No results found
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default SearchableSelect;