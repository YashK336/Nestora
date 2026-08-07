import {
    Building2,
    RotateCcw,
  } from "lucide-react";
  
  const PropertyEmptyState = ({ onReset }) => {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-white px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 text-blue-600">
          <Building2 size={34} />
        </div>
  
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          No properties found
        </h2>
  
        <p className="mt-2 max-w-md text-slate-500">
          We couldn't find any properties matching your
          current filters. Try changing or clearing them.
        </p>
  
        {onReset && (
          <button
            onClick={onReset}
            className="mt-6 flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            <RotateCcw size={17} />
            Clear Filters
          </button>
        )}
      </div>
    );
  };
  
  export default PropertyEmptyState;