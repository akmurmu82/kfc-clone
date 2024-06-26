import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: "6666de277d47d683a114d358",
  items: [], // Each item will be { productId, quantity, price }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      return { ...state, ...action.payload };
    },
    addItemToCart(state, action) {
      const { productId, quantity, price } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ productId, quantity, price });
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
    // Implement this as a helper function
    // cartTotal(state) {
    //   const cartTotal = state.items.reduce((acc, { price, quantity }) => {
    //     let itemTotalPrice = price * quantity;
    //     return acc + itemTotalPrice;
    //   }, 0);
    // },
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
