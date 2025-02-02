import axios from "axios";

const API_URL = "http://localhost:5175";

export const getSecureData = async (token) => {
  console.log(token);

  try {
    const response = await axios.get(`${API_URL}/secure-data`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);

    return response.data;
  } catch (error) {
    console.error("Error al obtener datos protegidos:", error);
    throw error;
  }
};