import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun, UserCircle, Settings, LogOut } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../../context/ThemeContext";
import { 
  useState, 
  useEffect, 
  useRef,
 } from "react";
import { useAuth } from "../context/AuthContext";
import NotificationMenu from "../components/NotificationMenu";

const pageInfo = {
  "/admin": {
    title: "Dashboard",
    description: "Welcome back, Admin",
  },

  "/admin/dashboard": {
    title: "Dashboard",
    description: "Welcome back, Admin",
  },

  "/admin/properties": {
    title: "Properties",
    description: "Manage your property listings",
  },

  "/admin/users": {
    title: "Users",
    description: "Manage Nestora users and access",
  },

  "/admin/analytics": {
    title: "Analytics",
    description: "Track your platform performance",
  },

  "/admin/settings": {
    title: "Settings",
    description: "Manage your account and platform preferences",
  },
};

const AdminLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef(null);
  const { darkMode, toggleTheme } = useTheme();
  const handleLogout = () => {
    logout();
    setAccountOpen(false);
    navigate("/admin/login");
  };
  const getPageInfo = () => {
    if (pageInfo[location.pathname]) {
      return pageInfo[location.pathname];
    }

    if (
      location.pathname.startsWith(
        "/admin/properties/"
      )
    ) {
      return {
        title: "Property",
        description:
          "View and manage property details",
      };
    }

    return {
      title: "Nestora Admin",
      description: "Real Estate Administration",
    };
  };

  const { title, description } = getPageInfo();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target)
      ) {
        setAccountOpen(false);
      }
    };
  
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );
  
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950">
      {/* Sidebar */}
      <aside
        className="
          fixed
          left-0
          top-0
          z-40
          h-screen
          w-64
          border-r
          border-gray-200
          bg-white

          dark:border-slate-800
          dark:bg-slate-900
        "
      >
        <Sidebar />
      </aside>

      {/* Main Area */}
      <div className="ml-64 flex min-h-screen flex-1 flex-col">
        {/* Header */}
        <header
          className="
            sticky
            top-0
            z-30
            flex
            items-center
            justify-between
            border-b
            border-gray-200
            bg-white
            px-8
            py-4

            dark:border-slate-800
            dark:bg-slate-900
          "
        >
          {/* Page Information */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>

            <p className="text-sm text-gray-500 dark:text-slate-400">
              {description}
            </p>
          </div>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
  {/* Dark Mode */}
  <button
    type="button"
    onClick={toggleTheme}
    title={
      darkMode
        ? "Switch to light mode"
        : "Switch to dark mode"
    }
    className="
      rounded-xl
      p-2.5
      text-gray-600
      transition
      hover:bg-gray-100
      hover:text-blue-600

      dark:text-slate-300
      dark:hover:bg-slate-800
      dark:hover:text-blue-400
    "
  >
    {darkMode ? (
      <Sun size={21} />
    ) : (
      <Moon size={21} />
    )}
  </button>

  {/* Notifications */}
<NotificationMenu />

  {/* Account */}
  <div
  ref={accountRef}
  className="relative"
>
  {/* Account Button */}
  <button
    type="button"
    onClick={() =>
      setAccountOpen((prev) => !prev)
    }
    className="
      flex
      items-center
      gap-3
      rounded-xl
      px-2
      py-1.5
      transition
      hover:bg-gray-100

      dark:hover:bg-slate-800
    "
  >
    <div
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-blue-100
        text-blue-600

        dark:bg-blue-900/40
        dark:text-blue-400
      "
    >
      <UserCircle size={26} />
    </div>

    <div className="hidden text-left md:block">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">
        {user?.name || "Admin"}
      </p>

      <p className="text-xs text-gray-500 dark:text-slate-400">
        {user?.role || "Administrator"}
      </p>
    </div>
  </button>

  {/* Dropdown */}
  {accountOpen && (
    <div
      className="
        absolute
        right-0
        top-full
        z-50
        mt-3
        w-64
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        shadow-xl

        dark:border-slate-700
        dark:bg-slate-900
      "
    >
      {/* User Information */}
      <div
        className="
          border-b
          border-gray-100
          px-5
          py-4

          dark:border-slate-700
        "
      >
        <p className="font-semibold text-gray-900 dark:text-white">
          {user?.name || "Admin"}
        </p>

        <p className="mt-1 truncate text-sm text-gray-500 dark:text-slate-400">
          {user?.email || ""}
        </p>
      </div>

      {/* Profile */}
      <button
        type="button"
        onClick={() => {
          setAccountOpen(false);
          navigate("/admin/profile");
        }}
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-left
          text-sm
          text-gray-700
          transition
          hover:bg-gray-100

          dark:text-slate-200
          dark:hover:bg-slate-800
        "
      >
        <UserCircle size={18} />
        My Profile
      </button>

      {/* Settings */}
      <button
        type="button"
        onClick={() => {
          setAccountOpen(false);
          navigate("/admin/settings");
        }}
        className="
          flex
          w-full
          items-center
          gap-3
          px-5
          py-3
          text-left
          text-sm
          text-gray-700
          transition
          hover:bg-gray-100

          dark:text-slate-200
          dark:hover:bg-slate-800
        "
      >
        <Settings size={18} />
        Account Settings
      </button>

      {/* Logout */}
      <div className="border-t border-gray-100 dark:border-slate-700">
        <button
          type="button"
          onClick={handleLogout}
          className="
            flex
            w-full
            items-center
            gap-3
            px-5
            py-3
            text-left
            text-sm
            font-medium
            text-red-600
            transition
            hover:bg-red-50

            dark:text-red-400
            dark:hover:bg-red-900/20
          "
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )}
</div>
</div>
        </header>

        {/* Page Content */}
        <main
          className="
            flex-1
            overflow-auto
            bg-gray-100
            p-8

            dark:bg-slate-950
          "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;