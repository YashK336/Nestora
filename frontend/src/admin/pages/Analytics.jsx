import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import PropertyGrowthChart from "../components/analytics/PropertyGrowthChart";
import AnalyticsStatCard from "../components/analytics/AnalyticsStatCard";
import PropertiesByCityChart from "../components/analytics/PropertiesByCityChart";
import PriceDistributionChart from "../components/analytics/PriceDistributionChart";
import {
  Building2,
  IndianRupee,
  MapPin,
  Star,
} from "lucide-react";
import PropertiesByTypeChart from "../components/analytics/PropertiesByTypeChart";

import { getAnalytics } from "../services/dashboardService";

const Analytics = () => {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        setLoading(true);

        const data =
          await getAnalytics();

        setAnalytics(data);
      } catch (error) {
        console.error(
          "Analytics error:",
          error
        );

        toast.error(
          "Failed to load analytics."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  if (loading) {
    return (
      <div className="text-gray-500 dark:text-slate-400">
        Loading analytics...
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-red-500">
        Failed to load analytics.
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Analytics Overview
      </h2>

      <div className="mt-8 space-y-8">

  {/* Analytics Summary */}
  <div
    className="
      grid
      gap-6
      sm:grid-cols-2
      xl:grid-cols-4
    "
  >
    <AnalyticsStatCard
      title="Property Types"
      value={analytics.propertiesByType.length}
      subtitle="Different property categories"
      icon={Building2}
    />

    <AnalyticsStatCard
      title="Average Price"
      value="Coming soon"
      subtitle="Across all properties"
      icon={IndianRupee}
    />

    <AnalyticsStatCard
      title="Top City"
      value={
        analytics.propertiesByCity[0]?._id ||
        "No data"
      }
      subtitle={
        analytics.propertiesByCity[0]
          ? `${analytics.propertiesByCity[0].count} properties`
          : "No properties available"
      }
      icon={MapPin}
    />

    <AnalyticsStatCard
      title="Featured Properties"
      value={
        analytics.featuredStats.find(
          (item) => item._id === true
        )?.count || 0
      }
      subtitle="Highlighted listings"
      icon={Star}
    />
  </div>

  {/* Property Growth Chart */}
  {/* Charts */}
<div
  className="
    grid
    gap-6
    xl:grid-cols-2
  "
>
  <PropertyGrowthChart
    data={analytics.monthlyProperties}
  />

  <PropertiesByTypeChart
    data={analytics.propertiesByType}
  />
</div>
{/* Location and Price Analytics */}
<div
  className="
    grid
    gap-6
    xl:grid-cols-2
  "
>
  <PropertiesByCityChart
    data={analytics.propertiesByCity}
  />

  <PriceDistributionChart
    data={analytics.priceDistribution}
  />
</div>

</div>
    </div>
  );
};

export default Analytics;