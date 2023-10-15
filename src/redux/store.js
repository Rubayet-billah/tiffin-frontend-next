import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authSlice from "./features/authSlice";
import foodSlice from "./features/foodSlice";
import orderSlice from "./features/orderSlice";
import cartSlice from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authSlice,
    food: foodSlice,
    cart: cartSlice,
    order: orderSlice,
  },
  preloadedState: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
