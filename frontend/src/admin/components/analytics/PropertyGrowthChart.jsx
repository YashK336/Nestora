import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { useTheme } from "../../../context/ThemeContext";
  
  const PropertyGrowthChart = ({
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
    const chartData = data.map((item) => {
      const date = new Date(
        item._id.year,
        item._id.month - 1
      );
  
      return {
        month: date.toLocaleString(
          "default",
          {
            month: "short",
            year: "numeric",
          }
        ),
        properties: item.count,
      };
    });
  
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
            Property Growth
          </h3>
  
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Properties added over time
          </p>
        </div>
  
        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <LineChart data={chartData}>
            <CartesianGrid
            strokeDasharray="3 3"
            stroke={chartTheme.grid}
            />

            <XAxis
            dataKey="month"
            tick={{ fill: chartTheme.axis }}
            axisLine={{ stroke: chartTheme.grid }}
            tickLine={{ stroke: chartTheme.grid }}
            />

            <YAxis
            tick={{ fill: chartTheme.axis }}
            axisLine={{ stroke: chartTheme.grid }}
            tickLine={{ stroke: chartTheme.grid }}
            />

            <Tooltip
            contentStyle={{
                backgroundColor: chartTheme.tooltipBg,
                borderColor: chartTheme.tooltipBorder,
                borderRadius: "12px",
                color: chartTheme.tooltipText,
            }}
            labelStyle={{
                color: chartTheme.tooltipText,
            }}
            itemStyle={{
                color: chartTheme.tooltipText,
            }}
            />
  
              <Line
                type="monotone"
                dataKey="properties"
                stroke="#3B82F6"
                strokeWidth={3}
                dot={{
                    r: 5,
                    fill: "#3B82F6",
                }}
                activeDot={{
                    r: 7,
                }}
                />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default PropertyGrowthChart;