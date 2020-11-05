import axios from "axios";

const baseUrl = "/api/users";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return await response.json();
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return await response.json();
};

const update = async (id, newObject) => {
  const response = await axios.put(`${baseUrl}/${id}`);
  return await response.json();
};

const deleteUser = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  return await response.json();
};

export default { getAll, create, update, deleteUser };
