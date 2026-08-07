import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "http://localhost:5000/api",
});

api.interceptors.request.use(
  (config) => {
    try {
      const storedUser = localStorage.getItem("user");
      const user = storedUser
        ? JSON.parse(storedUser)
        : null;

      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch {
      // Ignore invalid localStorage data
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response?.status === 401 &&
      window.location.pathname.startsWith("/admin") &&
      !window.location.pathname.startsWith("/admin/login")
    ) {
      localStorage.removeItem("user");
      window.location.href = "/admin/login";
    }

    return Promise.reject(error);
  }
);

export default api;