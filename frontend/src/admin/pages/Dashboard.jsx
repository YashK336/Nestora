import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Building2,
  Star,
  MapPinned,
  IndianRupee,
} from "lucide-react";
import StatCard from "../components/StatCard";
import { getDashboardStats } from "../services/dashboardService";
import PropertyRow from "../components/PropertyRow";
import PropertyTypeChart from "../components/PropertyTypeChart";
import { useAuth } from "../context/AuthContext";
import QuickActions from "../components/QuickActions";
import RecentActivity from "../components/RecentActivity";
import MarketOverview from "../components/MarketOverview";
import DashboardSkeleton from "../components/skeletons/DashboardSkeleton";
import PropertyDrawer from "../components/propertyDrawer/PropertyDrawer";
import DeleteModal from "../components/DeleteModal";
import { deleteProperty } from "../../services/propertyService";

const Dashboard = () => {
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);
  const { logout } = useAuth();
  const [selectedProperty, setSelectedProperty] =
  useState(null);
const [showDrawer, setShowDrawer] =
  useState(false);
const [showDeleteModal, setShowDeleteModal] =
  useState(false);
  const navigate = useNavigate();
  const hour = new Date().getHours();

  const formatPrice = (price) => {
    if (price >= 10000000)
      return `₹${(price / 10000000).toFixed(2)} Cr`;
  
    if (price >= 100000)
      return `₹${(price / 100000).toFixed(2)} L`;
  
    return `₹${price.toLocaleString("en-IN")}`;
  };  
const greeting =
  hour < 12
    ? "Good Morning"
    : hour < 18
    ? "Good Afternoon"
    : "Good Evening";

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardStats();
        setStats(data || {});
      } catch (error) {
        console.error(error);
        setStats({});
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  const handleView = (property) => {
    setSelectedProperty(property);
    setShowDrawer(true);
  };
  const handleEdit = (property) => {
    navigate(
      `/admin/properties/${property._id}/edit`
    );
  };
  const handleDelete = (property) => {
    setSelectedProperty(property);
    setShowDeleteModal(true);
  };
  const confirmDelete = async () => {
    if (!selectedProperty) return;
  
    try {
      await deleteProperty(selectedProperty._id);
  
      setStats((prev) => ({
        ...prev,
  
        totalProperties: Math.max(
          (Number(prev.totalProperties) || 1) - 1,
          0
        ),
  
        featuredProperties: selectedProperty.featured
          ? Math.max(
              (Number(prev.featuredProperties) || 1) - 1,
              0
            )
          : prev.featuredProperties,
  
        recentProperties: Array.isArray(
          prev.recentProperties
        )
          ? prev.recentProperties.filter(
              (property) =>
                property._id !== selectedProperty._id
            )
          : [],
      }));
  
      setShowDeleteModal(false);
      setSelectedProperty(null);
    } catch (error) {
      console.error("Delete property error:", error);
    }
  };
  const total = Number(stats.totalProperties) || 0;
  const featured = Number(stats.featuredProperties) || 0;
  const cities = Number(stats.totalCities) || 0;
  const averagePrice = Math.round(Number(stats.averagePrice) || 0);
  const recentProperties = Array.isArray(stats.recentProperties)
    ? stats.recentProperties
    : [];
  const propertyTypes = Array.isArray(stats.propertyTypes)
    ? stats.propertyTypes
    : [];

    if (loading) return <DashboardSkeleton />;

  return (
    <>
      <div className="mb-8 flex flex-col justify-between gap-6 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl lg:flex-row lg:items-center">
        <div>
        <h1 className="text-4xl font-bold">
          {greeting}, Admin 👋
        </h1>
        <p className="text-white/80">
            {today}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/admin/properties/new")}
            className="rounded-xl bg-white px-5 py-3 font-medium text-blue-700 transition hover:scale-105"
          >
            + Add Property
          </button>

          <button
            onClick={() => {
              logout();
              navigate("/admin/login");
            }}
            className="rounded-xl border border-white/30 bg-white/10 px-5 py-3 backdrop-blur transition hover:bg-white/20"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Properties",
            value: total,
            icon: Building2,
            color: "blue",
          },
          {
            title: "Featured",
            value: featured,
            icon: Star,
            color: "yellow",
          },
          {
            title: "Cities",
            value: cities,
            icon: MapPinned,
            color: "green",
          },
          {
            title: "Average Price",
            value: formatPrice(averagePrice),
            icon: IndianRupee,
            color: "red",
          },
        ].map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <StatCard
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
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
  <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
    Recent Properties
  </h2>

  {recentProperties.length === 0 ? (
    <p className="text-gray-500 dark:text-slate-400">
      No properties yet.
    </p>
  ) : (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-slate-50 dark:bg-slate-800">
          <tr className="text-left text-sm uppercase tracking-wide text-gray-500 dark:text-slate-400">
                      <th className="px-4 py-4">Image</th>
                      <th className="px-4 py-4">Property</th>
                      <th className="px-4 py-4">Price</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentProperties.map((property) => (
                      <PropertyRow
                      key={property._id}
                      property={property}
                      onView={handleView}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        <PropertyTypeChart propertyTypes={propertyTypes} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QuickActions />
        </div>
        <RecentActivity properties={recentProperties} />
      </div>

      <div className="mt-8">
        <MarketOverview stats={stats} />
      </div>
      <PropertyDrawer
      open={showDrawer}
      property={selectedProperty}
      onClose={() => {
        setShowDrawer(false);
        setSelectedProperty(null);
      }}
      onEdit={handleEdit}
      onDelete={(property) => {
        setShowDrawer(false);
        handleDelete(property);
      }}
    />

    <DeleteModal
      open={showDeleteModal}
      title="Delete Property"
      message={`Are you sure you want to delete "${selectedProperty?.title}"? This action cannot be undone.`}
      onClose={() => {
        setShowDeleteModal(false);
        setSelectedProperty(null);
      }}
      onConfirm={confirmDelete}
    />
    </>
  );
};

export default Dashboard;
