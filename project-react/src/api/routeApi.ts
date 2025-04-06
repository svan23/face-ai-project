import axios from "axios";

const API_BASE_URL = "https://whoyou-ah-b6ghhmgvdka7dhdj.canadacentral-01.azurewebsites.net/api"; // Added '/api' prefix

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