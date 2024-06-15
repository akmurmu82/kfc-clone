import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const productsSlice = createSlice({
  name: "productsArr",
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload;
    },
    addProduct(state, action) {
      state.push(action.payload);
    },
    removeProduct(state, action) {
      // Assuming action.payload is the index of the product to remove
      state.splice(action.payload, 1);
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
