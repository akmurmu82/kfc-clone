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
export const getCart = async (userId) => {
  try {
    const response = await axios.post(`${BE_BASE_URL}/cart/get`, {
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart", error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const res = await axios.get(`${BE_BASE_URL}/products/all-products`);
    return res.data.data;
  } catch (error) {
    console.error("Failed to fetch products", error);
  }
};
