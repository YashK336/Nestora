import Skeleton from "react-loading-skeleton";
import { useTheme } from "../../../context/ThemeContext";

const PropertyRowSkeleton = () => {
  const { darkMode } = useTheme();

  const skeletonProps = {
    baseColor: darkMode ? "#1e293b" : "#e5e7eb",
    highlightColor: darkMode ? "#334155" : "#f3f4f6",
  };

  return (
    <tr className="border-b border-gray-200 dark:border-slate-700">
      <td className="px-4 py-4">
        <Skeleton
          width={90}
          height={70}
          {...skeletonProps}
        />
      </td>

      <td className="px-4 py-4">
        <Skeleton
          width={180}
          {...skeletonProps}
        />

        <div className="mt-2">
          <Skeleton
            width={120}
            {...skeletonProps}
          />
        </div>
      </td>

      <td className="px-4 py-4">
        <Skeleton
          width={90}
          {...skeletonProps}
        />
      </td>

      <td className="px-4 py-4">
        <Skeleton
          width={70}
          {...skeletonProps}
        />
      </td>

      <td className="px-4 py-4">
        <Skeleton
          width={90}
          {...skeletonProps}
        />
      </td>
    </tr>
  );
};

export default PropertyRowSkeleton;