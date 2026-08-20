import {
  MapPin,
  Star,
  Home,
  Sofa,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const formatPrice = (price) =>
  `₹ ${Number(price).toLocaleString("en-IN")}`;

const Chip = ({ icon: Icon, children, className }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${className}`}
  >
    {Icon && <Icon size={16} />}
    {children}
  </motion.div>
);

export default function DrawerHeader({ property }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="
        border-b
        border-slate-100
        bg-white
        px-8
        py-8
        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* PRICE */}

      <div className="mb-3">
        <h2 className="text-5xl font-black tracking-tight text-blue-600 dark:text-blue-400">
          {formatPrice(property.price)}
        </h2>
      </div>

      {/* TITLE */}

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        {property.title}
      </h1>

      {/* LOCATION */}

      <div className="mt-3 flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <MapPin size={18} />
        <span>
          {property.locality}, {property.city}
        </span>
      </div>

      {/* CHIPS */}

      <div className="mt-7 flex flex-wrap gap-3">
        {property.featured && (
          <Chip
            icon={Star}
            className="
              bg-gradient-to-r
              from-yellow-400
              to-amber-500
              text-white
              shadow-lg
            "
          >
            Featured
          </Chip>
        )}

        <Chip
          icon={Home}
          className="
            border
            border-slate-200
            bg-slate-50
            text-slate-700
            dark:border-slate-700
            dark:bg-slate-800
            dark:text-slate-200
          "
        >
          {property.type}
        </Chip>

        {property.furnishing && (
          <Chip
            icon={Sofa}
            className="
              border
              border-slate-200
              bg-slate-50
              text-slate-700
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-200
            "
          >
            {property.furnishing}
          </Chip>
        )}

        {property.condition && (
          <Chip
            icon={BadgeCheck}
            className="
              border
              border-emerald-200
              bg-emerald-50
              text-emerald-700
              dark:border-emerald-800
              dark:bg-emerald-900/30
              dark:text-emerald-400
            "
          >
            {property.condition}
          </Chip>
        )}
      </div>

      {/* META */}

      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          gap-4
          border-t
          border-slate-100
          pt-5
          text-sm
          text-slate-500
          dark:border-slate-700
          dark:text-slate-400
        "
      >
        <span>
          ID #{property._id?.slice(-6).toUpperCase()}
        </span>

        <span>•</span>

        <span>
          {property.createdAt
            ? new Date(property.createdAt).toLocaleDateString(
                "en-IN"
              )
            : "Recently Added"}
        </span>

        <span>•</span>

        <span className="font-medium text-emerald-600 dark:text-emerald-400">
          Verified Listing
        </span>
      </div>
    </motion.div>
  );
}