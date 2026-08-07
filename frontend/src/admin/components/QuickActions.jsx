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
      color: "bg-blue-100 text-blue-600",
      path: "/admin/add-property",
    },
    {
      title: "Manage Properties",
      icon: Building2,
      color: "bg-emerald-100 text-emerald-600",
      path: "/admin/properties",
    },
    {
      title: "Featured",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600",
      path: "/admin/properties?featured=true",
    },
    {
      title: "Analytics",
      icon: BarChart3,
      color: "bg-purple-100 text-purple-600",
      path: "#",
    },
    {
      title: "Settings",
      icon: Settings,
      color: "bg-gray-100 text-gray-600",
      path: "#",
    },
  ]; 
  const QuickActions = () => {
    const navigate = useNavigate(); 
    return (
      <div className="rounded-3xl border bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">
          ⚡ Quick Actions
        </h2> 
        <div className="grid gap-6 grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {actions.map((action) => {
            const Icon = action.icon;  
            return (
              <button
                key={action.title}
                onClick={() =>
                  action.path !== "#" &&
                  navigate(action.path)
                }
                className="group rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${action.color}`}
                >
                  <Icon size={32} />
                </div> 
                <h3 className="font-semibold">
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