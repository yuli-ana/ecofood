import axios from "axios";

const baseUrl = "/api/login";

const login = async (credentials) => {
  const response = axios.post(baseUrl, credentials);
  return response.data;
};

export default login;
