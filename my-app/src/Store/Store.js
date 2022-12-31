import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/HandlerCartSlice";

export const store = configureStore({
  reducer: {
    cartOptions: cartReducer,
  },
});
