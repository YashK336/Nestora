import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Bell, UserCircle } from "lucide-react";
const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex items-center justify-between border-b bg-white px-8 py-4">
<div>
    <h1 className="text-2xl font-bold">
        Dashboard
    </h1>
    <p className="text-gray-500">
        Welcome back, Admin
    </p>
</div>
<div className="flex items-center gap-5">
    <Bell className="cursor-pointer" />

    <UserCircle size={36} />
</div>
</header>
      <div className="flex flex-1">
        <aside className="w-64 bg-white border-r flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex-1 bg-gray-100 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;