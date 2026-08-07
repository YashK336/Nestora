import api from "../../api/axios.js"; // use your existing axios instance

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};