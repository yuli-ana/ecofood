import axios from "axios";

const baseUrl = "/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createUser = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const createReview = async (newObject, id) => {
  const response = await axios.post(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createUser, createReview, update, deleteUser };
