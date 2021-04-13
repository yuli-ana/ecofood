import axios from "axios";

const baseUrl = "/api/account";

const signUp = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response && response.data;
};

export default signUp;
