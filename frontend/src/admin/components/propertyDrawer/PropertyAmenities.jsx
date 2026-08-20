import {
  Car,
  Dumbbell,
  Trees,
  Waves,
  ShieldCheck,
  Wifi,
  Building2,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";

const amenityMap = {
  Parking: {
    icon: Car,
    color:
      "bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800",
  },

  Gym: {
    icon: Dumbbell,
    color:
      "bg-red-50 text-red-700 border-red-100 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800",
  },

  Garden: {
    icon: Trees,
    color:
      "bg-green-50 text-green-700 border-green-100 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",
  },

  Pool: {
    icon: Waves,
    color:
      "bg-cyan-50 text-cyan-700 border-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-400 dark:border-cyan-800",
  },

  Security: {
    icon: ShieldCheck,
    color:
      "bg-violet-50 text-violet-700 border-violet-100 dark:bg-violet-900/30 dark:text-violet-400 dark:border-violet-800",
  },

  Wifi: {
    icon: Wifi,
    color:
      "bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 dark:border-indigo-800",
  },

  Lift: {
    icon: Building2,
    color:
      "bg-amber-50 text-amber-700 border-amber-100 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",
  },
};

export default function PropertyAmenities({
  amenities = [],
}) {
  if (!amenities.length) return null;

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
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Amenities
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Everything included with this property.
          </p>
        </div>

        <div
          className="
            rounded-full
            bg-emerald-50
            px-3
            py-1
            text-sm
            font-semibold
            text-emerald-700

            dark:bg-emerald-900/30
            dark:text-emerald-400
          "
        >
          {amenities.length} Features
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {amenities.map((item, index) => {
          const amenity =
            amenityMap[item] || {
              icon: Sparkles,
              color:
                "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700",
            };

          const Icon = amenity.icon;

          return (
            <motion.div
              key={item}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.05,
              }}
              whileHover={{
                y: -3,
              }}
              className={`
                flex
                items-center
                justify-between
                rounded-2xl
                border
                p-4
                transition-all duration-300 hover:shadow-md
                ${amenity.color}
              `}
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-white/70 p-2 dark:bg-black/20">
                  <Icon size={20} />
                </div>

                <span className="font-medium">
                  {item}
                </span>
              </div>

              <CheckCircle2
                size={18}
                className="opacity-70"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}