// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // Array to store items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantityInCart += 1;
      } else {
        newItem.quantityInCart = 1;
        state.cartItems.push(newItem);
      }
    },

    removeFromCart: (state, action) => {
      // Remove one quantity of an item from the cart
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        if (itemToRemove.quantityInCart > 1) {
          itemToRemove.quantityInCart -= 1;
        } else {
          // Remove the item from the cart if its quantity reaches 1
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== action.payload
          );
        }
      }
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
