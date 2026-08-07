import {
    LayoutDashboard,
    Building2,
    Users,
    Settings,
    LogOut,
  } from "lucide-react";
  
  const sidebarLinks = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Properties",
      path: "/admin/properties",
      icon: Building2,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
    {
      name: "Logout",
      path: "/admin/logout",
      icon: LogOut,
    },
  ];
  
  export default sidebarLinks;