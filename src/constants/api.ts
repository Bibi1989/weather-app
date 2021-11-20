import axios from "axios";

export const getApi = async (path: string) => {
  try {
    const response = await axios.get(path);
    return response.data;
  } catch (error) {
    throw error;
  }
};
