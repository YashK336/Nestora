import Skeleton from "react-loading-skeleton";
import { useTheme } from "../../../context/ThemeContext";

const UserRowSkeleton = () => {
  const { darkMode } = useTheme();

  const skeletonProps = {
    baseColor: darkMode
      ? "#1e293b"
      : "#e5e7eb",

    highlightColor: darkMode
      ? "#334155"
      : "#f3f4f6",
  };

  return (
    <tr className="border-b border-gray-200 dark:border-slate-700">
      {/* User */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Skeleton
            circle
            width={42}
            height={42}
            {...skeletonProps}
          />

          <div>
            <Skeleton
              width={140}
              {...skeletonProps}
            />

            <div className="mt-2">
              <Skeleton
                width={180}
                {...skeletonProps}
              />
            </div>
          </div>
        </div>
      </td>

      {/* Role */}
      <td className="px-6 py-4">
        <Skeleton
          width={70}
          height={28}
          {...skeletonProps}
        />
      </td>

      {/* Joined */}
      <td className="px-6 py-4">
        <Skeleton
          width={100}
          {...skeletonProps}
        />
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="flex justify-center gap-2">
          <Skeleton
            width={70}
            height={32}
            {...skeletonProps}
          />

          <Skeleton
            width={70}
            height={32}
            {...skeletonProps}
          />
        </div>
      </td>
    </tr>
  );
};

export default UserRowSkeleton;