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
  const PriceDistributionChart = ({
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
    const formatPriceRange = (value) => {
      if (value === "Other") {
        return "₹2.5 Cr+";
      }
  
      const price = Number(value);
  
      if (price === 0) {
        return "Below ₹25L";
      }
  
      if (price === 2500000) {
        return "₹25L - ₹50L";
      }
  
      if (price === 5000000) {
        return "₹50L - ₹1Cr";
      }
  
      if (price === 10000000) {
        return "₹1Cr - ₹2.5Cr";
      }
  
      return "Other";
    };
  
    const chartData = data.map((item) => ({
      range: formatPriceRange(item._id),
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
            Price Distribution
          </h3>
  
          <p className="mt-1 text-sm text-gray-500 dark:text-slate-400">
            Properties grouped by price range
          </p>
        </div>
  
        <div className="h-[320px]">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <BarChart
              data={chartData}
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 20,
              }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke={chartTheme.grid}
                />

                <XAxis
                dataKey="range"
                tick={{
                    fill: chartTheme.axis,
                    fontSize: 13,
                }}
                axisLine={{
                    stroke: chartTheme.grid,
                }}
                tickLine={{
                    stroke: chartTheme.grid,
                }}
                />

                <YAxis
                tick={{
                    fill: chartTheme.axis,
                }}
                axisLine={{
                    stroke: chartTheme.grid,
                }}
                tickLine={{
                    stroke: chartTheme.grid,
                }}
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
                fill="#8B5CF6"
                radius={[6, 6, 0, 0]}
                />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };
  
  export default PriceDistributionChart;