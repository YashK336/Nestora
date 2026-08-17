import PropertyTypeFilter from "./PropertyTypeFilter";
import BedroomFilter from "./BedroomFilter";
import AmenitiesFilter from "./AmenitiesFilter";
import BudgetFilter from "./BudgetFilter";
import FilterSection from "./FilterSection";
import RadioFilter from "./RadioFilter";

const Filters = ({
  filters,
  setFilters,
  propertyTypes,
  showTitle = true,
  onApply,
}) => {
  return (
    <aside
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        sm:p-5
        lg:sticky
        lg:top-24
        lg:p-6
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {showTitle && (
        <h2
          className="
            mb-5
            text-xl
            font-bold
            text-gray-900
            sm:text-2xl
            dark:text-white
          "
        >
          Filters
        </h2>
      )}

      {/* PROPERTY TYPE */}
      <FilterSection title="Property Type">
        <PropertyTypeFilter
          filters={filters}
          setFilters={setFilters}
          propertyTypes={propertyTypes}
          showTitle={false}
        />
      </FilterSection>

      {/* BEDROOMS */}
      <FilterSection title="Bedrooms">
        <BedroomFilter
          filters={filters}
          setFilters={setFilters}
          showTitle={false}
        />
      </FilterSection>

      {/* BUDGET */}
      <FilterSection title="Budget">
        <BudgetFilter
          filters={filters}
          setFilters={setFilters}
          showTitle={false}
        />
      </FilterSection>

      {/* AMENITIES */}
      <FilterSection title="Amenities">
        <AmenitiesFilter
          filters={filters}
          setFilters={setFilters}
          showTitle={false}
        />
      </FilterSection>

      {/* FURNISHING */}
      <FilterSection title="Furnishing">
        <RadioFilter
          name="furnishing"
          options={[
            "",
            "Unfurnished",
            "Semi Furnished",
            "Fully Furnished",
          ]}
          value={filters.furnishing}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              furnishing: value,
            }))
          }
          showTitle={false}
        />
      </FilterSection>

      {/* PROPERTY STATUS */}
      <FilterSection title="Property Status">
        <RadioFilter
          name="condition"
          options={[
            "",
            "Ready to Move",
            "Under Construction",
          ]}
          value={filters.condition}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              condition: value,
            }))
          }
          showTitle={false}
        />
      </FilterSection>

      {/* MOBILE APPLY */}
      {typeof onApply === "function" && (
        <div
          className="
            sticky
            bottom-0
            mt-4
            border-t
            border-slate-200
            bg-white
            p-4
            dark:border-slate-700
            dark:bg-slate-900
            lg:hidden
          "
        >
          <button
            type="button"
            onClick={onApply}
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              hover:shadow-lg
            "
          >
            Apply Filters
          </button>
        </div>
      )}
    </aside>
  );
};

export default Filters;