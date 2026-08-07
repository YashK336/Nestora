import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import PropertyListing from "./pages/PropertyListing";
import PropertyDetails from "./pages/PropertyDetails";
import ScrollToTop from "./components/Common/ScrollToTop";
import AdminLayout from "./admin/layouts/AdminLayout";
import AddProperty from "./admin/pages/AddProperty";
import Properties from "./admin/pages/Properties";
import EditProperty from "./admin/pages/EditProperty";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Settings from "./admin/pages/Settings";
import Login from "./admin/pages/Login";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster
        position="top-right"
        gutter={10}
        toastOptions={{
          duration: 3000,
          style: {
            borderRadius: "14px",
            background: "#fff",
            color: "#111827",
            boxShadow:
              "0 10px 30px rgba(0,0,0,.12)",
          },

          success: {
            iconTheme: {
              duration: 2500,
              primary: "#2563eb",
              secondary: "#fff",
            },
          },

          error: {
            iconTheme: {
              duration: 4000,
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyListing />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/admin/login" element={<Login />} />

        <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  }
>
  <Route
    index
    element={<Navigate to="dashboard" replace />}
  />

  <Route
    path="dashboard"
    element={<Dashboard />}
  />

  <Route
    path="properties"
    element={<Properties />}
  />

  <Route
    path="properties/new"
    element={<AddProperty />}
  />

  <Route
    path="add-property"
    element={<AddProperty />}
  />

  <Route
    path="properties/:id/edit"
    element={<EditProperty />}
  />

  <Route
    path="edit-property/:id"
    element={<EditProperty />}
  />

  <Route
    path="users"
    element={<Users />}
  />

  <Route
    path="settings"
    element={<Settings />}
/>
</Route>
<Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
