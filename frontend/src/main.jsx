import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-loading-skeleton/dist/skeleton.css";
import { AuthProvider } from "./admin/context/AuthContext";
import "./index.css";

import { NavbarProvider } from "./context/NavbarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavbarProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavbarProvider>
  </React.StrictMode>
);