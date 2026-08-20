import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
  } from "recharts";
  import { useTheme } from "../../../context/ThemeContext";
  const PropertiesByCityChart = ({
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
      city: item._id || "Unknown",
      properties: item.count,
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
  
          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Properties by City
          </h3>
  
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Cities with the highest number of listings
          </p>
        </div>
  
        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={chartTheme.grid}
                />

                <XAxis
                type="number"
                tick={{ fill: chartTheme.axis }}
                axisLine={{ stroke: chartTheme.grid }}
                tickLine={{ stroke: chartTheme.grid }}
                />

                <YAxis
                type="category"
                dataKey="city"
                tick={{ fill: chartTheme.axis }}
                axisLine={{ stroke: chartTheme.grid }}
                tickLine={{ stroke: chartTheme.grid }}
                />

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
  
              <Bar
                dataKey="properties"
                fill="#3B82F6"
                radius={[0, 6, 6, 0]}
                />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default PropertiesByCityChart;