import PropertyTypeFilter from "./PropertyTypeFilter";
import BedroomFilter from "./BedroomFilter";
import AmenitiesFilter from "./AmenitiesFilter";
import BudgetFilter from "./BudgetFilter";
import FilterSection from "./FilterSection";
import RadioFilter from "./RadioFilter";
const Filters = ({ filters, setFilters, propertyTypes, showTitle = true, onApply }) => {
  return (
    <aside
  className="rounded-3xl border border-gray-200 bg-white p-4 sm:p-5 lg:p-6 shadow-sm lg:sticky lg:top-24">
      {showTitle && (
        <h2
        className="mb-5 text-xl sm:text-2xl font-bold text-gray-900"
      >
        Filters
      </h2>
      )}
      <FilterSection title="Property Type">
      <PropertyTypeFilter
        filters={filters}
        setFilters={setFilters}
        propertyTypes={propertyTypes}
        showTitle={false}
      />
      </FilterSection>
      <FilterSection title="Bedrooms">
      <BedroomFilter
        filters={filters}
        setFilters={setFilters}
        showTitle={false}
      />
      </FilterSection>
      <FilterSection title="Budget">
      <BudgetFilter
        filters={filters}
        setFilters={setFilters}
        showTitle={false}
      />
      </FilterSection>
      <FilterSection title="Amenities">
      <AmenitiesFilter
        filters={filters}
        setFilters={setFilters}
        showTitle={false}
      />
      </FilterSection>
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
      {/* Apply Filters - mobile drawer only */}
      {typeof onApply === "function" && (
        <div className="sticky bottom-0 border-t bg-white p-4 lg:hidden">
          <button
            type="button"
            onClick={onApply}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Apply Filters
          </button>
        </div>
      )}
    </aside>
    
  );
};

export default Filters;