import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
  } from "recharts";
  import { useTheme } from "../../../context/ThemeContext";
  
  const PropertiesByTypeChart = ({
    data = [],
  }) => {
    const { darkMode } = useTheme();
    const chartTheme = {
        axis: darkMode ? "#CBD5E1" : "#475569",
        grid: darkMode ? "#475569" : "#E2E8F0",
        tooltipBg: darkMode ? "#1E293B" : "#FFFFFF",
        tooltipBorder: darkMode ? "#334155" : "#E2E8F0",
        tooltipText: darkMode ? "#F8FAFC" : "#0F172A",
      };
    const chartData = data.map((item) => ({
      name: item._id || "Unknown",
      value: item.count,
    }));

    const COLORS = [
        "#3B82F6", // Blue
        "#8B5CF6", // Purple
        "#10B981", // Green
        "#F59E0B", // Orange
        "#EF4444", // Red
        "#06B6D4", // Cyan
      ];
  
    return (
      <div
        className="
          rounded-2xl
          border
          border-gray-200
          bg-white
          p-6
          shadow-sm
  
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Properties by Type
          </h3>
  
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Distribution across property categories
          </p>
        </div>
  
        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
            <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={3}
            >
                {chartData.map((_, index) => (
                <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                />
                ))}
            </Pie>

            <Tooltip
                contentStyle={{
                backgroundColor: chartTheme.tooltipBg,
                borderColor: chartTheme.tooltipBorder,
                borderRadius: "12px",
                }}
                labelStyle={{
                color: chartTheme.tooltipText,
                }}
                itemStyle={{
                color: chartTheme.tooltipText,
                }}
            />

            <Legend
                formatter={(value) => (
                <span style={{ color: chartTheme.axis }}>
                    {value}
                </span>
                )}
            />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default PropertiesByTypeChart;