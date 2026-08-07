import PropertyCard from "./PropertyCard/PropertyCard";

const PropertyGrid = ({ properties, view }) => {
  return (
    <div
      className={
        view === "grid"
          ? "grid grid-cols-2 gap-7"
          : "flex flex-col gap-7"
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