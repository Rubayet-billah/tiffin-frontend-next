// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [], // Array to store ordered food items
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      // Add a new order to the orders array
      state.orders.push(action.payload);
    },
    removeOrder: (state, action) => {
      // Remove an order from the orders array by its unique identifier or index
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
    clearOrders: (state) => {
      // Clear all orders
      state.orders = [];
    },
  },
});

export const { addOrder, removeOrder, clearOrders } = orderSlice.actions;

export default orderSlice.reducer;
