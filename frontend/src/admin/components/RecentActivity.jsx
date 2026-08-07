import { Clock3 } from "lucide-react";

const RecentActivity = ({ properties = [] }) => {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {properties.length === 0 ? (
          <p className="text-sm text-gray-500">No recent activity.</p>
        ) : null}
        {properties.map((property) => (
          <div
            key={property._id}
            className="flex items-start gap-4"
          >
            <div className="rounded-full bg-blue-100 p-2">
              <Clock3
                size={18}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="font-medium">
                {property.title}
              </p>

              <p className="text-sm text-gray-500">
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