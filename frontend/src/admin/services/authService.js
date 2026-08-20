import api from "../../api/axios.js"; // use your existing axios instance

export const login = async (email, password) => {
  const response = await api.post("/auth/login", {
    email,
    password,
  });

  return response.data;
};
export const changePassword = async (
  currentPassword,
  newPassword
) => {
  const response = await api.put(
    "/auth/change-password",
    {
      currentPassword,
      newPassword,
    }
  );

  return response.data;
};