import {
  MapPin,
  Star,
  BadgeCheck,
  Building2,
} from "lucide-react";

const PropertyInfo = ({ property }) => {
  return (
    <div>
      {/* Rating + Badge */}

      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 dark:bg-amber-900">
          <Star
            size={15}
            className="fill-amber-400 text-amber-400"
          />

          <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            {property.rating || "4.8"}
          </span>
        </div>

        {property.featured && (
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Featured
          </span>
        )}
      </div>

      {/* Title */}

      <h2 className="line-clamp-2 text-2xl font-bold leading-tight text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100">
        {property.title}
      </h2>

      {/* Builder */}

      <div className="mt-4 flex items-center gap-2 text-slate-700 dark:text-slate-300">
        <Building2
          size={18}
          className="text-blue-600"
        />

        <span className="font-medium">
          {property.builder}
        </span>
      </div>

      {/* Location */}

      <div className="mt-3 flex items-center gap-2 text-slate-500 dark:text-slate-400">
        <MapPin
          size={17}
          className="text-blue-600"
        />

        <span>
          {property.locality}, {property.city}
        </span>
      </div>

      {/* Status */}

      <div className="mt-5 flex">
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium dark:text-slate-100 ${
            property.condition === "Ready to Move"
  ? "bg-green-100 text-green-700 dark:bg-emerald-900/40 dark:text-emerald-300"
  : "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
          }`}
        >
          <BadgeCheck size={16} />
          {property.condition}
        </span>
      </div>

      <div className="mt-6 border-t border-slate-100" />
    </div>
  );
};

export default PropertyInfo;