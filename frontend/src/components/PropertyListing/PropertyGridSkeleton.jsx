import PropertyCardSkeleton from "./PropertyCardSkeleton";

const PropertyGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
      {Array.from({ length: count }).map((_, index) => (
        <PropertyCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default PropertyGridSkeleton;