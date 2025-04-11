import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getSecureData = async (token) => {
  console.log(token);

  try {
    const response = await axios.get(`${API_URL}/doctores`, {
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


export const getServicios = async () => {
  try {
    const response = await axios.get(`${API_URL}/servicios`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    throw error;
  }
};