import Skeleton from "react-loading-skeleton";
import StatCardSkeleton from "./StatCardSkeleton";

const DashboardSkeleton = () => {
  return (
    <>
      <div className="mb-8 rounded-3xl bg-white p-8 shadow-sm">
        <Skeleton width={260} height={36} />
        <Skeleton width={420} height={18} className="mt-4" />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>

      <div className="mt-8 rounded-2xl border bg-white p-6">
        <Skeleton width={180} height={28} />

        <div className="mt-6 space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} height={65} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;