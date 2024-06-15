import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsArrReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    productsArr: productsArrReducer,
    cart: cartReducer,
  },
});

export default store;
