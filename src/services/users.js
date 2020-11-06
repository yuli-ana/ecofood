import axios from "axios";

const baseUrl = "http://localhost:3001/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return await response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return await response.data;
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`, newObject);
  return await response.data;
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return await response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, deleteUser };
