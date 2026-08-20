import {
    LayoutDashboard,
    Building2,
    Users,
    Settings,
    BarChart3,
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
      name: "Analytics",
      path: "/admin/analytics",
      icon: BarChart3,
    },
  ];
  
  export default sidebarLinks;