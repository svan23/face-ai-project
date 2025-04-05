import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5001"; // Replace with your Laravel URL

export const getBestMatch = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(`${API_BASE_URL}/top-match`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error getting best match:", error);
    throw error;
  }
};