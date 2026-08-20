import api from "../../api/axios";

export const getDashboardStats = async () => {
  const { data } = await api.get("/dashboard/stats");
  return data;
};
export const getPublicStats = async () => {
  const { data } = await api.get("/dashboard/public/stats");
  return data;
};
export const getAnalytics = async () => {
  const { data } = await api.get(
    "/dashboard/analytics"
  );

  return data;
};