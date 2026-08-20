import { Clock3 } from "lucide-react";

const RecentActivity = ({ properties = [] }) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-6
        shadow-sm
        transition-colors
        duration-300

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {properties.length === 0 ? (
          <p className="text-sm text-gray-500 dark:text-slate-400">
            No recent activity.
          </p>
        ) : null}

        {properties.map((property) => (
          <div
            key={property._id}
            className="flex items-start gap-4"
          >
            <div
              className="
                rounded-full
                bg-blue-100
                p-2
                dark:bg-blue-900/40
              "
            >
              <Clock3
                size={18}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <div>
              <p className="font-medium text-gray-900 dark:text-white">
                {property.title}
              </p>

              <p className="text-sm text-gray-500 dark:text-slate-400">
                Added in {property.city}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;