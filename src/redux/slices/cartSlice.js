import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  items: [], // Each item will be { productId, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      return { ...state, ...action.payload };
    },
    addItemToCart(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    updateItemQuantity(state, action) {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },
    removeItemFromCart(state, action) {
      const { productId } = action.payload;
      state.items = state.items.filter((item) => item.productId !== productId);
    },
    clearCart(state) {
      state.items = [];
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const {
  setCart,
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart,
  setUserId,
} = cartSlice.actions;

export default cartSlice.reducer;
