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
    <div
      className="
        rounded-2xl
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
        Property Types
      </h2>

      {data.length === 0 ? (
        <p className="text-gray-500 dark:text-slate-400">
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

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-bg)",
                border: "1px solid var(--chart-tooltip-border)",
                borderRadius: "12px",
                color: "var(--chart-tooltip-text)",
              }}
              labelStyle={{
                color: "var(--chart-tooltip-text)",
              }}
            />

            <Legend
              wrapperStyle={{
                color: "var(--chart-legend-text)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PropertyTypeChart;