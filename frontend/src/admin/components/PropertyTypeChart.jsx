import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#06B6D4",
];

const PropertyTypeChart = ({ propertyTypes = [] }) => {
  const data = propertyTypes.map((item) => ({
    name: item._id || item.name || "Other",
    value: item.count ?? item.value ?? 0,
  }));

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        Property Types
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500">
          No data available.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={110}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PropertyTypeChart;