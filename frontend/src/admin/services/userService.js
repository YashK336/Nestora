import api from "../../api/axios";

export const getUsers = async ({
  page = 1,
  limit = 10,
  search = "",
  role = "",
} = {}) => {
  const { data } = await api.get("/users", {
    params: {
      page,
      limit,
      search,
      role,
    },
  });

  return data;
};

export const getUser = async (id) => {
  const { data } = await api.get(`/users/${id}`);
  return data;
};

export const updateUserRole = async (
  id,
  role
) => {
  const { data } = await api.patch(
    `/users/${id}/role`,
    { role }
  );

  return data;
};

export const deleteUser = async (id) => {
  const { data } = await api.delete(
    `/users/${id}`
  );

  return data;
};

export const createUser = async (userData) => {
  const { data } = await api.post(
    "/users",
    userData
  );

  return data;
};