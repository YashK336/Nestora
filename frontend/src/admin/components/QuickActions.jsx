import {
  Plus,
  Building2,
  Star,
  BarChart3,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const actions = [
  {
    title: "Add Property",
    icon: Plus,
    color:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
    path: "/admin/add-property",
  },
  {
    title: "Manage Properties",
    icon: Building2,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400",
    path: "/admin/properties",
  },
  {
    title: "Featured",
    icon: Star,
    color:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/40 dark:text-yellow-400",
    path: "/admin/properties?featured=true",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
    path: "/admin/analytics",
  },
  {
    title: "Settings",
    icon: Settings,
    color:
      "bg-gray-100 text-gray-600 dark:bg-slate-700 dark:text-slate-300",
    path: "/admin/settings",
  },
];

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div
      className="
        rounded-3xl
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
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
        ⚡ Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-5">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              type="button"
              onClick={() =>
                action.path !== "#" && navigate(action.path)
              }
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-6
                text-left
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-blue-300
                hover:shadow-lg

                dark:border-slate-700
                dark:bg-slate-800
                dark:hover:border-blue-500
                dark:hover:bg-slate-800
              "
            >
              <div
                className={`
                  mb-4
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  ${action.color}
                `}
              >
                <Icon size={32} />
              </div>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                {action.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;