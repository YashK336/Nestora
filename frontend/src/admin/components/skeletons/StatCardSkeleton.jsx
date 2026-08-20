import Skeleton from "react-loading-skeleton";
import { useTheme } from "../../../context/ThemeContext";

const StatCardSkeleton = () => {
  const { darkMode } = useTheme();

  const skeletonProps = {
    baseColor: darkMode ? "#1e293b" : "#e5e7eb",
    highlightColor: darkMode ? "#334155" : "#f3f4f6",
  };

  return (
    <div
      className="
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
      <div className="flex items-center justify-between">
        <div>
          <Skeleton
            width={90}
            height={16}
            {...skeletonProps}
          />

          <div className="mt-3">
            <Skeleton
              width={70}
              height={34}
              {...skeletonProps}
            />
          </div>
        </div>

        <Skeleton
          circle
          width={52}
          height={52}
          {...skeletonProps}
        />
      </div>
    </div>
  );
};

export default StatCardSkeleton;