import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://67411ac7d0b59228b7f23e76.mockapi.io/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
export default {
  async cargar() {
    try {
      const response = await apiClient.get("/users");
      return response.data;
    } catch (error) {
      throw new Error(`Error de conexión: ${error.message}`);
    }
  },
};