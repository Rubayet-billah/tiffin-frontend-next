// orderSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      const order = action.payload;
      console.log(order);
      const existingUserOrders = state.orders.filter(
        (existingOrder) =>
          existingOrder?.userInfo?.email === order?.userInfo?.email
      );

      // If the user already has orders, add the new order to their order history
      if (existingUserOrders?.length > 0) {
        existingUserOrders.forEach((existingOrder) => {
          existingOrder.orderItems = [
            ...existingOrder.orderItems,
            ...order.orderItems,
          ];
        });
      } else {
        // If the user has no existing orders, add the new order
        state.orders.push(order);
      }
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
