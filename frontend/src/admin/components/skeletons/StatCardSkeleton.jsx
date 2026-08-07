import Skeleton from "react-loading-skeleton";

const StatCardSkeleton = () => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton width={90} height={16} />
          <Skeleton width={70} height={34} className="mt-3" />
        </div>

        <Skeleton circle width={52} height={52} />
      </div>
    </div>
  );
};

export default StatCardSkeleton;