import api from "../api/axios";

export const getProperties = async ({
  page = 1,
  limit = 10,
  search = "",
  city = "",
  type = "",
  featured = "",
  sort = "-createdAt",
} = {}) => {
  const { data } = await api.get("/properties", {
    params: {
      page,
      limit,
      search,
      city,
      type,
      featured,
      sort,
    },
  });

  return data;
};

export const getProperty = async (id) => {
  const { data } = await api.get(`/properties/${id}`);
  return data;
};

export const createProperty = async (property) => {
  const { data } = await api.post("/properties", property);
  return data;
};

export const updateProperty = async (id, propertyData) => {
  const { data } = await api.put(`/properties/${id}`, propertyData);
  return data;
};

export const deleteProperty = async (id) => {
  const { data } = await api.delete(`/properties/${id}`);
  return data;
};