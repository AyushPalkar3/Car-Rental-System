import { configureStore } from "@reduxjs/toolkit";
import checkoutReducer from "../features/checkout/checkoutSlice";

export const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
  },
});