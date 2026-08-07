import PropertyCard from "./PropertyCard/PropertyCard";

const PropertyGrid = ({ properties, view }) => {
  return (
    <div
      className={
        view === "grid"
          ? "grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 md:gap-7"
          : "flex w-full min-w-0 flex-col gap-5 md:gap-7"
      }
    >
      {properties.map((property) => (
        <PropertyCard
          key={property._id}
          property={property}
          view={view}
        />
      ))}
    </div>
  );
};

export default PropertyGrid;