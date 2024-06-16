import axios from "axios";
import BE_BASE_URL from "../config";

export const addToCart = async (userId, productId, quantity, price) => {
  try {
    const response = await axios.post(`${BE_BASE_URL}/cart/add`, {
      userId,
      productId,
      quantity,
      price,
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

export async function getCartDetails(cart) {
  const detailedCartItems = await Promise.all(
    cart.map(async (item) => {
      const productDetails = await fetchProductDetails(item.productId);
      let product = productDetails[0]; // maa chud gyi isko discover karne me
      return {
        ...item,
        ...product,
      };
    })
  );
  return detailedCartItems;
}

export const fetchProductDetails = async (productId) => {
  let res = await axios.post(`${BE_BASE_URL}/products/${productId}`);
  // console.log("product:", typeof res.data.data, res.data.data);
  return res.data.data;
};
