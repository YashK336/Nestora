import Button from "../../components/ui/Button";

const PropertyToolbar = ({
  search,
  setSearch,
  city,
  setCity,
  type,
  setType,
  featured,
  setFeatured,
  sort,
  setSort,
  onAdd,
}) => {
  const inputClass = `
    w-full
    rounded-xl
    border
    border-gray-300
    bg-white
    px-4
    py-3
    text-gray-900
    outline-none
    transition
    placeholder:text-gray-400
    focus:border-blue-500
    focus:ring-2
    focus:ring-blue-500/20

    dark:border-slate-700
    dark:bg-slate-800
    dark:text-white
    dark:placeholder:text-slate-500
    dark:focus:border-blue-500
  `;

  return (
    <div
      className="
        mb-6
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search properties..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className={inputClass}
        />

        {/* City */}
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) =>
            setCity(e.target.value)
          }
          className={inputClass}
        />

        {/* Type */}
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className={inputClass}
        />

        {/* Featured */}
        <select
          value={featured}
          onChange={(e) =>
            setFeatured(e.target.value)
          }
          className={inputClass}
        >
          <option value="">
            Featured?
          </option>

          <option value="true">
            Featured
          </option>

          <option value="false">
            Not Featured
          </option>
        </select>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
          className={inputClass}
        >
          <option value="-createdAt">
            Newest
          </option>

          <option value="createdAt">
            Oldest
          </option>

          <option value="price">
            Price ↑
          </option>

          <option value="-price">
            Price ↓
          </option>
        </select>

        {/* Add */}
        <Button
          variant="primary"
          onClick={onAdd}
          className="w-full"
        >
          + Add Property
        </Button>
      </div>
    </div>
  );
};

export default PropertyToolbar;