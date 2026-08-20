import Skeleton from "react-loading-skeleton";
import StatCardSkeleton from "./StatCardSkeleton";
import { useTheme } from "../../../context/ThemeContext";

const DashboardSkeleton = () => {
  const { darkMode } = useTheme();

  const skeletonProps = {
    baseColor: darkMode ? "#1e293b" : "#e5e7eb",
    highlightColor: darkMode ? "#334155" : "#f3f4f6",
  };

  return (
    <>
      {/* Hero */}
      <div
        className="
          mb-8
          rounded-3xl
          border
          border-gray-200
          bg-white
          p-8
          shadow-sm
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <Skeleton
          width={260}
          height={36}
          {...skeletonProps}
        />

        <div className="mt-4">
          <Skeleton
            width={420}
            height={18}
            {...skeletonProps}
          />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>

      {/* Recent Properties */}
      <div
        className="
          mt-8
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
          dark:border-slate-700
          dark:bg-slate-900
        "
      >
        <Skeleton
          width={180}
          height={28}
          {...skeletonProps}
        />

        <div className="mt-6 space-y-5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={i}
              height={65}
              {...skeletonProps}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardSkeleton;