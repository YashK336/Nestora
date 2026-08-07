import Skeleton from "react-loading-skeleton";

const DrawerSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton height={260} />

      <Skeleton width={240} height={32} />

      <Skeleton width={150} height={22} />

      <Skeleton count={3} />

      <div className="grid grid-cols-2 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} height={80} />
        ))}
      </div>
    </div>
  );
};

export default DrawerSkeleton;