import {
  BedDouble,
  Bath,
  Ruler,
  Sofa,
  Home,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, label, value }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="rounded-3xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition-shadow hover:shadow-lg"
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
      <Icon size={22} />
    </div>

    <p className="text-2xl font-bold tracking-tight text-slate-900">
      {value || "-"}
    </p>

    <p className="mt-1 text-sm text-slate-500">
      {label}
    </p>
  </motion.div>
);

export default function PropertyStats({ property }) {
  if (!property) return null;

  const stats = [
    {
      icon: BedDouble,
      label: "Bedrooms",
      value: property.bedrooms,
    },
    {
      icon: Bath,
      label: "Bathrooms",
      value: property.bathrooms,
    },
    {
      icon: Ruler,
      label: "Area",
      value: property.area
        ? `${property.area} sq.ft`
        : "-",
    },
    {
      icon: Sofa,
      label: "Furnishing",
      value: property.furnishing || "-",
    },
    {
      icon: Home,
      label: "Property Type",
      value: property.type || "-",
    },
    {
      icon: Building2,
      label: "Status",
      value: property.condition || "-",
    },
  ];

  return (
    <section className="mx-6 mt-6 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-100">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Property Highlights
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Essential details at a glance.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            {...stat}
          />
        ))}
      </div>
    </section>
  );
}