import axios from "axios";
import BE_BASE_URL from "../config";

export const addToCart = async (userId, productId, quantity) => {
  try {
    const response = await axios.post(`${BE_BASE_URL}/cart/add`, {
      userId,
      productId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart", error);
    throw error;
  }
};
