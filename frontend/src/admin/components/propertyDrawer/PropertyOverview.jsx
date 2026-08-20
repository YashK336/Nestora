import {
  MapPin,
  User,
  CalendarDays,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Row = ({ icon: Icon, label, value, color }) => (
  <motion.div
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
    className="
      flex
      items-center
      justify-between
      rounded-2xl
      bg-slate-50
      p-4
      transition-colors
      hover:bg-slate-100

      dark:bg-slate-800
      dark:hover:bg-slate-700
    "
  >
    <div className="flex items-center gap-4">
      <div
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          ${color}
        `}
      >
        <Icon size={20} />
      </div>

      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {label}
        </p>

        <p className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
          {value || "-"}
        </p>
      </div>
    </div>

    <ChevronRight
      size={18}
      className="text-slate-300 dark:text-slate-500"
    />
  </motion.div>
);

export default function PropertyOverview({
  property,
}) {
  if (!property) return null;

  return (
    <section
      className="
        mx-6
        mt-6
        rounded-3xl
        border
        border-slate-100
        bg-white
        p-7
        shadow-sm
        ring-1
        ring-slate-100

        dark:border-slate-700
        dark:bg-slate-900
        dark:ring-slate-700
      "
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Property Information
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          General information about this listing.
        </p>
      </div>

      <div className="space-y-4">
        <Row
          icon={MapPin}
          label="Location"
          value={[
            property.locality,
            property.city,
          ]
            .filter(Boolean)
            .join(", ")}
          color="
            bg-blue-100
            text-blue-600
            dark:bg-blue-900/40
            dark:text-blue-400
          "
        />

        <Row
          icon={User}
          label="Builder"
          value={property.builder}
          color="
            bg-violet-100
            text-violet-600
            dark:bg-violet-900/40
            dark:text-violet-400
          "
        />

        <Row
          icon={BadgeCheck}
          label="Condition"
          value={property.condition}
          color="
            bg-emerald-100
            text-emerald-600
            dark:bg-emerald-900/40
            dark:text-emerald-400
          "
        />

        <Row
          icon={CalendarDays}
          label="Listed On"
          value={
            property.createdAt
              ? new Date(
                  property.createdAt
                ).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              : "-"
          }
          color="
            bg-amber-100
            text-amber-600
            dark:bg-amber-900/40
            dark:text-amber-400
          "
        />
      </div>
    </section>
  );
}