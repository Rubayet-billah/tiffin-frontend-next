// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantityInCart += 1;
      } else {
        newItem.quantityInCart = 1;
        state.cartItems.push({ ...newItem, isCheckedForOrder: true });
      }
    },
    isCheckedForOrder: (state, action) => {
      const itemIdToToggle = action.payload;
      const updatedCartItems = state.cartItems.map((item) => {
        if (item.id === itemIdToToggle) {
          return {
            ...item,
            isCheckedForOrder: !item.isCheckedForOrder,
          };
        }
        return item;
      });

      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },

    incrementQuantity: (state, action) => {
      const itemToIncrement = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrement) {
        itemToIncrement.quantityInCart += 1;
      }
    },

    removeItemFromCart: (state, action) => {
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

    decrementQuantity: (state, action) => {
      const itemToDecrement = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToDecrement) {
        if (itemToDecrement.quantityInCart > 1) {
          itemToDecrement.quantityInCart -= 1;
        }
      }
    },

    deleteItemFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
  deleteItemFromCart,
  isCheckedForOrder,
} = cartSlice.actions;

export default cartSlice.reducer;
