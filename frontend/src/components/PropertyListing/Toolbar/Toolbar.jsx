import {
  LayoutGrid,
  Rows3,
  ArrowDownWideNarrow,
} from "lucide-react";
import { motion } from "framer-motion";

const Toolbar = ({
  totalProperties,
  view,
  setView,
  sortBy,
  setSortBy,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}

        <div>
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Properties
            </h2>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
              {totalProperties}
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Browse, manage and organize your property listings.
          </p>
        </div>

        {/* Right */}

        <div className="flex flex-wrap items-center gap-3">
          {/* View */}

          <div className="flex rounded-2xl bg-slate-100 p-1">
            <button
              onClick={() => setView("grid")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                view === "grid"
                  ? "bg-white text-blue-600 shadow"
                  : "text-slate-500"
              }`}
            >
              <LayoutGrid size={18} />
              <span className="hidden sm:inline">
                Grid
              </span>
            </button>

            <button
              onClick={() => setView("list")}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 transition ${
                view === "list"
                  ? "bg-white text-blue-600 shadow"
                  : "text-slate-500"
              }`}
            >
              <Rows3 size={18} />
              <span className="hidden sm:inline">
                List
              </span>
            </button>
          </div>

          {/* Sort */}

          <div className="relative">
            <ArrowDownWideNarrow
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={17}
            />

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="rounded-2xl border border-slate-200 bg-white py-2.5 pl-11 pr-10 text-sm outline-none transition focus:border-blue-500"
            >
              <option value="-createdAt">
                Newest
              </option>
              <option value="price">
                Price Low → High
              </option>
              <option value="-price">
                Price High → Low
              </option>
              <option value="-area">
                Largest Area
              </option>
            </select>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Toolbar;