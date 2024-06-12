import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import productsArrReducer from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    productsArr: productsArrReducer,
  },
});

export default store;
