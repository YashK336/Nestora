import { NavLink } from "react-router-dom";
import sidebarLinks from "../constants/sidebarLinks";

const Sidebar = () => {
  return (
    <aside
      className="
        h-full
        w-full
        bg-white
        transition-colors
        duration-300
        dark:bg-slate-900
      "
    >
      {/* Logo */}
      <div
        className="
          border-b
          border-gray-200
          p-6
          dark:border-slate-800
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-xl
              font-bold
              text-white
            "
          >
            N
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Nestora
            </h2>

            <p className="text-sm text-gray-500 dark:text-slate-400">
              Real Estate Admin
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;